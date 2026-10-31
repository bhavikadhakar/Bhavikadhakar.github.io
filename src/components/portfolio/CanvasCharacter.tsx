import React, { useEffect, useRef, useState, useCallback } from 'react';

const TOTAL_FRAMES = 64;
const BG_COLOR = '#a6120d';
const DEADZONE_RATIO = 0.12; // 12% screen radius
const FACE_NORM_X = 0.50;    // Horizontally centered
const FACE_NORM_Y = 0.38;    // Eye level in original 1920x1080 frame
const LERP_FACTOR = 0.26;    // Fast response factor (~35ms tracking)

// Shortest path circular angular difference in range [-PI, PI]
function angleDifference(target:any, current:any) {
  let diff = (target - current) % (2 * Math.PI);
  if (diff < -Math.PI) diff += 2 * Math.PI;
  if (diff > Math.PI) diff -= 2 * Math.PI;
  return diff;
}

export default function CanvasCharacter({ onLoaded, onFrameUpdate, cursorRef }:any) {
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const centerImageRef = useRef(null);
  const animFrameIdRef:any = useRef(null);

  // Motion physics state
  const stateRef = useRef({
    currentAngle: 0,       // Starts UP (0 radians)
    targetAngle: 0,
    cursorX: typeof window !== 'undefined' ? window.innerWidth / 2 : 500,
    cursorY: typeof window !== 'undefined' ? window.innerHeight / 2 : 400,
    faceCenterX: typeof window !== 'undefined' ? window.innerWidth / 2 : 500,
    faceCenterY: typeof window !== 'undefined' ? window.innerHeight * 0.38 : 300,
    isCenterPose: true,    // Start in center eye-contact pose
    isMouseActive: false,
    currentFrameIndex: 0,
    loadedCount: 0,
  });

  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);

  // Preload all 64 WebP frames + center.webp
  useEffect(() => {
    let isCancelled = false;
    let loaded = 0;
    const totalToLoad = TOTAL_FRAMES + 1; // 64 frames + 1 center

    const updateProgress = () => {
      loaded++;
      stateRef.current.loadedCount = loaded;
      const progress = Math.min(100, Math.round((loaded / totalToLoad) * 100));
      setLoadingProgress(progress);

      if (loaded >= totalToLoad && !isCancelled) {
        setIsReady(true);
        if (onLoaded) onLoaded();
      }
    };

    // Preload center.webp
    const centerImg:any = new Image();
    centerImg.src = '/frames/center.webp';
    centerImg.onload = updateProgress;
    centerImg.onerror = () => {
      // Fallback to /center.webp
      centerImg.src = '/center.webp';
      centerImg.onload = updateProgress;
    };
    centerImageRef.current = centerImg;

    // Preload 64 frames
    const frames:any = [];
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      // Use frame_00.webp format
      const padIndex = i.toString().padStart(2, '0');
      img.src = `/frames/frame_${padIndex}.webp`;
      img.onload = updateProgress;
      img.onerror = () => {
        // Fallback to simple index {i}.webp
        img.src = `/frames/${i}.webp`;
        img.onload = updateProgress;
      };
      frames.push(img);
    }
    imagesRef.current = frames;

    return () => {
      isCancelled = true;
    };
  }, [onLoaded]);

  // Main 60 FPS Canvas Render Loop
  useEffect(() => {
    if (!isReady) return;

    const canvas:any = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let lastTime = performance.now();

    const handleResize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const render = (time:any) => {
      const s = stateRef.current;
      const width = window.innerWidth;
      const height = window.innerHeight;

      // 1. Calculate object-fit: cover placement
      // Original frame aspect ratio 1920:1080 = 16:9
      const imgAspect = 1920 / 1080;
      const screenAspect = width / height;
      let drawW, drawH, drawX, drawY;

      if (screenAspect > imgAspect) {
        drawW = width;
        drawH = width / imgAspect;
        drawX = 0;
        drawY = (height - drawH) / 2;
      } else {
        drawH = height;
        drawW = height * imgAspect;
        drawY = 0;
        drawX = (width - drawW) / 2;
      }

      // Update face center in screen space
      s.faceCenterX = drawX + FACE_NORM_X * drawW;
      s.faceCenterY = drawY + FACE_NORM_Y * drawH;

      // 2. Cursor physics & angle calculation
      const dx = s.cursorX - s.faceCenterX;
      const dy = s.cursorY - s.faceCenterY;
      const distance = Math.hypot(dx, dy);

      // Deadzone threshold (~12% screen radius)
      const deadzoneRadius = Math.min(width, height) * DEADZONE_RATIO;

      if (s.isMouseActive && distance > deadzoneRadius) {
        s.isCenterPose = false;
        // atan2 in screen coordinates (Y down, X right)
        // dy < 0, dx = 0 is UP -> angle 0
        let target = Math.atan2(dy, dx) + Math.PI / 2;
        // Normalize target to [0, 2*PI)
        target = (target % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI);
        s.targetAngle = target;

        // Circular angular shortest-path lerp (~0.26 factor for ~35ms responsive zero-lag tracking)
        const diff = angleDifference(s.targetAngle, s.currentAngle);
        s.currentAngle += diff * LERP_FACTOR;
        s.currentAngle = (s.currentAngle % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI);

        // Map smoothed angle to 0..63 frame index
        const normalized = (s.currentAngle / (2 * Math.PI)) * TOTAL_FRAMES;
        let fIndex = Math.round(normalized) % TOTAL_FRAMES;
        if (fIndex < 0) fIndex += TOTAL_FRAMES;
        s.currentFrameIndex = fIndex;
      } else {
        // Inside deadzone or mouse inactive -> direct eye-contact center pose
        s.isCenterPose = true;
      }

      // 3. Crisp single-frame draw (ZERO alpha-blending, ZERO ghosting)
      // Solid crimson background fill
      ctx.fillStyle = BG_COLOR;
      ctx.fillRect(0, 0, width, height);

      ctx.globalAlpha = 1.0;
      const frameImg:any = s.isCenterPose ? centerImageRef.current : imagesRef.current[s.currentFrameIndex];

      if (frameImg && frameImg.complete && frameImg.naturalWidth > 0) {
        ctx.drawImage(frameImg, drawX, drawY, drawW, drawH);
      }

      // Inform parent of current frame and angle for UI debug/status
      if (onFrameUpdate) {
        onFrameUpdate({
          frameIndex: s.isCenterPose ? 'CENTER' : s.currentFrameIndex,
          angleDeg: Math.round((s.currentAngle * 180) / Math.PI),
          isCenter: s.isCenterPose,
          fps: Math.round(1000 / (time - lastTime || 16.6))
        });
      }
      lastTime = time;

      animFrameIdRef.current = requestAnimationFrame(render);
    };

    animFrameIdRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, [isReady, onFrameUpdate]);

  // Mouse & Touch Tracking Listeners
  useEffect(() => {
    const handlePointerMove = (e:any) => {
      const s = stateRef.current;
      s.cursorX = e.clientX;
      s.cursorY = e.clientY;
      s.isMouseActive = true;

      // Update external cursor ref if provided
      if (cursorRef && cursorRef.current) {
        cursorRef.current.setTarget(e.clientX, e.clientY);
      }
    };

    const handlePointerLeave = () => {
      stateRef.current.isMouseActive = false;
    };

    const handleTouchMove = (e:any) => {
      if (e.touches && e.touches[0]) {
        const touch = e.touches[0];
        const s = stateRef.current;
        s.cursorX = touch.clientX;
        s.cursorY = touch.clientY;
        s.isMouseActive = true;
      }
    };

    const handleTouchEnd = () => {
      stateRef.current.isMouseActive = false;
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerleave', handlePointerLeave, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerleave', handlePointerLeave);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [cursorRef]);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#a6120d]">
      {/* Loading Overlay */}
      {!isReady && (
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#a6120d] text-white">
          <div className="relative flex items-center justify-center w-24 h-24 mb-6">
            <div className="absolute inset-0 border-4 border-white/20 rounded-full animate-ping"></div>
            <div className="absolute inset-0 border-4 border-t-white border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
            <span className="font-mono text-sm tracking-wider font-semibold">{loadingProgress}%</span>
          </div>
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-white/70">
            Preloading 64 Ultra-HD Frames
          </p>
          <div className="w-48 h-1 mt-4 bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-white transition-all duration-150 ease-out"
              style={{ width: `${loadingProgress}%` }}
            />
          </div>
        </div>
      )}

      {/* HTML5 Canvas covering full screen - STRICTLY ZERO CSS 3D TRANSFORMS */}
      <canvas
        ref={canvasRef}
        className="block w-full h-full object-cover select-none pointer-events-none"
        style={{
          background: BG_COLOR,
          transform: 'none',
          perspective: 'none',
        }}
      />
    </div>
  );
}

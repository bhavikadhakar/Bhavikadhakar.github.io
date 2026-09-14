import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { gsap } from "gsap";
import { Lightbox, useLightbox } from "../portfolio/Lightbox";

const useMedia = (
  queries: string[],
  values: number[],
  defaultValue: number
): number => {
  const get = () => {
    if (typeof window === "undefined") return defaultValue;

    return (
      values[queries.findIndex((q) => matchMedia(q).matches)] ??
      defaultValue
    );
  };

  const [value, setValue] = useState<number>(get);

  useEffect(() => {
    const handler = () => setValue(get);

    queries.forEach((q) =>
      matchMedia(q).addEventListener("change", handler)
    );

    return () =>
      queries.forEach((q) =>
        matchMedia(q).removeEventListener("change", handler)
      );
  }, [queries]);

  return value;
};

const useMeasure = <T extends HTMLElement>() => {
  const ref = useRef<T | null>(null);
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  useLayoutEffect(() => {
    if (!ref.current) return;

    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry?.contentRect || {
        width: 0,
        height: 0,
      };

      setSize({
        width,
        height,
      });
    });

    ro.observe(ref.current);

    return () => ro.disconnect();
  }, []);

  return [ref, size] as const;
};

const preloadImages = async (urls: string[]): Promise<void> => {
  await Promise.all(
    urls.map(
      (src) =>
        new Promise<void>((resolve) => {
          const img = new Image();

          img.src = src;

          img.onload = img.onerror = () => resolve();
        })
    )
  );
};

interface Item {
  src: string;
  alt: string;
  height: number;
}

interface GridItem extends Item {
  x: number;
  y: number;
  w: number;
  h: number;
}

interface MasonryProps {
  items: Item[] | any[];
  ease?: string;
  duration?: number;
  stagger?: number;
  animateFrom:
    | "bottom"
    | "top"
    | "left"
    | "right"
    | "center"
    | "random";
  scaleOnHover?: boolean;
  hoverScale?: number;
  blurToFocus?: boolean;
  colorShiftOnHover?: boolean;
}

const Masonry: React.FC<MasonryProps> = ({
  items,
  ease = "power3.out",
  duration = 0.6,
  stagger = 0.05,
  animateFrom = "bottom",
  scaleOnHover = true,
  hoverScale = 0.95,
  blurToFocus = true,
  colorShiftOnHover = false,
}) => {
  const columns = useMedia(
    [
      "(min-width:1500px)",
      "(min-width:1000px)",
      "(min-width:600px)",
      "(min-width:400px)",
    ],
    [5, 4, 3, 2],
    1
  );

  const lightbox = useLightbox();

  const [containerRef, { width }] =
    useMeasure<HTMLDivElement>();

  const [imagesReady, setImagesReady] = useState(false);

  /*
   * Tracks whether the Masonry has entered
   * the viewport for the first time.
   */
  const [hasEnteredView, setHasEnteredView] =
    useState(false);

  /*
   * Tracks whether the initial animation
   * has already been played.
   */
  const hasAnimated = useRef(false);

  /*
   * ----------------------------------------
   * PRELOAD IMAGES
   * ----------------------------------------
   */

  useEffect(() => {
    let cancelled = false;

    preloadImages(items.map((item) => item.src)).then(() => {
      if (!cancelled) {
        setImagesReady(true);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [items]);

  /*
   * ----------------------------------------
   * INTERSECTION OBSERVER
   * ----------------------------------------
   *
   * Wait until the Masonry enters the viewport.
   *
   * The observer disconnects after the first
   * intersection so the entrance animation
   * only happens once.
   */

  useEffect(() => {
    const element = containerRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setHasEnteredView(true);

          // Only trigger once.
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -15% 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  /*
   * ----------------------------------------
   * INITIAL POSITION
   * ----------------------------------------
   */

  const getInitialPosition = (item: GridItem) => {
  const containerRect =
    containerRef.current?.getBoundingClientRect();

  if (!containerRect) {
    return {
      x: item.x,
      y: item.y,
    };
  }

  let direction:
    | "top"
    | "bottom"
    | "left"
    | "right"
    | "center"
    | undefined
    | "random" = animateFrom ?? "bottom";

  if (animateFrom === "random") {
    const dirs = [
      "top",
      "bottom",
      "left",
      "right",
    ] as const;

    direction =
      dirs[Math.floor(Math.random() * dirs.length)];
  }

  switch (direction) {
    case "top":
      return {
        x: item.x,
        y: -200,
      };

    case "bottom":
      return {
        x: item.x,
        y: window.innerHeight + 200,
      };

    case "left":
      return {
        x: -200,
        y: item.y,
      };

    case "right":
      return {
        x: window.innerWidth + 200,
        y: item.y,
      };

    case "center":
      return {
        x:
          containerRect.width / 2 -
          item.w / 2,
        y:
          containerRect.height / 2 -
          item.h / 2,
      };

    default:
      return {
        x: item.x,
        y: item.y + 100,
      };
  }
};

  /*
   * ----------------------------------------
   * CALCULATE MASONRY GRID
   * ----------------------------------------
   */

  const grid = useMemo<GridItem[]>(() => {
    if (!width) return [];

    const colHeights = new Array(columns).fill(0);

    const gap = 16;

    const totalGaps =
      (columns - 1) * gap;

    const columnWidth =
      (width - totalGaps) / columns;

    return items.map((child) => {
      const col = colHeights.indexOf(
        Math.min(...colHeights)
      );

      const x =
        col * (columnWidth + gap);

      const height = child.height / 2;

      const y = colHeights[col];

      colHeights[col] += height + gap;

      return {
        ...child,
        x,
        y,
        w: columnWidth,
        h: height,
      };
    });
  }, [columns, items, width]);

  /*
   * ----------------------------------------
   * GSAP ANIMATION
   * ----------------------------------------
   */

  useLayoutEffect(() => {
    /*
     * Don't do anything until:
     *
     * 1. Images are loaded
     * 2. Grid has been calculated
     * 3. Section has entered viewport
     */

    if (
      !imagesReady ||
      !grid.length ||
      !hasEnteredView
    ) {
      return;
    }

    grid.forEach((item, index) => {
      const selector = `[data-key="${item.alt}"]`;

      const animProps = {
        x: item.x,
        y: item.y,
        width: item.w,
        height: item.h,
      };

      /*
       * ----------------------------------------
       * FIRST TIME
       * ----------------------------------------
       *
       * Play entrance animation only once.
       */

      if (
        hasEnteredView &&
        !hasAnimated.current
      ) {
        const start =
          getInitialPosition(item);

        gsap.fromTo(
          selector,
          {
            opacity: 0,

            x: start.x,
            y: start.y,

            width: item.w,
            height: item.h,

            ...(blurToFocus && {
              filter: "blur(10px)",
            }),
          },
          {
            opacity: 1,

            ...animProps,

            ...(blurToFocus && {
              filter: "blur(0px)",
            }),

            duration: 0.8,

            ease: "power3.out",

            delay: index * stagger,

            overwrite: "auto",
          }
        );
      }

      /*
       * ----------------------------------------
       * AFTER INITIAL ANIMATION
       * ----------------------------------------
       *
       * If the layout changes because of:
       *
       * - resizing
       * - responsive column changes
       * - container width changes
       *
       * smoothly move to the new position.
       */

      else if (hasAnimated.current) {
        gsap.to(selector, {
          ...animProps,

          duration,

          ease,

          overwrite: "auto",
        });
      }
    });

    /*
     * Mark the entrance animation as completed.
     */

    if (!hasAnimated.current) {
      hasAnimated.current = true;
    }
  }, [
    grid,
    imagesReady,
    hasEnteredView,
    stagger,
    animateFrom,
    blurToFocus,
    duration,
    ease,
  ]);

  /*
   * ----------------------------------------
   * HOVER
   * ----------------------------------------
   */

  const handleMouseEnter = (
    id: string,
    element: HTMLElement
  ) => {
    if (scaleOnHover) {
      gsap.to(`[data-key="${id}"]`, {
        scale: hoverScale,
        duration: 0.3,
        ease: "power2.out",
      });
    }

    if (colorShiftOnHover) {
      const overlay =
        element.querySelector(
          ".color-overlay"
        ) as HTMLElement;

      if (overlay) {
        gsap.to(overlay, {
          opacity: 0.3,
          duration: 0.3,
        });
      }
    }
  };

  const handleMouseLeave = (
    id: string,
    element: HTMLElement
  ) => {
    if (scaleOnHover) {
      gsap.to(`[data-key="${id}"]`, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    }

    if (colorShiftOnHover) {
      const overlay =
        element.querySelector(
          ".color-overlay"
        ) as HTMLElement;

      if (overlay) {
        gsap.to(overlay, {
          opacity: 0,
          duration: 0.3,
        });
      }
    }
  };

  const gridHeight = useMemo(() => {
  if (!grid.length) return 0;

  const contentHeight = Math.max(
    ...grid.map((item) => item.y + item.h)
  );

  return contentHeight + 16;
}, [grid]);

  /*
   * ----------------------------------------
   * RENDER
   * ----------------------------------------
   */

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full"
      style={{
        height: gridHeight || undefined,
      }}
    >
      {grid.map((item, i) => (
        <div
          key={item.alt}
          data-view-cursor="View"
          data-key={item.alt}
          className="absolute box-content"
          style={{
            willChange:
              "transform, width, height, opacity",
          }}
          onClick={() =>
            lightbox.open(i)
          }
          onMouseEnter={(e) =>
            handleMouseEnter(
              item.alt,
              e.currentTarget
            )
          }
          onMouseLeave={(e) =>
            handleMouseLeave(
              item.alt,
              e.currentTarget
            )
          }
        >
          <div
            className="relative w-full h-full bg-cover bg-center rounded-[10px] shadow-[0px_10px_50px_-10px_rgba(0,0,0,0.2)] uppercase text-[10px] leading-2.5"
            style={{
              backgroundImage: `url(${item.src})`,
            }}
          >
            {colorShiftOnHover && (
              <div className="color-overlay absolute inset-0 rounded-[10px] bg-linear-to-tr from-pink-500/50 to-sky-500/50 opacity-0 pointer-events-none" />
            )}
          </div>
        </div>
      ))}

      <Lightbox
        items={grid}
        kind="Selected work"
        state={lightbox}
      />
    </div>
  );
};

export default Masonry;
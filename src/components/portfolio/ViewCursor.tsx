import { useEffect, useRef, useState } from "react";

/**
 * Single signature interaction: a small "VIEW ↗" disc that follows the pointer
 * while it is over an element marked with data-view-cursor. Desktop pointers only.
 */
export function ViewCursor() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [label, setLabel] = useState("View");

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    let raf = 0;
    let x = 0;
    let y = 0;

    const paint = () => {
      raf = 0;
      const node = ref.current;
      if (node) node.style.transform = `translate3d(${x - 34}px, ${y - 34}px, 0)`;
    };

    const onMove = (e: PointerEvent) => {
      const target = (e.target as HTMLElement | null)?.closest<HTMLElement>("[data-view-cursor]");
      if (target) {
        setLabel(target.dataset["viewCursor"] || "View");
        setVisible(true);
      } else {
        setVisible(false);
      }
      x = e.clientX;
      y = e.clientY;
      if (!raf) raf = requestAnimationFrame(paint);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className={`bg-burgundy text-ivory pointer-events-none fixed top-0 left-0 z-60 hidden h-17 w-17 flex-col items-center justify-center rounded-full transition-opacity duration-300 lg:flex ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <span className="label text-[8px]">{label}</span>
      <span className="mt-0.5 text-xs">↗</span>
    </div>
  );
}

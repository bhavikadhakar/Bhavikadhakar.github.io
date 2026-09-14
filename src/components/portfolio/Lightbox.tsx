import { useCallback, useEffect, useRef, useState } from "react";
import type { MediaItem } from "@/lib/portfolio-assets";

export type LightboxState = {
  /** Index of the open item, or null when closed. */
  index: number | null;
  open: (i: number) => void;
  close: () => void;
};

export function useLightbox(): LightboxState {
  const [index, setIndex] = useState<number | null>(null);
  return {
    index,
    open: useCallback((i: number) => setIndex(i), []),
    close: useCallback(() => setIndex(null), []),
  };
}

type Props = {
  items: MediaItem[];
  /** Small caps kind label shown with the caption, e.g. "Selected work". */
  kind: string;
  state: LightboxState;
};

/** Magazine-style full-bleed viewer: oversized plate, editorial caption, prev/next. */
export function Lightbox({ items, kind, state }: Props) {
  const { index, close } = state;
  const isOpen = index !== null;
  const closeRef = useRef<HTMLButtonElement>(null);
  const restoreRef = useRef<Element | null>(null);

  const go = useCallback(
    (dir: 1 | -1) => {
      if (index === null) return;
      state.open((index + dir + items.length) % items.length);
    },
    [index, items.length, state],
  );

  // Remember the trigger, lock scroll, and move focus into the dialog.
  useEffect(() => {
    if (!isOpen) return;
    restoreRef.current = document.activeElement;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
      (restoreRef.current as HTMLElement | null)?.focus?.();
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, close, go]);

  if (index === null) return null;
  const item = items[index];
  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${kind} viewer`}
      className="surface-wine grain fixed inset-0 z-[80] flex flex-col"
    >
      <button
        type="button"
        aria-label="Close viewer"
        onClick={close}
        className="absolute inset-0 z-0 cursor-default"
        tabIndex={-1}
      />

      <header className="relative z-10 flex items-center justify-between px-6 py-6 md:px-10">
        <span className="label text-ivory/60 text-[10px]">
          {kind} — {String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
        </span>
        <button
          ref={closeRef}
          type="button"
          onClick={close}
          className="label text-ivory/80 hover:text-ivory focus-visible:outline-ivory px-2 py-1 text-[10px] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4"
        >
          Close ✕
        </button>
      </header>

      <div className="relative z-10 flex min-h-0 flex-1 items-center justify-center px-6 md:px-16">
        {item.video ? (
          <video
            key={item.video}
            src={item.video}
            poster={item.src}
            controls
            autoPlay
            playsInline
            aria-label={item.alt}
            className="max-h-[68vh] w-auto max-w-full"
          />
        ) : (
          <img
            key={item.src}
            src={item.src}
            alt={item.alt}
            decoding="async"
            className="max-h-[68vh] w-auto max-w-full object-contain"
          />
        )}
      </div>

      <footer className="relative z-10 flex flex-col gap-6 px-6 pt-8 pb-10 md:flex-row md:items-end md:justify-between md:px-10">
        <figcaption className="max-w-xl">
          <p className="text-ivory/90 mt-3 text-lg leading-snug md:text-xl">{item.alt}</p>
          <span className="label text-ivory/50 text-[10px]">{item?.desc}</span>
        </figcaption>

        <nav aria-label="Portfolio item navigation" className="flex items-center gap-8">
          <button
            type="button"
            onClick={() => go(-1)}
            className="label text-ivory/70 hover:text-ivory focus-visible:outline-ivory px-1 py-1 text-[10px] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            ← Prev
          </button>
          <span aria-hidden className="bg-ivory/25 h-px w-16" />
          <button
            type="button"
            onClick={() => go(1)}
            className="label text-ivory/70 hover:text-ivory focus-visible:outline-ivory px-1 py-1 text-[10px] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            Next →
          </button>
        </nav>
      </footer>
    </div>
  );
}

import {
  useCallback,
  useEffect,
  useState,
} from "react";

import { normalizeIndex } from "./carousel.utils";

interface UseCarouselOptions {
  length: number;
  initialIndex?: number;
  loop?: boolean;
  onChange?: (index: number) => void;
}

export function useCarousel({
  length,
  initialIndex = 0,
  loop = true,
  onChange,
}: UseCarouselOptions) {
  const [activeIndex, setActiveIndex] = useState(() =>
    normalizeIndex(initialIndex, length),
  );

  const canGoPrevious =
    loop || activeIndex > 0;

  const canGoNext =
    loop || activeIndex < length - 1;

  const goTo = useCallback(
    (index: number) => {
      if (length === 0) {
        return;
      }

      const nextIndex = loop
        ? normalizeIndex(index, length)
        : Math.max(
            0,
            Math.min(index, length - 1),
          );

      setActiveIndex(nextIndex);
    },
    [length, loop],
  );

  const next = useCallback(() => {
    if (!canGoNext) {
      return;
    }

    goTo(activeIndex + 1);
  }, [activeIndex, canGoNext, goTo]);

  const previous = useCallback(() => {
    if (!canGoPrevious) {
      return;
    }

    goTo(activeIndex - 1);
  }, [
    activeIndex,
    canGoPrevious,
    goTo,
  ]);

  /*
   * Keep the active index valid when the
   * number of slides changes.
   */
  useEffect(() => {
    if (length === 0) {
      return;
    }

    setActiveIndex((current) => {
      if (current >= length) {
        return length - 1;
      }

      return current;
    });
  }, [length]);

  /*
   * Notify consumers whenever the active
   * slide actually changes.
   */
  useEffect(() => {
    onChange?.(activeIndex);
  }, [activeIndex, onChange]);

  return {
    activeIndex,
    goTo,
    next,
    previous,
    canGoNext,
    canGoPrevious,
  };
}
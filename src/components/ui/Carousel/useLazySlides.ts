import { useEffect, useMemo, useState } from "react";

import {
  getPreloadIndexes,
  normalizeIndex,
  normalizePreload,
} from "./carousel.utils";

interface UseLazySlidesOptions {
  activeIndex: number;
  total: number;
  enabled: boolean;
  preload: number;
}

interface UseLazySlidesResult {
  loadedSlides: Set<number>;
  renderSlides: Set<number>;
}

export function useLazySlides({
  activeIndex,
  total,
  enabled,
  preload,
}: UseLazySlidesOptions): UseLazySlidesResult {
  const [loadedSlides, setLoadedSlides] = useState<Set<number>>(
    () => new Set(),
  );

  const safePreload = normalizePreload(
  preload,
  total,
);

  /*
   * These slides are close enough to the active slide that
   * they should participate in the carousel.
   *
   * Your CSS visually supports 5 cards, so preload=2 is
   * the natural default.
   */
  const renderSlides = useMemo(() => {
    if (total === 0) {
      return new Set<number>();
    }

    if (!enabled) {
      return new Set(
        Array.from(
          { length: total },
          (_, index) => index,
        ),
      );
    }

    return new Set(
      getPreloadIndexes(
        activeIndex,
        total,
        safePreload,
      ),
    );
  }, [
    activeIndex,
    total,
    enabled,
    safePreload,
  ]);

  /*
   * Once loaded, a slide stays loaded.
   */
  useEffect(() => {
    if (total === 0) {
      return;
    }

    const indexesToLoad = enabled
      ? getPreloadIndexes(
          activeIndex,
          total,
          safePreload,
        )
      : Array.from(
          { length: total },
          (_, index) => index,
        );

    setLoadedSlides((current) => {
      const next = new Set(current);
      let changed = false;

      for (const index of indexesToLoad) {
        if (!next.has(index)) {
          next.add(index);
          changed = true;
        }
      }

      return changed ? next : current;
    });
  }, [
    activeIndex,
    total,
    enabled,
    safePreload,
  ]);

  return {
    loadedSlides,
    renderSlides,
  };
}
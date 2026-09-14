import type { CarouselPosition } from "./carousel.types";

export function normalizeIndex(index: number, length: number): number {
  if (length <= 0) {
    return 0;
  }

  return ((index % length) + length) % length;
}

export function getRelativeIndex(
  index: number,
  activeIndex: number,
  total: number,
): number {
  if (total <= 1) {
    return 0;
  }

  let difference = index - activeIndex;

  if (difference > total / 2) {
    difference -= total;
  }

  if (difference < -total / 2) {
    difference += total;
  }

  return difference;
}

export function getCarouselPosition(
  index: number,
  activeIndex: number,
  total: number,
): CarouselPosition {
  const relativeIndex = getRelativeIndex(
    index,
    activeIndex,
    total,
  );

  switch (relativeIndex) {
    case -2:
      return "position-1";

    case -1:
      return "position-2";

    case 0:
      return "position-3";

    case 1:
      return "position-4";

    case 2:
      return "position-5";

    default:
      return "none";
  }
}

/**
 * Returns the slide indexes that should be loaded around
 * the current active slide.
 *
 * Because the carousel is circular, indexes wrap around.
 */
export function getPreloadIndexes(
  activeIndex: number,
  total: number,
  preload: number,
): number[] {
  if (total <= 0) {
    return [];
  }

  const indexes = new Set<number>();

  for (let offset = -preload; offset <= preload; offset++) {
    indexes.add(
      normalizeIndex(activeIndex + offset, total),
    );
  }

  return [...indexes];
}

export function normalizePreload(
  preload: number,
  total: number,
): number {
  if (total <= 1) {
    return 0;
  }

  return Math.max(
    0,
    Math.min(
      Math.floor(preload),
      Math.floor(total / 2),
    ),
  );
}
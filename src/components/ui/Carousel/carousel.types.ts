import type { ReactNode } from "react";

export type CarouselPosition =
  | "none"
  | "position-1"
  | "position-2"
  | "position-3"
  | "position-4"
  | "position-5";

export interface CarouselRenderContext {
  index: number;
  active: boolean;
  position: CarouselPosition;
}

export interface CarouselProps<T> {
  items: T[];

  initialIndex?: number;

  loop?: boolean;

  swipe?: boolean;

  keyboard?: boolean;

  lazyLoad?: boolean;

  preload?: number;

  onChange?: (index: number) => void;

  renderItem: (
    item: T,
    index: number,
    context: CarouselRenderContext,
  ) => React.ReactNode;

  className?: string;

  title?: ReactNode;
}
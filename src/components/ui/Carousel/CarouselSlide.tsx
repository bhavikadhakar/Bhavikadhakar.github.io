import type { ReactNode } from "react";

import type { CarouselPosition } from "./carousel.types";

interface CarouselSlideProps {
  position: CarouselPosition;
  active: boolean;
  loaded: boolean;
  children: ReactNode;
}

export function CarouselSlide({
  position,
  active,
  loaded,
  children,
}: CarouselSlideProps) {
  return (
    <article
      className={`carousel-slide ${position}${
        active ? " active" : ""
      }`}
      data-position={position}
      data-loaded={loaded}
      aria-hidden={!active}
    >
      {children}
    </article>
  );
}
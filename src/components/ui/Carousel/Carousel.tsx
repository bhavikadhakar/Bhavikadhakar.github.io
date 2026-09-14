import { useEffect, useRef } from "react";

import type { CarouselProps } from "./carousel.types";

import { getCarouselPosition } from "./carousel.utils";

import { useCarousel } from "./useCarousel";
import { useLazySlides } from "./useLazySlides";
import { useSwipe } from "./useSwipe";

import { CarouselSlide } from "./CarouselSlide";

import "./carousel.css";

export function Carousel<T>({
  items,
  initialIndex = 0,
  loop = true,
  swipe = true,
  keyboard = true,
  lazyLoad = true,
  preload = 2,
  onChange,
  renderItem,
  className = "",
  title,
}: CarouselProps<T>) {
  const containerRef = useRef<HTMLDivElement>(null);

  const {
    activeIndex,
    next,
    previous,
    canGoNext,
    canGoPrevious,
  } = useCarousel({
    length: items.length,
    initialIndex,
    loop,
    onChange,
  });

  const { loadedSlides, renderSlides } = useLazySlides({
    activeIndex,
    total: items.length,
    enabled: lazyLoad,
    preload,
  });

  const swipeHandlers = useSwipe({
    onLeft: next,
    onRight: previous,
  });

  useEffect(() => {
    if (!keyboard) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (!containerRef.current?.contains(document.activeElement)) {
        return;
      }

      switch (event.key) {
        case "ArrowLeft":
          event.preventDefault();
          previous();
          break;

        case "ArrowRight":
          event.preventDefault();
          next();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [keyboard, next, previous]);

  if (items.length === 0) {
    return null;
  }

  return (
  <div
    ref={containerRef}
    className={`carousel-container ${className}`}
    role="region"
    aria-label={typeof title === "string" ? title : "Carousel"}
    tabIndex={0}
    {...(swipe ? swipeHandlers : {})}
  >
    {/* Left Arrow */}
    <button
      type="button"
      className="carousel-arrow carousel-arrow-left"
      onClick={previous}
      disabled={!canGoPrevious}
      aria-label="Previous slide"
    >
      <span aria-hidden="true">‹</span>
    </button>

    {/* Slides */}
    <div className="carousel-content">
      {items.map((item, index) => {
        if (!renderSlides.has(index)) {
          return null;
        }

        const position = getCarouselPosition(
          index,
          activeIndex,
          items.length,
        );

        const loaded = loadedSlides.has(index);
        const active = index === activeIndex;

        return (
          <CarouselSlide
            key={index}
            position={position}
            active={active}
            loaded={loaded}
          >
            {loaded &&
              renderItem(item, index, {
                index,
                active,
                position,
              })}
          </CarouselSlide>
        );
      })}

      <div
        className="carousel-content-background"
        aria-hidden="true"
      />
    </div>

    {/* Right Arrow */}
    <button
      type="button"
      className="carousel-arrow carousel-arrow-right"
      onClick={next}
      disabled={!canGoNext}
      aria-label="Next slide"
    >
      <span aria-hidden="true">›</span>
    </button>
  </div>
);

}
import {
  useCallback,
  useRef,
} from "react";

import type { PointerEvent } from "react";

interface UseSwipeOptions {
  onLeft: () => void;
  onRight: () => void;
  threshold?: number;
}

export function useSwipe({
  onLeft,
  onRight,
  threshold = 50,
}: UseSwipeOptions) {
  const startX = useRef<number | null>(null);
  const startY = useRef<number | null>(null);

  const reset = useCallback(() => {
    startX.current = null;
    startY.current = null;
  }, []);

  const onPointerDown = useCallback(
    (event: PointerEvent) => {
      // Only respond to the primary mouse button.
      if (
        event.pointerType === "mouse" &&
        event.button !== 0
      ) {
        return;
      }

      startX.current = event.clientX;
      startY.current = event.clientY;
    },
    [],
  );

  const onPointerUp = useCallback(
    (event: PointerEvent) => {
      if (
        startX.current === null ||
        startY.current === null
      ) {
        return;
      }

      const deltaX =
        startX.current - event.clientX;

      const deltaY =
        startY.current - event.clientY;

      reset();

      // Ignore predominantly vertical gestures.
      if (Math.abs(deltaX) <= Math.abs(deltaY)) {
        return;
      }

      // Ignore short movements.
      if (Math.abs(deltaX) < threshold) {
        return;
      }

      if (deltaX > 0) {
        onLeft();
      } else {
        onRight();
      }
    },
    [onLeft, onRight, reset, threshold],
  );

  const onPointerCancel = useCallback(() => {
    reset();
  }, [reset]);

  const onPointerLeave = useCallback(() => {
    reset();
  }, [reset]);

  return {
    onPointerDown,
    onPointerUp,
    onPointerCancel,
    onPointerLeave,
  };
}
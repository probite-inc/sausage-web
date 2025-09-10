import { useState, useEffect } from "react";

interface ScrollVisibilityOptions {
  threshold?: number;
  hideOnScrollDown?: boolean;
  showOnScrollUp?: boolean;
  alwaysShowAtTop?: boolean;
}

export function useScrollVisibility(options: ScrollVisibilityOptions = {}) {
  const {
    threshold = 10,
    hideOnScrollDown = true,
    showOnScrollUp = true,
    alwaysShowAtTop = true,
  } = options;

  const [isVisible, setIsVisible] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateVisibility = () => {
      const currentScrollY = window.pageYOffset;
      const direction = currentScrollY > lastScrollY ? "down" : "up";
      const scrollDiff = Math.abs(currentScrollY - lastScrollY);

      // Always show at top if enabled
      if (alwaysShowAtTop && currentScrollY < threshold) {
        setIsVisible(true);
      }
      // Hide on scroll down
      else if (
        hideOnScrollDown &&
        direction === "down" &&
        scrollDiff > threshold
      ) {
        setIsVisible(false);
      }
      // Show on scroll up
      else if (showOnScrollUp && direction === "up" && scrollDiff > threshold) {
        setIsVisible(true);
      }

      setScrollY(currentScrollY);
      lastScrollY = currentScrollY > 0 ? currentScrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateVisibility);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold, hideOnScrollDown, showOnScrollUp, alwaysShowAtTop]);

  return { isVisible, scrollY };
}

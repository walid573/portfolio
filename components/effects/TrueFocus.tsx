"use client";

import React, { useEffect, useRef } from "react";

interface TrueFocusProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * TrueFocus — React Bits "True Focus" interpretation.
 * Within long reading passages, the block nearest the viewport center
 * stays bright while the rest dim — guiding the eye down the story.
 * Children opt in with data-focus. Static when reduced motion is set.
 */
export function TrueFocus({ children, className = "" }: TrueFocusProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const blocks = Array.from(el.querySelectorAll<HTMLElement>("[data-focus]"));
    if (blocks.length === 0) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      blocks.forEach((b) => b.classList.add("focus-on"));
      return;
    }

    let raf = 0;
    const update = () => {
      raf = 0;
      const mid = window.innerHeight / 2;
      let best: HTMLElement | null = null;
      let bestDistance = Infinity;
      for (const b of blocks) {
        const rect = b.getBoundingClientRect();
        const distance = Math.abs(rect.top + rect.height / 2 - mid);
        if (distance < bestDistance) {
          bestDistance = distance;
          best = b;
        }
      }
      blocks.forEach((b) => b.classList.toggle("focus-on", b === best));
    };
    const request = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", request);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", request);
      window.removeEventListener("resize", request);
    };
  }, []);

  return <div ref={ref} className={`true-focus ${className}`}>{children}</div>;
}

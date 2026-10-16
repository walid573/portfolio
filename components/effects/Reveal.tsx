"use client";

import React, { useEffect, useRef } from "react";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "left" | "right";
  delay?: number;
}

/**
 * Reveal — directional scroll reveal (up / left / right) with stagger delay.
 * For cases where the global MotionEnhancer's generic fade isn't expressive
 * enough (e.g. alternating timeline entries sliding in from their own side).
 */
export function Reveal({ children, className = "", direction = "up", delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("reveal-in");
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.setTimeout(() => el.classList.add("reveal-in"), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`reveal reveal--${direction} ${className}`}>
      {children}
    </div>
  );
}

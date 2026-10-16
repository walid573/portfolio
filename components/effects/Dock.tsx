"use client";

import React, { useRef } from "react";

interface DockProps {
  children: React.ReactNode;
  className?: string;
  /** peak magnification at the cursor */
  maxScale?: number;
  /** px radius of the magnification falloff */
  radius?: number;
}

/**
 * Dock — React Bits "Dock" interpretation (magnification only).
 * Children marked with data-dock-item swell near the cursor with
 * a smooth falloff, like macOS. Touch users just get normal targets.
 */
export function Dock({ children, className = "", maxScale = 1.45, radius = 110 }: DockProps) {
  const ref = useRef<HTMLDivElement>(null);

  const paint = (clientX: number | null, clientY: number | null) => {
    const el = ref.current;
    if (!el) return;
    el.querySelectorAll<HTMLElement>("[data-dock-item]").forEach((item) => {
      if (clientX === null || clientY === null) {
        item.style.transform = "";
        return;
      }
      const rect = item.getBoundingClientRect();
      const dx = clientX - (rect.left + rect.width / 2);
      const dy = clientY - (rect.top + rect.height / 2);
      const t = Math.max(0, 1 - Math.hypot(dx, dy) / radius);
      item.style.transform = `scale(${(1 + (maxScale - 1) * t * t).toFixed(3)})`;
    });
  };

  const onMove = (e: React.MouseEvent) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    paint(e.clientX, e.clientY);
  };

  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={() => paint(null, null)} className={`dock ${className}`}>
      {children}
    </div>
  );
}

"use client";

import React, { useRef } from "react";

interface TiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** max tilt in degrees */
  max?: number;
}

/**
 * TiltCard — React Bits "Tilted Card" interpretation.
 * 3D perspective tilt following the cursor, plus a soft glare highlight.
 * Respects prefers-reduced-motion (no tilt, no glare).
 */
export function TiltCard({ children, className = "", max = 9, ...rest }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const raf = useRef(0);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    cancelAnimationFrame(raf.current);
    const { clientX, clientY } = e;
    raf.current = requestAnimationFrame(() => {
      const rect = el.getBoundingClientRect();
      const px = (clientX - rect.left) / rect.width - 0.5;
      const py = (clientY - rect.top) / rect.height - 0.5;
      el.style.transform = `perspective(700px) rotateX(${(-py * max).toFixed(2)}deg) rotateY(${(px * max).toFixed(2)}deg)`;
      el.style.setProperty("--glare-x", `${((px + 0.5) * 100).toFixed(1)}%`);
      el.style.setProperty("--glare-y", `${((py + 0.5) * 100).toFixed(1)}%`);
    });
  };

  const onLeave = () => {
    cancelAnimationFrame(raf.current);
    ref.current?.style.setProperty("transform", "");
  };

  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} className={`tilt-card ${className}`} {...rest}>
      {children}
      <div aria-hidden="true" className="tilt-glare" />
    </div>
  );
}

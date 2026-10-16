"use client";

import React, { useRef } from "react";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  spotlightColor?: string;
}

/**
 * SpotlightCard — mouse-tracked radial glow following the cursor.
 * React Bits "Spotlight Card" pattern, implemented with CSS vars.
 */
export function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(139, 92, 246, 0.18)",
  ...rest
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--sp-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--sp-y", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={`spotlight-card ${className}`}
      style={{ ["--sp-color" as string]: spotlightColor }}
      {...rest}
    >
      {children}
    </div>
  );
}

"use client";

import React, { useRef } from "react";

type ButtonVariant = "aurora" | "specular";

interface AdvancedButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  /** renders an <a> when provided, a <button> otherwise */
  href?: string;
  target?: string;
  rel?: string;
  /** file download hint for anchor buttons */
  download?: string | boolean;
  onClick?: (e: React.MouseEvent) => void;
  type?: "button" | "submit";
  ariaLabel?: string;
}

/**
 * AdvancedButton — React Bits "Specular Button" + "Border Glow" interpretation.
 * - aurora: gradient CTA with panning background, cursor spotlight,
 *   rotating border beam, and press depth.
 * - specular: glass button with top sheen and an edge light that
 *   glides toward the cursor.
 */
export function AdvancedButton({
  children,
  variant = "aurora",
  className = "",
  href,
  target,
  rel,
  download,
  onClick,
  type = "button",
  ariaLabel,
}: AdvancedButtonProps) {
  const ref = useRef<HTMLElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${(((e.clientX - rect.left) / rect.width) * 100).toFixed(1)}%`);
    el.style.setProperty("--my", `${(((e.clientY - rect.top) / rect.height) * 100).toFixed(1)}%`);
  };

  const cls = `${variant === "aurora" ? "aurora-btn" : "spec-btn"} ${className}`;

  // Aurora variant renders a gradient core; the button edge itself stays
  // open so the rotating outline disc shows through as a 2px ring.
  const core = variant === "aurora" ? <span aria-hidden="true" className="aurora-core" /> : null;

  if (href) {
    return (
      <a
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref={ref as any}
        href={href}
        target={target}
        rel={rel}
        download={download}
        onClick={onClick}
        onMouseMove={onMove}
        aria-label={ariaLabel}
        className={cls}
      >
        {core}
        {children}
      </a>
    );
  }

  return (
    <button
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      type={type}
      onClick={onClick}
      onMouseMove={onMove}
      aria-label={ariaLabel}
      className={cls}
    >
      {core}
      {children}
    </button>
  );
}

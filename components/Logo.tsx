import React from "react";

/**
 * Logo — MW monogram artwork (provided asset).
 * Frosted dark tile with sheen, interlocking glass MW strokes,
 * neon cores, and a rim light. Rendered at any size via the size prop.
 */
export function Logo({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      role="img"
      aria-label="Mohammad Walid monogram logo"
    >
      <defs>
        <linearGradient id="logo-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3a3d44" />
          <stop offset="0.5" stopColor="#1c1e23" />
          <stop offset="1" stopColor="#0a0b0d" />
        </linearGradient>
        <linearGradient id="logo-sheen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0.28" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="logo-rim" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0.75" />
          <stop offset="0.5" stopColor="#fff" stopOpacity="0.08" />
          <stop offset="1" stopColor="#fff" stopOpacity="0.4" />
        </linearGradient>
        <linearGradient id="logo-a" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#e8eaee" stopOpacity="0.95" />
          <stop offset="1" stopColor="#9aa0aa" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="logo-b" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.8" />
          <stop offset="1" stopColor="#6b717c" stopOpacity="0.5" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="15" fill="url(#logo-bg)" />
      <path d="M0 15 Q0 0 15 0 H49 Q64 0 64 15 V30 Q32 38 0 30 Z" fill="url(#logo-sheen)" />
      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 17 L17 47 L32 25 L47 47 L47 17" stroke="url(#logo-b)" strokeWidth="7.5" />
        <path d="M17 47 L17 17 L32 39 L47 17 L47 47" stroke="url(#logo-a)" strokeWidth="7.5" />
        <path d="M17 47 L17 17 L32 39 L47 17 L47 47" stroke="#fff" strokeWidth="1.2" opacity="0.7" />
        <path d="M15.5 45 L15.5 15.5 L32 37" stroke="#fff" strokeWidth="1.6" opacity="0.35" />
      </g>
      <rect x="0.75" y="0.75" width="62.5" height="62.5" rx="14.25" fill="none" stroke="url(#logo-rim)" strokeWidth="1.5" />
    </svg>
  );
}

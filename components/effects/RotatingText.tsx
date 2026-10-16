"use client";

import React, { useEffect, useState } from "react";

interface RotatingTextProps {
  words: string[];
  className?: string;
  /** ms each word stays visible */
  interval?: number;
}

/**
 * RotatingText — React Bits "Rotating Text" interpretation.
 * Words cycle with a blur/slide transition. Grid-stacked so the
 * container sizes to the widest word — zero layout shift.
 */
export function RotatingText({ words, className = "", interval = 2600 }: RotatingTextProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (words.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, interval);
    return () => window.clearInterval(id);
  }, [words.length, interval]);

  return (
    <span className={`rotator ${className}`} role="status" aria-label={words[index]}>
      <span aria-hidden="true" className="sr-only">
        {words[index]}
      </span>
      {words.map((word, i) => (
        <span key={word} aria-hidden="true" className={`rotator-word${i === index ? " rotator-word--active" : ""}`}>
          {word}
        </span>
      ))}
    </span>
  );
}

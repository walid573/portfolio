"use client";

import React, { useEffect, useRef } from "react";

interface SplitTextProps {
  text: string;
  className?: string;
  /** classes applied to each animated word (use this for gradient text) */
  wordClassName?: string;
  /** stagger delay per word in ms */
  stagger?: number;
  as?: "h1" | "h2" | "p" | "span";
}

/**
 * SplitText — word-by-word blur/slide reveal on first view.
 * Zero-dependency alternative to React Bits SplitText.
 * NOTE: gradient-text classes must go on `wordClassName`, not `className` —
 * a background-clip:text gradient on the parent won't paint through the
 * filtered/transformed word spans.
 */
export function SplitText({ text, className = "", wordClassName = "", stagger = 45, as = "span" }: SplitTextProps) {
  const ref = useRef<HTMLElement | null>(null);
  const words = text.split(" ");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("split-in");
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add("split-in");
            observer.disconnect();
          }
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    // Backstop: never leave text invisible if the observer never fires.
    const fallback = window.setTimeout(() => el.classList.add("split-in"), 3000);
    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  const Tag = as as "span";

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      className={`split-text ${className}`}
      aria-label={text}
    >
      {words.map((word, i) => (
        <span
          key={i}
          className={`split-word ${wordClassName}`}
          aria-hidden="true"
          style={{ transitionDelay: `${i * stagger}ms` }}
        >
          {word}
          {i < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </Tag>
  );
}

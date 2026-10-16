"use client";

import React, { useEffect, useRef } from "react";

const GLYPHS = "!<>-_\\/[]{}—=+*^?#";

interface DecryptedTextProps {
  text: string;
  className?: string;
  /** ms between scramble ticks */
  speed?: number;
  /** ticks each character spends scrambled */
  maxIterations?: number;
  /** reveal left-to-right, right-to-left, or from the center */
  revealDirection?: "start" | "end" | "center";
  /** animate when scrolled into view, on hover, or both */
  animateOn?: "view" | "hover" | "both";
}

/**
 * DecryptedText — React Bits "Decrypted Text" interpretation.
 * Terminal-style descramble reveal. Re-scrambles on hover.
 */
export function DecryptedText({
  text,
  className = "",
  speed = 45,
  maxIterations = 8,
  revealDirection = "start",
  animateOn = "both",
}: DecryptedTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const frame = useRef(0);
  const timer = useRef(0);

  const scramble = () => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    window.clearInterval(timer.current);
    frame.current = 0;

    timer.current = window.setInterval(() => {
      frame.current += 1;
      const chars = text.split("");
      const len = chars.length;
      const next = chars
        .map((ch, i) => {
          if (ch === " " || ch === "&" || ch === ";") return ch;
          const revealed =
            revealDirection === "start"
              ? i < frame.current
              : revealDirection === "end"
                ? i >= len - frame.current
                : Math.abs(i - len / 2) < frame.current / 2;
          if (revealed) return ch;
          return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        })
        .join("");
      el.textContent = next;
      if (frame.current > len + maxIterations) {
        el.textContent = text;
        window.clearInterval(timer.current);
      }
    }, speed);
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (animateOn === "hover") return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          scramble();
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      window.clearInterval(timer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  return (
    <span
      ref={ref}
      className={className}
      aria-label={text}
      onMouseEnter={animateOn === "view" ? undefined : scramble}
    >
      {text}
    </span>
  );
}

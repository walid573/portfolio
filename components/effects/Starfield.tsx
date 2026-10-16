"use client";

import React, { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  r: number;
  phase: number;
  speed: number;
  hue: number;
}

/**
 * Starfield — React Bits "Galaxy / Particles" interpretation.
 * Lightweight canvas starfield with twinkle + slow upward drift.
 * Pauses when offscreen, renders one static frame for reduced motion.
 */
export function Starfield({ maxStars = 90 }: { maxStars?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let stars: Star[] = [];
    let w = 0;
    let h = 0;
    let raf = 0;
    let visible = true;

    const seed = () => {
      const count = Math.max(40, Math.min(maxStars, Math.round((w * h) / 16000)));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.2 + 0.3,
        phase: Math.random() * Math.PI * 2,
        speed: 0.3 + Math.random() * 0.9,
        hue: Math.random() < 0.65 ? 258 : 190,
      }));
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = Math.max(rect.width, 1);
      h = Math.max(rect.height, 1);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    const paint = (t: number, drift: boolean) => {
      ctx.clearRect(0, 0, w, h);
      for (const s of stars) {
        const alpha = 0.15 + 0.45 * Math.abs(Math.sin(t / 1500 * s.speed + s.phase));
        ctx.beginPath();
        ctx.fillStyle = `hsla(${s.hue}, 90%, 76%, ${alpha.toFixed(3)})`;
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
        if (drift) {
          s.y -= 0.07 * s.speed;
          if (s.y < -2) {
            s.y = h + 2;
            s.x = Math.random() * w;
          }
        }
      }
    };

    const loop = (t: number) => {
      if (!visible) return;
      paint(t, true);
      raf = requestAnimationFrame(loop);
    };

    resize();
    window.addEventListener("resize", resize);

    if (reduced) {
      paint(1200, false);
    } else {
      raf = requestAnimationFrame(loop);
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible && !reduced) {
          cancelAnimationFrame(raf);
          raf = requestAnimationFrame(loop);
        } else {
          cancelAnimationFrame(raf);
        }
      },
      { threshold: 0 }
    );
    io.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, [maxStars]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}

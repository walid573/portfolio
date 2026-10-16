"use client";

import React, { useRef } from "react";

interface Spark {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
}

interface ClickSparkProps extends React.HTMLAttributes<HTMLDivElement> {
  /** "r, g, b" spark color */
  color?: string;
  sparkCount?: number;
}

/**
 * ClickSpark — React Bits "Click Spark" interpretation.
 * A burst of fading sparks at the pointer position on click.
 * One idle canvas per instance; animates only while sparks live.
 * Ideal for touch users who never see hover feedback.
 */
export function ClickSpark({ children, className = "", color = "139, 92, 246", sparkCount = 12, ...rest }: ClickSparkProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sparks = useRef<Spark[]>([]);
  const raf = useRef(0);

  const burst = (e: React.MouseEvent) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = wrap.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.max(Math.round(rect.width * dpr), 1);
    canvas.height = Math.max(Math.round(rect.height * dpr), 1);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    for (let i = 0; i < sparkCount; i++) {
      const angle = (Math.PI * 2 * i) / sparkCount + Math.random() * 0.5;
      const speed = 2 + Math.random() * 3.5;
      sparks.current.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1,
      });
    }

    cancelAnimationFrame(raf.current);
    const tick = () => {
      ctx.clearRect(0, 0, rect.width, rect.height);
      sparks.current = sparks.current.filter((s) => s.life > 0);
      for (const s of sparks.current) {
        s.x += s.vx;
        s.y += s.vy;
        s.vx *= 0.92;
        s.vy *= 0.92;
        s.life -= 0.03;
        ctx.beginPath();
        ctx.fillStyle = `rgba(${color}, ${Math.max(s.life, 0).toFixed(3)})`;
        ctx.arc(s.x, s.y, 1.6 * s.life + 0.4, 0, Math.PI * 2);
        ctx.fill();
      }
      if (sparks.current.length > 0) {
        raf.current = requestAnimationFrame(tick);
      } else {
        ctx.clearRect(0, 0, rect.width, rect.height);
      }
    };
    raf.current = requestAnimationFrame(tick);
  };

  return (
    <div ref={wrapRef} onClick={burst} className={`click-spark ${className}`} {...rest}>
      {children}
      <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full" />
    </div>
  );
}

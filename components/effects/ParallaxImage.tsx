"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

interface ParallaxImageProps {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  /** drift strength: fraction of viewport distance applied to the image */
  strength?: number;
  children?: React.ReactNode;
}

/**
 * ParallaxImage — scroll-linked drift for large showcase images.
 * The image drifts slower than the page (transform only, rAF-throttled,
 * paused offscreen, static under reduced motion).
 */
export function ParallaxImage({
  src,
  alt,
  sizes,
  priority = false,
  className = "",
  strength = 0.08,
  children,
}: ParallaxImageProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const img = imgRef.current;
    if (!wrap || !img) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let visible = true;

    const update = () => {
      raf = 0;
      if (!visible) return;
      const rect = wrap.getBoundingClientRect();
      const offset = rect.top + rect.height / 2 - window.innerHeight / 2;
      const shift = Math.max(Math.min(-offset * strength, 60), -60);
      img.style.transform = `translateY(${shift.toFixed(1)}px) scale(1.12)`;
    };

    const request = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) request();
      },
      { threshold: 0 }
    );

    update();
    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", request);
    io.observe(wrap);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", request);
      window.removeEventListener("resize", request);
      io.disconnect();
    };
  }, [strength]);

  return (
    <div ref={wrapRef} className={`relative overflow-hidden ${className}`}>
      <div ref={imgRef} className="absolute inset-0 will-change-transform" style={{ transform: "scale(1.12)" }}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover object-top"
        />
      </div>
      {children}
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "./ThemeProvider";

interface SkillProgressBarProps {
  colorClass: string;
  width: string;
  delay: number;
  lightColor?: string;
}

export function SkillProgressBar({ colorClass, width, delay, lightColor }: SkillProgressBarProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(track);
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(track);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={trackRef} className="w-full h-1 bg-white/5 rounded-full overflow-hidden mt-2" aria-hidden="true">
      <div
        className={`skill-loading-bar${isVisible ? " skill-loading-bar--visible" : ""} h-full rounded-full ${colorClass}`}
        style={{
          width,
          animationDelay: `${delay}ms`,
          ...(theme === "light" && lightColor ? { backgroundColor: lightColor } : {}),
        }}
      />
    </div>
  );
}

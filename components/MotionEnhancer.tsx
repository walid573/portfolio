"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const motionTargets =
  "main section, main article, main .glass-card, main .home-tech-card, main .grid > div[class*='rounded-2xl'], main .grid > div[class*='rounded-3xl'], .github-language-track";

export function MotionEnhancer() {
  const pathname = usePathname();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) return;

    const listeners = new AbortController();
    const delays = new WeakMap<Element, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;

          const target = entry.target as HTMLElement;
          const delay = delays.get(target) ?? 0;

          if (target.matches(".github-language-track")) {
            const fill = target.querySelector<HTMLElement>(".github-language-fill");
            const shimmer = fill?.querySelector<HTMLElement>(".github-language-shimmer");

            fill?.animate(
              [{ transform: "scaleX(0)" }, { transform: "scaleX(1)" }],
              { duration: 1800, delay, easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "forwards" },
            );
            shimmer?.animate(
              [{ transform: "translateX(-120%)" }, { transform: "translateX(340%)" }],
              { duration: 2400, delay: delay + 1800, easing: "ease-in-out", iterations: Infinity },
            );
          } else {
            target.animate(
              [
                { opacity: 0, translate: "0 22px", filter: "blur(3px)" },
                { opacity: 1, translate: "0 0", filter: "none" },
              ],
              { duration: 700, delay, easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "both" },
            );
          }

          observer.unobserve(target);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    const targets = document.querySelectorAll<HTMLElement>(motionTargets);
    const siblingIndexes = new Map<Element, number>();
    let languageBarIndex = 0;

    targets.forEach((target) => {
      if (target.matches(".github-language-track")) {
        delays.set(target, languageBarIndex * 180);
        languageBarIndex += 1;
        observer.observe(target);
        return;
      }

      if (!target.matches("section")) {
        const parent = target.parentElement;
        if (parent) {
          const index = siblingIndexes.get(parent) ?? 0;
          delays.set(target, Math.min(index * 65, 325));
          siblingIndexes.set(parent, index + 1);
        }

        target.addEventListener(
          "pointerenter",
          () => target.animate(
            [
              { translate: "0 0", boxShadow: "0 0 0 0 rgba(139, 92, 246, 0)" },
              { translate: "0 -4px", boxShadow: "0 16px 36px -22px rgba(139, 92, 246, 0.65)" },
            ],
            { duration: 250, easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "forwards" },
          ),
          { signal: listeners.signal },
        );
        target.addEventListener(
          "pointerleave",
          () => target.animate(
            [
              { translate: "0 -4px", boxShadow: "0 16px 36px -22px rgba(139, 92, 246, 0.65)" },
              { translate: "0 0", boxShadow: "0 0 0 0 rgba(139, 92, 246, 0)" },
            ],
            { duration: 250, easing: "ease-out", fill: "forwards" },
          ),
          { signal: listeners.signal },
        );
      }

      observer.observe(target);
    });

    return () => {
      observer.disconnect();
      listeners.abort();
    };
  }, [pathname]);

  return null;
}

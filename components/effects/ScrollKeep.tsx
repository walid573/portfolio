"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/**
 * ScrollKeep — preserve scroll position across full page refreshes.
 * Next.js sets history.scrollRestoration to "manual" for its router,
 * which stops the browser restoring your spot on reload. This saves
 * the position per page and jumps back to it on load. Client-side
 * navigations are untouched (restore runs only on the first mount).
 */
export function ScrollKeep() {
  const pathname = usePathname();
  const restored = useRef(false);

  useEffect(() => {
    const key = `scroll-pos:${pathname}`;

    const save = () => {
      try {
        sessionStorage.setItem(key, String(window.scrollY));
      } catch {
        /* storage unavailable — skip */
      }
    };

    window.addEventListener("scroll", save, { passive: true });
    window.addEventListener("beforeunload", save);

    if (!restored.current) {
      restored.current = true;
      let saved = 0;
      try {
        saved = Number(sessionStorage.getItem(key)) || 0;
      } catch {
        /* storage unavailable — stay at top */
      }
      if (saved > 0) {
        // Only jump while the user hasn't scrolled elsewhere yet.
        const go = () => {
          if (window.scrollY < 80) window.scrollTo(0, saved);
        };
        go();
        window.addEventListener("load", go, { once: true });
        const fallback = window.setTimeout(go, 500);
        return () => {
          window.removeEventListener("scroll", save);
          window.removeEventListener("beforeunload", save);
          window.removeEventListener("load", go);
          window.clearTimeout(fallback);
        };
      }
    }

    return () => {
      window.removeEventListener("scroll", save);
      window.removeEventListener("beforeunload", save);
    };
  }, [pathname]);

  return null;
}

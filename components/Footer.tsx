"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import { personalInfo } from "@/data/portfolio";
import { Dock } from "@/components/effects/Dock";
import { Logo } from "@/components/Logo";

export function Footer() {
  // Stable initial year for prerendering; corrected on mount (see build note).
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrentYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#040508] pt-14 pb-10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-violet-600/10 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/5">
          {/* Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" className="flex items-center gap-2 mb-2">
              <Logo size={32} />
              <span className="text-lg font-bold text-white tracking-tight">
                {personalInfo.name}
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm">
              {personalInfo.tagline}
            </p>
          </div>

          {/* Social Icons & Back to Top */}
          <Dock className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              data-dock-item
              className="p-2.5 rounded-xl glass border border-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              data-dock-item
              className="p-2.5 rounded-xl glass border border-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Send Email"
              data-dock-item
              className="p-2.5 rounded-xl glass border border-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              data-dock-item
              className="p-2.5 rounded-xl glass-strong border border-violet-500/30 text-violet-300 hover:text-white hover:bg-violet-600/30 transition-all ml-2"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </Dock>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400 text-center sm:text-left">
          <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Built with Next.js App Router, React 19, TypeScript &amp; Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

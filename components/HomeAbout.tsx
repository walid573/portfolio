"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight, Rocket, Star, GraduationCap } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export function HomeAbout() {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="about-preview" aria-label="About Me Preview" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full bg-violet-600/10 blur-[130px]" />
        <div className="absolute inset-0 bg-dot-grid opacity-25" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass border border-violet-500/30 text-xs font-mono font-medium text-violet-300 tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            <span>ABOUT ME</span>
          </div>
        </div>

        {/* 2-Column Grid matching reference screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Portrait Photo with Floating Badges */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/3] sm:aspect-[1.15/1] rounded-2xl p-1 bg-gradient-to-b from-violet-500/30 via-white/5 to-cyan-500/20 shadow-2xl shadow-violet-950/40">
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-950 border border-white/[0.08]">
                {!imageError ? (
                  <Image
                    src={personalInfo.profileImage}
                    alt="Mohammad Walid — About Me"
                    fill
                    className="object-cover object-center hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 500px"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-slate-900 text-violet-300 font-mono text-xl">
                    Mohammad Walid
                  </div>
                )}

                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 pointer-events-none" />

                {/* Floating Top Right Code Snippet Badge (Screenshot Element) */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 px-3.5 py-2.5 rounded-xl bg-[#090b14]/90 backdrop-blur-md border border-white/10 shadow-2xl text-[11px] font-mono leading-tight">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <span className="w-2 h-2 rounded-full bg-rose-500/80" />
                    <span className="w-2 h-2 rounded-full bg-amber-500/80" />
                    <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
                  </div>
                  <p className="text-violet-300">
                    <span className="text-pink-400">const</span> me = &#123;
                  </p>
                  <p className="pl-3 text-slate-300">
                    passion: <span className="text-cyan-300">&apos;∞&apos;</span>,
                  </p>
                  <p className="pl-3 text-slate-300">
                    coffee: <span className="text-amber-300">true</span>,
                  </p>
                  <p className="pl-3 text-slate-300">
                    bugs: <span className="text-emerald-300">&apos;features&apos;</span>
                  </p>
                  <p className="text-violet-300">&#125;;</p>
                </div>

                {/* Overlay Status Pill at Bottom Left of Photo */}
                <div className="absolute bottom-4 left-4 z-20 inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-emerald-500/40 text-xs font-medium text-emerald-300 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Open to Work</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Quote Card & 3 Stats Cards */}
          <div className="lg:col-span-6 space-y-6">
            {/* Quote Card */}
            <div className="relative rounded-2xl p-6 sm:p-8 bg-[#0b0d18]/80 backdrop-blur-md border border-white/[0.08] shadow-xl group hover:border-violet-500/30 transition-colors">
              {/* Giant Quotation Mark in Background */}
              <div
                className="absolute top-2 right-4 text-7xl font-serif text-violet-500/10 select-none pointer-events-none"
                aria-hidden="true"
              >
                &ldquo;
              </div>

              <div className="relative z-10 space-y-4">
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                  Hi, I&apos;m <span className="text-white font-semibold">Mohammad Walid</span>, a passionate web developer working toward becoming a skilled full-stack developer. I enjoy turning ideas into modern, responsive, and user-friendly web applications.
                </p>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  My development journey is driven by curiosity, hands-on practice, and a desire to solve real-world problems through code. Currently building real-world projects with React, Next.js, TypeScript, Node.js, Express, and MongoDB.
                </p>

                <div className="pt-2">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-violet-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1 duration-200"
                  >
                    <span>Read full story in About</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* 3 Stat Cards (Screenshot Elements: 3+ Projects, 100% Dedicated, HSC College Level) */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {/* Stat 1 */}
              <div className="rounded-2xl p-4 bg-[#0a0c16]/80 backdrop-blur-md border border-white/[0.08] text-center hover:border-violet-500/30 transition-all hover:-translate-y-0.5">
                <div className="w-7 h-7 mx-auto rounded-lg bg-violet-500/15 border border-violet-500/25 flex items-center justify-center text-violet-300 mb-2">
                  <Rocket className="w-3.5 h-3.5" />
                </div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-white">3+</div>
                <div className="text-[10px] sm:text-xs text-slate-400 font-medium leading-tight mt-1">
                  Projects Built
                </div>
              </div>

              {/* Stat 2 */}
              <div className="rounded-2xl p-4 bg-[#0a0c16]/80 backdrop-blur-md border border-white/[0.08] text-center hover:border-violet-500/30 transition-all hover:-translate-y-0.5">
                <div className="w-7 h-7 mx-auto rounded-lg bg-indigo-500/15 border border-indigo-500/25 flex items-center justify-center text-indigo-300 mb-2">
                  <Star className="w-3.5 h-3.5" />
                </div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-white">100%</div>
                <div className="text-[10px] sm:text-xs text-slate-400 font-medium leading-tight mt-1">
                  Dedicated &amp; Driven
                </div>
              </div>

              {/* Stat 3 */}
              <div className="rounded-2xl p-4 bg-[#0a0c16]/80 backdrop-blur-md border border-white/[0.08] text-center hover:border-violet-500/30 transition-all hover:-translate-y-0.5">
                <div className="w-7 h-7 mx-auto rounded-lg bg-cyan-500/15 border border-cyan-500/25 flex items-center justify-center text-cyan-300 mb-2">
                  <GraduationCap className="w-3.5 h-3.5" />
                </div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-white">HSC</div>
                <div className="text-[10px] sm:text-xs text-slate-400 font-medium leading-tight mt-1">
                  College Level
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

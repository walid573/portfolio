"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText, ChevronDown } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { ResumeModal } from "./ResumeModal";

export function Hero() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <>
      <section
        id="hero"
        aria-label="Hero Section"
        className="relative min-h-[85vh] lg:min-h-[720px] flex flex-col justify-center items-center pt-28 pb-12 lg:pt-32 lg:pb-16 overflow-hidden"
      >
        {/* Ambient Glows Matching Reference Aesthetic */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          {/* Top Left Radial Violet Flare */}
          <div className="absolute -top-24 -left-24 w-[500px] h-[500px] rounded-full bg-violet-700/20 blur-[140px] pointer-events-none" />
          {/* Hero Avatar Backlight Orbit Flare */}
          <div className="absolute top-1/3 right-10 lg:right-24 w-[450px] h-[450px] rounded-full bg-indigo-600/15 blur-[150px] pointer-events-none" />
          {/* Subtle Dot Grid */}
          <div className="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-violet-500/25 text-xs font-medium text-slate-300 mb-6 shadow-sm shadow-violet-500/10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="tracking-wide">Available for opportunities</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-4">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-indigo-400 bg-clip-text text-transparent">
                  Mohammad Walid
                </span>{" "}
                <span className="inline-block animate-wave origin-bottom-right">👋</span>
              </h1>

              {/* Supporting Subtitle */}
              <p className="text-slate-300 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl mb-8">
                From curiosity to <span className="text-violet-300 font-medium">full-stack development</span> — building modern web experiences one digital idea at a time.
              </p>

              {/* Two Prominent Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-8">
                {/* 1. Explore My Projects */}
                <Link
                  href="/projects"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 transition-all shadow-lg shadow-violet-600/30 hover:shadow-violet-600/50 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-violet-400"
                >
                  <span>Explore My Projects</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                {/* 2. Resume Button */}
                <button
                  type="button"
                  onClick={() => setResumeModalOpen(true)}
                  aria-label="View Resume status"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm text-slate-200 glass border border-white/10 hover:border-violet-500/40 hover:text-white hover:bg-white/[0.06] transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-violet-400 shadow-sm"
                >
                  <FileText className="w-4 h-4 text-violet-400" />
                  <span>Resume</span>
                  <span className="text-[10px] font-mono text-violet-300 bg-violet-500/20 px-2 py-0.5 rounded-full border border-violet-500/30">
                    Soon
                  </span>
                </button>
              </div>

              {/* Mini Tech Stack Pills (matching screenshot row) */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                {["Next.js", "React", "TypeScript", "Node.js", "MongoDB"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs font-mono font-medium text-slate-300 bg-[#0a0c16]/90 border border-white/[0.08] hover:border-violet-500/40 hover:text-white transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Side: Concentric Orbital Rings & Avatar (Reference Signature UI) */}
            <div className="lg:col-span-5 flex justify-center items-center relative py-6">
              <div className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[420px] md:h-[420px] flex items-center justify-center">
                
                {/* Outer Orbital Ring with spinning glowing bead */}
                <div className="absolute inset-0 rounded-full border border-violet-500/20 animate-spin-slow">
                  {/* Orbiting glowing violet bead */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-violet-400 shadow-[0_0_15px_#a855f7]" />
                  {/* Opposite mini tick */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-cyan-400/60" />
                </div>

                {/* Inner Orbital Ring with reverse spinning bead */}
                <div className="absolute w-[72%] h-[72%] rounded-full border border-cyan-500/20 border-dashed animate-spin-reverse">
                  {/* Orbiting cyan bead */}
                  <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]" />
                  <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-indigo-400/60" />
                </div>

                {/* Ambient Center Glow */}
                <div className="absolute w-44 h-44 rounded-full bg-gradient-to-tr from-violet-600/35 via-indigo-600/20 to-cyan-500/30 blur-2xl" />

                {/* Floating Monospace Code Syntax Chips (as shown in reference screenshot) */}
                {/* Chip 1: < / > (top left) */}
                <div className="absolute top-4 left-6 sm:left-4 z-20 px-2.5 py-1 rounded-lg glass border border-violet-500/30 text-violet-300 font-mono text-xs font-bold shadow-lg animate-blob">
                  &lt; / &gt;
                </div>

                {/* Chip 2: { } (top right) */}
                <div className="absolute top-8 right-6 sm:right-4 z-20 px-2.5 py-1 rounded-lg glass border border-cyan-500/30 text-cyan-300 font-mono text-xs font-bold shadow-lg animate-blob-reverse">
                  &#123; &#125;
                </div>

                {/* Chip 3: => (right middle) */}
                <div className="absolute top-1/2 -right-3 sm:-right-4 z-20 px-2.5 py-1 rounded-lg glass border border-indigo-500/30 text-indigo-300 font-mono text-xs font-bold shadow-lg">
                  =&gt;
                </div>

                {/* Chip 4: [ ] (bottom right) */}
                <div className="absolute bottom-8 right-8 sm:right-6 z-20 px-2.5 py-1 rounded-lg glass border border-purple-500/30 text-purple-300 font-mono text-xs font-bold shadow-lg animate-blob">
                  [ ]
                </div>

                {/* Chip 5: // (bottom left) */}
                <div className="absolute bottom-6 left-10 sm:left-8 z-20 px-2.5 py-1 rounded-lg glass border border-violet-500/30 text-violet-300 font-mono text-xs font-bold shadow-lg animate-blob-reverse">
                  //
                </div>

                {/* Chip 6: && (left middle) */}
                <div className="absolute top-1/2 -left-3 sm:-left-4 z-20 px-2.5 py-1 rounded-lg glass border border-blue-500/30 text-blue-300 font-mono text-xs font-bold shadow-lg">
                  &amp;&amp;
                </div>

                {/* Center Circular Avatar Container */}
                <div className="relative z-10 w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-full p-1 bg-gradient-to-tr from-violet-500 via-indigo-500 to-cyan-400 shadow-[0_0_35px_rgba(139,92,246,0.35)] group">
                  <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-950">
                    {!imageError ? (
                      <Image
                        src={personalInfo.profileImage}
                        alt="Mohammad Walid — Full-Stack Developer"
                        fill
                        priority
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 180px, 200px"
                        onError={() => setImageError(true)}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-violet-900/60 to-slate-950 text-white font-mono font-bold text-2xl">
                        MW
                      </div>
                    )}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator at bottom center (matching screenshot) */}
        <div className="relative z-10 mt-auto pt-8 flex flex-col items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
          <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase mb-2">
            SCROLL
          </span>
          <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
            <span className="w-1 h-2 rounded-full bg-violet-400 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Accessible Resume Modal */}
      <ResumeModal isOpen={resumeModalOpen} onClose={() => setResumeModalOpen(false)} />
    </>
  );
}

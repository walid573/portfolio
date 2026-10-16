"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, FileText } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { ResumeModal } from "./ResumeModal";
import { SplitText } from "@/components/effects/SplitText";
import { RotatingText } from "@/components/effects/RotatingText";
import { Magnetic } from "@/components/effects/Magnetic";
import { TiltCard } from "@/components/effects/TiltCard";
import { AdvancedButton } from "@/components/effects/AdvancedButton";
import { ClickSpark } from "@/components/effects/ClickSpark";

export function Hero() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <>
      <section
        id="hero"
        aria-label="Hero Section"
        className="relative min-h-[85vh] lg:min-h-[720px] flex flex-col justify-center items-center pt-28 pb-12 lg:pt-32 lg:pb-16 overflow-hidden"
      >
        {/* Ambient Glows Matching Reference Aesthetic */}
        <div className="backdrop-fade-y absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          {/* Top Left Radial Violet Flare */}
          <div className="absolute -top-24 -left-24 w-[500px] h-[500px] rounded-full bg-violet-700/20 blur-[140px] pointer-events-none" />
          {/* Hero Avatar Backlight Orbit Flare */}
          <div className="absolute top-1/3 right-10 lg:right-24 w-[450px] h-[450px] rounded-full bg-indigo-600/15 blur-[150px] pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              {/* Status Badge */}
              <div className="star-border inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-violet-500/25 text-xs font-medium text-slate-300 mb-6 shadow-sm shadow-violet-500/10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="tracking-wide">Available for opportunities</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-4">
                <SplitText text="Hi, I'm" as="span" stagger={70} />
                <br />
                <span className="text-shimmer bg-gradient-to-r from-violet-400 via-purple-300 to-indigo-400 bg-clip-text text-transparent">
                  Mohammad Walid
                </span>{" "}
              </h1>

              {/* Supporting Subtitle */}
              <p className="text-slate-300 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl mb-4">
                <SplitText
                  text="From curiosity to full-stack development — building modern web experiences one digital idea at a time."
                  stagger={28}
                />
              </p>

              {/* Rotating roles line */}
              <p className="font-mono text-sm sm:text-base text-slate-400 mb-8 flex items-center gap-2">
                <span className="text-emerald-400" aria-hidden="true">
                  ▸
                </span>
                <RotatingText
                  words={["Full Stack Engineer", "React Developer", "Next.js Developer"]}
                  className="text-slate-200"
                />
              </p>

              {/* Two Prominent Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-8">
                {/* 1. Explore My Projects */}
                <Magnetic>
                  <ClickSpark className="rounded-full" sparkCount={14} color="167, 139, 250">
                    <AdvancedButton
                      variant="aurora"
                      href="/projects"
                      className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm text-white"
                    >
                      <span>Explore My Projects</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </AdvancedButton>
                  </ClickSpark>
                </Magnetic>

                {/* 2. Resume Button */}
                <Magnetic strength={0.18}>
                  <ClickSpark className="rounded-full" sparkCount={10} color="34, 211, 238">
                    <AdvancedButton
                      variant="specular"
                      onClick={() => setResumeModalOpen(true)}
                      ariaLabel="View Resume status"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm text-slate-200 hover:text-white"
                    >
                      <FileText className="w-4 h-4 text-violet-400" />
                      <span>Resume</span>
                      <span className="text-[10px] font-mono text-violet-300 bg-violet-500/20 px-2 py-0.5 rounded-full border border-violet-500/30">
                        Soon
                      </span>
                    </AdvancedButton>
                  </ClickSpark>
                </Magnetic>
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
                  {"//"}
                </div>

                {/* Chip 6: && (left middle) */}
                <div className="absolute top-1/2 -left-3 sm:-left-4 z-20 px-2.5 py-1 rounded-lg glass border border-blue-500/30 text-blue-300 font-mono text-xs font-bold shadow-lg">
                  &amp;&amp;
                </div>

                {/* Center Circular Avatar Container with gentle float + subtle parallax tilt */}
                <div className="avatar-float relative z-10">
                  <TiltCard max={5} className="rounded-full">
                    <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full p-1 bg-gradient-to-tr from-violet-500 via-indigo-500 to-cyan-400 shadow-[0_0_35px_rgba(139,92,246,0.35)] group">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-950">
                  <Image
                    src={personalInfo.profileImage}
                    alt="Mohammad Walid — Full-Stack Developer"
                    width={1024}
                    height={935}
                    quality={90}
                    loading="eager"
                    sizes="(max-width: 640px) 224px, (max-width: 768px) 288px, 320px"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                    </div>
                    </div>
                  </TiltCard>
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

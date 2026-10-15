"use client";

import React, { useState } from "react";
import {
  Code2,
  Terminal,
  Sparkles,
  Compass,
  Layers,
  Heart,
  Check,
  Copy,
  ArrowRight,
} from "lucide-react";
import { personalInfo, hobbiesAndInterests } from "@/data/portfolio";

export function About() {
  const [copied, setCopied] = useState(false);

  const codeSnippet = `// Mohammad Walid — Developer Configuration
const developer = {
  name: "Mohammad Walid",
  role: "Full-Stack Web Developer",
  status: "Actively Building & Learning",
  coreStack: {
    frontend: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
    backend: ["Node.js", "Express.js", "REST APIs"],
    database: ["MongoDB"]
  },
  learningPhilosophy: "Learn by building real-world projects",
  primaryFocus: "Modern, responsive, user-friendly digital experiences",
  contact: "mdwalid19833@gmail.com"
};`;

  const copyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" aria-label="About Me Section" className="relative py-24 overflow-hidden">
      {/* Subtle Background Lighting */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-violet-600/10 blur-[120px]" />
        <div className="absolute bottom-10 right-0 w-80 h-80 rounded-full bg-indigo-600/10 blur-[120px]" />
        <div className="absolute inset-0 bg-dot-grid opacity-25" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-violet-500/25 text-xs font-mono text-violet-300 mb-4">
            <Terminal className="w-3.5 h-3.5 text-violet-400" />
            <span>// 01. A LITTLE ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5">
            Crafting Digital Ideas Into <span className="gradient-text">Practical Reality</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            A developer journey rooted in curiosity, hands-on practice, and a commitment to writing clean, maintainable code.
          </p>
        </div>

        {/* Top Grid: Bio Introduction & Interactive Terminal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Left Column: Personal Narrative Cards */}
          <div className="lg:col-span-7 space-y-5">
            {/* Primary Bio Card */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-violet-500/10 to-transparent rounded-bl-full pointer-events-none" />
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-violet-500/15 border border-violet-500/30 flex items-center justify-center text-violet-300">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">My Programming Journey</h3>
                  <p className="text-xs text-slate-400 font-mono">Curiosity • Iteration • Practice</p>
                </div>
              </div>
              <div className="space-y-3.5 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>{personalInfo.aboutIntro[0]}</p>
                <p>{personalInfo.aboutIntro[1]}</p>
                <p>{personalInfo.aboutIntro[2]}</p>
              </div>
            </div>

            {/* Two Side-by-Side Focus Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Card 1: What I Enjoy Building */}
              <div className="glass-card rounded-2xl p-5 border border-white/10">
                <div className="flex items-center gap-2.5 mb-3 text-cyan-300">
                  <Layers className="w-5 h-5 text-cyan-400" />
                  <h4 className="font-bold text-white text-sm">Projects I Enjoy Building</h4>
                </div>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Real-world web applications that deliver real utility — from news publications and commodity market monitoring tools to workout routine companions.
                </p>
              </div>

              {/* Card 2: Future Development Goals */}
              <div className="glass-card rounded-2xl p-5 border border-white/10">
                <div className="flex items-center gap-2.5 mb-3 text-violet-300">
                  <Sparkles className="w-5 h-5 text-violet-400" />
                  <h4 className="font-bold text-white text-sm">Future Goals</h4>
                </div>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Deepening full-stack architecture skills, scaling microservices, contributing to open-source software, and mastering high-performance web systems.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Code Snippet / Terminal Visual */}
          <div className="lg:col-span-5 space-y-5">
            {/* Terminal Window Widget */}
            <div className="rounded-2xl glass-strong border border-white/15 overflow-hidden shadow-2xl">
              {/* Window Header */}
              <div className="px-4 py-3 bg-slate-900/90 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-2 font-mono text-xs text-slate-400">walid.config.ts</span>
                </div>
                <button
                  type="button"
                  onClick={copyCode}
                  aria-label="Copy code snippet"
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Code Editor Body */}
              <div className="p-4 sm:p-5 font-mono text-xs leading-relaxed overflow-x-auto text-slate-300 bg-slate-950/70">
                <pre>
                  <code>
                    <span className="text-slate-500">// Developer Profile Data</span>
                    {"\n"}
                    <span className="text-violet-400">const</span>{" "}
                    <span className="text-cyan-300">developer</span> = &#123;
                    {"\n"}  <span className="text-indigo-300">name</span>:{" "}
                    <span className="text-emerald-300">&quot;Mohammad Walid&quot;</span>,
                    {"\n"}  <span className="text-indigo-300">designation</span>:{" "}
                    <span className="text-emerald-300">&quot;Full-Stack Web Developer&quot;</span>,
                    {"\n"}  <span className="text-indigo-300">coreTech</span>: [
                    {"\n"}    <span className="text-amber-300">&quot;React.js&quot;</span>,{" "}
                    <span className="text-amber-300">&quot;Next.js&quot;</span>,{" "}
                    <span className="text-amber-300">&quot;TypeScript&quot;</span>,
                    {"\n"}    <span className="text-amber-300">&quot;Node.js&quot;</span>,{" "}
                    <span className="text-amber-300">&quot;MongoDB&quot;</span>,{" "}
                    <span className="text-amber-300">&quot;Tailwind CSS&quot;</span>
                    {"\n"}  ],
                    {"\n"}  <span className="text-indigo-300">learningApproach</span>:{" "}
                    <span className="text-emerald-300">&quot;Hands-on Building &amp; Iteration&quot;</span>,
                    {"\n"}  <span className="text-indigo-300">location</span>:{" "}
                    <span className="text-emerald-300">&quot;Bangladesh&quot;</span>,
                    {"\n"}  <span className="text-indigo-300">openForOpportunities</span>:{" "}
                    <span className="text-cyan-400">true</span>
                    {"\n"}&#125;;
                  </code>
                </pre>
              </div>

              {/* Terminal Footer Bar */}
              <div className="px-4 py-2 bg-slate-900/60 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
                  <span>TypeScript Strict Mode</span>
                </span>
                <span>UTF-8</span>
              </div>
            </div>

            {/* Editable Placeholder for Hobbies & Interests Outside Programming */}
            <div className="glass-card rounded-2xl p-5 border border-dashed border-violet-500/30 relative">
              <div className="flex items-center gap-2 mb-2">
                <Heart className="w-4 h-4 text-pink-400" />
                <h4 className="text-xs font-mono uppercase tracking-wider text-pink-300 font-semibold">
                  {hobbiesAndInterests.title}
                </h4>
                <span className="text-[10px] font-mono text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded ml-auto">
                  Editable Placeholder
                </span>
              </div>
              <p className="text-xs text-slate-400 italic mb-3">
                {hobbiesAndInterests.placeholderText}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {hobbiesAndInterests.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs"
                  >
                    <p className="font-semibold text-white mb-0.5">{item.label}</p>
                    <p className="text-[11px] text-slate-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

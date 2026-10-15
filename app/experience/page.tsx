import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Milestone,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  FileText,
  Sparkles,
  GitBranch,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { journeyMilestones } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Professional Journey | Mohammad Walid — Full-Stack Web Developer",
  description:
    "Follow Mohammad Walid's hands-on development roadmap from web fundamentals to full-stack Next.js and Node.js production engineering.",
};

const nodeColors = [
  "border-violet-500 bg-violet-400 shadow-[0_0_15px_#8b5cf6]",
  "border-cyan-500 bg-cyan-400 shadow-[0_0_15px_#06b6d4]",
  "border-indigo-500 bg-indigo-400 shadow-[0_0_15px_#6366f1]",
  "border-purple-500 bg-purple-400 shadow-[0_0_15px_#a855f7]",
  "border-emerald-500 bg-emerald-400 shadow-[0_0_15px_#10b981]",
];

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-[#040508] text-slate-100 selection:bg-violet-600 selection:text-white flex flex-col relative">
      {/* Background with fine square grid and hero ambient glow */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-grid-pattern opacity-40" />
      <div className="fixed inset-0 pointer-events-none z-0 bg-radial-hero-glow" />

      <Navbar />

      <main className="flex-1 pt-28 pb-24 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section (Screenshot 2 Layout) */}
          <div className="text-center max-w-3xl mx-auto mb-16 pt-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-violet-400 mb-3 tracking-wider">
              <span>// ROADMAP &amp; TIMELINE</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">
              Professional{" "}
              <span className="bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
                Journey
              </span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-8">
              From curious beginner to building production-grade applications — every milestone has shaped who I am today.
            </p>

            {/* 3 Metric Stats Row (as shown in Screenshot 2) */}
            <div className="flex items-center justify-center gap-8 sm:gap-14 text-center pb-6">
              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-violet-300">2+</div>
                <div className="text-[11px] sm:text-xs text-slate-400 font-mono mt-0.5">Years Exploring</div>
              </div>
              <div className="w-[1px] h-8 bg-white/10" />
              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-cyan-300">5</div>
                <div className="text-[11px] sm:text-xs text-slate-400 font-mono mt-0.5">Milestone Phases</div>
              </div>
              <div className="w-[1px] h-8 bg-white/10" />
              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-indigo-300">3+</div>
                <div className="text-[11px] sm:text-xs text-slate-400 font-mono mt-0.5">Projects Shipped</div>
              </div>
            </div>

            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0a0c16]/90 border border-violet-500/30 text-xs font-medium text-slate-300 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for opportunities</span>
            </div>

            {/* Down Chevron Indicator */}
            <div className="pt-2 flex justify-center text-slate-500 animate-bounce">
              <ChevronDown className="w-5 h-5" />
            </div>
          </div>

          {/* Section Heading: Where I've worked & built */}
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              Where I&apos;ve{" "}
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                worked &amp; built
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
              Each milestone has been a chapter in my growth story — from learning the basics to shipping production code.
            </p>
          </div>

          {/* Timeline Cards Roadmap (Screenshot 2 Alternating Layout) */}
          <div className="relative mb-20">
            {/* Center Vertical Connecting Line */}
            <div
              className="absolute left-4 sm:left-1/2 top-6 bottom-6 w-0.5 -translate-x-1/2 bg-gradient-to-b from-violet-500 via-indigo-500 to-cyan-500 opacity-25"
              aria-hidden="true"
            />

            <div className="space-y-10 sm:space-y-14">
              {journeyMilestones.map((milestone, idx) => {
                const isEven = idx % 2 === 0;
                const nodeColor = nodeColors[idx % nodeColors.length];

                return (
                  <div
                    key={milestone.title}
                    className={`relative flex flex-col sm:flex-row items-start ${
                      isEven ? "sm:flex-row-reverse" : ""
                    } gap-6 group`}
                  >
                    {/* Glowing Node Dot on Timeline */}
                    <div
                      className={`absolute left-4 sm:left-1/2 -translate-x-1/2 top-6 w-5 h-5 rounded-full border-2 bg-slate-950 z-20 flex items-center justify-center transition-transform group-hover:scale-125 ${nodeColor}`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-white" />
                    </div>

                    {/* Spacer for 2-column alignment on desktop */}
                    <div className="hidden sm:block w-1/2" />

                    {/* Card Container */}
                    <div className="w-full sm:w-1/2 pl-10 sm:pl-0 sm:px-6">
                      <div className="rounded-3xl p-6 sm:p-7 bg-[#090b14]/85 backdrop-blur-md border border-white/[0.08] hover:border-violet-500/40 transition-all duration-300 group-hover:-translate-y-1 shadow-xl">
                        {/* Period & Role Badge */}
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                          <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-violet-500/15 text-violet-300 border border-violet-500/30">
                            {milestone.period}
                          </span>
                          <span className="text-[11px] font-mono text-slate-400">
                            {milestone.category}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                          {milestone.title}
                        </h3>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                          {milestone.description}
                        </p>

                        {/* Key Highlights */}
                        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                          {milestone.highlights.map((highlight) => (
                            <span
                              key={highlight}
                              className="inline-flex items-center gap-1.5 text-[11px] font-mono text-slate-300 px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.07]"
                            >
                              <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                              <span>{highlight}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 13+ Technologies Mastered Summary Card (Screenshot 2 Element) */}
          <div className="rounded-3xl p-8 bg-[#090b14]/90 backdrop-blur-md border border-white/[0.08] mb-12 text-center max-w-3xl mx-auto">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-6">
              <span className="text-violet-400 font-mono">12+</span> technologies mastered through hands-on projects
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                <div className="text-2xl font-bold font-mono text-violet-300">7</div>
                <div className="text-xs text-slate-400 font-mono mt-1">Frontend Tech</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                <div className="text-2xl font-bold font-mono text-cyan-300">3</div>
                <div className="text-xs text-slate-400 font-mono mt-1">Backend Tools</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                <div className="text-2xl font-bold font-mono text-indigo-300">1</div>
                <div className="text-xs text-slate-400 font-mono mt-1">Database</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                <div className="text-2xl font-bold font-mono text-emerald-300">3</div>
                <div className="text-xs text-slate-400 font-mono mt-1">Shipped Apps</div>
              </div>
            </div>
          </div>

          {/* CTA Banner: Interested in working together? (Screenshot 2 Element) */}
          <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-b from-[#0e1224] to-[#090b14] border border-violet-500/25 text-center max-w-3xl mx-auto shadow-2xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              Interested in working together?
            </h3>
            <p className="text-sm text-slate-300 mb-8">
              Let&apos;s build something <span className="text-cyan-300 font-medium">amazing</span>.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 transition-all shadow-lg shadow-violet-600/30 hover:scale-105"
              >
                <span>Get In Touch</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm text-slate-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 transition-colors"
              >
                <FileText className="w-4 h-4 text-violet-400" />
                <span>Explore Projects</span>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

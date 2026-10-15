"use client";

import React from "react";
import { GitBranch, Milestone, CheckCircle2, Briefcase, PlusCircle } from "lucide-react";
import { journeyMilestones } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" aria-label="Experience & Journey Section" className="relative py-24 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full bg-cyan-600/10 blur-[130px]" />
        <div className="absolute inset-0 bg-dot-grid opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-cyan-500/25 text-xs font-mono text-cyan-300 mb-4">
            <Milestone className="w-3.5 h-3.5 text-cyan-400" />
            <span>// 04. EXPERIENCE &amp; DEVELOPMENT JOURNEY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            My Development <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Hands-on milestones representing the practical evolution from foundational web standards to full-stack Next.js production deployments.
          </p>
        </div>

        {/* Timeline Roadmap */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Connecting Line */}
          <div
            className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-violet-500 via-indigo-500 to-cyan-500 opacity-30"
            aria-hidden="true"
          />

          <div className="space-y-8 sm:space-y-12">
            {journeyMilestones.map((milestone, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={milestone.title}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? "sm:flex-row-reverse" : ""
                  } gap-6 group`}
                >
                  {/* Timeline Node Badge */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-5 w-8 h-8 rounded-full glass-strong border-2 border-violet-500 flex items-center justify-center text-white z-20 group-hover:scale-110 group-hover:border-cyan-400 transition-all shadow-lg shadow-violet-600/30">
                    <span className="w-2.5 h-2.5 rounded-full bg-violet-400 group-hover:bg-cyan-400 transition-colors" />
                  </div>

                  {/* Spacer for two-sided alignment on desktop */}
                  <div className="hidden sm:block w-1/2" />

                  {/* Milestone Card Content */}
                  <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:px-6">
                    <div className="glass-card rounded-2xl p-6 border border-white/10 hover:border-violet-500/40 transition-all group-hover:-translate-y-0.5">
                      {/* Period Badge & Category */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-mono font-semibold text-violet-400 px-2.5 py-1 rounded-md bg-violet-500/10 border border-violet-500/20">
                          {milestone.period}
                        </span>
                        <span className="text-[11px] font-mono text-slate-400">
                          {milestone.category}
                        </span>
                      </div>

                      {/* Milestone Title */}
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                        {milestone.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                        {milestone.description}
                      </p>

                      {/* Key Highlights */}
                      <div className="flex flex-wrap gap-2 pt-3 border-t border-white/5">
                        {milestone.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="inline-flex items-center gap-1.5 text-[11px] font-mono text-slate-300 px-2.5 py-1 rounded-lg bg-slate-900/80 border border-slate-800"
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

          {/* Extensible Notice for Verified Employment / Internships */}
          <div className="mt-14 max-w-xl mx-auto p-5 rounded-2xl glass border border-dashed border-violet-500/30 text-center">
            <div className="flex items-center justify-center gap-2 mb-2 text-violet-300">
              <Briefcase className="w-4 h-4 text-violet-400" />
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider">
                Future Employment &amp; Internships
              </h4>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-3">
              This component is engineered to dynamically display verified internships, engineering roles, and commercial contract projects as they are completed.
            </p>
            <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-cyan-300 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
              <PlusCircle className="w-3.5 h-3.5" />
              <span>Ready for industry experience integration</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

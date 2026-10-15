"use client";

import React from "react";
import { GraduationCap, Calendar, BookOpen, Building2, Award, Edit3 } from "lucide-react";
import { educationData } from "@/data/portfolio";

export function Education() {
  return (
    <section id="education" aria-label="Education Section" className="relative py-24 overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/4 w-80 h-80 rounded-full bg-violet-600/10 blur-[130px]" />
        <div className="absolute inset-0 bg-dot-grid opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-indigo-500/25 text-xs font-mono text-indigo-300 mb-4">
            <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
            <span>// 03. ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Educational <span className="gradient-text">Foundation</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Academic milestones and ongoing technical education supporting my software development career.
          </p>
        </div>

        {/* Education Card Container */}
        <div className="max-w-3xl mx-auto">
          <div className="glass-card rounded-3xl p-6 sm:p-9 border border-white/10 relative overflow-hidden group">
            {/* Ambient Corner Accent */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-indigo-500/15 via-violet-500/5 to-transparent rounded-bl-full pointer-events-none" />

            {/* Header Badge */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 text-xs font-mono font-semibold">
                <GraduationCap className="w-4 h-4" />
                <span>Level: HSC / College</span>
              </div>
              <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5 bg-slate-900/80 px-3 py-1 rounded-full border border-slate-800">
                <Edit3 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Configured in data/portfolio.ts</span>
              </span>
            </div>

            {/* Main Qualification Title */}
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              {educationData.qualification}
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Higher secondary collegiate education with an emphasis on foundational academic disciplines, critical thinking, and technical coursework.
            </p>

            {/* Structured Fields Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {/* Field 1: Institution */}
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
                <div className="flex items-center gap-2 text-slate-400 text-xs font-mono mb-1">
                  <Building2 className="w-3.5 h-3.5 text-violet-400" />
                  <span>Institution</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    {educationData.institution}
                  </p>
                  <span className="text-[10px] text-amber-300/80 font-mono">[Editable placeholder]</span>
                </div>
              </div>

              {/* Field 2: Academic Group */}
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
                <div className="flex items-center gap-2 text-slate-400 text-xs font-mono mb-1">
                  <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Academic Group</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    {educationData.group}
                  </p>
                  <span className="text-[10px] text-amber-300/80 font-mono">[To be confirmed]</span>
                </div>
              </div>

              {/* Field 3: Passing Year / Status */}
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
                <div className="flex items-center gap-2 text-slate-400 text-xs font-mono mb-1">
                  <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Passing / Year</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    {educationData.passingYear}
                  </p>
                  <span className="text-[10px] text-amber-300/80 font-mono">[To be provided]</span>
                </div>
              </div>
            </div>

            {/* Academic Notes & Transparency Callout */}
            <div className="p-4 rounded-2xl bg-slate-950/70 border border-dashed border-slate-800 text-xs text-slate-300 leading-relaxed">
              <div className="flex items-start gap-2.5">
                <Award className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-200 mb-1">Continuous Development Notice</p>
                  <p className="text-slate-400">
                    {educationData.notes}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

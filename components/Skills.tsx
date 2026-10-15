"use client";

import React, { useState } from "react";
import { Cpu, CheckCircle } from "lucide-react";
import { skillsData, SkillItem } from "@/data/portfolio";
import { TechIcon } from "./TechIcon";

type CategoryFilter = "All" | "Frontend" | "Backend" | "Database" | "Tools & Workflow";

const categories: CategoryFilter[] = ["All", "Frontend", "Backend", "Database", "Tools & Workflow"];

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("All");

  const filteredSkills =
    selectedCategory === "All"
      ? skillsData
      : skillsData.filter((skill) => skill.category === selectedCategory);

  return (
    <section id="skills" aria-label="Skills Section" className="relative py-24 overflow-hidden">
      {/* Background Lighting Orbs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/3 -right-20 w-80 h-80 rounded-full bg-cyan-600/10 blur-[130px]" />
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 rounded-full bg-violet-600/10 blur-[130px]" />
        <div className="absolute inset-0 bg-dot-grid opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-cyan-500/25 text-xs font-mono text-cyan-300 mb-4">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>// 02. MY TECH STACK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Technologies I <span className="gradient-text">Work With</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            A solid stack of modern frontend, backend, database, and workflow tools mastered through active project development.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-violet-400 ${
                    isSelected
                      ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-600/25"
                      : "glass text-slate-400 hover:text-white hover:bg-slate-800/60"
                  }`}
                >
                  {category}
                  <span className="ml-1.5 text-[10px] opacity-75 font-mono">
                    ({category === "All" ? skillsData.length : skillsData.filter((s) => s.category === category).length})
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="glass-card group relative rounded-2xl p-5 border border-white/10 hover:border-violet-500/40 hover:-translate-y-1 transition-all flex flex-col justify-between"
            >
              {/* Subtle Card Accent Glow on Hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-gradient-to-br from-violet-600/5 via-transparent to-cyan-500/5"
                aria-hidden="true"
              />

              <div>
                {/* Header: Icon & Category Tag */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl glass-strong border border-white/15 flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                    <TechIcon name={skill.iconName} size={26} />
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-slate-800/80 text-slate-400 border border-slate-700/60">
                    {skill.category}
                  </span>
                </div>

                {/* Tech Title */}
                <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-violet-300 transition-colors">
                  {skill.name}
                </h3>

                {/* Concise Description */}
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {skill.description}
                </p>
              </div>

              {/* Bottom Verification Indicator (Authentic, no fake progress percentages) */}
              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400/90">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Actively Used</span>
                </span>
                <span className="text-slate-400">Production</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

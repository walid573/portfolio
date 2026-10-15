"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Cpu } from "lucide-react";
import { TechIcon } from "./TechIcon";

interface TechItem {
  name: string;
  category: string;
  icon: string;
}

const technologies: TechItem[] = [
  { name: "React", category: "Frontend", icon: "react" },
  { name: "Next.js", category: "Framework", icon: "nextjs" },
  { name: "TypeScript", category: "Language", icon: "typescript" },
  { name: "Node.js", category: "Runtime", icon: "nodejs" },
  { name: "Express.js", category: "Backend", icon: "express" },
  { name: "Tailwind CSS", category: "Styling", icon: "tailwind" },
  { name: "JavaScript", category: "Language", icon: "javascript" },
  { name: "HTML5", category: "Markup", icon: "html" },
  { name: "CSS3", category: "Styles", icon: "css" },
  { name: "MongoDB", category: "Database", icon: "mongodb" },
  { name: "Git", category: "Version Control", icon: "git" },
  { name: "GitHub", category: "Collaboration", icon: "github" },
];

export function HomeTechGrid() {
  return (
    <section id="tech-preview" aria-label="Technologies Section" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] rounded-full bg-indigo-600/10 blur-[140px]" />
        <div className="absolute inset-0 bg-dot-grid opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (matching screenshot) */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Technologies I{" "}
            <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
              worked with
            </span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            a passionate web developer who enjoys building modern and user-friendly web applications
          </p>
        </div>

        {/* 12-Card Grid (6 cols on lg, 4 on md, 3 on sm, 2 on xs) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 sm:gap-4 max-w-5xl mx-auto">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="group relative flex flex-col items-center justify-center p-5 rounded-2xl bg-[#090b14]/85 backdrop-blur-md border border-white/[0.07] hover:border-violet-500/40 hover:bg-[#0e1120] transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-[0_8px_25px_-5px_rgba(139,92,246,0.25)]"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <TechIcon name={tech.icon} size={36} />
              </div>

              {/* Tech Name */}
              <span className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-white transition-colors text-center">
                {tech.name}
              </span>

              {/* Sub-label */}
              <span className="text-[10px] font-mono text-slate-500 group-hover:text-violet-300/80 transition-colors mt-0.5">
                {tech.category}
              </span>

              {/* Subtle Bottom Accent Line on Hover */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-12 h-[2px] bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Bottom Link to Dedicated Skills Page */}
        <div className="mt-12 text-center">
          <Link
            href="/skills"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-white/10 hover:border-violet-500/40 text-xs sm:text-sm font-medium text-slate-300 hover:text-white transition-all hover:scale-105"
          >
            <span>Explore All Skills &amp; Architecture</span>
            <ArrowRight className="w-4 h-4 text-violet-400" />
          </Link>
        </div>
      </div>
    </section>
  );
}

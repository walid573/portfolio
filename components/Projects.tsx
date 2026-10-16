"use client";

import React from "react";
import { FolderGit2, Sparkles, ExternalLink } from "lucide-react";
import { projectsData } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section id="projects" aria-label="Projects Section" className="relative py-24 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-violet-600/15 blur-[140px]" />
        <div className="absolute bottom-1/3 -right-20 w-96 h-96 rounded-full bg-cyan-600/12 blur-[140px]" />
        <div className="absolute inset-0 bg-dot-grid opacity-25" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-violet-500/25 text-xs font-mono text-violet-300 mb-4">
            <FolderGit2 className="w-3.5 h-3.5 text-violet-400" />
            <span>{"//"} 05. FEATURED WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Projects I&apos;ve <span className="gradient-text">Built</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Real production web applications engineered with Next.js, React, TypeScript, and modern API architectures. Each project features dedicated documentation, live previews, and open source code.
          </p>
        </div>

        {/* Projects Responsive Grid (At least three verified projects) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>

        {/* Bottom GitHub Archive Callout */}
        <div className="mt-16 text-center">
          <p className="text-xs sm:text-sm text-slate-400 mb-4 font-mono">
            Want to explore all repositories, experiments, and ongoing coding exercises?
          </p>
          <a
            href="https://github.com/walid573?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass border border-white/10 hover:border-violet-500/40 text-slate-200 hover:text-white font-medium text-xs sm:text-sm transition-all hover:-translate-y-0.5 shadow-md shadow-black/20 focus:outline-none focus:ring-2 focus:ring-violet-400"
          >
            <span>Browse Full GitHub Repository Archive</span>
            <ExternalLink className="w-4 h-4 text-violet-400" />
          </a>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  FolderGit2,
  ExternalLink,
  ChevronDown,
  Sparkles,
  ArrowRight,
  Code2,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GithubIcon } from "@/components/SocialIcons";
import { projectsData } from "@/data/projects";

export const metadata: Metadata = {
  title: "My Projects | Mohammad Walid — Full-Stack Web Developer",
  description:
    "Production web applications built with passion and purpose by Mohammad Walid, using Next.js, React, TypeScript, Node.js, and MongoDB.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#040508] text-slate-100 selection:bg-violet-600 selection:text-white flex flex-col relative">
      {/* Background with fine square grid and hero ambient glow */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-grid-pattern opacity-40" />
      <div className="fixed inset-0 pointer-events-none z-0 bg-radial-hero-glow" />

      <Navbar />

      <main className="flex-1 pt-28 pb-24 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section (Screenshot 1 Layout) */}
          <div className="text-center max-w-3xl mx-auto mb-16 pt-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-violet-400 mb-3 tracking-wider">
              <span>// PORTFOLIO</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">
              My{" "}
              <span className="bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-8">
              These projects are milestones in my journey as a developer — each one a new challenge solved, a new skill mastered.
            </p>

            {/* 3 Metric Stats Row (as shown in Screenshot 1) */}
            <div className="flex items-center justify-center gap-8 sm:gap-14 text-center pb-4">
              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-violet-300">3+</div>
                <div className="text-[11px] sm:text-xs text-slate-400 font-mono mt-0.5">Live Projects</div>
              </div>
              <div className="w-[1px] h-8 bg-white/10" />
              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-cyan-300">8+</div>
                <div className="text-[11px] sm:text-xs text-slate-400 font-mono mt-0.5">Technologies</div>
              </div>
              <div className="w-[1px] h-8 bg-white/10" />
              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-indigo-300">10+</div>
                <div className="text-[11px] sm:text-xs text-slate-400 font-mono mt-0.5">Open Source Repos</div>
              </div>
            </div>

            {/* Down Chevron Indicator */}
            <div className="pt-6 flex justify-center text-slate-500 animate-bounce">
              <ChevronDown className="w-5 h-5" />
            </div>
          </div>

          {/* Curated Selection Header */}
          <div className="text-center mb-12">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
              // CURATED SELECTION
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Built with{" "}
              <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
                passion &amp; purpose
              </span>
            </h2>
          </div>

          {/* 2-Column Grid of Project Cards (Screenshot 1 Layout) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-20">
            {projectsData.map((project) => (
              <div
                key={project.slug}
                className="group rounded-3xl bg-[#090b14]/85 backdrop-blur-md border border-white/[0.08] hover:border-violet-500/40 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl hover:shadow-[0_12px_35px_-10px_rgba(139,92,246,0.25)] hover:-translate-y-1"
              >
                {/* Image Banner */}
                <div className="relative w-full aspect-[16/9] bg-slate-950 overflow-hidden border-b border-white/5">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090b14] via-transparent to-transparent opacity-60" />
                  <span className="absolute top-3 right-3 text-[10px] font-mono font-medium px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-violet-300 border border-violet-500/30">
                    {project.category}
                  </span>
                </div>

                {/* Card Content Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-violet-300 transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-3">
                      {project.shortDescription}
                    </p>
                  </div>

                  {/* Tech Tag Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech.name}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-white/[0.04] text-slate-300 border border-white/[0.07]"
                      >
                        {tech.name}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-2 py-1 rounded-lg text-[11px] font-mono bg-white/[0.04] text-slate-400 border border-white/[0.07]">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons: Code (glass) & Live Demo (gradient) & Case Study Link */}
                  <div className="pt-3 border-t border-white/5 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      {/* Code Button */}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 transition-colors"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Code</span>
                      </a>

                      {/* Live Demo Button (Gradient Pill) */}
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 transition-all shadow-md shadow-violet-600/20"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>

                    {/* Case Study Link */}
                    <Link
                      href={`/projects/${project.slug}`}
                      className="text-xs font-mono font-medium text-violet-400 hover:text-cyan-300 transition-colors inline-flex items-center gap-1"
                    >
                      <span>Case Study</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* GitHub Repository Archive Callout */}
          <div className="text-center py-8">
            <p className="text-xs sm:text-sm text-slate-400 mb-4 font-mono">
              Want to explore all repositories, backend experiments, and utilities?
            </p>
            <a
              href="https://github.com/walid573?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 transition-all shadow-lg shadow-violet-600/25 hover:scale-105"
            >
              <span>View Full GitHub Repository Archive</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

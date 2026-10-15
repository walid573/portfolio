import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Sparkles,
  Layers,
  ArrowRight,
  Target,
  Wrench,
} from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";
import { getProjectBySlug, getAllProjectSlugs, projectsData } from "@/data/projects";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TechIcon } from "@/components/TechIcon";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | Mohammad Walid",
      description: "The requested project details page could not be found.",
    };
  }

  return {
    title: `${project.title} — Full-Stack Case Study | Mohammad Walid`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} — Case Study | Mohammad Walid`,
      description: project.shortDescription,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: `${project.title} Screenshot`,
        },
      ],
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Find next and previous project for seamless cross-navigation
  const currentIndex = projectsData.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : null;
  const nextProject = currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 selection:bg-violet-600 selection:text-white flex flex-col">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        {/* Ambient Glows */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute top-24 left-1/4 w-96 h-96 rounded-full bg-violet-600/12 blur-[140px]" />
          <div className="absolute top-1/2 right-1/4 w-96 h-96 rounded-full bg-cyan-600/10 blur-[150px]" />
          <div className="absolute inset-0 bg-dot-grid opacity-25" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Navigation Button */}
          <div className="mb-8">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass border border-white/10 text-xs sm:text-sm font-medium text-slate-300 hover:text-white hover:border-violet-500/40 transition-all focus:outline-none focus:ring-2 focus:ring-violet-400 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to all projects</span>
            </Link>
          </div>

          {/* Project Header */}
          <div className="mb-10">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-violet-500/15 border border-violet-500/30 text-violet-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
                {project.category}
              </span>
              <span className="text-xs font-mono text-slate-400">
                Production Case Study
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-3">
              {project.title}
            </h1>

            <p className="text-lg sm:text-xl font-medium text-slate-300 leading-relaxed max-w-3xl mb-6">
              {project.tagline}
            </p>

            {/* Quick Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 transition-all shadow-lg shadow-violet-600/25 hover:shadow-violet-600/40 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-violet-400"
              >
                <span>Open Live Application</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-200 glass border border-white/10 hover:border-violet-500/40 hover:text-white hover:bg-slate-800/60 transition-all hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-violet-400"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View Source Code</span>
              </a>
            </div>
          </div>

          {/* Large Project Screenshot Hero Area */}
          <div className="relative aspect-video w-full rounded-3xl overflow-hidden glass-strong border border-white/15 mb-14 shadow-2xl">
            <Image
              src={project.image}
              alt={`${project.title} High-Resolution Preview`}
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 1200px) 100vw, 1024px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl glass-strong border border-white/10 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400" />
                <span className="text-xs font-mono text-slate-300">Live Deployed URL:</span>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-cyan-300 hover:underline flex items-center gap-1"
                >
                  {project.liveUrl}
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <span className="text-[11px] font-mono text-slate-400">
                Responsive Desktop / Mobile View
              </span>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-14">
            {project.metrics.map((metric) => (
              <div
                key={metric.label}
                className="glass-card rounded-2xl p-4 border border-white/10 text-center"
              >
                <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                  {metric.label}
                </p>
                <p className="text-sm sm:text-base font-bold text-white gradient-text">
                  {metric.value}
                </p>
              </div>
            ))}
          </div>

          {/* Section A: Project Overview, Purpose, and Problem Solved */}
          <div className="space-y-8 mb-14">
            <div className="glass-card rounded-3xl p-6 sm:p-9 border border-white/10">
              <div className="flex items-center gap-2.5 mb-4 text-violet-300">
                <Target className="w-5 h-5 text-violet-400" />
                <h2 className="text-xl sm:text-2xl font-bold text-white">
                  Project Overview &amp; Purpose
                </h2>
              </div>
              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>{project.longDescription}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                  <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
                    <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-1.5 font-semibold">
                      Purpose of the Project
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {project.purpose}
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
                    <h3 className="text-xs font-mono uppercase tracking-wider text-violet-400 mb-1.5 font-semibold">
                      Problem It Aims to Solve
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {project.problemSolved}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Implemented Features Grid */}
            <div className="glass-card rounded-3xl p-6 sm:p-9 border border-white/10">
              <div className="flex items-center gap-2.5 mb-6 text-cyan-300">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <h2 className="text-xl sm:text-2xl font-bold text-white">
                  Main Implemented Features
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature) => (
                  <div
                    key={feature.title}
                    className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <h3 className="text-sm font-bold text-white">{feature.title}</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 pl-6 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section B: Technology Stack */}
          <div className="glass-card rounded-3xl p-6 sm:p-9 border border-white/10 mb-14">
            <div className="flex items-center gap-2.5 mb-6 text-indigo-300">
              <Wrench className="w-5 h-5 text-indigo-400" />
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Technology Stack &amp; Architecture
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
              {project.technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col items-center justify-center text-center gap-2 group hover:border-violet-500/40 transition-colors"
                >
                  <TechIcon name={tech.name} size={28} />
                  <div>
                    <p className="text-xs font-bold text-white">{tech.name}</p>
                    <p className="text-[10px] font-mono text-slate-400 mt-0.5">{tech.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section D: Challenges Faced & Solutions */}
          <div className="glass-card rounded-3xl p-6 sm:p-9 border border-white/10 mb-14">
            <div className="flex items-center gap-2.5 mb-6 text-amber-300">
              <AlertTriangle className="w-5 h-5 text-amber-400" />
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Technical Challenges Faced &amp; Solutions
              </h2>
            </div>
            <div className="space-y-4">
              {project.challenges.map((challenge, idx) => (
                <div
                  key={challenge.title}
                  className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800"
                >
                  <div className="flex items-start gap-3 mb-2">
                    <span className="w-6 h-6 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20 font-mono text-xs font-bold flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <h3 className="text-base font-bold text-white pt-0.5">
                      {challenge.title}
                    </h3>
                  </div>
                  <div className="pl-9 space-y-2 text-xs sm:text-sm">
                    <div className="text-slate-400">
                      <strong className="text-slate-300">Challenge: </strong>
                      {challenge.description}
                    </div>
                    <div className="text-slate-300 bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
                      <strong className="text-emerald-400">Engineered Solution: </strong>
                      {challenge.solution}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section E: Future Improvements Roadmap */}
          <div className="glass-card rounded-3xl p-6 sm:p-9 border border-white/10 mb-14">
            <div className="flex items-center gap-2.5 mb-6 text-violet-300">
              <Lightbulb className="w-5 h-5 text-violet-400" />
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Future Improvements &amp; Roadmap
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.improvements.map((improvement) => (
                <div
                  key={improvement.title}
                  className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 className="text-sm font-bold text-white">{improvement.title}</h3>
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                          improvement.status === "In Development"
                            ? "bg-amber-500/10 text-amber-300 border-amber-500/30"
                            : "bg-indigo-500/10 text-indigo-300 border-indigo-500/30"
                        }`}
                      >
                        {improvement.status}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {improvement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section F: Cross-Project Navigation */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
            {prevProject ? (
              <Link
                href={`/projects/${prevProject.slug}`}
                className="w-full sm:w-auto inline-flex items-center gap-2 px-5 py-3 rounded-xl glass border border-white/10 hover:border-violet-500/40 text-slate-200 hover:text-white transition-all text-xs sm:text-sm font-medium group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <div className="text-left">
                  <span className="block text-[10px] font-mono text-slate-400">Previous Project</span>
                  <span className="font-bold">{prevProject.title}</span>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {nextProject ? (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="w-full sm:w-auto inline-flex items-center justify-end gap-2 px-5 py-3 rounded-xl glass border border-white/10 hover:border-violet-500/40 text-slate-200 hover:text-white transition-all text-xs sm:text-sm font-medium group ml-auto"
              >
                <div className="text-right">
                  <span className="block text-[10px] font-mono text-slate-400">Next Project</span>
                  <span className="font-bold">{nextProject.title}</span>
                </div>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : (
              <Link
                href="/#projects"
                className="w-full sm:w-auto inline-flex items-center gap-2 px-5 py-3 rounded-xl glass text-xs sm:text-sm font-medium text-slate-200 hover:text-white ml-auto"
              >
                <span>Back to All Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

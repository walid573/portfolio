"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ArrowRight, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";
import { ProjectData } from "@/data/projects";
import { TechIcon } from "./TechIcon";

interface ProjectCardProps {
  project: ProjectData;
  index: number;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <article className="glass-card group relative rounded-3xl overflow-hidden border border-white/10 hover:border-violet-500/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 shadow-xl">
      {/* Top Banner & Screenshot Container */}
      <div>
        <div className="relative aspect-video w-full overflow-hidden bg-slate-950 border-b border-white/10">
          {!imageError ? (
            <Image
              src={project.image}
              alt={`${project.title} screenshot`}
              fill
              className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-slate-900 to-indigo-950 text-center">
              <Sparkles className="w-8 h-8 text-violet-400 mb-2" />
              <p className="font-bold text-white text-base">{project.title}</p>
              <p className="text-xs text-slate-400 font-mono mt-1">{project.image}</p>
            </div>
          )}

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

          {/* Category Tag on Image */}
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium glass-strong text-violet-200 border border-white/15 shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
              {project.category}
            </span>
          </div>

          {/* Quick External Links Overlay */}
          <div className="absolute top-3 right-3 flex items-center gap-1.5">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open live website for ${project.title}`}
              className="p-2 rounded-xl glass-strong border border-white/15 text-slate-200 hover:text-white hover:bg-violet-600/60 transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-violet-400"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View GitHub repository for ${project.title}`}
              className="p-2 rounded-xl glass-strong border border-white/15 text-slate-200 hover:text-white hover:bg-slate-800 transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-violet-400"
            >
              <GithubIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 sm:p-7">
          {/* Project Title */}
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
            {project.title}
          </h3>

          {/* Tagline / Subtitle */}
          <p className="text-xs font-mono text-violet-400 mb-3 line-clamp-1">
            {project.tagline}
          </p>

          {/* Short Description */}
          <p className="text-sm text-slate-300 leading-relaxed line-clamp-3 mb-6">
            {project.shortDescription}
          </p>

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech.name}
                className="inline-flex items-center gap-1.5 text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-900/80 text-slate-300 border border-slate-800"
              >
                <TechIcon name={tech.name} size={14} />
                <span>{tech.name}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="px-6 pb-6 pt-0 border-t border-white/5 flex flex-wrap items-center justify-between gap-3 mt-auto">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-white px-4 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 transition-all shadow-md shadow-violet-600/20 focus:outline-none focus:ring-2 focus:ring-violet-400"
        >
          <span>View Details</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </Link>

        <div className="flex items-center gap-2">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-300 hover:text-white px-3 py-2 rounded-xl glass hover:bg-slate-800/60 transition-colors"
          >
            <span>Live Demo</span>
            <ExternalLink className="w-3 h-3 text-cyan-400" />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-300 hover:text-white px-3 py-2 rounded-xl glass hover:bg-slate-800/60 transition-colors"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>Code</span>
          </a>
        </div>
      </div>
    </article>
  );
}

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowDown, Mail, Sparkles, FileText, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import { personalInfo } from "@/data/portfolio";
import { ResumeModal } from "./ResumeModal";
import { TechIcon } from "./TechIcon";

export function Hero() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const elem = document.getElementById("projects");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section
        id="hero"
        aria-label="Hero Section"
        className="relative min-h-[85vh] lg:min-h-[88vh] flex items-center pt-28 pb-16 lg:py-24 overflow-hidden"
      >
        {/* Ambient Gradient Blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-violet-600/15 blur-[120px] animate-blob" />
          <div className="absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-cyan-500/12 blur-[130px] animate-blob-reverse" />
          <div className="absolute -bottom-20 left-1/3 w-80 h-80 rounded-full bg-indigo-600/10 blur-[100px] animate-pulse-subtle" />
          <div className="absolute inset-0 bg-dot-grid opacity-35" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass border border-violet-500/20 text-xs font-medium text-slate-300 mb-6 shadow-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span>Available for new opportunities</span>
              </div>

              {/* Small Greeting */}
              <p className="text-base sm:text-lg font-mono font-medium text-violet-400 mb-2">
                {personalInfo.greeting}
              </p>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-3">
                Building <span className="gradient-text">Modern Web</span> Experiences.
              </h1>

              {/* Professional Designation */}
              <div className="inline-block px-3 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 font-mono text-sm sm:text-base font-semibold mb-5">
                {personalInfo.designation}
              </div>

              {/* Supporting Description */}
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
                {personalInfo.heroDescription}
              </p>

              {/* Three Prominent Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-8">
                {/* 1. Explore My Projects */}
                <a
                  href="#projects"
                  onClick={scrollToProjects}
                  className="group relative inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 transition-all shadow-lg shadow-violet-600/25 hover:shadow-violet-600/40 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-violet-400"
                >
                  <Sparkles className="w-4 h-4 text-cyan-200" />
                  <span>Explore My Projects</span>
                  <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                </a>

                {/* 2. View GitHub */}
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-200 glass border border-white/10 hover:border-violet-500/40 hover:text-white hover:bg-slate-800/60 transition-all hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-violet-400"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View GitHub</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                {/* 3. Download Resume */}
                <button
                  type="button"
                  onClick={() => setResumeModalOpen(true)}
                  aria-label="Download Resume or view update notice"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-200 glass border border-white/10 hover:border-indigo-500/40 hover:text-white hover:bg-slate-800/60 transition-all hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                >
                  <FileText className="w-4 h-4 text-indigo-400" />
                  <span>Download Resume</span>
                  <span className="text-[10px] font-mono text-amber-300 bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20">
                    Soon
                  </span>
                </button>
              </div>

              {/* Social Links Row */}
              <div className="flex items-center gap-3 pt-2 border-t border-white/10 w-full sm:w-auto">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider mr-1">
                  Connect:
                </span>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Mohammad Walid's GitHub profile"
                  className="p-2.5 rounded-xl glass border border-white/10 text-slate-300 hover:text-white hover:border-violet-500/40 hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-violet-400"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Mohammad Walid's LinkedIn profile"
                  className="p-2.5 rounded-xl glass border border-white/10 text-slate-300 hover:text-white hover:border-violet-500/40 hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-violet-400"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  aria-label="Send email to Mohammad Walid"
                  className="p-2.5 rounded-xl glass border border-white/10 text-slate-300 hover:text-white hover:border-violet-500/40 hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-violet-400"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <span className="text-xs text-slate-400 font-mono pl-2 hidden sm:inline">
                  {personalInfo.email}
                </span>
              </div>
            </div>

            {/* Right Side: Portrait Container with Floating Tech Badges */}
            <div className="lg:col-span-5 flex justify-center items-center relative">
              <div className="relative w-72 sm:w-80 md:w-96 aspect-[4/5] flex items-center justify-center">
                {/* Ambient glow behind portrait */}
                <div
                  className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-violet-600/30 via-indigo-600/20 to-cyan-500/30 blur-2xl transform scale-105"
                  aria-hidden="true"
                />

                {/* Portrait Card Container with Gradient Border */}
                <div className="relative w-full h-full rounded-3xl p-1 bg-gradient-to-b from-violet-500/40 via-slate-800 to-cyan-500/30 shadow-2xl overflow-hidden group">
                  <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-slate-950">
                    {!imageError ? (
                      <Image
                        src={personalInfo.profileImage}
                        alt="Mohammad Walid — Full-Stack Web Developer"
                        fill
                        priority
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 400px"
                        onError={() => setImageError(true)}
                      />
                    ) : (
                      /* Elegant Fallback Avatar Graphic */
                      <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-950 p-6 text-center">
                        <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-violet-600 to-cyan-500 p-1 mb-4">
                          <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center text-3xl font-bold font-mono text-violet-300">
                            MW
                          </div>
                        </div>
                        <h2 className="text-lg font-bold text-white mb-1">Mohammad Walid</h2>
                        <p className="text-xs font-mono text-violet-400 mb-4">
                          Full-Stack Web Developer
                        </p>
                        <span className="text-[11px] font-mono text-slate-400 border border-slate-800 px-3 py-1 rounded-full bg-slate-900/60">
                          /images/profile.jpg
                        </span>
                      </div>
                    )}

                    {/* Gradient Overlay for Cinematic Depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 pointer-events-none" />

                    {/* Subtle Bottom Caption Pill */}
                    <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl glass-strong border border-white/10 flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold text-white">Mohammad Walid</p>
                        <p className="text-[10px] font-mono text-cyan-400">
                          React • Next.js • Node.js
                        </p>
                      </div>
                      <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400" />
                    </div>
                  </div>
                </div>

                {/* Floating Tech Badges with Brand Icons */}
                {/* 1. React Badge (Top Right) */}
                <div
                  className="absolute -top-3 -right-3 sm:-right-5 glass-strong border border-cyan-500/30 rounded-2xl px-3 py-2 flex items-center gap-2 shadow-xl animate-blob"
                  style={{ animationDuration: "12s" }}
                >
                  <TechIcon name="react" size={20} />
                  <span className="text-xs font-mono font-semibold text-cyan-300">React</span>
                </div>

                {/* 2. Next.js Badge (Top Left) */}
                <div
                  className="absolute top-10 -left-4 sm:-left-6 glass-strong border border-white/20 rounded-2xl px-3 py-2 flex items-center gap-2 shadow-xl animate-blob-reverse"
                  style={{ animationDuration: "14s" }}
                >
                  <TechIcon name="nextjs" size={18} />
                  <span className="text-xs font-mono font-semibold text-white">Next.js</span>
                </div>

                {/* 3. TypeScript Badge (Right Middle) */}
                <div
                  className="absolute top-1/2 -right-4 sm:-right-8 glass-strong border border-blue-500/30 rounded-2xl px-3 py-2 flex items-center gap-2 shadow-xl"
                >
                  <TechIcon name="typescript" size={18} />
                  <span className="text-xs font-mono font-semibold text-blue-300">TypeScript</span>
                </div>

                {/* 4. Node.js Badge (Bottom Left) */}
                <div
                  className="absolute bottom-16 -left-4 sm:-left-6 glass-strong border border-emerald-500/30 rounded-2xl px-3 py-2 flex items-center gap-2 shadow-xl animate-blob"
                  style={{ animationDuration: "16s" }}
                >
                  <TechIcon name="nodejs" size={18} />
                  <span className="text-xs font-mono font-semibold text-emerald-300">Node.js</span>
                </div>

                {/* 5. MongoDB Badge (Bottom Right) */}
                <div
                  className="absolute -bottom-3 right-8 glass-strong border border-green-500/30 rounded-2xl px-3 py-2 flex items-center gap-2 shadow-xl animate-blob-reverse"
                  style={{ animationDuration: "15s" }}
                >
                  <TechIcon name="mongodb" size={18} />
                  <span className="text-xs font-mono font-semibold text-green-300">MongoDB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accessible Resume Modal */}
      <ResumeModal isOpen={resumeModalOpen} onClose={() => setResumeModalOpen(false)} />
    </>
  );
}

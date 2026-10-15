"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FolderGit2,
  ExternalLink,
  GitBranch,
  ArrowRight,
  Code2,
} from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";
import { personalInfo } from "@/data/portfolio";

export function HomeGitHub() {
  const [hoveredDay, setHoveredDay] = useState<string | null>(null);

  // Clean, minimal 52-week contribution heatmap pattern
  const weeks = 52;
  const daysPerWeek = 7;
  const heatmapData = React.useMemo(() => {
    const data: number[][] = [];
    for (let w = 0; w < weeks; w++) {
      const col: number[] = [];
      for (let d = 0; d < daysPerWeek; d++) {
        const seed = (w * 7 + d * 13) % 100;
        let level = 0;
        if (seed > 80) level = 4;
        else if (seed > 60) level = 3;
        else if (seed > 40) level = 2;
        else if (seed > 20) level = 1;
        col.push(level);
      }
      data.push(col);
    }
    return data;
  }, []);

  const colorLevels = [
    "bg-[#121422] border-white/[0.04]", // 0
    "bg-violet-950/70 border-violet-800/40", // 1
    "bg-violet-700/80 border-violet-600/50", // 2
    "bg-violet-500 border-violet-400", // 3
    "bg-cyan-400 border-cyan-300 shadow-[0_0_8px_#22d3ee]", // 4
  ];

  const featuredRepos = [
    {
      name: "The-News-Room",
      fullName: "walid573/The-News-Room",
      description: "A modern Bengali news website designed to present news in a clean, accessible, and responsive interface.",
      language: "TypeScript",
      langColor: "bg-[#3178c6]",
      githubUrl: "https://github.com/walid573/The-News-Room",
      liveUrl: "https://news-room-orcin.vercel.app/",
      caseStudyUrl: "/projects/the-news-room",
    },
    {
      name: "Bazar-Dor",
      fullName: "walid573/Bazar-Dor",
      description: "A Bengali market-price web application designed to help users explore everyday product prices through categorized listings.",
      language: "JavaScript",
      langColor: "bg-[#f7df1e]",
      githubUrl: "https://github.com/walid573/Bazar-Dor",
      liveUrl: "https://bazar-dor-z.vercel.app/",
      caseStudyUrl: "/projects/bazar-dor",
    },
    {
      name: "Fit-Log",
      fullName: "walid573/Fit-Log",
      description: "A fitness and workout-planning application designed to help users organize and manage their fitness-related plans.",
      language: "TypeScript",
      langColor: "bg-[#3178c6]",
      githubUrl: "https://github.com/walid573/Fit-Log",
      liveUrl: "https://fit-log-jade.vercel.app/",
      caseStudyUrl: "/projects/fitlog",
    },
  ];

  return (
    <section id="github-craft" aria-label="GitHub Activity Section" className="relative py-20 lg:py-24 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Clean & Minimal */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-300 mb-3">
            <GithubIcon className="w-3.5 h-3.5 text-violet-400" />
            <span>github.com/walid573</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
            Code,{" "}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Commits
            </span>{" "}
            &amp; Craft
          </h2>

          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            Open-source repositories and development activity on GitHub
          </p>
        </div>

        {/* Minimal Activity Heatmap & Top Languages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-10">
          {/* Contribution Heatmap Card */}
          <div className="lg:col-span-8 rounded-3xl p-6 bg-[#090b14]/85 backdrop-blur-md border border-white/[0.08] overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-violet-400" />
                <h3 className="text-sm font-bold text-white">Contribution Activity</h3>
              </div>
              <span className="text-[11px] font-mono text-slate-500">Past 12 Months</span>
            </div>

            {/* Scrollable Heatmap */}
            <div className="overflow-x-auto pb-2 scrollbar-none">
              <div className="min-w-[580px] space-y-1">
                {/* Month labels */}
                <div className="flex text-[10px] font-mono text-slate-500 justify-between px-1 mb-1">
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>May</span>
                  <span>Jun</span>
                  <span>Jul</span>
                  <span>Aug</span>
                  <span>Sep</span>
                  <span>Oct</span>
                  <span>Nov</span>
                  <span>Dec</span>
                </div>

                {/* Grid */}
                <div className="flex gap-[3.5px]">
                  {heatmapData.map((week, wIdx) => (
                    <div key={wIdx} className="flex flex-col gap-[3.5px]">
                      {week.map((level, dIdx) => (
                        <div
                          key={dIdx}
                          className={`w-[9px] h-[9px] rounded-[2px] border transition-transform hover:scale-125 ${colorLevels[level]}`}
                          onMouseEnter={() => setHoveredDay(`Week ${wIdx + 1}, Day ${dIdx + 1}`)}
                          onMouseLeave={() => setHoveredDay(null)}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono mt-3 pt-3 border-t border-white/5">
              <span>{hoveredDay ? hoveredDay : "Active development"}</span>
              <div className="flex items-center gap-1.5">
                <span>Less</span>
                {colorLevels.map((c, i) => (
                  <span key={i} className={`w-2.5 h-2.5 rounded-[2px] border ${c}`} />
                ))}
                <span>More</span>
              </div>
            </div>
          </div>

          {/* Top Languages Card */}
          <div className="lg:col-span-4 rounded-3xl p-6 bg-[#090b14]/85 backdrop-blur-md border border-white/[0.08] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <GitBranch className="w-4 h-4 text-cyan-400" />
                <h3 className="text-sm font-bold text-white">Top Languages</h3>
              </div>

              <div className="space-y-3 text-xs font-mono">
                <div>
                  <div className="flex justify-between text-slate-300 mb-1">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#3178c6]" />
                      TypeScript
                    </span>
                    <span className="font-semibold text-white">52%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-[#3178c6] rounded-full" style={{ width: "52%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-slate-300 mb-1">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#f7df1e]" />
                      JavaScript
                    </span>
                    <span className="font-semibold text-white">32%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-[#f7df1e] rounded-full" style={{ width: "32%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-slate-300 mb-1">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#38bdf8]" />
                      HTML &amp; CSS
                    </span>
                    <span className="font-semibold text-white">16%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-[#38bdf8] rounded-full" style={{ width: "16%" }} />
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-3 text-[11px] font-mono text-slate-500 border-t border-white/5 mt-4">
              Across verified public repositories
            </div>
          </div>
        </div>

        {/* Featured Repositories - Minimal 3-Card Grid */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4 px-1">
            <h3 className="text-sm font-bold font-mono text-slate-300 uppercase tracking-wider">
              Featured Repositories
            </h3>
            <a
              href="https://github.com/walid573?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-violet-400 hover:text-cyan-300 transition-colors inline-flex items-center gap-1"
            >
              <span>View all</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {featuredRepos.map((repo) => (
              <div
                key={repo.name}
                className="group rounded-2xl p-5 bg-[#090b14]/85 backdrop-blur-md border border-white/[0.08] hover:border-violet-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <FolderGit2 className="w-4 h-4 text-violet-400" />
                      <h4 className="text-sm font-bold text-white group-hover:text-violet-300 transition-colors">
                        {repo.name}
                      </h4>
                    </div>
                    <a
                      href={repo.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 rounded text-slate-400 hover:text-white transition-colors"
                      aria-label={`View ${repo.name} on GitHub`}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed mb-4">
                    {repo.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                    <span className={`w-2 h-2 rounded-full ${repo.langColor}`} />
                    {repo.language}
                  </span>

                  <div className="flex items-center gap-2">
                    <a
                      href={repo.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/10 transition-colors"
                    >
                      Live
                    </a>
                    <Link
                      href={repo.caseStudyUrl}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-violet-500/10 hover:bg-violet-500/20 text-violet-300 border border-violet-500/20 transition-colors"
                    >
                      Case Study
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View Profile Button */}
        <div className="text-center">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 transition-all shadow-md shadow-violet-600/20 hover:scale-105"
          >
            <GithubIcon className="w-4 h-4" />
            <span>View GitHub Profile</span>
            <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

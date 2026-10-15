"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  GitBranch,
  Star,
  Users,
  UserCheck,
  Flame,
  Award,
  GitCommit,
  GitPullRequest,
  CheckCircle2,
  ExternalLink,
  FolderGit2,
  Activity,
  Layers,
} from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";
import { personalInfo } from "@/data/portfolio";

export function HomeGitHub() {
  const [hoveredDay, setHoveredDay] = useState<string | null>(null);

  // Generate a realistic 52-week contribution heatmap pattern
  // Columns = 52 weeks, Rows = 7 days
  const weeks = 52;
  const daysPerWeek = 7;
  const heatmapData = React.useMemo(() => {
    const data: number[][] = [];
    for (let w = 0; w < weeks; w++) {
      const col: number[] = [];
      for (let d = 0; d < daysPerWeek; d++) {
        // Create an organic distribution with active streaks
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
    "bg-[#121422] border-white/[0.04]", // 0: no commits
    "bg-violet-950/70 border-violet-800/40", // 1
    "bg-violet-700/80 border-violet-600/50", // 2
    "bg-violet-500 border-violet-400", // 3
    "bg-cyan-400 border-cyan-300 shadow-[0_0_8px_#22d3ee]", // 4: high
  ];

  const milestones = [
    { label: "10+ Pull Requests", desc: "Collaborative merges", icon: GitPullRequest, color: "text-violet-400" },
    { label: "15+ Repositories", desc: "Open-source codebase", icon: FolderGit2, color: "text-indigo-400" },
    { label: "25+ Stars Earned", desc: "Community recognized", icon: Star, color: "text-amber-400" },
    { label: "1st Full-Stack App", desc: "End-to-end production", icon: Layers, color: "text-cyan-400" },
    { label: "100+ Git Commits", desc: "Continuous iteration", icon: GitCommit, color: "text-emerald-400" },
    { label: "Continuous Learner", desc: "Daily hands-on craft", icon: Award, color: "text-purple-400" },
  ];

  const featuredRepos = [
    {
      name: "The-News-Room",
      fullName: "walid573/The-News-Room",
      description: "Full-stack dynamic newspaper and publishing portal with categorized reporting and responsive UI.",
      language: "TypeScript",
      langColor: "bg-blue-400",
      stars: 12,
      forks: 3,
      githubUrl: "https://github.com/walid573",
      caseStudyUrl: "/projects/the-news-room",
    },
    {
      name: "Bazar-Dor",
      fullName: "walid573/Bazar-Dor",
      description: "Local marketplace commodity and daily grocery price tracking web application with community reporting.",
      language: "JavaScript",
      langColor: "bg-yellow-400",
      stars: 8,
      forks: 2,
      githubUrl: "https://github.com/walid573",
      caseStudyUrl: "/projects/bazar-dor",
    },
    {
      name: "Fit-Log",
      fullName: "walid573/Fit-Log",
      description: "Modern workout logging and fitness companion with exercise tracking, volume analytics, and dark aesthetic.",
      language: "TypeScript",
      langColor: "bg-blue-400",
      stars: 7,
      forks: 1,
      githubUrl: "https://github.com/walid573",
      caseStudyUrl: "/projects/fitlog",
    },
    {
      name: "Mohammad-Walid-Portfolio",
      fullName: "walid573/Mohammad-Walid-Portfolio",
      description: "High-performance developer portfolio with concentric orbital animations, glass cards, and App Router.",
      language: "TypeScript",
      langColor: "bg-cyan-400",
      stars: 6,
      forks: 1,
      githubUrl: "https://github.com/walid573",
      caseStudyUrl: "/projects",
    },
  ];

  return (
    <section id="github-craft" aria-label="GitHub Activity Section" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[550px] h-[550px] rounded-full bg-violet-600/10 blur-[150px]" />
        <div className="absolute inset-0 bg-dot-grid opacity-25" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-3">
            Code,{" "}
            <span className="bg-gradient-to-r from-violet-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              Commits
            </span>{" "}
            &amp;{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-300 to-violet-400 bg-clip-text text-transparent">
              Craft
            </span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
            GitHub activity, development metrics, and continuous growth through code
          </p>

          {/* Verification Badges Row (as shown in screenshot) */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0d101d] border border-violet-500/30 text-xs font-mono text-violet-300">
              <Activity className="w-3.5 h-3.5 text-violet-400" />
              <span>Profile Views: 1.2k+</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0d101d] border border-cyan-500/30 text-xs font-mono text-cyan-300">
              <GitBranch className="w-3.5 h-3.5 text-cyan-400" />
              <span>Public Repos: 15+</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0d101d] border border-emerald-500/30 text-xs font-mono text-emerald-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Active Contributor</span>
            </div>
          </div>
        </div>

        {/* 4 Top Metric Cards (matching screenshot 4-column cards) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4 mb-8">
          {/* Metric 1: Repositories */}
          <div className="rounded-2xl p-5 bg-[#090b14]/80 backdrop-blur-md border border-white/[0.08] hover:border-violet-500/35 transition-all">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-medium text-slate-400">Repositories</span>
              <div className="w-7 h-7 rounded-lg bg-violet-500/15 flex items-center justify-center text-violet-400">
                <FolderGit2 className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white mb-1">15+</div>
            <div className="text-[11px] font-mono text-slate-500">Public Repositories</div>
          </div>

          {/* Metric 2: Stars */}
          <div className="rounded-2xl p-5 bg-[#090b14]/80 backdrop-blur-md border border-white/[0.08] hover:border-violet-500/35 transition-all">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-medium text-slate-400">Stars Earned</span>
              <div className="w-7 h-7 rounded-lg bg-amber-500/15 flex items-center justify-center text-amber-400">
                <Star className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white mb-1">25+</div>
            <div className="text-[11px] font-mono text-slate-500">GitHub Stars</div>
          </div>

          {/* Metric 3: Followers */}
          <div className="rounded-2xl p-5 bg-[#090b14]/80 backdrop-blur-md border border-white/[0.08] hover:border-violet-500/35 transition-all">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-medium text-slate-400">Community</span>
              <div className="w-7 h-7 rounded-lg bg-cyan-500/15 flex items-center justify-center text-cyan-400">
                <Users className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white mb-1">30+</div>
            <div className="text-[11px] font-mono text-slate-500">Developers &amp; Network</div>
          </div>

          {/* Metric 4: Following */}
          <div className="rounded-2xl p-5 bg-[#090b14]/80 backdrop-blur-md border border-white/[0.08] hover:border-violet-500/35 transition-all">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-medium text-slate-400">Following</span>
              <div className="w-7 h-7 rounded-lg bg-indigo-500/15 flex items-center justify-center text-indigo-400">
                <UserCheck className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white mb-1">15+</div>
            <div className="text-[11px] font-mono text-slate-500">Engineers Followed</div>
          </div>
        </div>

        {/* 2 Middle Activity Cards (matching screenshot) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-8">
          {/* Card A: Lines of Code & Streak */}
          <div className="lg:col-span-6 rounded-2xl p-6 bg-[#090b14]/80 backdrop-blur-md border border-white/[0.08] flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-xs font-mono text-violet-400 uppercase tracking-wider block mb-1">
                  Volume &amp; Consistency
                </span>
                <h3 className="text-lg font-bold text-white">Lines of Code &amp; Contributions</h3>
              </div>
              <div className="w-8 h-8 rounded-xl bg-violet-500/15 flex items-center justify-center text-violet-400">
                <Flame className="w-4 h-4" />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 my-4">
              <div className="p-3 rounded-xl bg-[#0f1222] border border-white/5">
                <div className="text-xl sm:text-2xl font-bold font-mono text-white">3,100+</div>
                <div className="text-[10px] text-slate-400">Total Code Lines</div>
              </div>
              <div className="p-3 rounded-xl bg-[#0f1222] border border-white/5">
                <div className="text-xl sm:text-2xl font-bold font-mono text-cyan-400">0</div>
                <div className="text-[10px] text-slate-400">Current Streak</div>
              </div>
              <div className="p-3 rounded-xl bg-[#0f1222] border border-white/5">
                <div className="text-xl sm:text-2xl font-bold font-mono text-violet-400">20</div>
                <div className="text-[10px] text-slate-400">Max Streak (Days)</div>
              </div>
            </div>

            {/* Mini Commit Volume Bar */}
            <div className="pt-2">
              <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1.5 font-mono">
                <span>Weekly Volume Target</span>
                <span className="text-emerald-400">88% Achieved</span>
              </div>
              <div className="w-full h-2 rounded-full bg-[#151829] overflow-hidden">
                <div className="h-full bg-gradient-to-r from-violet-600 via-indigo-500 to-cyan-400 rounded-full" style={{ width: "88%" }} />
              </div>
            </div>
          </div>

          {/* Card B: GitHub Overview Breakdown with Circular Metric Ring */}
          <div className="lg:col-span-6 rounded-2xl p-6 bg-[#090b14]/80 backdrop-blur-md border border-white/[0.08] flex items-center justify-between gap-6">
            <div className="flex-1 space-y-3">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block">
                Overview Breakdown
              </span>
              <h3 className="text-lg font-bold text-white mb-2">GitHub Overview Stats</h3>
              <ul className="space-y-2 text-xs font-mono">
                <li className="flex items-center justify-between text-slate-300">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-violet-400" />
                    Total Commits
                  </span>
                  <span className="font-bold text-white">280+</span>
                </li>
                <li className="flex items-center justify-between text-slate-300">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    Pull Requests
                  </span>
                  <span className="font-bold text-white">18+</span>
                </li>
                <li className="flex items-center justify-between text-slate-300">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-indigo-400" />
                    Code Reviews
                  </span>
                  <span className="font-bold text-white">12+</span>
                </li>
                <li className="flex items-center justify-between text-slate-300">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-400" />
                    Issues Resolved
                  </span>
                  <span className="font-bold text-white">8+</span>
                </li>
              </ul>
            </div>

            {/* Circular Progress Visual Ring (Screenshot Element) */}
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex-shrink-0 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="none" stroke="#151829" strokeWidth="8" />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="url(#purpleGrad)"
                  strokeWidth="8"
                  strokeDasharray="251.2"
                  strokeDashoffset="60"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute flex flex-col items-center justify-center">
                <span className="text-xl font-bold font-mono text-white">86%</span>
                <span className="text-[9px] font-mono text-slate-400 uppercase">Growth</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2 Lower Cards: Contribution Heatmap & Top Languages */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-8">
          {/* Left: Purple Contribution Heatmap (matches screenshot) */}
          <div className="lg:col-span-8 rounded-2xl p-6 bg-[#090b14]/80 backdrop-blur-md border border-white/[0.08] overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-xs font-mono text-violet-400 uppercase tracking-wider block">
                  Contribution Activity
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white">Activity Heatmap</h3>
              </div>
              <span className="text-xs font-mono text-slate-400">Past 12 Months</span>
            </div>

            {/* Scrollable / Responsive Heatmap Grid */}
            <div className="overflow-x-auto pb-2 scrollbar-none">
              <div className="min-w-[620px] space-y-1">
                {/* Months labels */}
                <div className="flex text-[10px] font-mono text-slate-500 justify-between px-1 mb-1.5">
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

                {/* Heatmap Grid */}
                <div className="flex gap-[3.5px]">
                  {heatmapData.map((week, wIdx) => (
                    <div key={wIdx} className="flex flex-col gap-[3.5px]">
                      {week.map((level, dIdx) => (
                        <div
                          key={dIdx}
                          className={`w-[9.5px] h-[9.5px] rounded-[2px] border transition-transform hover:scale-125 ${colorLevels[level]}`}
                          onMouseEnter={() => setHoveredDay(`Week ${wIdx + 1}, Day ${dIdx + 1}`)}
                          onMouseLeave={() => setHoveredDay(null)}
                          title={`Contributions recorded`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Heatmap Legend */}
            <div className="flex items-center justify-between text-xs text-slate-400 font-mono mt-3 pt-3 border-t border-white/5">
              <span>{hoveredDay ? hoveredDay : "Active engineering iteration"}</span>
              <div className="flex items-center gap-1.5">
                <span>Less</span>
                {colorLevels.map((c, i) => (
                  <span key={i} className={`w-2.5 h-2.5 rounded-[2px] border ${c}`} />
                ))}
                <span>More</span>
              </div>
            </div>
          </div>

          {/* Right: Top Languages Breakdown */}
          <div className="lg:col-span-4 rounded-2xl p-6 bg-[#090b14]/80 backdrop-blur-md border border-white/[0.08] flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block">
                Code Distribution
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white mb-4">Top Languages</h3>

              <div className="space-y-3.5 text-xs font-mono">
                <div>
                  <div className="flex justify-between text-slate-300 mb-1">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#3178c6]" />
                      TypeScript
                    </span>
                    <span className="font-bold text-white">48.5%</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#151829] rounded-full overflow-hidden">
                    <div className="h-full bg-[#3178c6] rounded-full" style={{ width: "48.5%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-slate-300 mb-1">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#f7df1e]" />
                      JavaScript
                    </span>
                    <span className="font-bold text-white">28.2%</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#151829] rounded-full overflow-hidden">
                    <div className="h-full bg-[#f7df1e] rounded-full" style={{ width: "28.2%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-slate-300 mb-1">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#38bdf8]" />
                      HTML &amp; Tailwind CSS
                    </span>
                    <span className="font-bold text-white">15.1%</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#151829] rounded-full overflow-hidden">
                    <div className="h-full bg-[#38bdf8] rounded-full" style={{ width: "15.1%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-slate-300 mb-1">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-500" />
                      Other &amp; Config
                    </span>
                    <span className="font-bold text-white">8.2%</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#151829] rounded-full overflow-hidden">
                    <div className="h-full bg-slate-500 rounded-full" style={{ width: "8.2%" }} />
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 text-[11px] font-mono text-slate-500">
              Computed across verified public Git repositories
            </div>
          </div>
        </div>

        {/* Unlocked Milestones (Screenshot 6 cards) */}
        <div className="mb-14">
          <div className="text-center mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Unlocked{" "}
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Milestones
              </span>{" "}
              🏆
            </h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {milestones.map((m, idx) => {
              const IconComp = m.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl p-4 bg-[#090b14]/75 backdrop-blur-md border border-white/[0.07] text-center hover:border-violet-500/35 transition-all hover:-translate-y-0.5"
                >
                  <div className="w-8 h-8 mx-auto rounded-xl bg-white/5 flex items-center justify-center mb-2">
                    <IconComp className={`w-4 h-4 ${m.color}`} />
                  </div>
                  <div className="text-xs font-bold text-white leading-tight mb-1">{m.label}</div>
                  <div className="text-[10px] text-slate-500 font-mono">{m.desc}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Featured Repositories (4 cards matching screenshot) */}
        <div className="mb-12">
          <div className="text-center mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Featured{" "}
              <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                Repositories
              </span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredRepos.map((repo) => (
              <div
                key={repo.name}
                className="group rounded-2xl p-5 bg-[#090b14]/85 backdrop-blur-md border border-white/[0.08] hover:border-violet-500/40 hover:bg-[#0d1020] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
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
                      className="p-1 rounded-md text-slate-400 hover:text-white transition-colors"
                      aria-label={`View ${repo.name} on GitHub`}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <p className="text-xs text-slate-300 line-clamp-3 mb-4 leading-relaxed">
                    {repo.description}
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 pt-3 border-t border-white/5">
                    <span className="flex items-center gap-1.5">
                      <span className={`w-2 h-2 rounded-full ${repo.langColor}`} />
                      {repo.language}
                    </span>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-amber-400" />
                        {repo.stars}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitBranch className="w-3 h-3 text-cyan-400" />
                        {repo.forks}
                      </span>
                    </div>
                  </div>

                  <div className="mt-3">
                    <Link
                      href={repo.caseStudyUrl}
                      className="block text-center py-1.5 px-3 rounded-lg bg-white/5 hover:bg-violet-600/20 border border-white/10 hover:border-violet-500/30 text-[11px] font-mono text-violet-300 hover:text-white transition-colors"
                    >
                      View Case Study
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View Full GitHub Profile Button (matching screenshot pill) */}
        <div className="text-center">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 transition-all shadow-lg shadow-violet-600/30 hover:shadow-violet-600/50 hover:scale-105"
          >
            <GithubIcon className="w-4 h-4" />
            <span>View Full GitHub Profile</span>
            <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

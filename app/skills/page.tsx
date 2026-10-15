import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TechIcon } from "@/components/TechIcon";
import { SkillProgressBar } from "@/components/SkillProgressBar";

export const metadata: Metadata = {
  title: "My Technical Skills | Mohammad Walid — Full-Stack Web Developer",
  description:
    "Comprehensive technical stack utilized by Mohammad Walid across frontend engineering, backend APIs, databases, and developer workflows.",
};

interface SkillCardData {
  name: string;
  iconName: string;
  categoryTag: string;
  barColor: string;
}

const frontendSkills: SkillCardData[] = [
  { name: "JavaScript", iconName: "javascript", categoryTag: "ES6+ Logic", barColor: "bg-[#f7df1e]" },
  { name: "TypeScript", iconName: "typescript", categoryTag: "Static Typing", barColor: "bg-[#3178c6]" },
  { name: "React", iconName: "react", categoryTag: "UI Components", barColor: "bg-[#61dafb]" },
  { name: "Next.js", iconName: "nextjs", categoryTag: "App Router / SSR", barColor: "bg-white" },
  { name: "Tailwind CSS", iconName: "tailwind", categoryTag: "Utility Styling", barColor: "bg-[#38bdf8]" },
  { name: "HTML5", iconName: "html5", categoryTag: "Semantic Markup", barColor: "bg-[#e44d26]" },
  { name: "CSS3", iconName: "css3", categoryTag: "Modern Styles", barColor: "bg-[#1572b6]" },
];

const backendSkills: SkillCardData[] = [
  { name: "Node.js", iconName: "nodejs", categoryTag: "V8 Runtime", barColor: "bg-[#5fa04e]" },
  { name: "Express.js", iconName: "express", categoryTag: "REST Routing", barColor: "bg-slate-300" },
  { name: "REST APIs", iconName: "restapis", categoryTag: "HTTP Endpoints", barColor: "bg-[#a855f7]" },
];

const databaseSkills: SkillCardData[] = [
  { name: "MongoDB", iconName: "mongodb", categoryTag: "Document Store", barColor: "bg-[#47a248]" },
];

const toolsSkills: SkillCardData[] = [
  { name: "Git", iconName: "git", categoryTag: "Version Control", barColor: "bg-[#f05032]" },
  { name: "GitHub", iconName: "github", categoryTag: "Collaboration", barColor: "bg-slate-300" },
  { name: "VS Code", iconName: "vscode", categoryTag: "Development IDE", barColor: "bg-[#007acc]" },
];

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-[#040508] text-slate-100 selection:bg-violet-600 selection:text-white flex flex-col relative">
      {/* Background with fine square grid and hero ambient glow */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-grid-pattern opacity-40" />
      <div className="fixed inset-0 pointer-events-none z-0 bg-radial-hero-glow" />

      <Navbar />

      <main className="flex-1 pt-28 pb-24 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header 2-Column Hero (Screenshot 3 Layout) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-20 pt-4">
            {/* Left Column: Heading & Stats */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
                My Technical{" "}
                <span className="bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent block">
                  Skills
                </span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
                These are the tools I&apos;ve used to turn ideas into real-world applications — constantly evolving, always learning.
              </p>

              {/* 3 Metric Stats Row (as shown in Screenshot 3) */}
              <div className="flex items-center gap-8 sm:gap-12 py-2">
                <div>
                  <div className="text-2xl font-bold font-mono text-violet-300">12+</div>
                  <div className="text-[11px] text-slate-400 font-mono mt-0.5">Core Skills</div>
                </div>
                <div className="w-[1px] h-8 bg-white/10" />
                <div>
                  <div className="text-2xl font-bold font-mono text-cyan-300">4</div>
                  <div className="text-[11px] text-slate-400 font-mono mt-0.5">Categories</div>
                </div>
                <div className="w-[1px] h-8 bg-white/10" />
                <div>
                  <div className="text-2xl font-bold font-mono text-indigo-300">HSC</div>
                  <div className="text-[11px] text-slate-400 font-mono mt-0.5">College Level</div>
                </div>
              </div>

              {/* Category Indicator Pills Row */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-violet-500/10 border border-violet-500/25 text-violet-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                  Frontend
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 border border-cyan-500/25 text-cyan-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  Backend
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 border border-emerald-500/25 text-emerald-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Database
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-amber-500/10 border border-amber-500/25 text-amber-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  Tools &amp; Workflow
                </span>
              </div>
            </div>

            {/* Right Column: Orbital Rings with Center </> and Spinning Tech Icons (Screenshot 3 Signature UI) */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center">
                {/* Outer Orbital Ring */}
                <div className="absolute inset-0 rounded-full border border-violet-500/20 animate-spin-slow">
                  {/* Orbiting Icons */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2 rounded-xl bg-[#090b14] border border-cyan-500/30 shadow-lg">
                    <TechIcon name="react" size={20} />
                  </div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 p-2 rounded-xl bg-[#090b14] border border-blue-500/30 shadow-lg">
                    <TechIcon name="typescript" size={20} />
                  </div>
                  <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 p-2 rounded-xl bg-[#090b14] border border-green-500/30 shadow-lg">
                    <TechIcon name="nodejs" size={20} />
                  </div>
                  <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 p-2 rounded-xl bg-[#090b14] border border-white/20 shadow-lg">
                    <TechIcon name="nextjs" size={20} />
                  </div>
                </div>

                {/* Inner Orbital Ring */}
                <div className="absolute w-[68%] h-[68%] rounded-full border border-cyan-500/20 border-dashed animate-spin-reverse">
                  <div className="absolute top-4 left-6 p-1.5 rounded-lg bg-[#090b14] border border-amber-500/30 shadow-lg">
                    <TechIcon name="git" size={16} />
                  </div>
                  <div className="absolute bottom-4 right-6 p-1.5 rounded-lg bg-[#090b14] border border-emerald-500/30 shadow-lg">
                    <TechIcon name="mongodb" size={16} />
                  </div>
                </div>

                {/* Center Core: </> badge */}
                <div className="relative z-10 w-20 h-20 rounded-2xl bg-gradient-to-tr from-violet-600 to-cyan-500 p-0.5 shadow-[0_0_25px_rgba(139,92,246,0.4)]">
                  <div className="w-full h-full rounded-[14px] bg-[#090b14] flex items-center justify-center font-mono font-bold text-xl text-white">
                    &lt; / &gt;
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section Heading: TECHNICAL EXPERTISE */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-violet-400 mb-2 tracking-wider">
              <span>{"//"} TECHNICAL EXPERTISE</span>
            </div>
          </div>

          {/* Category 1: Frontend */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-1 h-5 bg-violet-500 rounded-full" />
              <h2 className="text-xl sm:text-2xl font-bold text-white">Frontend</h2>
              <span className="text-xs font-mono text-slate-400">
                — building interfaces users love
              </span>
              <span className="ml-auto text-xs font-mono px-2.5 py-0.5 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20">
                7 skills
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3.5 sm:gap-4">
              {frontendSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="rounded-2xl p-4 sm:p-5 bg-[#090b14]/85 backdrop-blur-md border border-white/[0.08] hover:border-violet-500/40 hover:-translate-y-1 transition-all flex flex-col justify-between"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <TechIcon name={skill.iconName} size={28} />
                    <div>
                      <h3 className="text-sm font-bold text-white leading-tight">{skill.name}</h3>
                      <p className="text-[10px] text-slate-400 font-mono mt-0.5">{skill.categoryTag}</p>
                    </div>
                  </div>
                  {/* Subtle Tech Progress Bar */}
                  <SkillProgressBar
                    colorClass={skill.barColor}
                    width="90%"
                    delay={index * 80}
                    lightColor={skill.name === "Next.js" ? "#000000" : undefined}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Category 2: Backend */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-1 h-5 bg-cyan-500 rounded-full" />
              <h2 className="text-xl sm:text-2xl font-bold text-white">Backend</h2>
              <span className="text-xs font-mono text-slate-400">
                — architecting scalable systems
              </span>
              <span className="ml-auto text-xs font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                3 skills
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 sm:gap-4">
              {backendSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="rounded-2xl p-4 sm:p-5 bg-[#090b14]/85 backdrop-blur-md border border-white/[0.08] hover:border-cyan-500/40 hover:-translate-y-1 transition-all flex flex-col justify-between"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <TechIcon name={skill.iconName} size={28} />
                    <div>
                      <h3 className="text-sm font-bold text-white leading-tight">{skill.name}</h3>
                      <p className="text-[10px] text-slate-400 font-mono mt-0.5">{skill.categoryTag}</p>
                    </div>
                  </div>
                  <SkillProgressBar colorClass={skill.barColor} width="85%" delay={index * 80} />
                </div>
              ))}
            </div>
          </div>

          {/* Category 3: Database */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-1 h-5 bg-emerald-500 rounded-full" />
              <h2 className="text-xl sm:text-2xl font-bold text-white">Database</h2>
              <span className="text-xs font-mono text-slate-400">
                — storing data the right way
              </span>
              <span className="ml-auto text-xs font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                1 skill
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4">
              {databaseSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="rounded-2xl p-4 sm:p-5 bg-[#090b14]/85 backdrop-blur-md border border-white/[0.08] hover:border-emerald-500/40 hover:-translate-y-1 transition-all flex flex-col justify-between"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <TechIcon name={skill.iconName} size={28} />
                    <div>
                      <h3 className="text-sm font-bold text-white leading-tight">{skill.name}</h3>
                      <p className="text-[10px] text-slate-400 font-mono mt-0.5">{skill.categoryTag}</p>
                    </div>
                  </div>
                  <SkillProgressBar colorClass={skill.barColor} width="85%" delay={index * 80} />
                </div>
              ))}
            </div>
          </div>

          {/* Category 4: Tools & Workflow */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-1 h-5 bg-amber-500 rounded-full" />
              <h2 className="text-xl sm:text-2xl font-bold text-white">Tools &amp; Workflow</h2>
              <span className="text-xs font-mono text-slate-400">
                — the stuff that keeps it all together
              </span>
              <span className="ml-auto text-xs font-mono px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">
                3 skills
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 sm:gap-4">
              {toolsSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="rounded-2xl p-4 sm:p-5 bg-[#090b14]/85 backdrop-blur-md border border-white/[0.08] hover:border-amber-500/40 hover:-translate-y-1 transition-all flex flex-col justify-between"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <TechIcon name={skill.iconName} size={28} />
                    <div>
                      <h3 className="text-sm font-bold text-white leading-tight">{skill.name}</h3>
                      <p className="text-[10px] text-slate-400 font-mono mt-0.5">{skill.categoryTag}</p>
                    </div>
                  </div>
                  <SkillProgressBar colorClass={skill.barColor} width="88%" delay={index * 80} />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Philosophy Card (Screenshot 3 Element) */}
          <div className="rounded-3xl p-8 sm:p-10 bg-[#090b14]/90 backdrop-blur-md border border-white/[0.08] text-center max-w-3xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
              Always learning, always evolving.
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-xl mx-auto mb-6">
              The tech world moves fast, I make sure I move faster — one new tool, one new concept at a time.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-violet-400" />
                Frontend
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                Backend
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Database
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                Tools &amp; Workflow
              </span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { TechIcon } from "./TechIcon";
import { SpotlightCard } from "@/components/effects/SpotlightCard";
import { SplitText } from "@/components/effects/SplitText";
import { TiltCard } from "@/components/effects/TiltCard";
import { ClickSpark } from "@/components/effects/ClickSpark";
import { Magnetic } from "@/components/effects/Magnetic";
import { AdvancedButton } from "@/components/effects/AdvancedButton";

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
    <section id="tech-preview" aria-label="Technologies Section" className="home-tech-section relative py-20 lg:py-28 overflow-hidden">
      {/* Ambient background glow */}
      <div className="home-tech-ambient backdrop-fade-y absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] rounded-full bg-indigo-600/10 blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (matching screenshot) */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Technologies I{" "}
            <SplitText
              text="worked with"
              stagger={60}
              wordClassName="bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent"
            />
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            a passionate web developer who enjoys building modern and user-friendly web applications
          </p>
        </div>

        {/* 12-Card Grid (6 cols on lg, 4 on md, 3 on sm, 2 on xs) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 sm:gap-4 max-w-5xl mx-auto">
          {technologies.map((tech, i) => (
            <ClickSpark key={tech.name} className="rounded-2xl">
              <TiltCard max={9} className="h-full rounded-2xl">
              <SpotlightCard
                className="home-tech-card tech-glow group relative flex h-full flex-col items-center justify-center p-6 rounded-2xl bg-[#0a0d14]/90 backdrop-blur-md border border-white/[0.07] hover:border-violet-500/30 hover:bg-[#0f1220] transition-all duration-300 hover:-translate-y-1"
              >
              {/* Floating Icon */}
              <div
                className="tech-float"
                style={{
                  animationDelay: `${(i % 6) * 0.45}s`,
                  animationDuration: `${5 + (i % 3) * 0.8}s`,
                }}
              >
                <div className="tilt-pop w-11 h-11 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <TechIcon name={tech.icon} size={38} />
                </div>
              </div>

              {/* Name */}
              <span className="tilt-pop inline-block text-xs sm:text-sm font-medium text-slate-300 group-hover:text-white transition-colors text-center">
                {tech.name}
              </span>
              </SpotlightCard>
              </TiltCard>
            </ClickSpark>
          ))}
        </div>

        {/* Bottom Link to Dedicated Skills Page */}
        <div className="mt-12 text-center">
          <Magnetic strength={0.2}>
            <AdvancedButton
              variant="specular"
              href="/skills"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium text-slate-300 hover:text-white"
            >
              <span>Explore All Skills &amp; Architecture</span>
              <ArrowRight className="w-4 h-4 text-violet-400" />
            </AdvancedButton>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}

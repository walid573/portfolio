"use client";

import { SpotlightCard } from "./SpotlightCard";
import { TechIcon } from "../TechIcon";
import { SkillProgressBar } from "../SkillProgressBar";

interface SkillCardProps {
  name: string;
  iconName: string;
  categoryTag: string;
  barColor: string;
  hoverBorderClass: string;
  barWidth: string;
  delay: number;
  lightColor?: string;
}

/** Skill card with cursor-tracked spotlight glow + animated progress bar. */
export function SkillCard({
  name,
  iconName,
  categoryTag,
  barColor,
  hoverBorderClass,
  barWidth,
  delay,
  lightColor,
}: SkillCardProps) {
  return (
    <SpotlightCard
      className={`rounded-2xl p-4 sm:p-5 bg-[#090b14]/85 backdrop-blur-md border border-white/[0.08] ${hoverBorderClass} hover:-translate-y-1 transition-all flex flex-col justify-between`}
    >
      <div className="flex items-center gap-3 mb-3">
        <TechIcon name={iconName} size={28} />
        <div>
          <h3 className="text-sm font-bold text-white leading-tight">{name}</h3>
          <p className="text-[10px] text-slate-400 font-mono mt-0.5">{categoryTag}</p>
        </div>
      </div>
      <SkillProgressBar colorClass={barColor} width={barWidth} delay={delay} lightColor={lightColor} />
    </SpotlightCard>
  );
}

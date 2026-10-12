"use client";

import React from "react";
import { SKILLS } from "@/data/skills";
import { SkillItem } from "@/types/portfolio";
import { soundFx } from "@/lib/audio";

interface TactileKeyboardFallbackProps {
  selectedSkill: SkillItem | null;
  onSelectSkill: (skill: SkillItem) => void;
  activeCategory: string;
}

export default function TactileKeyboardFallback({
  selectedSkill,
  onSelectSkill,
  activeCategory,
}: TactileKeyboardFallbackProps) {
  const handleKeyClick = (skill: SkillItem) => {
    soundFx.playKeyClick(1.0);
    onSelectSkill(skill);
  };

  const rows = [
    SKILLS.filter((s) => s.row === 0),
    SKILLS.filter((s) => s.row === 1),
    SKILLS.filter((s) => s.row === 2),
  ];

  return (
    <div className="w-full p-4 sm:p-6 rounded-2xl bg-space-900/90 border border-slate-800 shadow-glass-lg backdrop-blur-md">
      <div className="flex items-center justify-between mb-4 border-b border-slate-800/80 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
          <span className="font-mono text-xs uppercase text-slate-300 font-semibold tracking-wider">
            Tactile Mechanical Switch Matrix
          </span>
        </div>
        <span className="font-mono text-[11px] text-cyan-400/80">
          TOUCH / CLICK KEYCAPS
        </span>
      </div>

      <div className="space-y-2.5 overflow-x-auto pb-2">
        {rows.map((rowSkills, rIdx) => (
          <div
            key={rIdx}
            className="flex items-center gap-1.5 sm:gap-2 min-w-max justify-center"
            style={{ paddingLeft: `${rIdx * 12}px` }}
          >
            {rowSkills.map((skill) => {
              const isSelected = selectedSkill?.id === skill.id;
              const matchesCategory =
                activeCategory === "All" || skill.category === activeCategory;

              return (
                <button
                  key={skill.id}
                  onClick={() => handleKeyClick(skill)}
                  className={`
                    group relative px-2.5 sm:px-3.5 py-2 sm:py-2.5 rounded-lg font-mono text-xs font-semibold
                    transition-all duration-150 transform active:translate-y-1 active:shadow-inner
                    border flex flex-col items-center justify-center min-w-[54px] sm:min-w-[64px] h-[52px] sm:h-[58px]
                    ${
                      isSelected
                        ? "bg-cyan-500/20 border-cyan-400 text-white shadow-neon-cyan ring-1 ring-cyan-400"
                        : matchesCategory
                        ? "bg-space-800/80 hover:bg-space-750 border-slate-700/80 text-slate-200 hover:border-cyan-500/50 hover:text-cyan-300"
                        : "bg-space-950/60 border-slate-800/40 text-slate-600 opacity-50 hover:opacity-80"
                    }
                  `}
                  title={`${skill.name} (${skill.category})`}
                >
                  <span className="text-[9px] text-slate-400 group-hover:text-cyan-300 transition-colors">
                    {skill.row}:{skill.col}
                  </span>
                  <span className="text-xs sm:text-sm font-bold tracking-tight">
                    {skill.keyLabel}
                  </span>
                  {isSelected && (
                    <span className="absolute bottom-1 w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  )}
                </button>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

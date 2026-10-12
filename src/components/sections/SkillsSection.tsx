"use client";

import React, { useState } from "react";
import KeyboardScene3D from "@/components/canvas/KeyboardScene3D";
import TactileKeyboardFallback from "@/components/ui/TactileKeyboardFallback";
import { SKILLS, SKILL_CATEGORIES } from "@/data/skills";
import { SkillItem } from "@/types/portfolio";
import { soundFx } from "@/lib/audio";
import {
  Keyboard,
  Cpu,
  Layers,
  Sparkles,
  CheckCircle2,
  Sliders,
  FolderGit2,
} from "lucide-react";

export default function SkillsSection() {
  const [selectedSkill, setSelectedSkill] = useState<SkillItem>(SKILLS[0]); // Default to C++
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [viewMode, setViewMode] = useState<"3d" | "tactile">("3d");

  const handleSelectSkill = (skill: SkillItem) => {
    setSelectedSkill(skill);
  };

  const handleCategoryChange = (cat: string) => {
    soundFx.playKeyClick(0.9);
    setActiveCategory(cat);
    // If current selected skill doesn't match new category, select first matching
    if (cat !== "All" && selectedSkill.category !== cat) {
      const match = SKILLS.find((s) => s.category === cat);
      if (match) setSelectedSkill(match);
    }
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                <Keyboard size={16} />
              </div>
              <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest font-semibold">
                Section 02 // Interactive 3D Rig
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Skills & Mechanical 3D Keycap Matrix
            </h2>
            <p className="text-sm text-slate-400 mt-1 max-w-xl">
              Individual mechanical keycaps represent technical skills from my resume.
              Click or hover on keycaps, or type directly on your keyboard to reveal details.
            </p>
          </div>

          {/* View Mode Toggle: 3D Scene vs Tactile 2.5D */}
          <div className="flex items-center gap-2 bg-space-900/80 p-1 rounded-xl border border-slate-800 self-start md:self-auto">
            <button
              onClick={() => {
                soundFx.playKeyClick(1.0);
                setViewMode("3d");
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                viewMode === "3d"
                  ? "bg-cyan-600 text-white shadow-neon-cyan"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              3D Spatial View
            </button>
            <button
              onClick={() => {
                soundFx.playKeyClick(1.0);
                setViewMode("tactile");
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                viewMode === "tactile"
                  ? "bg-cyan-600 text-white shadow-neon-cyan"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Tactile Grid
            </button>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 no-scrollbar">
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap transition-all border ${
                activeCategory === cat
                  ? "bg-cyan-950/80 border-cyan-400 text-cyan-300 shadow-neon-cyan"
                  : "bg-space-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3D Keyboard Scene & Cyber Skill HUD Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Keyboard Interactive Canvas */}
          <div className="lg:col-span-8 rounded-2xl bg-space-950/80 border border-slate-800/90 shadow-glass-md overflow-hidden relative p-2 sm:p-4">
            {/* Corner Indicators */}
            <div className="absolute top-4 left-4 z-10 flex items-center gap-2 pointer-events-none">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span className="font-mono text-[11px] text-cyan-400/90 tracking-wider uppercase">
                {viewMode === "3d" ? "WebGL Canvas // 3D Keyset" : "Tactile Switch Matrix"}
              </span>
            </div>

            <div className="absolute top-4 right-4 z-10 hidden sm:flex items-center gap-1.5 pointer-events-none font-mono text-[10px] text-slate-500 bg-space-900/60 px-2 py-1 rounded border border-slate-800">
              <Sliders size={12} />
              <span>ORBIT CONTROLS ACTIVE</span>
            </div>

            {/* View Mode Renderer */}
            {viewMode === "3d" ? (
              <KeyboardScene3D
                selectedSkill={selectedSkill}
                onSelectSkill={handleSelectSkill}
              />
            ) : (
              <TactileKeyboardFallback
                selectedSkill={selectedSkill}
                onSelectSkill={handleSelectSkill}
                activeCategory={activeCategory}
              />
            )}

            {/* Keyboard Interaction Tip */}
            <div className="p-3 bg-space-900/80 border-t border-slate-800/80 rounded-b-xl flex items-center justify-between flex-wrap gap-2 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <span className="px-1.5 py-0.5 rounded bg-space-800 border border-slate-700 text-slate-300 text-[10px]">
                  KEYBOARD INTERACTION
                </span>
                <span className="text-[11px]">
                  Press keys on your physical keyboard to depress corresponding 3D keys!
                </span>
              </div>
              <span className="text-[10px] text-cyan-400">
                ACTIVE KEYCAP: [{selectedSkill.keyLabel}]
              </span>
            </div>
          </div>

          {/* Right: Cyber Skill HUD Inspector */}
          <div className="lg:col-span-4 rounded-2xl bg-space-900/90 border border-slate-800 p-6 shadow-glass-lg backdrop-blur-md relative overflow-hidden">
            {/* Top Accent Line */}
            <div
              className="absolute top-0 left-0 right-0 h-1 transition-all duration-300"
              style={{ backgroundColor: selectedSkill.accent }}
            />

            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block mb-1">
                  SKILL TELEMETRY //
                </span>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  {selectedSkill.name}
                </h3>
              </div>
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center font-mono font-bold text-base border shadow-sm"
                style={{
                  backgroundColor: `${selectedSkill.accent}20`,
                  borderColor: `${selectedSkill.accent}60`,
                  color: selectedSkill.accent,
                }}
              >
                {selectedSkill.keyLabel}
              </div>
            </div>

            <div className="mb-4">
              <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-space-800 border border-slate-700/80 text-cyan-300">
                {selectedSkill.category}
              </span>
            </div>

            {/* Description */}
            <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-4">
              <div>
                <span className="font-mono text-[11px] text-slate-400 uppercase tracking-wider block mb-1">
                  Technical Scope:
                </span>
                <p className="bg-space-950/50 p-3 rounded-xl border border-slate-800 text-slate-300">
                  {selectedSkill.description}
                </p>
              </div>

              {/* Applied in Projects */}
              <div>
                <span className="font-mono text-[11px] text-slate-400 uppercase tracking-wider flex items-center gap-1.5 mb-2">
                  <FolderGit2 size={13} className="text-cyan-400" />
                  <span>Applied In Real Projects / Work:</span>
                </span>
                <ul className="space-y-1.5">
                  {selectedSkill.appliedIn.map((app, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 font-mono text-xs text-slate-300 bg-space-800/40 px-2.5 py-1.5 rounded-lg border border-slate-800/60"
                    >
                      <CheckCircle2 size={14} className="text-cyan-400 shrink-0" />
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Honest Proficiency Context */}
              <div className="pt-2 border-t border-slate-800/80">
                <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider block mb-1">
                  Practical Positioning:
                </span>
                <p className="text-xs text-cyan-300/90 font-mono">
                  {selectedSkill.proficiencyNote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { PROBLEM_SOLVING_STATS } from "@/data/personal";
import { soundFx } from "@/lib/audio";
import {
  Code2,
  ExternalLink,
  Github,
  CheckCircle,
  Binary,
  Layers,
  Cpu,
  Boxes,
} from "lucide-react";

export default function ProblemSolvingSection() {
  return (
    <section id="problem-solving" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-8 rounded-lg bg-amber-950/80 border border-amber-500/40 flex items-center justify-center text-amber-400">
            <Code2 size={16} />
          </div>
          <span className="font-mono text-xs text-amber-400 uppercase tracking-widest font-semibold">
            Section 04 // Algorithmic Proficiency
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
          Problem Solving & Algorithms
        </h2>
        <p className="text-sm text-slate-400 mb-8 max-w-xl">
          Core data structures and algorithms practice in C++, emphasizing pattern recognition,
          standard template library containers, and time-space complexity optimization.
        </p>

        {/* Technical Data Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Big Stats Counter & Direct Verified Profile */}
          <div className="lg:col-span-5 rounded-2xl bg-space-900/90 border border-slate-800 p-8 shadow-glass-md flex flex-col justify-between relative overflow-hidden">
            {/* Ambient amber glow */}
            <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded text-xs font-mono bg-amber-950/80 border border-amber-500/40 text-amber-300">
                  {PROBLEM_SOLVING_STATS.platform}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Language: {PROBLEM_SOLVING_STATS.language}
                </span>
              </div>

              {/* Big Counter */}
              <div className="my-6">
                <div className="text-5xl sm:text-6xl font-extrabold font-mono text-white tracking-tight flex items-baseline gap-1">
                  <span className="text-amber-400">{PROBLEM_SOLVING_STATS.problemsSolved}</span>
                </div>
                <p className="text-sm font-mono text-slate-300 mt-2">
                  Data Structures & Algorithms Problems Solved
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  As certified on LeetCode & documented in resume
                </p>
              </div>

              {/* Verified Links */}
              <div className="space-y-2.5 pt-4 border-t border-slate-800/80">
                <a
                  href={PROBLEM_SOLVING_STATS.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundFx.playKeyClick(1.0)}
                  className="flex items-center justify-between p-3 rounded-xl bg-space-950/80 border border-slate-800 hover:border-amber-500/50 hover:bg-space-950 text-slate-200 text-xs font-mono transition-all group"
                >
                  <span className="flex items-center gap-2">
                    <Code2 size={16} className="text-amber-400" />
                    <span>View LeetCode Profile</span>
                  </span>
                  <ExternalLink size={14} className="text-slate-500 group-hover:text-amber-400 transition-colors" />
                </a>

                <a
                  href={PROBLEM_SOLVING_STATS.dsaRepoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundFx.playKeyClick(1.0)}
                  className="flex items-center justify-between p-3 rounded-xl bg-space-950/80 border border-slate-800 hover:border-cyan-500/50 hover:bg-space-950 text-slate-200 text-xs font-mono transition-all group"
                >
                  <span className="flex items-center gap-2">
                    <Github size={16} className="text-cyan-400" />
                    <span>DSA Code Repository (C++)</span>
                  </span>
                  <ExternalLink size={14} className="text-slate-500 group-hover:text-cyan-400 transition-colors" />
                </a>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800 text-[11px] font-mono text-slate-500 flex items-center justify-between">
              <span>PRIMARY FOCUS</span>
              <span className="text-slate-300">Time & Space Complexity</span>
            </div>
          </div>

          {/* Right Column: Algorithmic Breakdown Cards */}
          <div className="lg:col-span-7 space-y-4">
            {/* Strongest Categories */}
            <div className="p-6 rounded-2xl bg-space-900/70 border border-slate-800 shadow-glass-sm">
              <div className="flex items-center gap-2 mb-3">
                <Binary size={16} className="text-amber-400" />
                <h3 className="text-sm font-semibold font-mono text-white uppercase tracking-wider">
                  Strongest Algorithmic Categories
                </h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {PROBLEM_SOLVING_STATS.topCategories.map((cat, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-space-950/70 border border-slate-800/80 flex items-center justify-between"
                  >
                    <span className="text-xs font-semibold text-slate-200">{cat}</span>
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                  </div>
                ))}
              </div>
            </div>

            {/* Implemented Algorithmic Patterns */}
            <div className="p-6 rounded-2xl bg-space-900/70 border border-slate-800 shadow-glass-sm">
              <div className="flex items-center gap-2 mb-3">
                <Layers size={16} className="text-cyan-400" />
                <h3 className="text-sm font-semibold font-mono text-white uppercase tracking-wider">
                  Applied Algorithmic Patterns
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {PROBLEM_SOLVING_STATS.patterns.map((pat, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-space-950/80 border border-cyan-500/20 text-cyan-300 text-xs font-mono"
                  >
                    {pat}
                  </span>
                ))}
              </div>
            </div>

            {/* C++ STL Containers */}
            <div className="p-6 rounded-2xl bg-space-900/70 border border-slate-800 shadow-glass-sm">
              <div className="flex items-center gap-2 mb-3">
                <Boxes size={16} className="text-indigo-400" />
                <h3 className="text-sm font-semibold font-mono text-white uppercase tracking-wider">
                  C++ STL Containers Utilized
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {PROBLEM_SOLVING_STATS.containers.map((cont, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-space-950/80 border border-indigo-500/20 text-indigo-300 text-xs font-mono"
                  >
                    {cont}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

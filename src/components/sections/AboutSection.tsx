"use client";

import React from "react";
import { PERSONAL_INFO, EDUCATION_INFO } from "@/data/personal";
import {
  User,
  GraduationCap,
  Code,
  Database,
  Cpu,
  Target,
  Terminal,
} from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
            <User size={16} />
          </div>
          <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest font-semibold">
            Section 01 // Identity & Background
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-8">
          About Me
        </h2>

        {/* Grid: Narrative & Key Profile Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Story Text */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 text-base leading-relaxed">
            <div className="p-6 rounded-2xl bg-space-900/60 border border-slate-800 shadow-glass-sm backdrop-blur-sm space-y-4">
              <p>
                I am a Computer Science Engineering student at{" "}
                <strong className="text-white font-medium">
                  Sahyadri College of Engineering and Management
                </strong>{" "}
                (Expected Graduation: June 2028, CGPA: 9.23/10). My work centers on
                building practical full-stack web applications, integrating reliable backend
                services, and structuring cloud databases.
              </p>
              <p>
                In my projects—such as <em className="text-cyan-300 not-italic font-mono">QuickFix Grocery</em> and{" "}
                <em className="text-cyan-300 not-italic font-mono">AIDoc</em>—I have designed multi-role
                access control systems, live database synchronization pipelines using Supabase and
                Firebase, and automated document analysis workflows powered by Google Gemini AI.
              </p>
              <p>
                Alongside web systems, I actively practice algorithmic problem solving in C++ on
                LeetCode, with 160+ problems solved across arrays, math, hash tables, and monotonic
                stacks. Looking ahead, I maintain a genuine technical curiosity in graphics programming,
                OpenGL, and game engine mechanics.
              </p>
            </div>

            {/* Quick Principles Banner */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-xl bg-space-950/60 border border-slate-800/80">
                <div className="flex items-center gap-2 text-cyan-400 mb-1 text-xs font-mono font-semibold">
                  <Database size={14} />
                  <span>Real Backend Data</span>
                </div>
                <p className="text-xs text-slate-400">
                  Building with live schemas and role permissions, never relying on static mock objects.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-space-950/60 border border-slate-800/80">
                <div className="flex items-center gap-2 text-indigo-400 mb-1 text-xs font-mono font-semibold">
                  <Code size={14} />
                  <span>C++ Core Discipline</span>
                </div>
                <p className="text-xs text-slate-400">
                  Daily algorithm patterns, STL container proficiency, and amortized complexity analysis.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-space-950/60 border border-slate-800/80">
                <div className="flex items-center gap-2 text-blue-400 mb-1 text-xs font-mono font-semibold">
                  <Cpu size={14} />
                  <span>Graphics & Systems</span>
                </div>
                <p className="text-xs text-slate-400">
                  Stepping beyond web layers into OpenGL shaders, render loops, and low-level computing.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Verified Academic & Positioning Telemetry Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-space-900/90 border border-slate-800 shadow-glass-md backdrop-blur-md">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="font-mono text-xs text-cyan-400 font-semibold tracking-wider uppercase">
                  Academic Status
                </span>
                <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-emerald-950/80 border border-emerald-500/40 text-emerald-300">
                  Active Student
                </span>
              </div>

              <div className="py-4 space-y-3.5 text-xs font-mono">
                <div>
                  <span className="text-slate-500 block">INSTITUTION</span>
                  <span className="text-slate-200 text-sm font-sans font-semibold">
                    {EDUCATION_INFO.institution}
                  </span>
                  <span className="text-slate-400 block text-[11px]">
                    {EDUCATION_INFO.location}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800/60">
                  <div>
                    <span className="text-slate-500 block">PROGRAM</span>
                    <span className="text-slate-200 font-sans font-medium">B.E. Computer Science</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">GRADUATION</span>
                    <span className="text-slate-200 font-medium">June 2028</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800/60">
                  <span className="text-slate-500 block mb-1">CUMULATIVE CGPA</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold font-mono text-cyan-300">
                      {EDUCATION_INFO.cgpa}
                    </span>
                    <span className="text-slate-500 text-[10px]">Verified via Official Transcript</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-slate-400 text-xs font-mono">Target Positioning:</span>
                <span className="text-xs font-medium text-cyan-300 bg-cyan-950/60 px-2.5 py-1 rounded-md border border-cyan-800/60">
                  Software Engineering Intern
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

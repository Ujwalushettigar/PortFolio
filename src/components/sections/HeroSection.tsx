"use client";

import React from "react";
import HeroCore3D from "@/components/canvas/HeroCore3D";
import { PERSONAL_INFO } from "@/data/personal";
import { soundFx } from "@/lib/audio";
import {
  Github,
  Linkedin,
  Mail,
  ArrowDown,
  FileText,
  Code2,
  Terminal,
} from "lucide-react";

interface HeroSectionProps {
  onOpenResume: () => void;
}

export default function HeroSection({ onOpenResume }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-24 pb-16 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Introduction & Actions */}
        <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-space-900/90 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-6 shadow-neon-cyan">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>Undergraduate CSE · Class of 2028</span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-300">CGPA 9.23</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-4">
            <span className="block font-mono text-xs sm:text-sm text-cyan-400 font-semibold tracking-widest uppercase mb-2">
              Hello World, I Am
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400">
              {PERSONAL_INFO.name}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl font-medium text-cyan-300/90 font-mono mb-4">
            Computer Science Engineering Student · Full-Stack Developer
          </p>

          {/* Intro Description */}
          <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-2xl mb-8">
            &ldquo;{PERSONAL_INFO.tagline}&rdquo;
          </p>

          {/* Key CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
            <a
              href="#projects"
              onClick={() => soundFx.playKeyClick(1.1)}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold text-sm shadow-neon-cyan border border-cyan-400/40 transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"
            >
              <span>Explore My Work</span>
              <ArrowDown size={16} />
            </a>

            <button
              onClick={() => {
                soundFx.playChime(620, 0.15);
                onOpenResume();
              }}
              className="px-6 py-3 rounded-xl bg-space-900/80 hover:bg-space-800 text-slate-200 border border-slate-700/80 hover:border-cyan-500/50 font-semibold text-sm transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"
            >
              <FileText size={16} className="text-cyan-400" />
              <span>View Resume</span>
            </button>
          </div>

          {/* Verified Social Connect Links */}
          <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80 w-full">
            <span className="text-xs font-mono text-slate-400 mr-2">Verified:</span>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFx.playKeyClick(0.9)}
              className="p-2.5 rounded-lg bg-space-900/60 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <Github size={18} />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFx.playKeyClick(0.9)}
              className="p-2.5 rounded-lg bg-space-900/60 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </a>

            <a
              href={PERSONAL_INFO.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFx.playKeyClick(0.9)}
              className="px-3 py-2 rounded-lg bg-space-900/60 border border-slate-800 text-xs font-mono text-slate-300 hover:text-amber-400 hover:border-amber-500/40 transition-all flex items-center gap-1.5"
              title="LeetCode Profile (160+ Solved)"
              aria-label="LeetCode Profile"
            >
              <Code2 size={16} className="text-amber-400" />
              <span>LeetCode (160+)</span>
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              onClick={() => soundFx.playKeyClick(0.9)}
              className="p-2.5 rounded-lg bg-space-900/60 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
              title="Direct Email"
              aria-label="Send Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Right Column: 3D Technical Core Artifact */}
        <div className="lg:col-span-5 flex justify-center items-center relative">
          <HeroCore3D />
        </div>
      </div>

      {/* Restrained Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none opacity-70">
        <span className="font-mono text-[10px] tracking-widest text-slate-400 uppercase">
          SCROLL TO EXPLORE
        </span>
        <div className="w-5 h-8 rounded-full border border-slate-700 flex items-start justify-center p-1">
          <div className="w-1.5 h-2 rounded-full bg-cyan-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
}

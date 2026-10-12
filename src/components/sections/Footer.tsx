"use client";

import React from "react";
import { PERSONAL_INFO } from "@/data/personal";
import { soundFx } from "@/lib/audio";
import { ArrowUp, Github, Linkedin, Mail, Code2, Heart } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    soundFx.playKeyClick(1.2);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-slate-800/80 bg-space-950/90 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand & Copyright */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-bold text-sm tracking-tight text-white font-mono">
              {PERSONAL_INFO.name.toUpperCase()}
            </span>
            <span className="text-slate-600">/</span>
            <span className="text-xs font-mono text-cyan-400">CLASS OF 2028</span>
          </div>
          <p className="text-xs text-slate-500 font-mono">
            © {new Date().getFullYear()} Ujwal U Shettigar · All verified portfolio data authentic to resume
          </p>
        </div>

        {/* Social Icons & Back to top */}
        <div className="flex items-center gap-3">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundFx.playKeyClick(0.9)}
            className="p-2 rounded-lg bg-space-900 border border-slate-800 text-slate-400 hover:text-cyan-400 transition-colors"
            title="GitHub"
            aria-label="GitHub Profile"
          >
            <Github size={16} />
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundFx.playKeyClick(0.9)}
            className="p-2 rounded-lg bg-space-900 border border-slate-800 text-slate-400 hover:text-cyan-400 transition-colors"
            title="LinkedIn"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={16} />
          </a>

          <a
            href={PERSONAL_INFO.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundFx.playKeyClick(0.9)}
            className="p-2 rounded-lg bg-space-900 border border-slate-800 text-slate-400 hover:text-amber-400 transition-colors"
            title="LeetCode (160+ Solved)"
            aria-label="LeetCode Profile"
          >
            <Code2 size={16} />
          </a>

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            onClick={() => soundFx.playKeyClick(0.9)}
            className="p-2 rounded-lg bg-space-900 border border-slate-800 text-slate-400 hover:text-cyan-400 transition-colors"
            title="Direct Email"
            aria-label="Send Email"
          >
            <Mail size={16} />
          </a>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 px-3 py-2 rounded-lg bg-space-900 hover:bg-space-850 border border-slate-800 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-all shadow-sm active:scale-95 ml-2"
            title="Back to top"
            aria-label="Back to top"
          >
            <span>TOP</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}

"use client";

import React from "react";
import { TECHNICAL_INTERESTS } from "@/data/personal";
import {
  Sparkles,
  Binary,
  Cpu,
  Gamepad2,
  Bot,
  Terminal,
  ShieldAlert,
} from "lucide-react";

const ICON_MAP: Record<string, React.ReactNode> = {
  Binary: <Binary size={18} className="text-cyan-400" />,
  Cpu: <Cpu size={18} className="text-indigo-400" />,
  Gamepad2: <Gamepad2 size={18} className="text-purple-400" />,
  Bot: <Bot size={18} className="text-blue-400" />,
  Terminal: <Terminal size={18} className="text-emerald-400" />,
  ShieldAlert: <ShieldAlert size={18} className="text-amber-400" />,
};

export default function TechnicalInterestsSection() {
  return (
    <section id="technical-interests" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-8 rounded-lg bg-indigo-950/80 border border-indigo-500/40 flex items-center justify-center text-indigo-400">
            <Sparkles size={16} />
          </div>
          <span className="font-mono text-xs text-indigo-400 uppercase tracking-widest font-semibold">
            Section 06 // Technical Horizon
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
          Continuing Interests & Focus Areas
        </h2>
        <p className="text-sm text-slate-400 mb-8 max-w-xl">
          Areas of active personal exploration and long-term interest. Clearly distinguishing active learning pursuits from completed production software.
        </p>

        {/* Interests Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TECHNICAL_INTERESTS.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-space-900/70 border border-slate-800 hover:border-slate-700/80 shadow-glass-sm transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-lg bg-space-950 border border-slate-800">
                    {ICON_MAP[item.icon] || <Cpu size={18} />}
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-space-850 text-slate-400 border border-slate-800">
                    {item.status}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2 tracking-tight">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-300/90 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/60 text-[10px] font-mono text-slate-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                <span>Continuous Practice & Study</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

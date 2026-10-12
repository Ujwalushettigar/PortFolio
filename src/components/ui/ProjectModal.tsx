"use client";

import React, { useEffect } from "react";
import { Project } from "@/types/portfolio";
import { soundFx } from "@/lib/audio";
import {
  X,
  ExternalLink,
  Github,
  CheckCircle2,
  Layers,
  Shield,
  Server,
  Sparkles,
} from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        soundFx.playKeyClick(0.8);
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-space-950/85 backdrop-blur-md transition-opacity"
        onClick={() => {
          soundFx.playKeyClick(0.8);
          onClose();
        }}
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-3xl rounded-2xl bg-space-900 border border-slate-700/80 shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-800 bg-space-950/50 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-cyan-950/80 border border-cyan-500/40 text-cyan-300">
                {project.category}
              </span>
              <span className="text-xs font-mono text-slate-400">
                {project.year}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm text-cyan-400/90 font-mono mt-0.5">
              {project.subtitle}
            </p>
          </div>
          <button
            onClick={() => {
              soundFx.playKeyClick(0.8);
              onClose();
            }}
            className="p-1.5 rounded-lg bg-space-800/80 border border-slate-700 text-slate-400 hover:text-white hover:bg-space-700 transition-colors"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-300 text-sm leading-relaxed">
          {/* Engineering Overview */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
              <Layers size={14} className="text-cyan-400" />
              <span>Engineering Overview & Problem Solved</span>
            </h3>
            <p className="bg-space-950/40 p-4 rounded-xl border border-slate-800/80 text-slate-300">
              {project.longDescription}
            </p>
          </div>

          {/* Role Modules (if present) */}
          {project.roles && project.roles.length > 0 && (
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <Shield size={14} className="text-cyan-400" />
                <span>Multi-Role Access Architecture (RBAC)</span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {project.roles.map((role, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-space-800/60 border border-slate-700/60 text-center"
                  >
                    <span className="block font-mono text-[10px] text-cyan-400 uppercase">
                      Portal 0{idx + 1}
                    </span>
                    <span className="font-semibold text-slate-200 text-xs">
                      {role}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Engineering Highlights */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
              <Sparkles size={14} className="text-cyan-400" />
              <span>Key Technical Highlights & Implementation</span>
            </h3>
            <ul className="space-y-2">
              {project.highlights.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs sm:text-sm bg-space-800/30 p-2.5 rounded-lg border border-slate-800/60"
                >
                  <CheckCircle2 size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture Notes */}
          {project.architectureNotes && (
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <Server size={14} className="text-cyan-400" />
                <span>Architecture & Reliability Notes</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {project.architectureNotes.map((note, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-space-950/60 border border-slate-800 text-xs text-slate-300 font-mono"
                  >
                    {note}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technology Badges */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md bg-space-800 border border-slate-700/80 font-mono text-xs text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-6 border-t border-slate-800 bg-space-950/60 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs font-mono text-slate-400">
            {project.isPrivateOrAcademic ? (
              <span className="text-amber-400/90 flex items-center gap-1">
                🔒 Academic / Institutional Capstone Repository
              </span>
            ) : (
              <span className="text-emerald-400/90 flex items-center gap-1">
                ✓ Public verified GitHub source
              </span>
            )}
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playKeyClick(1.1)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-space-800 hover:bg-space-700 text-slate-200 border border-slate-700 text-xs font-medium transition-colors"
              >
                <Github size={14} />
                <span>Source Code</span>
                <ExternalLink size={12} className="opacity-60" />
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playKeyClick(1.2)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white shadow-neon-cyan text-xs font-semibold transition-all"
              >
                <span>Live Deployment</span>
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

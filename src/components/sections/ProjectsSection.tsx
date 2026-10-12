"use client";

import React, { useState } from "react";
import { PROJECTS } from "@/data/projects";
import { Project } from "@/types/portfolio";
import { soundFx } from "@/lib/audio";
import {
  FolderGit2,
  ExternalLink,
  Github,
  Layers,
  ArrowRight,
  ShieldCheck,
  Cpu,
  QrCode,
  CheckSquare,
  Sparkles,
  TrendingUp,
} from "lucide-react";

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

// Custom Technical Visuals per project (never fabricated screenshots)
function ProjectVisualGraphic({ project }: { project: Project }) {
  if (project.id === "quickfix-grocery") {
    return (
      <div className="w-full h-48 bg-gradient-to-br from-space-950 via-space-900 to-cyan-950/40 p-4 flex flex-col justify-between border-b border-slate-800 relative overflow-hidden">
        <div className="flex items-center justify-between text-[10px] font-mono text-cyan-400">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            RBAC 4-TIER PIPELINE
          </span>
          <span className="text-slate-500">SUPABASE REALTIME</span>
        </div>
        {/* 4-Node Pipeline Flow */}
        <div className="grid grid-cols-4 gap-1.5 my-auto">
          {[
            { label: "Customer", code: "ORDER" },
            { label: "Picker", code: "CONFIRM" },
            { label: "Sub-Wait", code: "SUBST" },
            { label: "Delivery", code: "ROUTING" },
          ].map((step, idx) => (
            <div
              key={idx}
              className="bg-space-850/80 border border-cyan-500/30 rounded-lg p-2 text-center shadow-sm"
            >
              <span className="text-[8px] font-mono text-slate-400 block uppercase">
                {step.code}
              </span>
              <span className="text-[11px] font-semibold text-slate-200">
                {step.label}
              </span>
            </div>
          ))}
        </div>
        <div className="text-[9px] font-mono text-slate-500 flex justify-between">
          <span>STORE ANALYTICS: ACTIVE</span>
          <span className="text-cyan-400">ZERO MOCK DATA</span>
        </div>
      </div>
    );
  }

  if (project.id === "ai-doc-intelligence") {
    return (
      <div className="w-full h-48 bg-gradient-to-br from-space-950 via-space-900 to-indigo-950/40 p-4 flex flex-col justify-between border-b border-slate-800 relative overflow-hidden">
        <div className="flex items-center justify-between text-[10px] font-mono text-indigo-400">
          <span className="flex items-center gap-1.5">
            <Cpu size={12} className="text-indigo-400" />
            GEMINI VISION OCR ENGINE
          </span>
          <span className="text-slate-500">FIREBASE PERSISTENCE</span>
        </div>
        {/* Vision Scanner Bounding Boxes */}
        <div className="relative border border-dashed border-indigo-500/40 rounded-lg p-3 bg-space-900/60 my-auto">
          <div className="flex justify-between items-center text-xs font-mono mb-2">
            <span className="text-slate-400 text-[10px]">DOCUMENT BOUNDS</span>
            <span className="text-emerald-400 text-[10px]">99.4% CONFIDENCE</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
            <div className="bg-indigo-950/80 border border-indigo-500/40 p-1.5 rounded">
              <span className="text-slate-400 block">REGISTRATION DATE:</span>
              <span className="text-cyan-300 font-semibold">[DETECTED]</span>
            </div>
            <div className="bg-indigo-950/80 border border-indigo-500/40 p-1.5 rounded">
              <span className="text-slate-400 block">EXPIRATION DATE:</span>
              <span className="text-indigo-300 font-semibold">[EXTRACTED]</span>
            </div>
          </div>
        </div>
        <div className="text-[9px] font-mono text-slate-500 flex justify-between">
          <span>MULTIMODAL AI PIPELINE</span>
          <span className="text-indigo-400">AUTOMATED EXTRACT</span>
        </div>
      </div>
    );
  }

  if (project.id === "resto-application") {
    return (
      <div className="w-full h-48 bg-gradient-to-br from-space-950 via-space-900 to-blue-950/40 p-4 flex flex-col justify-between border-b border-slate-800 relative overflow-hidden">
        <div className="flex items-center justify-between text-[10px] font-mono text-blue-400">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            LIVE VERCEL DEPLOYMENT
          </span>
          <span className="text-slate-500">NEXT.JS + TAILWIND</span>
        </div>
        <div className="my-auto space-y-2">
          <div className="h-6 rounded bg-space-800/80 border border-slate-700/60 flex items-center px-2.5 justify-between">
            <span className="font-mono text-[10px] text-slate-300">Resto Culinary Portal</span>
            <span className="text-[9px] font-mono text-emerald-400">HTTP 200 OK</span>
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            <div className="h-10 rounded bg-space-850 border border-slate-800 p-1.5 text-[9px] font-mono text-slate-400">
              Interactive Menu
            </div>
            <div className="h-10 rounded bg-space-850 border border-slate-800 p-1.5 text-[9px] font-mono text-slate-400">
              Dark Theming
            </div>
            <div className="h-10 rounded bg-space-850 border border-slate-800 p-1.5 text-[9px] font-mono text-slate-400">
              ESLint Modular
            </div>
          </div>
        </div>
        <div className="text-[9px] font-mono text-slate-500 flex justify-between">
          <span>RESPONSIVE CLIENT</span>
          <span className="text-blue-400">resto-one-delta.vercel.app</span>
        </div>
      </div>
    );
  }

  if (project.id === "fire-todo") {
    return (
      <div className="w-full h-48 bg-gradient-to-br from-space-950 via-space-900 to-emerald-950/40 p-4 flex flex-col justify-between border-b border-slate-800 relative overflow-hidden">
        <div className="flex items-center justify-between text-[10px] font-mono text-emerald-400">
          <span className="flex items-center gap-1.5">
            <CheckSquare size={12} className="text-emerald-400" />
            SUPABASE STORAGE & REST
          </span>
          <span className="text-slate-500">ZERO DATA LOSS</span>
        </div>
        <div className="my-auto space-y-1.5">
          <div className="flex items-center gap-2 p-2 rounded bg-space-850 border border-emerald-500/20 text-xs font-mono text-slate-200">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Task sync: cloud database active</span>
          </div>
          <div className="flex items-center gap-2 p-2 rounded bg-space-850 border border-slate-800 text-xs font-mono text-slate-400">
            <span className="w-2 h-2 rounded-full bg-slate-600" />
            <span>State persistence across sessions</span>
          </div>
        </div>
        <div className="text-[9px] font-mono text-slate-500 flex justify-between">
          <span>CROSS-PLATFORM SYNC</span>
          <span className="text-emerald-400">SYNCED</span>
        </div>
      </div>
    );
  }

  if (project.id === "smart-curriculum-attendance") {
    return (
      <div className="w-full h-48 bg-gradient-to-br from-space-950 via-space-900 to-amber-950/40 p-4 flex flex-col justify-between border-b border-slate-800 relative overflow-hidden">
        <div className="flex items-center justify-between text-[10px] font-mono text-amber-400">
          <span className="flex items-center gap-1.5">
            <QrCode size={12} className="text-amber-400" />
            LOCALIZED QR SCANNING
          </span>
          <span className="text-slate-500">FIGMA PROTOTYPE</span>
        </div>
        <div className="my-auto text-center p-3 rounded-lg border border-amber-500/30 bg-space-900/60">
          <span className="font-mono text-xs text-amber-300 font-semibold block">
            Speeding up lecture attendance logging
          </span>
          <span className="text-[10px] font-mono text-slate-400 block mt-1">
            Dynamic QR verification · Eliminates proxy logging
          </span>
        </div>
        <div className="text-[9px] font-mono text-slate-500 flex justify-between">
          <span>ACADEMIC PROJECT</span>
          <span className="text-amber-400">SAHYADRI CSE</span>
        </div>
      </div>
    );
  }

  // Default / AI Finance Coach
  return (
    <div className="w-full h-48 bg-gradient-to-br from-space-950 via-space-900 to-purple-950/40 p-4 flex flex-col justify-between border-b border-slate-800 relative overflow-hidden">
      <div className="flex items-center justify-between text-[10px] font-mono text-purple-400">
        <span className="flex items-center gap-1.5">
          <TrendingUp size={12} className="text-purple-400" />
          FINANCIAL ANALYTICS ENGINE
        </span>
        <span className="text-slate-500">AUTOMATIC CATEGORIZATION</span>
      </div>
      <div className="my-auto p-3 rounded-lg border border-purple-500/30 bg-space-900/60">
        <span className="text-xs font-mono text-purple-200 block font-semibold">
          Income vs Spending Pattern Classifier
        </span>
        <span className="text-[10px] font-mono text-slate-400 block mt-1">
          Automated budget recommendations & transaction tagging
        </span>
      </div>
      <div className="text-[9px] font-mono text-slate-500 flex justify-between">
        <span>PUBLIC GITHUB SOURCE</span>
        <span className="text-purple-400">AI COACH</span>
      </div>
    </div>
  );
}

export default function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  const [filterCategory, setFilterCategory] = useState<string>("All");

  const categories = ["All", "Full-Stack", "AI & Vision", "Integration", "Academic"];

  const filteredProjects =
    filterCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === filterCategory);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                <FolderGit2 size={16} />
              </div>
              <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest font-semibold">
                Section 03 // Production & Applied Works
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Engineering Projects
            </h2>
            <p className="text-sm text-slate-400 mt-1 max-w-xl">
              Authentic applications from my resume and verified GitHub repositories.
              Click any project to inspect its architecture, engineering highlights, and live links.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 bg-space-900/80 p-1 rounded-xl border border-slate-800 self-start md:self-auto overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  soundFx.playKeyClick(0.9);
                  setFilterCategory(cat);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap transition-all ${
                  filterCategory === cat
                    ? "bg-cyan-600 text-white shadow-neon-cyan font-semibold"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-space-900/80 border border-slate-800/90 hover:border-cyan-500/50 shadow-glass-sm hover:shadow-neon-cyan transition-all duration-300 flex flex-col overflow-hidden relative"
            >
              {/* Technical Schematic Illustration */}
              <ProjectVisualGraphic project={project} />

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-space-800 text-cyan-300 border border-slate-700/80">
                      {project.category}
                    </span>
                    <span className="font-mono text-xs text-slate-500">
                      {project.year}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors tracking-tight mb-1">
                    {project.title}
                  </h3>

                  <p className="text-xs font-mono text-cyan-400/80 mb-3 line-clamp-1">
                    {project.subtitle}
                  </p>

                  <p className="text-xs text-slate-300/90 leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-space-950/70 text-[10px] font-mono text-slate-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-1.5 py-0.5 rounded bg-space-950/70 text-[10px] font-mono text-slate-500">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => {
                      soundFx.playChime(580, 0.15);
                      onSelectProject(project);
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>View Architecture</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          e.stopPropagation();
                          soundFx.playKeyClick(1.0);
                        }}
                        className="p-1.5 rounded-lg bg-space-800 hover:bg-space-700 text-slate-300 hover:text-white transition-colors"
                        title="GitHub Repository"
                        aria-label="GitHub Repository"
                      >
                        <Github size={14} />
                      </a>
                    )}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          e.stopPropagation();
                          soundFx.playKeyClick(1.0);
                        }}
                        className="p-1.5 rounded-lg bg-cyan-950 border border-cyan-500/40 text-cyan-400 hover:text-cyan-200 transition-colors"
                        title="Live Deployment"
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

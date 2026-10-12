"use client";

import React, { useEffect } from "react";
import confetti from "canvas-confetti";
import { soundFx } from "@/lib/audio";
import { PERSONAL_INFO, EDUCATION_INFO, PROBLEM_SOLVING_STATS } from "@/data/personal";
import {
  X,
  Download,
  ExternalLink,
  GraduationCap,
  Award,
  Code2,
  Mail,
  MapPin,
  CheckCircle,
} from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        soundFx.playKeyClick(0.8);
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownload = () => {
    soundFx.playChime(640, 0.2);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 },
    });
  };

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

      {/* Modal Content */}
      <div className="relative w-full max-w-4xl rounded-2xl bg-space-900 border border-slate-700/80 shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-6 border-b border-slate-800 bg-space-950/70 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-400">
              <GraduationCap size={22} />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {PERSONAL_INFO.name} — Resume
              </h2>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400 font-mono mt-0.5">
                <span className="flex items-center gap-1">
                  <MapPin size={12} className="text-cyan-400" />
                  {PERSONAL_INFO.location}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Mail size={12} className="text-cyan-400" />
                  {PERSONAL_INFO.email}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/Ujwal_U_Shettigar_Resume.pdf"
              download="Ujwal_U_Shettigar_Resume.pdf"
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold shadow-neon-cyan transition-all"
            >
              <Download size={14} />
              <span>Download PDF</span>
            </a>
            <button
              onClick={() => {
                soundFx.playKeyClick(0.8);
                onClose();
              }}
              className="p-1.5 rounded-lg bg-space-800 border border-slate-700 text-slate-400 hover:text-white transition-colors"
              aria-label="Close resume modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Scrollable Summary & Preview */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-300 text-sm">
          {/* Education Block */}
          <div className="p-4 rounded-xl bg-space-950/60 border border-slate-800">
            <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
              <div className="flex items-center gap-2">
                <GraduationCap size={16} className="text-cyan-400" />
                <h3 className="font-semibold text-white">
                  {EDUCATION_INFO.institution}
                </h3>
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-cyan-950 border border-cyan-500/40 text-cyan-300">
                CGPA: {EDUCATION_INFO.cgpa}
              </span>
            </div>
            <p className="text-xs text-slate-300 font-mono">
              {EDUCATION_INFO.degree} • Expected Graduation: {EDUCATION_INFO.expectedGraduation}
            </p>
            <div className="mt-3 pt-3 border-t border-slate-800/80">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1.5">
                Relevant Coursework:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {EDUCATION_INFO.coursework.map((course, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded bg-space-800 text-slate-300 text-xs font-mono border border-slate-700/60"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Problem Solving & DSA Profile */}
          <div className="p-4 rounded-xl bg-space-950/60 border border-slate-800">
            <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
              <div className="flex items-center gap-2">
                <Award size={16} className="text-amber-400" />
                <h3 className="font-semibold text-white">
                  Problem Solving & Algorithms
                </h3>
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-amber-950/60 border border-amber-500/40 text-amber-300">
                {PROBLEM_SOLVING_STATS.problemsSolved} Problems Solved on LeetCode ({PROBLEM_SOLVING_STATS.language})
              </span>
            </div>
            <p className="text-xs text-slate-400 mb-2">
              Strongest in Arrays, Math, and Hash Table categories. Implemented with STL containers (std::unordered_map, std::priority_queue) and algorithmic patterns (monotonic stacks, binary search, bucket sort).
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={PROBLEM_SOLVING_STATS.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1 underline underline-offset-4"
              >
                <span>Verified LeetCode Profile</span>
                <ExternalLink size={12} />
              </a>
              <a
                href={PROBLEM_SOLVING_STATS.dsaRepoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1 underline underline-offset-4"
              >
                <span>DSA GitHub Repo</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* Quick Technical Competencies */}
          <div className="p-4 rounded-xl bg-space-950/60 border border-slate-800">
            <div className="flex items-center gap-2 mb-3">
              <Code2 size={16} className="text-cyan-400" />
              <h3 className="font-semibold text-white">Technical Skill Summary</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="bg-space-800/50 p-2.5 rounded-lg border border-slate-800">
                <span className="font-mono text-cyan-400 font-semibold block mb-1">
                  Languages & Core:
                </span>
                <span className="text-slate-300">
                  C++, JavaScript, Object-Oriented Programming (OOP), STL, DSA
                </span>
              </div>
              <div className="bg-space-800/50 p-2.5 rounded-lg border border-slate-800">
                <span className="font-mono text-cyan-400 font-semibold block mb-1">
                  Frontend:
                </span>
                <span className="text-slate-300">
                  React.js, Next.js, Vite, Tailwind CSS, HTML/CSS
                </span>
              </div>
              <div className="bg-space-800/50 p-2.5 rounded-lg border border-slate-800">
                <span className="font-mono text-cyan-400 font-semibold block mb-1">
                  Backend & Databases:
                </span>
                <span className="text-slate-300">
                  Node.js, Express.js, REST APIs, Supabase, Firebase, SQL, RBAC
                </span>
              </div>
              <div className="bg-space-800/50 p-2.5 rounded-lg border border-slate-800">
                <span className="font-mono text-cyan-400 font-semibold block mb-1">
                  Tools & Emerging:
                </span>
                <span className="text-slate-300">
                  Git/GitHub, Debugging, Figma, ESLint, Gemini Vision AI, OpenGL
                </span>
              </div>
            </div>
          </div>

          {/* PDF Viewer Embed Frame */}
          <div className="rounded-xl overflow-hidden border border-slate-800 bg-space-950">
            <div className="p-3 bg-space-900 border-b border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Authoritative Resume PDF Document Preview
              </span>
              <a
                href="/Ujwal_U_Shettigar_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 flex items-center gap-1"
              >
                <span>Open Raw PDF in Full Window</span>
                <ExternalLink size={12} />
              </a>
            </div>
            <iframe
              src="/Ujwal_U_Shettigar_Resume.pdf#toolbar=0"
              className="w-full h-[380px] bg-slate-900"
              title="Ujwal U Shettigar Resume"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

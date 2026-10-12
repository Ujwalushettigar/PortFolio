"use client";

import React from "react";
import { EDUCATION_INFO } from "@/data/personal";
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  BookOpen,
  CheckCircle2,
} from "lucide-react";

export default function EducationSection() {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-8 rounded-lg bg-blue-950/80 border border-blue-500/40 flex items-center justify-center text-blue-400">
            <GraduationCap size={16} />
          </div>
          <span className="font-mono text-xs text-blue-400 uppercase tracking-widest font-semibold">
            Section 05 // Academic Foundations
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
          Education & Coursework
        </h2>
        <p className="text-sm text-slate-400 mb-8 max-w-xl">
          Formal academic training in computer science engineering, core theoretical systems, and software engineering principles.
        </p>

        {/* Education Highlight Card */}
        <div className="rounded-2xl bg-space-900/90 border border-slate-800 p-6 sm:p-8 shadow-glass-md relative overflow-hidden">
          {/* Top Edge Ambient Line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500" />

          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-slate-800/80">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-blue-950/80 border border-blue-500/40 text-blue-300">
                  Undergraduate Degree
                </span>
                <span className="text-xs font-mono text-slate-500">2024 – 2028</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {EDUCATION_INFO.institution}
              </h3>
              <p className="text-base text-cyan-300 font-medium font-sans">
                {EDUCATION_INFO.degree}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 pt-1">
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} className="text-cyan-400" />
                  {EDUCATION_INFO.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} className="text-cyan-400" />
                  Expected Graduation: {EDUCATION_INFO.expectedGraduation}
                </span>
              </div>
            </div>

            {/* CGPA Badge */}
            <div className="bg-space-950/80 border border-cyan-500/30 rounded-2xl p-5 text-center min-w-[160px] shadow-glass-sm self-start">
              <span className="text-[10px] font-mono uppercase text-slate-400 block tracking-widest">
                CUMULATIVE CGPA
              </span>
              <span className="text-3xl sm:text-4xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 block my-1">
                {EDUCATION_INFO.cgpa}
              </span>
              <span className="text-[10px] font-mono text-emerald-400 flex items-center justify-center gap-1">
                <CheckCircle2 size={12} />
                <span>Verified in Resume</span>
              </span>
            </div>
          </div>

          {/* Relevant Coursework */}
          <div className="pt-6">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
              <BookOpen size={14} className="text-cyan-400" />
              <span>Key Relevant Coursework</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
              {EDUCATION_INFO.coursework.map((course, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-space-950/60 border border-slate-800/80 flex items-center gap-2.5 text-xs text-slate-200"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                  <span className="font-medium">{course}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

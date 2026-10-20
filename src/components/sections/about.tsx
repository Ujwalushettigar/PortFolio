"use client";

import React from "react";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";
import { MapPin, GraduationCap, Code, Rocket, Gamepad2, Brain, Terminal } from "lucide-react";
import { config } from "@/data/config";

export const AboutSection = () => {
  return (
    <SectionWrapper id="about" className="max-w-6xl mx-auto py-20 px-4">
      <SectionHeader
        id="about"
        title="About Me"
        desc="Engineering philosophy, academic foundation, and technical aspirations."
        className="mb-14"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Core Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="lg:col-span-7 flex flex-col justify-between"
        >
          <Card className="h-full glass-panel flex flex-col justify-between">
            <CardContent className="p-6 sm:p-8 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-display text-foreground">
                    Ujwal U Shettigar
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Udupi, Karnataka, India</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <p>
                  I am a <strong className="text-foreground">Computer Science Engineering student</strong> at Sahyadri College of Engineering and Management, Mangalore, with practical hands-on experience in full-stack web development, backend integration, and database management.
                </p>
                <p>
                  My engineering workflow centers on building reliable applications with <span className="text-cyan-400 font-medium">React, Vite, Node.js, Express.js, Supabase,</span> and <span className="text-cyan-400 font-medium">REST APIs</span>. I have implemented robust authentication, multi-tenant state coordination, and role-based access control (RBAC) across complex multi-role web platforms.
                </p>
                <p>
                  Grounding my software engineering is a disciplined foundation in <span className="text-foreground font-semibold">C++, Object-Oriented Programming (OOP), the Standard Template Library (STL), and Data Structures &amp; Algorithms</span>. In the long term, I am channeling this mathematical and systems foundation toward <strong className="text-foreground">game development and graphics programming</strong>.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-2">
                <Badge variant="outline" className="border-cyan-500/30 text-cyan-400 bg-cyan-500/5 text-xs py-1 px-3">
                  Undergraduate CSE · Class of June 2028
                </Badge>
                <Badge variant="outline" className="border-border text-muted-foreground bg-secondary/30 text-xs py-1 px-3">
                  {config.personal.cgpaFormatted}
                </Badge>
                <Badge variant="outline" className="border-emerald-500/30 text-emerald-400 bg-emerald-500/5 text-xs py-1 px-3">
                  {config.leetcodeStats.totalSolvedDisplay} LeetCode Solved in C++
                </Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Right Column: Key Focus Areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="lg:col-span-5 flex flex-col gap-4"
        >
          <Card className="glass-card-interactive hover:border-cyan-500/40">
            <CardContent className="p-5 flex items-start gap-4">
              <div className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 shrink-0 mt-0.5">
                <Code className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold text-foreground">Full-Stack &amp; Systems Architecture</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Designing decoupled frontend/backend services, role-based workflows, and real-time database synchronization with Supabase and Firebase.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card-interactive hover:border-amber-500/40">
            <CardContent className="p-5 flex items-start gap-4">
              <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 shrink-0 mt-0.5">
                <Brain className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold text-foreground">Core CS &amp; Algorithmic Foundations</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Rigorous focus on Data Structures and Algorithms in C++, leveraging STL containers, monotonic stacks, and binary search boundaries.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card-interactive hover:border-purple-500/40">
            <CardContent className="p-5 flex items-start gap-4">
              <div className="p-2.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 shrink-0 mt-0.5">
                <Gamepad2 className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold text-foreground">Graphics Programming &amp; Game Dev</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Long-term aspiration focused on low-level graphics rendering with OpenGL, shaders, and real-time interactive simulation engines.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card-interactive hover:border-emerald-500/40">
            <CardContent className="p-5 flex items-start gap-4">
              <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0 mt-0.5">
                <Rocket className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold text-foreground">Generative AI &amp; Multimodal Vision</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Harnessing Google Gemini AI APIs for automated document analysis, spatial OCR, and date-extraction pipelines.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;

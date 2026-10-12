"use client";

import React from "react";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";
import { GraduationCap, Award, Calendar, BookOpen, CheckCircle } from "lucide-react";

const COURSEWORK = [
  { name: "Data Structures and Algorithms", code: "Core CS" },
  { name: "AI and ML Fundamentals", code: "Intelligence" },
  { name: "Cloud Computing", code: "Infrastructure" },
  { name: "Database Management Systems", code: "Databases" },
  { name: "Object-Oriented Programming", code: "Paradigm" },
  { name: "Advanced Web Technologies", code: "Full-Stack" },
];

export const EducationSection = () => {
  return (
    <SectionWrapper id="education" className="max-w-5xl mx-auto py-20 px-4">
      <SectionHeader
        id="education"
        title="Education"
        desc="Formal academic degree, GPA performance, and verified core coursework."
        className="mb-14"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        <Card className="bg-secondary/10 border-border/70 backdrop-blur-sm shadow-md overflow-hidden">
          <CardHeader className="p-6 sm:p-8 border-b border-border/50 bg-secondary/20">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shrink-0 mt-1">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div>
                  <CardTitle className="text-xl sm:text-2xl font-bold font-display text-foreground">
                    Sahyadri College of Engineering and Management
                  </CardTitle>
                  <p className="text-sm font-medium text-cyan-400 mt-1">
                    Bachelor of Engineering (B.E.) in Computer Science &amp; Engineering
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Nov 2024 – June 2028 (Expected) · Mangalore, Karnataka</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:items-end gap-1.5 self-start md:self-auto">
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-sm font-bold">
                  <Award className="w-4 h-4 text-cyan-400" />
                  <span>CGPA: 9.23 / 10.0</span>
                </div>
                <span className="text-[11px] text-muted-foreground">Class of 2028 · Top Quartile</span>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-6 sm:p-8 space-y-6">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-cyan-400" />
                Relevant Technical Coursework
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {COURSEWORK.map((course) => (
                  <div
                    key={course.name}
                    className="p-3.5 rounded-xl bg-secondary/30 border border-border/60 hover:border-cyan-500/30 transition-colors flex items-start gap-3"
                  >
                    <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold text-foreground leading-snug">
                        {course.name}
                      </p>
                      <span className="text-[10px] text-muted-foreground font-mono block mt-0.5">
                        {course.code}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-border/40 text-xs text-muted-foreground flex flex-col sm:flex-row items-center justify-between gap-3">
              <span>Department of Computer Science &amp; Engineering, Sahyadri Campus</span>
              <Badge variant="outline" className="border-border text-xs bg-secondary/20">
                Accredited by NBA &amp; NAAC Grade A
              </Badge>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </SectionWrapper>
  );
};

export default EducationSection;

"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { SKILLS, SkillNames, type Skill } from "@/data/constants";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, Terminal, Sparkles, Filter } from "lucide-react";

// Categorize skills based on resume specification
export const SKILL_CATEGORIES = {
  ALL: "All Skills",
  LANG_CORE: "Languages & Core CS",
  FRONTEND: "Frontend",
  BACKEND: "Backend & Databases",
  TOOLS: "Tools & Practices",
  EMERGING: "Emerging & Systems",
} as const;

export type SkillCategory = (typeof SKILL_CATEGORIES)[keyof typeof SKILL_CATEGORIES];

const SKILL_CATEGORY_MAP: Record<string, { category: SkillCategory; application: string }> = {
  cpp: { category: SKILL_CATEGORIES.LANG_CORE, application: "160+ LeetCode DSA Solutions, algorithmic patterns, STL containers" },
  js: { category: SKILL_CATEGORIES.LANG_CORE, application: "QuickFix Grocery, Resto, AIDoc, fireTodo, full-stack client/server workflows" },
  oop: { category: SKILL_CATEGORIES.LANG_CORE, application: "Class hierarchies, encapsulation, clean software architecture across C++ & JS" },
  stl: { category: SKILL_CATEGORIES.LANG_CORE, application: "std::unordered_map, std::priority_queue, custom sorting & boundary lookups" },
  dsa: { category: SKILL_CATEGORIES.LANG_CORE, application: "Monotonic stacks, binary search, bucket sort, frequency maps, graph traversal" },
  react: { category: SKILL_CATEGORIES.FRONTEND, application: "QuickFix Grocery (multi-role portals), Resto, fireTodo, modern reactive UIs" },
  nextjs: { category: SKILL_CATEGORIES.FRONTEND, application: "Resto, Personal Portfolio, App Router, SSR/SSG, deployed live on Vercel" },
  tailwind: { category: SKILL_CATEGORIES.FRONTEND, application: "Resto, QuickFix Grocery, modern utility-first dark space styling" },
  html: { category: SKILL_CATEGORIES.FRONTEND, application: "Semantic structuring, accessible DOM hygiene, and SEO metadata standards" },
  css: { category: SKILL_CATEGORIES.FRONTEND, application: "Fluid layouts, CSS Grid, Flexbox, custom responsive breakpoints, animations" },
  nodejs: { category: SKILL_CATEGORIES.BACKEND, application: "QuickFix Grocery, AIDoc, fireTodo, asynchronous runtime services" },
  express: { category: SKILL_CATEGORIES.BACKEND, application: "REST API routing, authentication middlewares, controller pipelines" },
  supabase: { category: SKILL_CATEGORIES.BACKEND, application: "QuickFix Grocery (Auth RBAC & Realtime streams), fireTodo (cloud sync)" },
  firebase: { category: SKILL_CATEGORIES.BACKEND, application: "AIDoc (Cloud Firestore document records & date metadata persistence)" },
  sql: { category: SKILL_CATEGORIES.BACKEND, application: "Relational schema design, normalization, foreign keys, and query optimization" },
  git: { category: SKILL_CATEGORIES.TOOLS, application: "Version control, feature branching, clean rebase commits, repository maintenance" },
  github: { category: SKILL_CATEGORIES.TOOLS, application: "Multi-repo open source collaboration, pull request reviews, documentation" },
  figma: { category: SKILL_CATEGORIES.TOOLS, application: "Smart Curriculum Attendance System UI/UX wireframes & interactive prototypes" },
  eslint: { category: SKILL_CATEGORIES.TOOLS, application: "Static analysis, syntax enforcement, and code hygiene in Resto and QuickFix" },
  linux: { category: SKILL_CATEGORIES.TOOLS, application: "Developer shell environments, bash utilities, package management, scripting" },
  opengl: { category: SKILL_CATEGORIES.EMERGING, application: "Computer graphics programming, shader pipeline fundamentals, 3D math" },
  gemini: { category: SKILL_CATEGORIES.EMERGING, application: "AIDoc (Multimodal vision OCR, registration/expiry date extraction pipeline)" },
};

const SkillsSection = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill>(SKILLS[SkillNames.CPP]);
  const [activeCategory, setActiveCategory] = useState<SkillCategory>(SKILL_CATEGORIES.ALL);

  useEffect(() => {
    const frame = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(frame);
  }, []);

  const allSkills = Object.values(SKILLS);
  const filteredSkills = activeCategory === SKILL_CATEGORIES.ALL
    ? allSkills
    : allSkills.filter((s) => SKILL_CATEGORY_MAP[s.name]?.category === activeCategory);

  const selectedMeta = SKILL_CATEGORY_MAP[selectedSkill.name] ?? {
    category: SKILL_CATEGORIES.ALL,
    application: "Verified practical engineering implementation",
  };

  return (
    <SectionWrapper
      id="skills"
      className="flex w-full min-h-screen flex-col justify-start py-20 px-4 max-w-6xl mx-auto"
    >
      <SectionHeader
        id="skills"
        title="Skills & Tech Stack"
        desc="Interactive 3D keyboard matrix and verified software engineering competencies."
        className="mb-10 static"
      />

      {/* Synchronized Skills Detail HUD Panel */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="w-full mb-8"
      >
        <Card className="bg-gradient-to-r from-secondary/30 via-secondary/20 to-secondary/30 border-cyan-500/30 backdrop-blur-md shadow-lg overflow-hidden">
          <CardContent className="p-6 sm:p-7">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-border/40">
              <div className="flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center p-2.5 border shadow-inner transition-transform duration-300"
                  style={{
                    backgroundColor: `${selectedSkill.color}15`,
                    borderColor: `${selectedSkill.color}50`,
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={selectedSkill.icon}
                    alt={selectedSkill.label}
                    className="w-full h-full object-contain drop-shadow"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2.5">
                    <h3 className="text-2xl font-bold font-display text-foreground">
                      {selectedSkill.label}
                    </h3>
                    <Badge
                      variant="outline"
                      className="text-xs font-mono border-cyan-500/30 text-cyan-400 bg-cyan-500/5"
                    >
                      {selectedMeta.category}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Click any keycap or grid badge below to inspect verified practical application
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 self-start sm:self-auto">
                <span className="text-xs text-muted-foreground font-mono">
                  KEY SHORTCUT:
                </span>
                <kbd className="px-2.5 py-1 text-xs font-mono font-semibold rounded bg-secondary/80 border border-border text-foreground shadow-sm">
                  {selectedSkill.shortcut ? selectedSkill.shortcut.replace("Key", "") : "SELECT"}
                </kbd>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <div className="space-y-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                  Technical Capability
                </span>
                <p className="text-sm text-foreground font-medium leading-relaxed">
                  {selectedSkill.shortDescription}
                </p>
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Verified Project Application
                </span>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {selectedMeta.application}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-8 justify-center sm:justify-start">
        <div className="hidden sm:flex items-center gap-1.5 text-xs text-muted-foreground mr-2 font-mono">
          <Filter className="w-3.5 h-3.5 text-cyan-400" />
          <span>FILTER:</span>
        </div>
        {Object.values(SKILL_CATEGORIES).map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={cn(
              "px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border",
              activeCategory === category
                ? "bg-cyan-500 text-black border-cyan-400 font-semibold shadow-sm"
                : "bg-secondary/20 text-muted-foreground border-border hover:bg-secondary/50 hover:text-foreground"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Persistent Visible Skills Grid */}
      <motion.ul
        layout
        className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4"
      >
        <AnimatePresence>
          {filteredSkills.map((skill) => {
            const isSelected = selectedSkill.name === skill.name;
            return (
              <motion.li
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                onClick={() => setSelectedSkill(skill)}
                style={{ "--skill": skill.color } as CSSProperties}
                className={cn(
                  "cursor-pointer group relative flex flex-col items-center justify-center gap-2.5 overflow-hidden rounded-2xl p-4",
                  "border bg-secondary/20 backdrop-blur-sm transition-all duration-200",
                  isSelected
                    ? "border-cyan-400 bg-secondary/50 shadow-[0_0_25px_-5px_var(--skill)] ring-1 ring-cyan-400/50"
                    : "border-border/60 hover:-translate-y-1 hover:border-[var(--skill)] hover:bg-secondary/40"
                )}
              >
                {/* per-skill colored glow */}
                <span
                  aria-hidden
                  style={{ background: "var(--skill)" }}
                  className={cn(
                    "pointer-events-none absolute -top-6 h-16 w-16 rounded-full blur-2xl transition-opacity duration-300",
                    isSelected ? "opacity-70" : "opacity-20 group-hover:opacity-60"
                  )}
                />

                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={skill.icon}
                  alt={skill.label}
                  width={40}
                  height={40}
                  loading="lazy"
                  className="relative size-8 object-contain drop-shadow-sm transition-transform duration-200 group-hover:scale-110 md:size-9"
                />

                <span
                  className={cn(
                    "relative text-center text-xs font-medium transition-colors md:text-sm",
                    isSelected ? "text-foreground font-semibold" : "text-foreground/80 group-hover:text-foreground"
                  )}
                >
                  {skill.label}
                </span>

                {isSelected && (
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse mt-0.5" />
                )}
              </motion.li>
            );
          })}
        </AnimatePresence>
      </motion.ul>
    </SectionWrapper>
  );
};

export default SkillsSection;

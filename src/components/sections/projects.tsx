"use client";
import React, { useState } from "react";
import {
  ResponsiveDialog,
  ResponsiveDialogContent,
  ResponsiveDialogTrigger,
} from "../ui/responsive-dialog";
import { FloatingDock } from "../ui/floating-dock";
import { ScrollArea } from "../ui/scroll-area";
import Link from "next/link";
import { ArrowUpRight, Github, ExternalLink, Layers, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import projects, { Project } from "@/data/projects";
import { SectionHeader } from "./section-header";

import SectionWrapper from "../ui/section-wrapper";
import ScrollingPreview from "../scrolling-preview";

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState<"featured" | "all">("featured");

  const filteredProjects = activeTab === "featured"
    ? projects.filter((p) => p.featured)
    : projects;

  return (
    <SectionWrapper id="projects" className="max-w-7xl mx-auto py-20 px-4">
      <SectionHeader
        id="projects"
        title="Featured Projects"
        desc="Production systems, multi-role web architectures, and multimodal AI pipelines."
        className="mb-8"
      />

      {/* Recruiter-friendly view filter */}
      <div className="flex items-center justify-center gap-2 mb-10">
        <button
          onClick={() => setActiveTab("featured")}
          className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all duration-200 border ${
            activeTab === "featured"
              ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/40 shadow-sm font-semibold"
              : "glass-subpanel text-muted-foreground hover:text-foreground hover:border-border"
          }`}
          aria-pressed={activeTab === "featured"}
        >
          Featured Flagships ({projects.filter((p) => p.featured).length})
        </button>
        <button
          onClick={() => setActiveTab("all")}
          className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all duration-200 border ${
            activeTab === "all"
              ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/40 shadow-sm font-semibold"
              : "glass-subpanel text-muted-foreground hover:text-foreground hover:border-border"
          }`}
          aria-pressed={activeTab === "all"}
        >
          All Engineering Projects ({projects.length})
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card className="glass-card-interactive flex flex-col justify-between overflow-hidden group">
      <div>
        {/* Visual Preview Container */}
        <div
          className="relative w-full overflow-hidden bg-black/40 border-b border-border/50"
          style={{ aspectRatio: "16/9" }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <ScrollingPreview
            src={project.src}
            alt={project.title}
            bg={`/assets/backgrounds/${project.id}.jpg`}
            isHovered={isHovered}
          />
          <div className="absolute top-3 left-3 z-10">
            <Badge className="bg-background/90 text-foreground border border-border/80 backdrop-blur-md text-[11px] font-mono">
              {project.category}
            </Badge>
          </div>
        </div>

        {/* Visible On-Page Content */}
        <CardContent className="p-5 sm:p-6 space-y-4">
          <div>
            <h3 className="text-xl font-bold font-display text-foreground group-hover:text-cyan-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed line-clamp-3">
              {project.desc}
            </p>
          </div>

          {/* Key Highlights / Role Modules directly visible */}
          <div className="space-y-1.5 pt-1">
            <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground block">
              Core Highlights &amp; Architecture:
            </span>
            <ul className="space-y-1 text-xs text-foreground/80">
              {project.highlights.slice(0, 2).map((h, i) => (
                <li key={i} className="flex items-start gap-1.5 leading-snug">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="line-clamp-2">{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Technology Badges */}
          <div className="pt-2 flex flex-wrap gap-1.5">
            {[...(project.skills.frontend || []), ...(project.skills.backend || [])]
              .slice(0, 4)
              .map((skill, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="text-[10px] font-mono glass-badge"
                >
                  {skill.title}
                </Badge>
              ))}
          </div>
        </CardContent>
      </div>

      {/* Card Actions & Modal Inspector Trigger */}
      <div className="p-5 sm:p-6 pt-0 border-t border-border/40 mt-4 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          {project.github && project.github !== "#" && (
            <Button asChild variant="outline" size="sm" className="h-8 px-2.5 text-xs gap-1.5">
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} source code on GitHub`}
              >
                <Github className="w-3.5 h-3.5" />
                <span>Code</span>
              </Link>
            </Button>
          )}

          {project.live && project.live !== "#" && (
            <Button asChild variant="outline" size="sm" className="h-8 px-2.5 text-xs gap-1.5 text-cyan-400 border-cyan-500/30">
              <Link
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View live demo of ${project.title}`}
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Demo</span>
              </Link>
            </Button>
          )}
        </div>

        {/* Responsive Dialog for Deep Architectural Inspection */}
        <ResponsiveDialog>
          <ResponsiveDialogTrigger asChild>
            <Button variant="ghost" size="sm" className="h-8 px-2.5 text-xs text-muted-foreground hover:text-foreground gap-1">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span>Deep Dive</span>
            </Button>
          </ResponsiveDialogTrigger>

          <ResponsiveDialogContent className="md:max-w-4xl md:h-[85vh] md:!flex md:flex-col md:overflow-hidden md:p-0 md:gap-0">
            {/* Sticky header */}
            <div className="shrink-0 border-b border-border/60 glass-subpanel px-8 py-5">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4 min-w-0">
                  <h4 className="font-display text-xl md:text-2xl font-bold text-foreground tracking-tight truncate">
                    {project.title}
                  </h4>
                  <span className="shrink-0 text-[11px] uppercase tracking-widest text-muted-foreground border border-border rounded-full px-3 py-0.5 font-mono">
                    {project.category}
                  </span>
                </div>
                <div className="shrink-0 flex items-center gap-4">
                  {project.github && project.github !== "#" && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} source code on GitHub`}
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors underline underline-offset-2"
                    >
                      Source Code
                    </Link>
                  )}
                  {project.live && project.live !== "#" && (
                    <Button asChild size="sm" className="rounded-full gap-2 group">
                      <Link
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit live demo of ${project.title}`}
                      >
                        <span>Visit Live</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </div>

            {/* Scrollable content */}
            <ScrollArea className="flex-1" type="always" data-lenis-prevent>
              <div className="px-8 py-8">
                {/* Tech stack */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="flex flex-col md:flex-row gap-6 md:gap-10 mb-8"
                >
                  {project.skills.frontend && project.skills.frontend.length > 0 && (
                    <div className="flex flex-col items-center md:items-start gap-2">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium font-mono">
                        Frontend
                      </span>
                      <FloatingDock items={project.skills.frontend} />
                    </div>
                  )}
                  {project.skills.backend && project.skills.backend.length > 0 && (
                    <div className="flex flex-col items-center md:items-start gap-2">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium font-mono">
                        Backend &amp; AI
                      </span>
                      <FloatingDock items={project.skills.backend} />
                    </div>
                  )}
                </motion.div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

                {/* Project content */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {project.content}
                </motion.div>
              </div>
            </ScrollArea>
          </ResponsiveDialogContent>
        </ResponsiveDialog>
      </div>
    </Card>
  );
};

export default ProjectsSection;

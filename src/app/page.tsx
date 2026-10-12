"use client";

import React, { useState } from "react";
import SpaceBackground from "@/components/canvas/SpaceBackground";
import CustomCursor from "@/components/ui/CustomCursor";
import Navbar from "@/components/ui/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ProblemSolvingSection from "@/components/sections/ProblemSolvingSection";
import EducationSection from "@/components/sections/EducationSection";
import TechnicalInterestsSection from "@/components/sections/TechnicalInterestsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";
import ProjectModal from "@/components/ui/ProjectModal";
import ResumeModal from "@/components/ui/ResumeModal";
import { Project } from "@/types/portfolio";

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="relative min-h-screen text-slate-100 selection:bg-cyan-500/30 selection:text-white">
      {/* Interactive 3D Cosmic Starfield Canvas */}
      <SpaceBackground />

      {/* Cyber Cursor Follower */}
      <CustomCursor />

      {/* Global Navigation Bar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Sections */}
      <main className="relative z-10 flex flex-col">
        <HeroSection onOpenResume={() => setIsResumeOpen(true)} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection onSelectProject={(p) => setSelectedProject(p)} />
        <ProblemSolvingSection />
        <EducationSection />
        <TechnicalInterestsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Architecture Modal for Projects */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Authoritative Resume Viewer & Download Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import { soundFx } from "@/lib/audio";
import {
  Menu,
  X,
  Volume2,
  VolumeX,
  FileText,
  Terminal,
  ExternalLink,
} from "lucide-react";

interface NavbarProps {
  onOpenResume: () => void;
}

export default function Navbar({ onOpenResume }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    setIsMuted(soundFx.getMuted());

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = [
        "hero",
        "about",
        "skills",
        "projects",
        "problem-solving",
        "education",
        "contact",
      ];

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggleSound = () => {
    const muted = soundFx.toggleMute();
    setIsMuted(muted);
  };

  const navLinks = [
    { label: "About", href: "#about", id: "about" },
    { label: "Skills (3D)", href: "#skills", id: "skills" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Problem Solving", href: "#problem-solving", id: "problem-solving" },
    { label: "Education", href: "#education", id: "education" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-space-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-glass-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Wordmark Logo */}
        <a
          href="#hero"
          className="group flex items-center gap-2.5 font-mono text-slate-100 hover:text-cyan-400 transition-colors"
          onClick={() => soundFx.playKeyClick(1.2)}
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-600 to-blue-600 flex items-center justify-center border border-cyan-400/40 shadow-neon-cyan group-hover:scale-105 transition-transform">
            <span className="font-bold text-xs text-white tracking-tighter">US</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm tracking-tight group-hover:text-cyan-300 transition-colors">
              UJWAL U SHETTIGAR
            </span>
            <span className="text-[10px] text-cyan-400/70 font-mono tracking-widest uppercase">
              Full-Stack · CSE
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={() => soundFx.playKeyClick(0.9)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium tracking-wide transition-all ${
                  isActive
                    ? "text-cyan-300 bg-cyan-950/40 border border-cyan-500/30"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5">
          {/* Mechanical Sound Toggle */}
          <button
            onClick={handleToggleSound}
            className={`p-2 rounded-lg border transition-all ${
              isMuted
                ? "bg-space-900/60 border-slate-800 text-slate-500 hover:text-slate-300 hover:border-slate-700"
                : "bg-cyan-950/50 border-cyan-500/50 text-cyan-400 shadow-neon-cyan"
            }`}
            title={isMuted ? "Enable mechanical switch sounds" : "Mute switch sounds"}
            aria-label="Toggle mechanical keyboard sound"
          >
            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </button>

          {/* View Resume Button */}
          <button
            onClick={() => {
              soundFx.playChime(600, 0.15);
              onOpenResume();
            }}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white shadow-neon-cyan border border-cyan-400/40 transition-all active:scale-95"
          >
            <FileText size={14} />
            <span>Resume</span>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => {
              soundFx.playKeyClick(0.9);
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="md:hidden p-2 rounded-lg bg-space-900 border border-slate-800 text-slate-300 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-3 pb-6 bg-space-950/95 border-b border-slate-800 backdrop-blur-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => {
                  soundFx.playKeyClick(1.0);
                  setMobileMenuOpen(false);
                }}
                className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? "bg-cyan-950/50 text-cyan-300 border border-cyan-500/30"
                    : "text-slate-300 hover:bg-slate-900 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">Tactile Audio</span>
              <button
                onClick={handleToggleSound}
                className="flex items-center gap-1.5 px-3 py-1 rounded bg-space-900 border border-slate-800 text-xs text-slate-300"
              >
                {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                <span>{isMuted ? "Sound Off" : "Sound On"}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

"use client";

import React from "react";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import Link from "next/link";
import { config } from "@/data/config";
import LeetCodeActivity from "./leetcode-activity";
import {
  Code2,
  ExternalLink,
  Layers,
  Search,
  Hash,
  Sigma,
  Boxes,
  Cpu,
  GitBranch,
  Flame,
  CheckCircle2,
} from "lucide-react";

const PATTERNS = [
  {
    title: "Monotonic Stacks & Queues",
    icon: <Layers className="w-5 h-5 text-cyan-400" />,
    desc: "Single-pass linear scans for Next Greater / Smaller Element, boundary histograms, and sliding window extrema.",
    tags: ["Next Greater Element", "Daily Temperatures", "Sliding Window Maximum"],
  },
  {
    title: "Binary Search on Answer Space",
    icon: <Search className="w-5 h-5 text-indigo-400" />,
    desc: "Predicate-driven boundary reduction, rotated sorted array searches, and allocation minimization problems.",
    tags: ["Predicate Bounds", "Search In Rotated Array", "Capacity Allocation"],
  },
  {
    title: "Bucket Sort & Frequency Maps",
    icon: <Boxes className="w-5 h-5 text-amber-400" />,
    desc: "Achieving linear O(N) runtime through frequency bucket partitioning and hash-based frequency aggregation.",
    tags: ["Top K Frequent", "Frequency Buckets", "Anagram Grouping"],
  },
  {
    title: "Hash Tables & Prefix Sums",
    icon: <Hash className="w-5 h-5 text-emerald-400" />,
    desc: "Constant time O(1) lookups, cumulative subarray sum checks, and complement state tracking.",
    tags: ["Subarray Sum Equals K", "Two Sum", "Contiguous Array"],
  },
  {
    title: "C++ STL Containers & Comparators",
    icon: <Cpu className="w-5 h-5 text-sky-400" />,
    desc: "Production utilization of std::unordered_map, std::priority_queue (min/max heaps), and custom lambda comparators.",
    tags: ["std::priority_queue", "std::unordered_map", "Heaps"],
  },
  {
    title: "Arrays, Two-Pointers & Math",
    icon: <Sigma className="w-5 h-5 text-purple-400" />,
    desc: "Two-pointer window contraction, fast & slow pointers, modular arithmetic, and array permutations.",
    tags: ["Two Pointers", "Trapping Rain Water", "Modular Arithmetic"],
  },
];

export const ProblemSolvingSection = () => {
  const stats = config.leetcodeStats;

  return (
    <SectionWrapper id="problem-solving" className="max-w-6xl mx-auto py-16 sm:py-24 px-4 sm:px-6 relative z-10">
      <SectionHeader
        id="problem-solving"
        title="Problem Solving"
        desc="Data structures, competitive programming, and algorithmic patterns solved in C++."
        className="relative mb-10 sm:mb-14"
      />

      {/* Top Banner: Telemetry & Verified Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="mb-8 relative z-10"
      >
        <Card className="glass-panel">
          <CardContent className="p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
              <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                <Code2 className="w-8 h-8" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2.5 justify-center sm:justify-start">
                  <h3 className="text-3xl sm:text-4xl font-bold font-display text-foreground">
                    {stats.totalSolvedDisplay}
                  </h3>
                  <Badge variant="outline" className="border-amber-500/30 text-amber-400 bg-amber-500/5 text-xs font-mono">
                    Problems Solved
                  </Badge>
                  <Badge variant="outline" className="border-emerald-500/30 text-emerald-400 bg-emerald-500/5 text-xs font-mono flex items-center gap-1">
                    <Flame className="w-3 h-3 fill-emerald-400" />
                    <span>{stats.currentStreak}-Day Streak</span>
                  </Badge>
                </div>

                <p className="text-sm text-muted-foreground mt-2 max-w-xl leading-relaxed">
                  Practiced consistently on LeetCode with implementations written strictly in{" "}
                  <strong className="text-foreground">C++</strong> using modern standard libraries and optimal asymptotic complexity.
                </p>

                {/* Difficulty distribution breakdown */}
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-3 text-xs font-mono">
                  <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Easy: {stats.easy}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    Medium: {stats.medium}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-red-500/10 text-red-400 border border-red-500/20">
                    Hard: {stats.hard}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-secondary/60 text-muted-foreground border border-border">
                    {stats.activeDays} Active Days
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 shrink-0">
              <Button asChild className="font-medium bg-amber-500 hover:bg-amber-600 text-black shadow-sm">
                <Link
                  href={config.social.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Ujwal Shettigar's LeetCode profile in a new tab"
                >
                  <ExternalLink className="w-4 h-4 mr-1.5" />
                  <span>LeetCode Profile</span>
                </Link>
              </Button>

              <Button asChild variant="outline" className="border-border hover:bg-secondary/40">
                <Link
                  href={config.social.dsaRepo ?? "https://github.com/Ujwalushettigar/DSA"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open DSA Repository on GitHub"
                >
                  <GitBranch className="w-4 h-4 mr-1.5 text-cyan-400" />
                  <span>DSA Repository</span>
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* LeetCode Activity & Coding Consistency Subsection */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        viewport={{ once: true }}
        className="mb-10 sm:mb-14 relative z-10"
      >
        <LeetCodeActivity />
      </motion.div>

      {/* Algorithmic Patterns Subsection Header */}
      <div className="mb-6 relative z-10">
        <h4 className="text-lg sm:text-xl font-bold font-display text-foreground tracking-tight flex items-center gap-2">
          <Layers className="w-5 h-5 text-cyan-400" />
          <span>Core Algorithmic Patterns &amp; Architectures</span>
        </h4>
        <p className="text-xs sm:text-sm text-muted-foreground mt-1">
          High-frequency competitive programming paradigms and optimal data structures practiced in C++.
        </p>
      </div>

      {/* Grid of Algorithmic Patterns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {PATTERNS.map((pattern, index) => (
          <motion.div
            key={pattern.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: index * 0.08 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <Card className="h-full glass-card-interactive flex flex-col justify-between">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-secondary/60 border border-border">
                    {pattern.icon}
                  </div>
                  <h4 className="text-base font-semibold text-foreground">
                    {pattern.title}
                  </h4>
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {pattern.desc}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {pattern.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="text-[11px] font-mono glass-badge"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ProblemSolvingSection;

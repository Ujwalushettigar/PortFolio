"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { config } from "@/data/config";
import initialProfile from "@/data/leetcode/profile.json";
import {
  Calendar,
  Flame,
  CheckCircle2,
  ExternalLink,
  ImageIcon,
  Sparkles,
  Trophy,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface DayData {
  date: Date;
  dateKey: string;
  formattedDate: string;
  count: number;
  level: number;
}

export default function LeetCodeActivity() {
  const [activeYear, setActiveYear] = useState<number>(2026);
  const [viewMode, setViewMode] = useState<"interactive" | "screenshot">("screenshot");

  const calendarData = initialProfile.calendar.submissionCalendar as Record<string, number>;
  const stats = initialProfile.stats;
  const calendarSummary = initialProfile.calendar;

  // Generate 53 weeks x 7 days for the selected year
  const { weeks, monthLabels } = useMemo(() => {
    // End date for the selected year
    const endOfYear =
      activeYear === 2026
        ? new Date(2026, 9, 20) // Current active date: Oct 2026
        : new Date(activeYear, 11, 31);

    // Compute weeks backwards
    const generatedWeeks: DayData[][] = [];
    const months: { label: string; weekIndex: number }[] = [];
    let lastMonth = -1;

    for (let w = 52; w >= 0; w--) {
      const week: DayData[] = [];
      for (let d = 0; d < 7; d++) {
        const daysFromEnd = w * 7 + (6 - d);
        const date = new Date(endOfYear.getTime() - daysFromEnd * 86400000);
        const startOfDayUtc = Math.floor(
          Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) / 1000
        );

        let count = calendarData[startOfDayUtc] || 0;
        if (!count) {
          // Check local timezone offsets (+/- 86400)
          count =
            calendarData[startOfDayUtc - 86400] ||
            calendarData[startOfDayUtc + 86400] ||
            0;
        }

        let level = 0;
        if (count > 0 && count <= 3) level = 1;
        else if (count > 3 && count <= 6) level = 2;
        else if (count > 6 && count <= 12) level = 3;
        else if (count > 12) level = 4;

        week.push({
          date,
          dateKey: `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`,
          formattedDate: date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          }),
          count,
          level,
        });

        // Track month label at the start of each month
        if (d === 0) {
          const m = date.getMonth();
          if (m !== lastMonth) {
            months.push({
              label: date.toLocaleDateString("en-US", { month: "short" }),
              weekIndex: 52 - w,
            });
            lastMonth = m;
          }
        }
      }
      generatedWeeks.push(week);
    }

    return { weeks: generatedWeeks, monthLabels: months };
  }, [activeYear, calendarData]);

  const getCellColor = (level: number) => {
    switch (level) {
      case 1:
        return "bg-emerald-950 border-emerald-800/60";
      case 2:
        return "bg-emerald-700/80 border-emerald-600/70";
      case 3:
        return "bg-emerald-500 border-emerald-400";
      case 4:
        return "bg-emerald-300 border-emerald-200 shadow-xs shadow-emerald-400/40";
      default:
        return "bg-secondary/40 border-border/40 hover:border-border";
    }
  };

  return (
    <Card className="w-full bg-card/90 dark:bg-card/85 border border-border/80 dark:border-border/60 backdrop-blur-md shadow-lg overflow-hidden">
      <CardContent className="p-5 sm:p-7 space-y-6">
        {/* Subsection Header & Metric Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-border/50">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <Calendar className="w-5 h-5" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-foreground tracking-tight">
                LeetCode Activity &amp; Coding Consistency
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1.5 leading-relaxed">
              Verified submission activity and problem-solving telemetry for{" "}
              <strong className="text-foreground font-mono">
                {config.leetcodeStats.username}
              </strong>
              .
            </p>
          </div>

          {/* Quick Metrics Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <Badge
              variant="outline"
              className="bg-emerald-500/10 text-emerald-400 border-emerald-500/30 font-mono text-xs py-1 px-2.5 flex items-center gap-1.5"
            >
              <Flame className="w-3.5 h-3.5 fill-emerald-400" />
              <span>{calendarSummary.totalActiveDays} Active Days</span>
            </Badge>

            <Badge
              variant="outline"
              className="bg-amber-500/10 text-amber-400 border-amber-500/30 font-mono text-xs py-1 px-2.5 flex items-center gap-1.5"
            >
              <Trophy className="w-3.5 h-3.5" />
              <span>{calendarSummary.streak} Day Streak</span>
            </Badge>

            <Badge
              variant="outline"
              className="bg-cyan-500/10 text-cyan-400 border-cyan-500/30 font-mono text-xs py-1 px-2.5 flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{config.leetcodeStats.totalSubmissions.toLocaleString()} Submissions (Past Year)</span>
            </Badge>
          </div>
        </div>

        {/* View Mode & Year Controls */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-1">
          <div className="flex items-center gap-1.5 bg-secondary/30 p-1 rounded-lg border border-border/60">
            <button
              onClick={() => setViewMode("screenshot")}
              className={cn(
                "px-3 py-1 text-xs font-mono rounded-md transition-all flex items-center gap-1.5",
                viewMode === "screenshot"
                  ? "bg-background text-foreground font-semibold shadow-xs border border-border"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <ImageIcon className="w-3.5 h-3.5 text-amber-400" />
              <span>Official Screenshot</span>
            </button>
            <button
              onClick={() => setViewMode("interactive")}
              className={cn(
                "px-3 py-1 text-xs font-mono rounded-md transition-all",
                viewMode === "interactive"
                  ? "bg-background text-foreground font-semibold shadow-xs border border-border"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Interactive Heatmap
            </button>
          </div>

          {/* Year Switcher (active only in interactive mode) */}
          {viewMode === "interactive" && (
            <div className="flex items-center gap-1.5 text-xs font-mono">
              <span className="text-muted-foreground mr-1">Year:</span>
              {[2026, 2025].map((year) => (
                <button
                  key={year}
                  onClick={() => setActiveYear(year)}
                  className={cn(
                    "px-2.5 py-1 rounded-md transition-colors border",
                    activeYear === year
                      ? "bg-cyan-500/15 border-cyan-500/40 text-cyan-400 font-bold"
                      : "bg-secondary/20 border-border/50 text-muted-foreground hover:text-foreground"
                  )}
                >
                  {year}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* View 1: Interactive Heatmap Grid */}
        {viewMode === "interactive" && (
          <TooltipProvider delayDuration={100}>
            <div className="overflow-x-auto pb-3 pt-2 -mx-2 px-2 scrollbar-thin">
              <div className="min-w-[760px] max-w-full">
                {/* Month labels header */}
                <div className="flex text-[10px] font-mono text-muted-foreground mb-1.5 pl-8">
                  {monthLabels.map((m, idx) => (
                    <span
                      key={idx}
                      style={{
                        marginLeft: idx === 0 ? `${m.weekIndex * 14}px` : "auto",
                      }}
                      className="inline-block"
                    >
                      {m.label}
                    </span>
                  ))}
                </div>

                {/* Calendar grid: Days of week (rows) x Weeks (cols) */}
                <div className="flex gap-1.5 items-start">
                  {/* Day labels column */}
                  <div className="flex flex-col gap-1 text-[9px] font-mono text-muted-foreground pt-0.5 w-6 shrink-0">
                    <span className="h-3 leading-3"></span>
                    <span className="h-3 leading-3">Mon</span>
                    <span className="h-3 leading-3"></span>
                    <span className="h-3 leading-3">Wed</span>
                    <span className="h-3 leading-3"></span>
                    <span className="h-3 leading-3">Fri</span>
                    <span className="h-3 leading-3"></span>
                  </div>

                  {/* 53 Columns of Weeks */}
                  <div className="flex gap-1 flex-1">
                    {weeks.map((week, wIdx) => (
                      <div key={wIdx} className="flex flex-col gap-1">
                        {week.map((day) => (
                          <Tooltip key={day.dateKey}>
                            <TooltipTrigger asChild>
                              <div
                                className={cn(
                                  "w-3 h-3 rounded-[2.5px] border transition-transform hover:scale-125 cursor-pointer",
                                  getCellColor(day.level)
                                )}
                              />
                            </TooltipTrigger>
                            <TooltipContent
                              side="top"
                              className="bg-popover/95 backdrop-blur-md border border-border text-xs font-mono p-2 shadow-md"
                            >
                              <p className="font-semibold text-foreground">
                                {day.count === 0
                                  ? "No submissions"
                                  : `${day.count} submission${
                                      day.count > 1 ? "s" : ""
                                    }`}
                              </p>
                              <p className="text-[11px] text-muted-foreground">
                                {day.formattedDate}
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Legend & Summary Info */}
                <div className="flex items-center justify-between pt-4 mt-2 border-t border-border/40 text-xs font-mono text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>
                      {calendarSummary.totalActiveDays} total active submission
                      days verified
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px]">Less</span>
                    <div className="w-2.5 h-2.5 rounded-[2px] bg-secondary/40 border border-border/40" />
                    <div className="w-2.5 h-2.5 rounded-[2px] bg-emerald-950 border border-emerald-800/60" />
                    <div className="w-2.5 h-2.5 rounded-[2px] bg-emerald-700/80 border border-emerald-600/70" />
                    <div className="w-2.5 h-2.5 rounded-[2px] bg-emerald-500 border border-emerald-400" />
                    <div className="w-2.5 h-2.5 rounded-[2px] bg-emerald-300 border border-emerald-200" />
                    <span className="text-[10px]">More</span>
                  </div>
                </div>
              </div>
            </div>
          </TooltipProvider>
        )}

        {/* View 2: Profile Screenshot Asset View */}
        {viewMode === "screenshot" && (
          <div className="space-y-3 pt-2">
            <div className="relative w-full rounded-xl overflow-hidden border border-border/80 bg-[#1a1a1a] shadow-md flex items-center justify-center p-2 sm:p-4">
              <Image
                src="/images/leetcode-activity.png"
                alt="Official LeetCode submission activity calendar for Ujwal Shettigar (1,654 submissions, 256 active days, 120 max streak)"
                width={865}
                height={202}
                className="w-full max-w-4xl h-auto object-contain rounded-lg"
                priority
              />
            </div>
            <p className="text-[11px] font-mono text-muted-foreground text-center">
              Official LeetCode submission activity screenshot for{" "}
              <strong className="text-foreground">Ujwal_Shettigar</strong> (1,654 submissions, 256 active days, 120-day max streak).
            </p>
          </div>
        )}

        {/* Bottom Action Footer */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-muted-foreground flex items-center gap-3">
            <span>
              Easy:{" "}
              <strong className="text-emerald-400 font-mono">
                {stats.easy}
              </strong>
            </span>
            <span>·</span>
            <span>
              Medium:{" "}
              <strong className="text-amber-400 font-mono">
                {stats.medium}
              </strong>
            </span>
            <span>·</span>
            <span>
              Hard:{" "}
              <strong className="text-red-400 font-mono">
                {stats.hard}
              </strong>
            </span>
            <span>·</span>
            <span>
              Total:{" "}
              <strong className="text-cyan-400 font-mono">
                {stats.totalSolved}
              </strong>
            </span>
          </div>

          <Button asChild size="sm" className="gap-2 bg-amber-500 hover:bg-amber-600 text-black font-medium">
            <Link
              href={config.leetcodeStats.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open official LeetCode profile in a new tab"
            >
              <span>View Live on LeetCode</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

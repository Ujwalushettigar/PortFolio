"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Download, ArrowLeft } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ResumeDoodle from "./resume-doodle";

// Authoritative resume PDF
const RESUME_PATH = "/Ujwal_U_Shettigar_Resume.pdf";

export default function ResumeView() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      {/* Hide the global nav on mobile, only while this page is mounted */}
      <style
        dangerouslySetInnerHTML={{
          __html:
            "@media (max-width: 767px){ header { display: none !important; } }",
        }}
      />

      {/* Top bar: back (left) + download (right) */}
      <div className="mx-auto w-full max-w-4xl shrink-0 px-4 pt-16 md:pt-24">
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 flex items-center justify-between gap-4"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to portfolio
          </Link>
          <a
            href={RESUME_PATH}
            download="Ujwal_U_Shettigar_Resume.pdf"
            className={cn(
              buttonVariants({ variant: "default", size: "sm" }),
              "gap-2 text-sm shadow cursor-pointer group"
            )}
            aria-label="Download Ujwal U Shettigar's Resume PDF"
          >
            <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            <span>Download PDF</span>
          </a>
        </motion.div>
      </div>

      {/* PDF viewer — centered on mobile (short A4 card), top-aligned on desktop (tall) */}
      <div className="mx-auto flex w-full max-w-4xl flex-1 items-center justify-center px-2 pb-6 md:items-start md:px-4 md:pb-24">
        {/* opacity-only animation: a transformed ancestor would trap the fixed doodle FAB */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="aspect-[210/297] w-full overflow-hidden rounded-2xl bg-white shadow-xl"
        >
          <ResumeDoodle
            src={`${RESUME_PATH}#toolbar=0&navpanes=0&view=FitH`}
            title="Ujwal U Shettigar — Résumé"
          />
        </motion.div>
      </div>
    </div>
  );
}

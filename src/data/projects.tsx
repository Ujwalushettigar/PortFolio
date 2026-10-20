import React from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiSupabase,
  SiFirebase,
  SiVite,
  SiJavascript,
  SiFigma,
} from "react-icons/si";
import { CheckCircle2, Shield, Layers, Users, Zap, Database, TrendingUp, Sparkles, Layout } from "lucide-react";

export type Project = {
  id: string;
  title: string;
  src: string;
  category: string;
  github?: string;
  live?: string;
  desc: string;
  highlights: string[];
  skills: {
    frontend?: { title: string; icon: React.ReactNode }[];
    backend?: { title: string; icon: React.ReactNode }[];
  };
  content: React.ReactNode;
  featured?: boolean;
};

const projects: Project[] = [
  {
    id: "quickfix-grocery",
    title: "QuickFix Grocery",
    src: "/assets/projects/quickfix-grocery.jpg",
    category: "Hyperlocal Quick-Commerce",
    desc: "A full-stack grocery order fulfillment and delivery platform built with React, Vite, Node.js/Express, and PostgreSQL / Supabase. Manages the complete order lifecycle across four decoupled role workspaces: Customer ordering, dark-store Picker fulfillment with bounded customer substitution timeouts, Delivery Partner dispatch routing, and Admin operational analytics.",
    highlights: [
      "Multi-role architecture with dedicated Customer, Picker, Delivery Courier, and Store Admin portals.",
      "Real-time state synchronization via Supabase Postgres change streams for instant order lifecycle updates.",
      "Fulfillment state machine managing item substitutions with bounded customer confirmation timeouts.",
      "Collaborative engineering project developed with Sweekk (no-delivery repository).",
    ],
    github: "https://github.com/Sweekk/no-delivery",
    featured: true,
    skills: {
      frontend: [
        { title: "React", icon: <SiReact className="w-full h-full text-[#61dafb]" /> },
        { title: "Vite", icon: <SiVite className="w-full h-full text-[#646cff]" /> },
        { title: "Tailwind CSS", icon: <SiTailwindcss className="w-full h-full text-[#38bdf8]" /> },
        { title: "JavaScript", icon: <SiJavascript className="w-full h-full text-[#f7df1e]" /> },
      ],
      backend: [
        { title: "Node.js", icon: <SiNodedotjs className="w-full h-full text-[#339933]" /> },
        { title: "Express.js", icon: <SiExpress className="w-full h-full text-slate-300" /> },
        { title: "PostgreSQL", icon: <Database className="w-full h-full text-[#336791]" /> },
        { title: "Supabase Realtime", icon: <SiSupabase className="w-full h-full text-[#3ecf8e]" /> },
      ],
    },
    content: (
      <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
        <div>
          <h5 className="text-base font-semibold text-foreground mb-2 flex items-center gap-2">
            <Layers className="w-4 h-4 text-cyan-400" />
            Engineering Problem &amp; Architecture
          </h5>
          <p>
            QuickFix Grocery addresses out-of-stock bottlenecks and fragmented communication in rapid delivery through four decoupled modules: Customer, Delivery Partner, Picker, and Admin. Built on React and Vite with Express.js and Supabase backend services.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3">
          {[
            { role: "Customer Module", desc: "Order placement, live cart tracking, substitution prompt approvals, order history." },
            { role: "Picker Module", desc: "Warehouse item verification, out-of-stock flagging, bounded-wait substitution suggestions." },
            { role: "Delivery Partner Module", desc: "Order dispatch assignment, customer address routing, proof-of-delivery completion." },
            { role: "Admin Portal", desc: "Fulfillment SLAs, substitution rates per store, picker efficiency, customer dispute logs." },
          ].map((item, idx) => (
            <div key={idx} className="p-3.5 rounded-lg bg-secondary/30 border border-border">
              <span className="text-xs font-semibold text-foreground block">{item.role}</span>
              <span className="text-xs text-muted-foreground block mt-1 leading-snug">{item.desc}</span>
            </div>
          ))}
        </div>

        <div>
          <h5 className="text-base font-semibold text-foreground mb-2 flex items-center gap-2">
            <Shield className="w-4 h-4 text-cyan-400" />
            Technical Implementation &amp; Robustness
          </h5>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>
                <strong>Authentication &amp; RBAC:</strong> Configured role-based access control with Supabase Auth, isolating customer, picker, courier, and administrative views.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>
                <strong>Realtime Database Synchronization:</strong> Subscribed to live Supabase Postgres change streams, keeping pickers, couriers, and customers synchronized across order state transitions.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>
                <strong>Substitution Workflow:</strong> Managed item substitutions when inventory is depleted, enforcing customer response timeouts before order finalization.
              </span>
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "resto",
    title: "Resto",
    src: "/assets/projects/resto.jpg",
    category: "Full-Stack Web App",
    desc: "A modern restaurant culinary web application engineered with Next.js, React, JavaScript, and Tailwind CSS, deployed live on Vercel. Delivers fluid interactive food catalogs, category filtering, detailed dish previews, and responsive client navigation.",
    highlights: [
      "Verified live production deployment on Vercel: resto-one-delta.vercel.app.",
      "Modular component hierarchy developed in VS Code with strict ESLint code quality enforcement.",
      "Interactive culinary showcases with category filters, detailed dish previews, and responsive client navigation.",
      "Collaborative development: Built Home, core components, menu pages, routing, and responsive layouts.",
    ],
    github: "https://github.com/Ujwalushettigar/Resto",
    live: "https://resto-one-delta.vercel.app/",
    featured: true,
    skills: {
      frontend: [
        { title: "Next.js", icon: <SiNextdotjs className="w-full h-full text-slate-100" /> },
        { title: "React.js", icon: <SiReact className="w-full h-full text-[#61dafb]" /> },
        { title: "Tailwind CSS", icon: <SiTailwindcss className="w-full h-full text-[#38bdf8]" /> },
        { title: "JavaScript", icon: <SiJavascript className="w-full h-full text-[#f7df1e]" /> },
      ],
      backend: [
        { title: "Node.js", icon: <SiNodedotjs className="w-full h-full text-[#339933]" /> },
      ],
    },
    content: (
      <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
        <div>
          <h5 className="text-base font-semibold text-foreground mb-2">
            Modern Culinary Showcase &amp; Ordering Flow
          </h5>
          <p>
            Resto delivers an interactive digital dining catalog featuring client-side navigation, responsive menu filters, and seamless dark theme support. Developed with modular component architecture in VS Code and verified code quality via ESLint.
          </p>
        </div>

        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
            <span>Architected responsive menu catalogs, dish previews, and interactive food categories.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
            <span>Personal contribution: Implemented Home, components, menu pages, routing, and responsive behaviors in collaboration with Prajwal T Kulal.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
            <span>Verified and deployed on Vercel edge infrastructure at resto-one-delta.vercel.app.</span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "finance-coach",
    title: "FinPilot — AI Personal Finance Coach",
    src: "/assets/projects/finance-coach.jpg",
    category: "FinTech & Financial Telemetry",
    desc: "An AI-driven personal finance platform and asset telemetry dashboard engineered to analyze transaction ledgers, track category budgets, detect recurring subscription leaks, compute deterministic financial health scores, and surface actionable budgeting guidance.",
    highlights: [
      "Comprehensive transaction ledger supporting full CRUD, CSV import processing, and category classification.",
      "Deterministic financial health scoring engine computing savings ratios, debt metrics, and expense volatility.",
      "Personalized AI coaching insights generating contextual fiscal recommendations based on cash-flow patterns.",
      "Visual analytics dashboard with interactive charts displaying spending distributions and progress toward savings targets.",
    ],
    github: "https://github.com/Ujwalushettigar/AI-Personal-Finance-Coach",
    featured: true,
    skills: {
      frontend: [
        { title: "React", icon: <SiReact className="w-full h-full text-[#61dafb]" /> },
        { title: "Tailwind CSS", icon: <SiTailwindcss className="w-full h-full text-[#38bdf8]" /> },
        { title: "JavaScript", icon: <SiJavascript className="w-full h-full text-[#f7df1e]" /> },
      ],
      backend: [
        { title: "Node.js", icon: <SiNodedotjs className="w-full h-full text-[#339933]" /> },
        { title: "Express.js", icon: <SiExpress className="w-full h-full text-slate-300" /> },
      ],
    },
    content: (
      <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
        <div>
          <h5 className="text-base font-semibold text-foreground mb-2 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-purple-400" />
            Intelligent Cash-Flow Analysis &amp; Health Telemetry
          </h5>
          <p>
            FinPilot combines deterministic personal finance accounting with AI-assisted budgeting advisory. Users record and import transactions via flexible CSV mapping, while the system computes financial health telemetry and identifies recurring subscription leaks.
          </p>
        </div>

        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
            <span>Automated transaction category detection and expenditure classification engine.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
            <span>Deterministic financial health index calculating debt-to-income and monthly savings ratios.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
            <span>Contextual AI coaching recommendations based on spending trends and budget variance.</span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "ai-doc-intelligence",
    title: "AIDoc — AI Complaint Analyser",
    src: "/assets/projects/ai-doc-intelligence.jpg",
    category: "Full-Stack AI Analysis",
    desc: "A full-stack intelligence application integrating Google Gemini AI to automate customer complaint and text document triage. Ingests user submissions and delivers instant AI-generated sentiment analysis, priority classification, category detection, and recommended response drafts.",
    highlights: [
      "Google Gemini API integration delivering multi-factor text analysis, sentiment scoring, and urgency triage.",
      "Automated classification assigning complaints to technical, billing, or service categories with structured validation.",
      "Full-stack client-server architecture with Express.js REST API backend and reactive React frontend.",
      "Eliminates manual triage overhead by pre-generating context-aware response suggestions for support teams.",
    ],
    github: "https://github.com/Ujwalushettigar/AIDoc",
    featured: true,
    skills: {
      frontend: [
        { title: "React", icon: <SiReact className="w-full h-full text-[#61dafb]" /> },
        { title: "JavaScript", icon: <SiJavascript className="w-full h-full text-[#f7df1e]" /> },
      ],
      backend: [
        { title: "Google Gemini AI", icon: <Zap className="w-full h-full text-[#4285f4]" /> },
        { title: "Node.js", icon: <SiNodedotjs className="w-full h-full text-[#339933]" /> },
        { title: "Express.js", icon: <SiExpress className="w-full h-full text-slate-300" /> },
      ],
    },
    content: (
      <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
        <div>
          <h5 className="text-base font-semibold text-foreground mb-2 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            Automated Triage &amp; Sentiment Classification Pipeline
          </h5>
          <p>
            Manual customer complaint triage is time-consuming and often inconsistent. AIDoc leverages Google Gemini AI to ingest customer submissions, analyze sentiment polarity, assign urgency priority (High/Medium/Low), and draft context-specific resolution replies.
          </p>
        </div>

        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
            <span>Automated natural language analysis using the Google Gemini AI API.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
            <span>Multi-dimensional classification extracting sentiment score, priority level, and complaint domain.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
            <span>Full-stack implementation with clean controller-service separation in Express.js.</span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "firetodo",
    title: "fireTodo",
    src: "/assets/projects/firetodo.jpg",
    category: "Task Management App",
    desc: "A clean 3-page task management application built with the Next.js App Router, demonstrating Firebase Email/Password Authentication combined with Zustand global state management for reactive client-side store coordination and persistent task state.",
    highlights: [
      "Next.js App Router architecture featuring Login/Signup, authenticated User Dashboard, and Todo Manager.",
      "Secure client authentication with Firebase Email/Password Auth and protected route workflows.",
      "Zustand global state management coordinating instantaneous task addition, toggle completion, and filtering.",
      "Responsive mobile-first interface designed for fast task entry, status organization, and seamless session recovery.",
    ],
    github: "https://github.com/Ujwalushettigar/fireTodo",
    skills: {
      frontend: [
        { title: "Next.js", icon: <SiNextdotjs className="w-full h-full text-slate-100" /> },
        { title: "React", icon: <SiReact className="w-full h-full text-[#61dafb]" /> },
        { title: "Tailwind CSS", icon: <SiTailwindcss className="w-full h-full text-[#38bdf8]" /> },
        { title: "JavaScript", icon: <SiJavascript className="w-full h-full text-[#f7df1e]" /> },
      ],
      backend: [
        { title: "Firebase Auth", icon: <SiFirebase className="w-full h-full text-[#ffca28]" /> },
        { title: "Node.js", icon: <SiNodedotjs className="w-full h-full text-[#339933]" /> },
      ],
    },
    content: (
      <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
        <div>
          <h5 className="text-base font-semibold text-foreground mb-2 flex items-center gap-2">
            <Layout className="w-4 h-4 text-emerald-400" />
            Next.js App Router &amp; Zustand Global Store
          </h5>
          <p>
            fireTodo demonstrates practical state management in Next.js. Combining Firebase client authentication with a centralized Zustand store, the application separates authentication concerns from task state, providing fluid client-side interactions and protected dashboard routes.
          </p>
        </div>

        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span>Integrated Firebase Email/Password authentication with auth state listeners.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span>Zustand store managing reactive client-side task operations without prop drilling.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span>3-page App Router navigation: Login/Signup, User Dashboard, and Todo Manager.</span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "attendance-system",
    title: "Smart Curriculum Attendance System",
    src: "/assets/projects/attendance-system.jpg",
    category: "Academic UI/UX Concept",
    desc: "A localized QR-code attendance verification system architecture and high-fidelity UI/UX prototype created in Figma, engineered to accelerate attendance logging in university lecture halls while preventing proxy attendance.",
    highlights: [
      "Time-bounded localized QR scanning workflow eliminating proxy logging in university lecture halls.",
      "Comprehensive Figma UI/UX specification covering lecturer management console and student scanning views.",
      "Streamlined academic check-in flow cutting typical attendance logging time from minutes to seconds.",
      "Academic design project focused on usability ergonomics, accessibility, and intuitive interface layouts.",
    ],
    skills: {
      frontend: [
        { title: "Figma (UI/UX)", icon: <SiFigma className="w-full h-full text-[#f24e1e]" /> },
        { title: "JavaScript", icon: <SiJavascript className="w-full h-full text-[#f7df1e]" /> },
      ],
      backend: [
        { title: "System Architecture", icon: <Database className="w-full h-full text-cyan-400" /> },
      ],
    },
    content: (
      <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
        <div>
          <h5 className="text-base font-semibold text-foreground mb-2 flex items-center gap-2">
            <Users className="w-4 h-4 text-amber-400" />
            Localized QR Verification for Lecture Halls
          </h5>
          <p>
            Designed a smart curriculum attendance tracker implementing a localized QR code scanning mechanism to accelerate attendance logging for university lecturers. Prototyped the complete lecturer and student interface in Figma to optimize ergonomics and navigation efficiency.
          </p>
        </div>

        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <span>Designed time-bounded QR code generation to eliminate proxy attendance logging.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <span>Created high-fidelity UI/UX interactive wireframes in Figma before frontend implementation.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <span>Academic design project presented for college attendance workflow optimization.</span>
          </li>
        </ul>
      </div>
    ),
  },
];

export default projects;

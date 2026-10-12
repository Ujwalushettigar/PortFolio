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
import { CheckCircle2, Shield, Layers, Users, Zap, Database } from "lucide-react";

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
};

const projects: Project[] = [
  {
    id: "quickfix-grocery",
    title: "QuickFix Grocery",
    src: "/assets/backgrounds/portfolio.jpg",
    category: "Hyperlocal Delivery Platform",
    desc: "A hyperlocal rapid grocery delivery platform with four role-based access modules (Customer, Delivery Partner, Picker, Admin) integrating Supabase Auth, database schemas, and live realtime synchronization with bounded-wait substitution state machines.",
    highlights: [
      "Customer: Live catalog browsing, cart ordering, realtime delivery tracking, and substitution approvals.",
      "Picker: In-store item availability confirmation and bounded-wait customer substitution proposals.",
      "Delivery Partner: Automatic courier assignment, map routing, and delivery fulfillment confirmation.",
      "Admin: Store fulfillment analytics, substitution rates, fulfillment times, and matching audits.",
    ],
    github: "https://github.com/Ujwalushettigar/QuickFix-Grocery",
    live: "#",
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
        { title: "Supabase DB", icon: <SiSupabase className="w-full h-full text-[#3ecf8e]" /> },
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
                <strong>Authentication &amp; RBAC:</strong> Configured strict role-based access control with Supabase Auth, preventing unauthorized access across customer, picker, courier, and administrative endpoints.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>
                <strong>Realtime Database Synchronization:</strong> Subscribed to live Supabase Postgres change streams, keeping pickers, couriers, and customers continuously synchronized without manual polling.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>
                <strong>Bounded-Wait Substitution State Machine:</strong> Designed a finite state machine to manage item substitutions when inventory is depleted, enforcing bounded customer response timeouts and debugging substitution matching algorithms.
              </span>
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "ai-doc-intelligence",
    title: "AI Document Intelligence Platform",
    src: "/assets/backgrounds/peakposts.jpg",
    category: "Multimodal Vision AI",
    desc: "An AI-powered document intelligence and analysis platform utilizing Google Gemini AI multimodal vision for automated optical character recognition, registration/expiry date extraction, and secure Firebase storage.",
    highlights: [
      "Google Gemini AI multimodal vision integration for scanning physical paperwork and certificates.",
      "Automated extraction of registration numbers, issue dates, and expiry dates with zero manual transcription.",
      "Cloud Firebase Firestore persistence for secure document record storage and structured metadata queries.",
    ],
    github: "https://github.com/Ujwalushettigar/AIDoc",
    live: "#",
    skills: {
      frontend: [
        { title: "React", icon: <SiReact className="w-full h-full text-[#61dafb]" /> },
        { title: "JavaScript", icon: <SiJavascript className="w-full h-full text-[#f7df1e]" /> },
      ],
      backend: [
        { title: "Google Gemini AI", icon: <Zap className="w-full h-full text-[#4285f4]" /> },
        { title: "Node.js", icon: <SiNodedotjs className="w-full h-full text-[#339933]" /> },
        { title: "Express.js", icon: <SiExpress className="w-full h-full text-slate-300" /> },
        { title: "Firebase", icon: <SiFirebase className="w-full h-full text-[#ffca28]" /> },
      ],
    },
    content: (
      <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
        <div>
          <h5 className="text-base font-semibold text-foreground mb-2">
            Automated Vision Extraction Pipeline
          </h5>
          <p>
            Manual document data entry from scanned forms, identification cards, and certificates is labor-intensive and prone to human error. This platform integrates the Google Gemini Vision API to evaluate uploaded document imagery, recognize spatial typography, and extract critical registration and expiry timestamps with structured validation.
          </p>
        </div>

        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
            <span>Automated parsing of physical document imagery using Google Gemini AI multimodal vision.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
            <span>Extracted registration and expiry dates directly without manual transcription effort.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
            <span>Persisted verified document records and metadata directly into Firebase cloud database.</span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "resto",
    title: "Resto",
    src: "/assets/backgrounds/storekit.jpg",
    category: "Full-Stack Web Application",
    desc: "A highly responsive restaurant culinary web application engineered with React.js, Next.js, JavaScript, and Tailwind CSS. Features modular reusable components, verified code quality via ESLint, and live deployment on Vercel.",
    highlights: [
      "Modular component architecture developed in VS Code with strict ESLint code quality enforcement.",
      "Dynamic culinary showcase with category filters, dish details, and responsive navigation.",
      "Production deployment on Vercel edge infrastructure: resto-one-delta.vercel.app.",
    ],
    github: "https://github.com/Ujwalushettigar/Resto",
    live: "https://resto-one-delta.vercel.app/",
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
            Resto delivers an interactive digital dining catalog featuring fluid client-side navigation, responsive menu filters, and seamless dark theme support. Developed with modular component architecture in VS Code and verified code quality via ESLint.
          </p>
        </div>

        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
            <span>Architected responsive menu catalogs, dish previews, and interactive food categories.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
            <span>Maintained strict code standards and modular component reusability with ESLint.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
            <span>Deployed and verified on Vercel edge infrastructure at resto-one-delta.vercel.app.</span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "firetodo",
    title: "fireTodo",
    src: "/assets/backgrounds/kanbi.jpg",
    category: "Task Management Tool",
    desc: "A full-stack task management application integrating Supabase backend persistence, REST API-based data retrieval, and cross-platform synchronization with zero data loss during active user sessions.",
    highlights: [
      "Integrated Supabase backend for persistent cloud storage and schema management.",
      "REST API-based data retrieval guaranteeing zero task status loss across browser refreshes.",
      "Responsive React interface optimized for quick task reordering, status updates, and filtering.",
    ],
    github: "https://github.com/Ujwalushettigar/fireTodo",
    live: "#",
    skills: {
      frontend: [
        { title: "React.js", icon: <SiReact className="w-full h-full text-[#61dafb]" /> },
        { title: "JavaScript", icon: <SiJavascript className="w-full h-full text-[#f7df1e]" /> },
      ],
      backend: [
        { title: "Supabase", icon: <SiSupabase className="w-full h-full text-[#3ecf8e]" /> },
        { title: "Node.js", icon: <SiNodedotjs className="w-full h-full text-[#339933]" /> },
      ],
    },
    content: (
      <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
        <div>
          <h5 className="text-base font-semibold text-foreground mb-2">
            Resilient Cross-Platform Cloud Synchronization
          </h5>
          <p>
            fireTodo demonstrates real-time cross-platform state synchronization. Integrating cloud backend persistence with RESTful endpoints, the application guarantees persistent task ordering, status tracking, and seamless session recovery.
          </p>
        </div>

        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span>Integrated Supabase connection for backend storage and REST API-based data retrieval.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span>Optimized cross-platform state synchronization ensuring zero data loss during active sessions.</span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "attendance-system",
    title: "Smart Curriculum Attendance System",
    src: "/assets/backgrounds/waku.jpg",
    category: "Academic Attendance Platform",
    desc: "A localized QR-code scanning attendance tracking system designed to accelerate attendance logging for university lecturers, prototyped with interactive UI/UX wireframes in Figma.",
    highlights: [
      "Localized QR-code scanning mechanism preventing proxy attendance logging in lecture halls.",
      "Significantly faster attendance logging workflows for university professors and students.",
      "High-fidelity UI/UX prototype created in Figma detailing instructor dashboards and student scanning views.",
    ],
    github: "#",
    live: "https://www.figma.com/design/PqN8HqYkF1yF4oD2lG9L7n/Smart-Attendance",
    skills: {
      frontend: [
        { title: "Figma (UI/UX)", icon: <SiFigma className="w-full h-full text-[#f24e1e]" /> },
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
            Localized QR Verification for Lecture Halls
          </h5>
          <p>
            Developed a smart curriculum attendance tracker implementing a localized QR code scanning mechanism to accelerate attendance logging for university lecturers. Prototyped the complete lecturer and student interface in Figma to optimize ergonomics and navigation efficiency.
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
        </ul>
      </div>
    ),
  },
  {
    id: "finance-coach",
    title: "AI Personal Finance Coach",
    src: "/assets/backgrounds/codingducks.jpg",
    category: "Budgeting & Financial Analytics",
    desc: "An intelligent personal finance and budgeting platform analyzing income streams and expenditures with automatic transaction categorization and cash-flow insights.",
    highlights: [
      "Automated transaction category detection and expenditure classification.",
      "Actionable fiscal suggestions based on monthly income patterns and expense volatility.",
      "Interactive analytics charts surfacing visual spending distributions and saving goals.",
    ],
    github: "https://github.com/Ujwalushettigar/AI-Personal-Finance-Coach",
    live: "#",
    skills: {
      frontend: [
        { title: "JavaScript", icon: <SiJavascript className="w-full h-full text-[#f7df1e]" /> },
        { title: "React", icon: <SiReact className="w-full h-full text-[#61dafb]" /> },
      ],
      backend: [
        { title: "Node.js", icon: <SiNodedotjs className="w-full h-full text-[#339933]" /> },
        { title: "Express.js", icon: <SiExpress className="w-full h-full text-slate-300" /> },
      ],
    },
    content: (
      <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
        <div>
          <h5 className="text-base font-semibold text-foreground mb-2">
            Intelligent Cash-Flow Analysis
          </h5>
          <p>
            An algorithmic budgeting and financial insights platform that analyzes user income streams and spending categories to deliver actionable fiscal recommendations with automated transaction tagging.
          </p>
        </div>

        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
            <span>Automated transaction category detection and expenditure classification.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
            <span>Surfaced real-time budgeting metrics and visual spending distributions.</span>
          </li>
        </ul>
      </div>
    ),
  },
];

export default projects;

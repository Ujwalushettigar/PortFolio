import { Project } from "@/types/portfolio";

export const PROJECTS: Project[] = [
  {
    id: "quickfix-grocery",
    title: "QuickFix Grocery",
    subtitle: "Hyperlocal Delivery Platform with 4-Tier Role-Based Access Control",
    year: "2026",
    category: "Full-Stack",
    description: "A production-grade hyperlocal grocery delivery ecosystem featuring 4 specialized role modules (Customer, Delivery Partner, Picker, Admin) with real-time order state progression and bounded-wait item substitution.",
    longDescription: "QuickFix Grocery is an end-to-end multi-role web platform designed to solve operational bottlenecks in rapid-fulfillment delivery. It features granular role-based access control (RBAC) across four decoupled portals, live Supabase synchronization for zero mock data, and an administrative telemetry dashboard tracking substitution ratios and fulfillment velocities.",
    highlights: [
      "Engineered 4 dedicated role modules: Customer ordering, Picker confirmation, Delivery Partner routing, and Admin operational monitoring.",
      "Implemented strict route- and mutation-level authorization policies with Supabase Auth RBAC.",
      "Designed an automated bounded-wait substitution state machine that triggers customer confirmation before finalizing replacements.",
      "Surfaced real-time administrative metrics: store-by-store item substitution rates, picker speeds, and average fulfillment duration.",
      "Iterated on substitution-matching accuracy using screen-recording-based QA testing."
    ],
    technologies: ["React", "Vite", "Node.js", "Express.js", "Supabase DB", "Supabase Auth", "Supabase Realtime", "REST APIs"],
    roles: ["Customer", "Delivery Partner", "Picker", "Admin"],
    architectureNotes: [
      "State Synchronization: Supabase Postgres Change Streams",
      "Security: Row-Level Security (RLS) & JWT verification",
      "Testing: Screen-recording-based UX & edge-case QA"
    ],
    isPrivateOrAcademic: true,
    featured: true
  },
  {
    id: "ai-doc-intelligence",
    title: "AI Document Intelligence Platform",
    subtitle: "Vision-Based Multimodal Document Parsing & Date Extraction",
    year: "Feb 2026",
    category: "AI & Vision",
    description: "An intelligent document processing platform leveraging Google Gemini AI multimodal vision to parse physical records, automatically extract critical registration and expiration dates, and persist structured telemetry in Firebase.",
    longDescription: "Manual data entry from official documents is notoriously error-prone and labor-intensive. This project integrates Gemini AI vision models to evaluate uploaded document imagery, perform spatial character reasoning to detect crucial issuance and expiration timestamps, and stream structured payloads directly into Firebase cloud collections.",
    highlights: [
      "Integrated Google Gemini multimodal vision API for high-accuracy document OCR and semantic field detection.",
      "Automated extraction of critical document metadata, specifically registration and expiration validity timestamps.",
      "Eliminated manual transcript transcription overhead by auto-populating structured form fields.",
      "Persisted sanitized and validated document payloads securely into Firebase cloud storage & database."
    ],
    technologies: ["Google Gemini API", "Firebase", "JavaScript", "Express.js", "Node.js", "Web APIs"],
    githubUrl: "https://github.com/Ujwalushettigar/AIDoc",
    featured: true
  },
  {
    id: "resto-application",
    title: "Resto",
    subtitle: "Modern Responsive Restaurant & Culinary Showcase Platform",
    year: "April 2026",
    category: "Full-Stack",
    description: "A responsive full-stack restaurant application featuring fluid interactive menus, category filtering, dark mode theming, and modular component architecture.",
    longDescription: "Resto delivers a digital dining experience built with Next.js, React, and Tailwind CSS. The platform emphasizes fluid client-side navigation, mobile-first responsive layouts, strict ESLint enforcement, and an intuitive browsing workflow for restaurant customers.",
    highlights: [
      "Architected responsive page layouts including dynamic menu catalogs, interactive dish previews, and responsive ordering funnels.",
      "Employed Tailwind CSS utility design for clean dark and light interface modes.",
      "Implemented modular, reusable component hierarchies following strict ESLint rules in VS Code.",
      "Deployed and verified live on Vercel edge infrastructure."
    ],
    technologies: ["Next.js", "React.js", "JavaScript", "Tailwind CSS", "ESLint"],
    githubUrl: "https://github.com/Ujwalushettigar/Resto",
    liveUrl: "https://resto-one-delta.vercel.app/",
    featured: true
  },
  {
    id: "fire-todo",
    title: "fireTodo",
    subtitle: "Cloud-Synchronized Task Management with Supabase & Firebase",
    year: "March 2026",
    category: "Integration",
    description: "A resilient task management tool demonstrating cloud database integration, REST API-based data retrieval, and session state persistence with zero data loss during active sessions.",
    longDescription: "fireTodo explores real-time cross-platform state synchronization. Integrating cloud backend persistence with RESTful endpoints, the application guarantees persistent task ordering, status tracking, and seamless session recovery.",
    highlights: [
      "Engineered backend persistence pipelines utilizing Supabase storage and RESTful data retrieval.",
      "Optimized cross-platform state synchronization ensuring zero data loss during network disruptions.",
      "Structured clean state lifecycle management for responsive UI updates on task mutation."
    ],
    technologies: ["React.js", "Supabase", "REST APIs", "JavaScript", "Cloud DB"],
    githubUrl: "https://github.com/Ujwalushettigar/fireTodo",
    featured: true
  },
  {
    id: "smart-curriculum-attendance",
    title: "Smart Curriculum Attendance System",
    subtitle: "Localized QR Scanning & Rapid Academic Attendance Tracking",
    year: "Sep 2025",
    category: "Academic",
    description: "A localized QR-based attendance tracking platform designed to speed up classroom attendance logging for university lecturers, designed and prototyped in Figma.",
    longDescription: "Traditional roll-call in university lecture halls wastes substantial teaching time. The Smart Curriculum Attendance System employs time-bounded, localized dynamic QR codes that students scan to verify presence within seconds, backed by an accessible lecturer interface prototyped in Figma.",
    highlights: [
      "Formulated localized QR code scanning flow to eliminate proxy attendance and accelerate logging.",
      "Designed full end-to-end student and lecturer user journeys in Figma for rapid UI/UX validation.",
      "Prioritized ergonomic, one-tap attendance verification workflows tailored for lecture halls."
    ],
    technologies: ["Figma UI/UX", "JavaScript", "QR Code Engine", "Mobile Web"],
    isPrivateOrAcademic: true,
    featured: false
  },
  {
    id: "ai-finance-coach",
    title: "AI Personal Finance Coach",
    subtitle: "Automated Budget Analytics & Transaction Categorization",
    year: "Sep 2026",
    category: "AI & Vision",
    description: "An intelligent personal budgeting platform that analyzes income streams and expense categories to generate actionable fiscal insights and automatic transaction tagging.",
    longDescription: "Empowering users to gain clarity over cash flows, this platform applies algorithmic financial analysis and LLM-assisted transaction categorization to deliver personalized savings strategies and spending breakdown metrics.",
    highlights: [
      "Constructed automated spending categorization engines parsing raw transaction descriptions.",
      "Generated actionable budgetary recommendations tailored to user-specified savings goals.",
      "Designed clean data visualization cards for expense distribution across categories."
    ],
    technologies: ["JavaScript", "Node.js", "REST APIs", "Analytics", "HTML/CSS"],
    githubUrl: "https://github.com/Ujwalushettigar/AI-Personal-Finance-Coach",
    featured: false
  }
];

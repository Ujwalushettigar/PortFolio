# 🌌 Ujwal U Shettigar — Premium 3D Developer Portfolio

A modern, immersive, dark space-inspired personal developer portfolio engineered for **Ujwal U Shettigar**, Computer Science Engineering Undergraduate (Class of June 2028, CGPA: 9.23/10) at Sahyadri College of Engineering and Management, Mangalore.

Featuring an **interactive 3D mechanical keyboard skill matrix**, **space-inspired cosmic starfield**, **gyroscopic 3D digital core**, **authentic engineering project showcases**, **LeetCode algorithm telemetry**, and an **authoritative embedded resume viewer**.

---

## 🚀 Key Features

1. **Space-Inspired Immersive Visual Identity**:
   - Deep charcoal (`#050811`) and midnight-blue canvas background.
   - Restrained electric-cyan (`#38bdf8`), neon-blue, and violet lighting accents.
   - Interactive HTML5 / WebGL starfield with procedural twinkling and mouse parallax.
   - Subtle custom cyber-cursor follower with link/button hover states.

2. **Interactive 3D Mechanical Keyboard (Skills Matrix)**:
   - Built with **Three.js** and **React Three Fiber**.
   - Ergonomic 3-row mechanical keyboard chassis with individual 3D beveled keycaps.
   - Real-time keycap depression animation on click, hover, or **physical keyboard typing**!
   - Built-in procedural Web Audio mechanical click synthesizer (Cherry MX style switch click + bottom-out thock) with one-click sound toggle.
   - Cyber Skill HUD Inspector detailing real-world project applications without fabricated percentages.
   - Seamless 2.5D tactile switch grid fallback for mobile devices and non-WebGL environments.

3. **Production Projects Architecture**:
   - **QuickFix Grocery**: Hyperlocal grocery delivery platform with 4-tier Role-Based Access Control (Customer, Picker, Delivery, Admin), live Supabase synchronization, and bounded-wait substitution state machine.
   - **AI Document Intelligence Platform (AIDoc)**: Multimodal Google Gemini Vision pipeline extracting registration and expiration dates to Firebase.
   - **Resto**: Responsive culinary application built with Next.js, React, and Tailwind CSS, deployed live on Vercel.
   - **fireTodo**: Task management tool with Supabase backend persistence and cross-platform sync.
   - **Smart Curriculum Attendance System**: Localized QR-code academic attendance system prototyped in Figma.
   - **AI Personal Finance Coach**: Budgeting analytics platform with automated category classification.

4. **160+ LeetCode Problem-Solving Telemetry**:
   - High-tech metrics display highlighting 160+ problems solved in C++.
   - Pattern breakdown: Monotonic Stacks, Binary Search Boundaries, Bucket Sort, Frequency Maps.
   - Direct links to verified [LeetCode profile](https://leetcode.com/u/Ujwal_Shettigar/) and [DSA repository](https://github.com/Ujwalushettigar/DSA).

5. **Authoritative Resume Viewer & Modal**:
   - Integrated PDF modal previewing `public/Ujwal_U_Shettigar_Resume.pdf`.
   - One-click PDF download with celebratory confetti animation.

6. **Secure Contact System**:
   - Verified contact channels (Email, LinkedIn, GitHub).
   - Validated contact form endpoint (`/api/contact`) supporting external email dispatch (Resend) or client mailto fallback with zero secret exposure.

---

## 🛠️ Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS, PostCSS, Custom Vanilla CSS utilities
- **3D Graphics**: Three.js, React Three Fiber, React Three Drei
- **Icons**: Lucide React
- **Audio Engine**: Web Audio API (procedural synthesized mechanical clicks)
- **Effects**: Canvas Confetti

---

## 📁 Project Architecture

```
Portfolio/
├── public/
│   └── Ujwal_U_Shettigar_Resume.pdf  # Authoritative resume PDF
├── src/
│   ├── app/
│   │   ├── api/contact/route.ts      # Server-side contact validation & dispatch
│   │   ├── globals.css               # Design system & dark space theme tokens
│   │   ├── layout.tsx                # Metadata, OpenGraph & Google Fonts
│   │   ├── not-found.tsx             # Cyber 404 handler
│   │   ├── page.tsx                  # Root landing page composing all sections
│   │   ├── robots.ts                 # SEO indexing rules
│   │   └── sitemap.ts                # SEO sitemap
│   ├── components/
│   │   ├── canvas/
│   │   │   ├── HeroCore3D.tsx        # Rotating 3D gyroscopic technical artifact
│   │   │   ├── KeyboardScene3D.tsx   # 3D mechanical keyboard skill matrix
│   │   │   └── SpaceBackground.tsx   # Parallax cosmic starfield
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx       # Intro, wordmark, CTA actions
│   │   │   ├── AboutSection.tsx      # Authentic background & academic status
│   │   │   ├── SkillsSection.tsx     # 3D keyboard controller & Cyber HUD
│   │   │   ├── ProjectsSection.tsx   # Project cards & architectural schematics
│   │   │   ├── ProblemSolvingSection.tsx # LeetCode 160+ stats & patterns
│   │   │   ├── EducationSection.tsx  # Sahyadri College (CGPA 9.23, June 2028)
│   │   │   ├── TechnicalInterestsSection.tsx # OpenGL, C++, Game Dev, Systems
│   │   │   ├── ContactSection.tsx    # Contact channels & secure form
│   │   │   └── Footer.tsx            # Copyright, socials, back-to-top
│   │   └── ui/
│   │       ├── CustomCursor.tsx      # Pointer glow ring
│   │       ├── Navbar.tsx            # Sticky header, sound toggle, mobile drawer
│   │       ├── ProjectModal.tsx      # Detailed architectural inspect modal
│   │       ├── ResumeModal.tsx       # Embedded PDF viewer & download
│   │       └── TactileKeyboardFallback.tsx # High-performance 2.5D matrix
│   ├── data/
│   │   ├── personal.ts               # Authoritative personal, education & LeetCode data
│   │   ├── projects.ts               # Centralized typed project catalog
│   │   └── skills.ts                 # 3D mechanical keycap layout mappings
│   ├── lib/
│   │   ├── audio.ts                  # Procedural mechanical switch click synthesizer
│   │   └── utils.ts                  # Tailwind clsx/twMerge utilities
│   └── types/
│       └── portfolio.ts              # Typed contracts for all data structures
├── tailwind.config.ts
├── tsconfig.json
├── next.config.mjs
└── package.json
```

---

## ⚡ Getting Started Locally

### 1. Prerequisites
- Node.js (v18.17 or higher, v20+ recommended)
- npm or pnpm

### 2. Installation
```bash
# Clone the repository
git clone https://github.com/Ujwalushettigar/Portfolio.git

# Enter project directory
cd Portfolio

# Install dependencies
npm install
```

### 3. Environment Variables (Optional)
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```
If you wish to enable server-side message dispatch via [Resend](https://resend.com):
```env
RESEND_API_KEY=your_resend_api_key_here
CONTACT_EMAIL=ujwalshettigar@gmail.com
```
*Note: If no key is provided, the contact form automatically provides a pre-filled client mailto fallback.*

### 4. Running the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Type Checking & Production Build
```bash
# Validate TypeScript contracts
npm run typecheck

# Build optimized production bundle
npm run build

# Start production server
npm run start
```

---

## 🌐 Deployment to Vercel

1. Push your code to your GitHub repository:
   ```bash
   git add .
   git commit -m "feat: complete 3D developer portfolio"
   git push origin main
   ```
2. Import the repository on [Vercel](https://vercel.com/new).
3. Framework Preset: **Next.js**.
4. Root Directory: `./`.
5. (Optional) Add `RESEND_API_KEY` under Environment Variables.
6. Click **Deploy**.

---

## 📄 License & Attribution

- Built by **Ujwal U Shettigar** ([@Ujwalushettigar](https://github.com/Ujwalushettigar)).
- Interactive 3D mechanical keyboard inspired by creative developer portfolio concepts.

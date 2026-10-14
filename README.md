# 🌌 Ujwal U Shettigar — 3D Developer Portfolio

A high-performance, dark space-themed interactive personal developer portfolio for **Ujwal U Shettigar**, Computer Science Engineering Undergraduate (Class of June 2028, CGPA: 9.21/10) at Sahyadri College of Engineering and Management, Mangalore.

Faithfully engineered following the architecture, design system, and 3D interactions of [Naresh-Khatri/3d-portfolio](https://github.com/Naresh-Khatri/3d-portfolio) (MIT License), powered by Next.js 16, React 19, `@chibi3d/runtime`, Three.js, GSAP ScrollTrigger, and Tailwind CSS.

---

## 📜 Continuous Single-Page Architecture

All portfolio sections are arranged in one continuous, vertically scrollable layout from hero to footer without hiding content behind drawers, tabs, or separate routes:

1. **Header & Navigation**:
   - Visible desktop navigation links (`About`, `Skills`, `Projects`, `Problem Solving`, `Education`, `Contact`) for immediate smooth-scroll access.
   - Interactive responsive menu overlay matching the reference styling.
   - Live theme toggle and GitHub repository stats.

2. **Hero Section (`#hero`)**:
   - Distinctive `Unbounded` display outline typography (`text-edge-outline font-display`).
   - Developer title: *Computer Science Engineering Student · Full-Stack Developer*.
   - Education badge: *Undergraduate CSE · Class of 2028 | CGPA: 9.21/10*.
   - Verified action buttons: One-click resume download, direct contact link, and verified profiles (GitHub, LinkedIn, LeetCode, Email).
   - Real 3D mechanical keyboard model loaded in hero floating pose.

3. **About Me (`#about`)**:
   - Comprehensive background, location (Udupi, Karnataka), academic standing at Sahyadri College.
   - Professional summary articulating full-stack expertise (React, Vite, Node.js, Express.js, Supabase, REST APIs) and foundational depth in C++, OOP, STL, and DSA.
   - Clear technical focus on systems architecture, generative AI, and long-term aspirations in game development and graphics programming.

4. **Skills & Tech Stack (`#skills`)**:
   - Interactive 3D mechanical keyboard scene (`@chibi3d/runtime` + `keycaps.glb`) with keycap depression, hover lighting, and synthesized mechanical click audio.
   - Synchronized **Skill Detail HUD / Information Panel** updating dynamically on keycap click or card selection.
   - Category filter tabs: *Languages & Core CS*, *Frontend*, *Backend & Databases*, *Tools & Practices*, *Emerging & Systems*.
   - Complete grid of 22+ verified skills directly visible on the page with real-world project applications.

5. **Featured Projects (`#projects`)**:
   - **QuickFix Grocery**: Hyperlocal grocery delivery web platform with 4-tier Role-Based Access Control (Customer, Picker, Delivery, Admin), Supabase realtime sync, and bounded-wait substitution state machines.
   - **AI Document Intelligence Platform (AIDoc)**: Multimodal Google Gemini Vision pipeline extracting document metadata, registration, and expiration dates with Firebase persistence.
   - **Resto**: Clean, responsive culinary web application built with Next.js, React, and Tailwind CSS, verified live on Vercel (`resto-one-delta.vercel.app`).
   - **fireTodo**: Productivity and task management web app with Supabase cloud database sync and zero session data loss.
   - **Smart Curriculum Attendance System**: Prototyped QR-based academic attendance tracking system designed in Figma.
   - **AI Personal Finance Coach**: Budgeting analytics platform with automated category classification.
   - On-page readable highlights plus optional full-screen architecture inspection dialog (`ResponsiveDialog`).

6. **Problem Solving & DSA (`#problem-solving`)**:
   - Telemetry card highlighting **160+ LeetCode problems solved in C++**.
   - Direct verified link to [LeetCode profile](https://leetcode.com/u/Ujwal_Shettigar/) and [DSA repository](https://github.com/Ujwalushettigar/DSA).
   - Deep-dive cards into core algorithmic patterns: Monotonic Stacks & Queues, Binary Search on Answer Spaces, Bucket Sort & Frequency Maps, Hash Tables & Prefix Sums, C++ STL Containers, and Arrays/Two-Pointers.

7. **Education (`#education`)**:
   - **Sahyadri College of Engineering and Management, Mangalore**.
   - Degree: *Bachelor of Engineering (B.E.) in Computer Science & Engineering* (Nov 2024 – June 2028).
   - Academic standing: **CGPA: 9.21 / 10.0** (Top Quartile).
   - Verified relevant coursework: Data Structures and Algorithms, AI and ML Fundamentals, Cloud Computing, Database Management Systems, Object-Oriented Programming, Advanced Web Technologies.

8. **Contact & Social Channels (`#contact`)**:
   - Direct email: `ujwalshettigar@gmail.com`.
   - Verified links to LinkedIn, GitHub, and LeetCode.
   - Validated message dispatch form connected to `/api/send`.

9. **Footer**:
   - Copyright notice, social links, and smooth scroll to top.

---

## 🛠️ Technology Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Language**: TypeScript
- **3D Runtime**: `@chibi3d/runtime`, Three.js, WebGL
- **Animation & Motion**: GSAP, ScrollTrigger, Motion, Lenis Smooth Scroll
- **Styling**: Tailwind CSS, PostCSS, SASS, Custom CSS
- **Icons**: Lucide React, React Icons (`react-icons/fa6`, `react-icons/si`)

---

## ⚡ Getting Started Locally

### 1. Installation
```bash
# Clone the repository
git clone https://github.com/Ujwalushettigar/Portfolio.git

# Navigate to project directory
cd Portfolio

# Install dependencies
npm install --legacy-peer-deps
```

### 2. Running Locally
```bash
# Start development server
npm run dev

# Or build and run production server
npm run build
npm run start
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Verification & Testing
```bash
# TypeScript type check (0 errors)
npm run typecheck

# Production build validation
npm run build
```

---

## 📄 License & Attribution

- Developer: **Ujwal U Shettigar** ([@Ujwalushettigar](https://github.com/Ujwalushettigar))
- Architectural reference & 3D keyboard scene: [Naresh-Khatri/3d-portfolio](https://github.com/Naresh-Khatri/3d-portfolio) under the MIT License.

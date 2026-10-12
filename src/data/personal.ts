import { PersonalInfo, EducationInfo, ProblemSolvingStats } from "@/types/portfolio";

export const PERSONAL_INFO: PersonalInfo = {
  name: "Ujwal U Shettigar",
  title: "Computer Science Engineering Student · Full-Stack Developer",
  tagline: "I build practical web applications, explore core computer science, and turn ideas into working software.",
  location: "Udupi, Karnataka, India",
  email: "ujwalshettigar@gmail.com",
  phone: "8867990708",
  github: "https://github.com/Ujwalushettigar",
  linkedin: "https://linkedin.com/in/ujwal-shettigar-ab497b2b3",
  leetcode: "https://leetcode.com/u/Ujwal_Shettigar/",
  bio: [
    "I am an undergraduate Computer Science Engineering student with hands-on experience developing full-stack web applications, integrating reliable backend services, and structuring cloud databases.",
    "My focus centers on practical engineering: building role-based distributed workflows, working with real-time databases, integrating AI vision APIs, and optimizing algorithms in C++.",
    "Driven by a strong foundation in Object-Oriented Programming, Data Structures, and Algorithm design, I maintain an active, long-term technical curiosity in graphics programming and game development."
  ],
  currentFocus: [
    "Full-Stack Web Systems (React, Next.js, Node.js, Supabase)",
    "Data Structures & Algorithms in C++",
    "Graphics Programming & OpenGL",
    "Generative AI & Document Vision Pipelines"
  ]
};

export const EDUCATION_INFO: EducationInfo = {
  institution: "Sahyadri College of Engineering and Management",
  degree: "Bachelor of Engineering in Computer Science Engineering",
  expectedGraduation: "June 2028",
  cgpa: "9.23 / 10",
  location: "Mangalore, Karnataka, India",
  coursework: [
    "Data Structures & Algorithms",
    "Artificial Intelligence & Machine Learning Fundamentals",
    "Cloud Computing",
    "Database Management Systems",
    "Object-Oriented Programming",
    "Advanced Web Technologies"
  ]
};

export const PROBLEM_SOLVING_STATS: ProblemSolvingStats = {
  platform: "LeetCode",
  problemsSolved: "160+",
  language: "C++",
  topCategories: ["Arrays", "Math", "Hash Tables", "Binary Search", "Strings"],
  patterns: [
    "Monotonic Stacks",
    "Binary Search Boundaries",
    "Bucket Sort",
    "Frequency Maps",
    "Two Pointers & Sliding Window"
  ],
  containers: [
    "std::unordered_map",
    "std::priority_queue",
    "std::vector",
    "std::set",
    "std::deque"
  ],
  profileUrl: "https://leetcode.com/u/Ujwal_Shettigar/",
  dsaRepoUrl: "https://github.com/Ujwalushettigar/DSA"
};

export const TECHNICAL_INTERESTS = [
  {
    title: "C++ & Systems Programming",
    status: "Active Practice & Fundamentals",
    description: "Deepening memory management, pointer semantics, cache-conscious data layout, and STL internals beyond competitive programming.",
    icon: "Binary"
  },
  {
    title: "Graphics Programming & OpenGL",
    status: "Long-Term Pursuit",
    description: "Studying shader pipelines (GLSL), rasterization math, matrix transformations, rendering buffers, and 3D coordinate spaces.",
    icon: "Cpu"
  },
  {
    title: "Game Development",
    status: "Core Interest",
    description: "Exploring game engine architectures, game loops, delta-time physics simulations, and spatial partitioning techniques.",
    icon: "Gamepad2"
  },
  {
    title: "AI Integration & Document Vision",
    status: "Hands-on Applied",
    description: "Architecting automated pipelines that connect multimodal LLMs (Google Gemini API) with structured databases for document analysis.",
    icon: "Bot"
  },
  {
    title: "Linux & Developer Environments",
    status: "Daily Workflow",
    description: "Utilizing bash scripting, command-line tooling, git workflows, and cross-platform compilation environments.",
    icon: "Terminal"
  },
  {
    title: "Cybersecurity Fundamentals",
    status: "Active Learning",
    description: "Understanding network transport layers, role-based token authorization, safe API sanitization, and OWASP best practices.",
    icon: "ShieldAlert"
  }
];

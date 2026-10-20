const config = {
  title: "Ujwal U Shettigar | Computer Science Engineering Student · Full-Stack Developer",
  description: {
    long: "I build practical web applications, explore core computer science, and turn ideas into working software. Computer Science Engineering student at Sahyadri College of Engineering and Management (Class of 2028, CGPA: 9.21/10) with hands-on full-stack, Supabase, Firebase, and C++ problem-solving experience.",
    short:
      "Portfolio of Ujwal U Shettigar, Computer Science Engineering Student and Full-Stack Developer.",
  },
  keywords: [
    "Ujwal U Shettigar",
    "portfolio",
    "full-stack developer",
    "computer science engineering",
    "Sahyadri College of Engineering",
    "C++ DSA",
    "LeetCode",
    "React",
    "Next.js",
    "Supabase",
    "Firebase",
    "Three.js",
    "3D portfolio",
  ],
  author: "Ujwal U Shettigar",
  email: "ujwalshettigar@gmail.com",
  site: "https://port-folio-ruby-mu.vercel.app",

  // for github stars / repos
  githubUsername: "Ujwalushettigar",
  githubRepo: "Portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://github.com/Ujwalushettigar",
    linkedin: "https://www.linkedin.com/in/ujwal-shettigar-ab497b2b3/",
    github: "https://github.com/Ujwalushettigar",
    leetcode: "https://leetcode.com/u/Ujwal_Shettigar/",
    resume: "/Ujwal_U_Shettigar_Resume.pdf",
    dsaRepo: "https://github.com/Ujwalushettigar/DSA",
  },
  personal: {
    name: "Ujwal U Shettigar",
    degree: "Bachelor of Engineering (B.E.) in Computer Science & Engineering",
    college: "Sahyadri College of Engineering and Management",
    location: "Mangalore, Karnataka, India",
    gradYear: "2028",
    gradDate: "June 2028",
    cgpa: "9.21/10",
    cgpaRaw: "9.21",
    cgpaScale: "10.0",
    cgpaFormatted: "CGPA: 9.21 / 10.0",
    cgpaBadge: "CGPA: 9.21/10",
    problemsSolved: "280+",
  },
  leetcodeStats: {
    username: "Ujwal_Shettigar",
    profileUrl: "https://leetcode.com/u/Ujwal_Shettigar/",
    totalSolved: 280,
    totalSolvedDisplay: "280+",
    easy: 190,
    medium: 82,
    hard: 8,
    totalSubmissions: 1654,
    activeDays: 256,
    currentStreak: 120,
    globalRanking: 568039,
  },
};
export { config };

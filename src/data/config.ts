const config = {
  title: "Ujwal U Shettigar | Computer Science Engineering Student · Full-Stack Developer",
  description: {
    long: "I build practical web applications, explore core computer science, and turn ideas into working software. Computer Science Engineering student at Sahyadri College of Engineering and Management (Class of 2028, CGPA: 9.23/10) with hands-on full-stack, Supabase, Firebase, and C++ problem-solving experience.",
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
  site: "https://github.com/Ujwalushettigar",

  // for github stars / repos
  githubUsername: "Ujwalushettigar",
  githubRepo: "Portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://github.com/Ujwalushettigar",
    linkedin: "https://linkedin.com/in/ujwal-shettigar-ab497b2b3",
    github: "https://github.com/Ujwalushettigar",
    leetcode: "https://leetcode.com/u/Ujwal_Shettigar/",
    resume: "/Ujwal_U_Shettigar_Resume.pdf",
  },
};
export { config };

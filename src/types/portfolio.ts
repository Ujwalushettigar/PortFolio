export interface Project {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  category: "Full-Stack" | "AI & Vision" | "Academic" | "Integration" | "Systems";
  description: string;
  longDescription: string;
  highlights: string[];
  technologies: string[];
  roles?: string[];
  githubUrl?: string;
  liveUrl?: string;
  isPrivateOrAcademic?: boolean;
  architectureNotes?: string[];
  featured: boolean;
}

export interface SkillItem {
  id: string;
  name: string;
  keyLabel: string;
  category: "Languages & Core" | "Frontend" | "Backend & DB" | "Tools & Engineering";
  row: number; // 0, 1, 2, 3 for keyboard placement
  col: number;
  width?: number; // 1 = 1u, 1.5 = 1.5u, etc.
  description: string;
  appliedIn: string[];
  color: string;
  accent: string;
  proficiencyNote: string;
}

export interface EducationInfo {
  institution: string;
  degree: string;
  expectedGraduation: string;
  cgpa: string;
  location: string;
  coursework: string[];
}

export interface ProblemSolvingStats {
  platform: string;
  problemsSolved: string;
  language: string;
  topCategories: string[];
  patterns: string[];
  containers: string[];
  profileUrl: string;
  dsaRepoUrl: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string[];
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  leetcode: string;
  currentFocus: string[];
}

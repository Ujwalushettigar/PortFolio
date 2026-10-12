import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#050811",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Ujwal U Shettigar — Full-Stack Developer & CSE Undergraduate",
  description:
    "Personal portfolio of Ujwal U Shettigar. Computer Science Engineering student, full-stack developer with hands-on experience in React, Next.js, Node.js, Express, Supabase, Firebase, and C++ problem solving.",
  keywords: [
    "Ujwal U Shettigar",
    "Full-Stack Developer",
    "Computer Science Engineering",
    "Sahyadri College of Engineering and Management",
    "React",
    "Next.js",
    "Three.js",
    "3D Portfolio",
    "C++ DSA",
    "Supabase",
    "Firebase",
    "LeetCode",
  ],
  authors: [{ name: "Ujwal U Shettigar", url: "https://github.com/Ujwalushettigar" }],
  creator: "Ujwal U Shettigar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/Ujwalushettigar",
    title: "Ujwal U Shettigar — Developer Portfolio",
    description:
      "Full-Stack Developer & Computer Science Engineering Student. Explore interactive 3D technical keycaps, engineering projects, and algorithm problem-solving.",
    siteName: "Ujwal U Shettigar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ujwal U Shettigar — Developer Portfolio",
    description:
      "Full-Stack Developer & CSE Student · 3D Interactive Portfolio",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased bg-space-950 text-slate-100 selection:bg-cyan-500/30 selection:text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}

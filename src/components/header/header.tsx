"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./style.module.scss";
import { opacity, background } from "./anim";
import Nav from "./nav";
import { cn } from "@/lib/utils";
import FunnyThemeToggle from "../theme/funny-theme-toggle";
import { Button } from "../ui/button";
import { config } from "@/data/config";
import OnlineUsers from "../realtime/online-users";
import { GameTrigger } from "../game/game-trigger";
import { links } from "./config";
import { useLenis } from "@/lib/lenis";

interface HeaderProps {
  loader?: boolean;
  githubStars?: React.ReactNode;
}

const Header = ({ loader, githubStars }: HeaderProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const pathname = usePathname();
  const isHome = pathname === "/";
  const lenis = useLenis();

  // Highlight active section based on current scroll position
  useEffect(() => {
    if (!isHome) return;

    const sectionIds = [
      "hero",
      "about",
      "skills",
      "projects",
      "problem-solving",
      "education",
      "contact",
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  // Smooth scroll with navbar height offset compensation
  const handleScrollTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (isHome && href.startsWith("/#")) {
      e.preventDefault();
      const targetId = href.replace("/#", "");
      if (targetId === "hero") {
        if (lenis) {
          lenis.scrollTo(0, { duration: 1.2 });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      } else {
        const element = document.getElementById(targetId);
        if (element) {
          if (lenis) {
            lenis.scrollTo(element, { offset: -90, duration: 1.2 });
          } else {
            const y = element.getBoundingClientRect().top + window.scrollY - 90;
            window.scrollTo({ top: y, behavior: "smooth" });
          }
        }
      }
      window.history.pushState(null, "", `#${targetId}`);
    }
  };

  return (
    <motion.header
      className={cn(
        styles.header,
        "fixed top-0 left-0 w-full z-50 transition-colors duration-300",
        isActive
          ? "bg-background/95 border-b border-border/80"
          : "bg-background/80 backdrop-blur-md border-b border-border/40 shadow-xs"
      )}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{
        delay: loader ? 3.5 : 0,
        duration: 0.8,
      }}
    >
      <div className={cn(styles.bar, "w-full max-w-7xl mx-auto flex items-center justify-between gap-4")}>
        {/* 1. Left: Single Brand Name */}
        <div className="flex items-center shrink-0">
          <Link
            href="/#hero"
            onClick={(e) => handleScrollTo(e, "/#hero")}
            className="group flex items-center py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-md"
            aria-label="Ujwal U Shettigar — Home"
          >
            <span className="font-display font-bold text-sm sm:text-base tracking-tight text-foreground group-hover:text-cyan-400 transition-colors whitespace-nowrap">
              {config.author}
            </span>
          </Link>
        </div>

        {/* 2. Center: Horizontal Navigation Links (Desktop & Tablet) */}
        <nav
          className="hidden md:flex items-center justify-center gap-1 lg:gap-2.5 xl:gap-4 2xl:gap-5 text-xs font-mono uppercase tracking-wider"
          aria-label="Main Navigation"
        >
          {links.map((link) => {
            const targetId = link.href.replace("/#", "");
            const isCurrent = isHome && activeSection === targetId;

            return (
              <Link
                key={link.title}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className={cn(
                  "px-2.5 py-1.5 rounded-full transition-all duration-200 whitespace-nowrap text-[11px] lg:text-xs",
                  isCurrent
                    ? "text-cyan-400 bg-cyan-500/10 font-medium shadow-xs"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/40"
                )}
              >
                {link.title === "Problem Solving" ? (
                  <>
                    <span className="hidden xl:inline">Problem Solving</span>
                    <span className="xl:hidden">Problems</span>
                  </>
                ) : (
                  link.title
                )}
              </Link>
            );
          })}
        </nav>

        {/* 3. Right: Theme Toggle, GitHub Stars & Mobile Menu Trigger */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <FunnyThemeToggle className="w-6 h-6 flex items-center justify-center" />

          {isHome && process.env.NEXT_PUBLIC_WS_URL && (
            <div className="hidden lg:flex items-center">
              <GameTrigger className="mr-3" />
              <OnlineUsers />
            </div>
          )}

          {githubStars && (
            <div className="hidden sm:flex items-center">
              {githubStars}
            </div>
          )}

          {/* Mobile menu trigger (< md) */}
          <Button
            variant="ghost"
            onClick={() => setIsActive(!isActive)}
            aria-label={isActive ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isActive}
            className={cn(
              styles.el,
              "m-0 p-1.5 h-8 w-8 bg-transparent flex items-center justify-center md:hidden hover:bg-secondary/40 rounded-md"
            )}
          >
            <div
              className={`${styles.burger} ${
                isActive ? styles.burgerActive : ""
              }`}
            />
          </Button>
        </div>
      </div>

      {/* Mobile slide-down backdrop overlay */}
      <motion.div
        variants={background}
        initial="initial"
        animate={isActive ? "open" : "closed"}
        onClick={() => setIsActive(false)}
        className={styles.background}
      />

      {/* Mobile slide-down drawer menu */}
      <AnimatePresence mode="wait">
        {isActive && <Nav setIsActive={setIsActive} />}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;

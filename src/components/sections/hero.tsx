import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { File, Mail, Code2 } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePreloader } from "../preloader";
import { BlurIn, BoxReveal } from "../reveal-animations";
import ScrollDownIcon from "../scroll-down-icon";
import { SiGithub, SiX } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { config } from "@/data/config";

import SectionWrapper from "../ui/section-wrapper";

const HeroSection = () => {
  const { isLoading } = usePreloader();

  return (
    <SectionWrapper id="hero" className={cn("relative w-full h-screen")}>
      <div className="grid md:grid-cols-2">
        <div
          className={cn(
            "h-[calc(100dvh-3rem)] md:h-[calc(100dvh-4rem)] z-[2]",
            "col-span-1",
            "flex flex-col justify-start md:justify-center items-center md:items-start",
            "pt-24 sm:pb-16 md:p-16 lg:p-20 xl:p-24"
          )}
        >
          <div
            className={cn(
              "flex flex-col transition-opacity duration-700",
              isLoading ? "opacity-0 pointer-events-none" : "opacity-100"
            )}
          >
            <div>
              <BlurIn delay={0.5}>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/60 border border-border text-xs font-mono mb-3 text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span>Undergraduate CSE · Class of 2028</span>
                    <span className="text-border">|</span>
                    <span className="text-foreground font-semibold">CGPA: 9.23/10</span>
                  </div>
                </BlurIn>

                <BlurIn delay={0.7}>
                  <p
                    className={cn(
                      "md:self-start mt-2 font-medium text-md text-slate-500 dark:text-zinc-400",
                      "cursor-default sm:text-lg md:text-xl whitespace-nowrap bg-clip-text"
                    )}
                  >
                    Hi, I am
                    <br className="md:hidden" />
                  </p>
                </BlurIn>

                <BlurIn delay={1}>
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <h1
                        className={cn(
                          "-ml-[6px] leading-none text-transparent text-slate-800 text-left",
                          "font-bold text-6xl sm:text-7xl md:text-7xl lg:text-8xl xl:text-9xl",
                          "cursor-default text-edge-outline font-display"
                        )}
                      >
                        UJWAL
                        <br className="md:block hidden" />
                        SHETTIGAR
                      </h1>
                    </TooltipTrigger>
                    <TooltipContent
                      side="top"
                      className="dark:bg-white dark:text-black font-sans"
                    >
                      Computer Science Engineering · Sahyadri College
                    </TooltipContent>
                  </Tooltip>
                </BlurIn>

                <BlurIn delay={1.2}>
                  <p
                    className={cn(
                      "md:self-start mt-3 font-medium text-base text-cyan-500 dark:text-cyan-400 font-sans",
                      "cursor-default sm:text-lg md:text-xl whitespace-normal max-w-xl"
                    )}
                  >
                    Computer Science Engineering Student · Full-Stack Developer
                  </p>
                </BlurIn>

                <BlurIn delay={1.4}>
                  <p
                    className={cn(
                      "md:self-start mt-2 text-sm text-muted-foreground font-sans max-w-lg leading-relaxed"
                    )}
                  >
                    &ldquo;I build practical web applications, explore core computer science, and turn ideas into working software.&rdquo;
                  </p>
                </BlurIn>
              </div>

              <div className="mt-7 flex flex-col gap-3 w-fit">
                <Link
                  href="/Ujwal_U_Shettigar_Resume.pdf"
                  target="_blank"
                  className="flex-1"
                  download="Ujwal_U_Shettigar_Resume.pdf"
                >
                  <BoxReveal delay={1.8} width="100%">
                    <Button className="flex items-center gap-2 w-full font-semibold">
                      <File size={20} />
                      <p>View & Download Resume</p>
                    </Button>
                  </BoxReveal>
                </Link>

                <div className="md:self-start flex flex-wrap items-center gap-3">
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <Link href="#contact">
                        <Button
                          variant="outline"
                          className="block w-full overflow-hidden"
                        >
                          Contact Me
                        </Button>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <p>Get in touch directly</p>
                    </TooltipContent>
                  </Tooltip>

                  <div className="flex items-center h-full gap-2">
                    <Link
                      href={config.social.github}
                      target="_blank"
                      className="cursor-can-hover"
                      title="GitHub Profile"
                    >
                      <Button variant="outline" size="icon">
                        <SiGithub size={20} />
                      </Button>
                    </Link>

                    <Link
                      href={config.social.linkedin}
                      target="_blank"
                      className="cursor-can-hover"
                      title="LinkedIn Profile"
                    >
                      <Button variant="outline" size="icon">
                        <FaLinkedin size={20} />
                      </Button>
                    </Link>

                    <Link
                      href={config.social.leetcode}
                      target="_blank"
                      className="cursor-can-hover"
                      title="LeetCode (160+ Solved)"
                    >
                      <Button variant="outline" size="icon">
                        <Code2 size={20} className="text-amber-400" />
                      </Button>
                    </Link>

                    <Link
                      href={`mailto:${config.email}`}
                      className="cursor-can-hover"
                      title="Direct Email"
                    >
                      <Button variant="outline" size="icon">
                        <Mail size={20} />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/* Right column: 3D Keyboard Scene is rendered by AnimatedBackground into this area */}
        <div className="grid col-span-1 pointer-events-none"></div>
      </div>

      <div className="absolute bottom-8 left-[50%] translate-x-[-50%] z-10">
        <ScrollDownIcon />
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;

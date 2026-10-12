"use client";

import React, { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  z: number;
  size: number;
  alpha: number;
  twinkleSpeed: number;
  color: string;
}

export default function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse parallax tracking
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX - width / 2) * 0.05;
      targetMouseY = (e.clientY - height / 2) * 0.05;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initStars();
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("resize", handleResize);

    // Color palette for subtle space stars: white, ice-blue, subtle violet
    const starColors = ["#ffffff", "#e0f2fe", "#93c5fd", "#c4b5fd", "#38bdf8"];

    let stars: Star[] = [];
    const STAR_COUNT = Math.min(220, Math.floor((width * height) / 8000));

    const initStars = () => {
      stars = [];
      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          z: Math.random() * 2 + 0.5,
          size: Math.random() * 1.6 + 0.4,
          alpha: Math.random() * 0.8 + 0.2,
          twinkleSpeed: (Math.random() * 0.02 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
          color: starColors[Math.floor(Math.random() * starColors.length)],
        });
      }
    };

    initStars();

    let lastTime = performance.now();

    const render = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      // Smooth mouse lerp
      currentMouseX += (targetMouseX - currentMouseX) * 0.04;
      currentMouseY += (targetMouseY - currentMouseY) * 0.04;

      ctx.clearRect(0, 0, width, height);

      // Deep space base
      ctx.fillStyle = "#05070e";
      ctx.fillRect(0, 0, width, height);

      // Render Stars with subtle drift and parallax
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        // Twinkle
        star.alpha += star.twinkleSpeed;
        if (star.alpha > 0.95 || star.alpha < 0.2) {
          star.twinkleSpeed = -star.twinkleSpeed;
        }

        // Slight drift
        star.y -= 0.15 * star.z;
        if (star.y < -10) {
          star.y = height + 10;
          star.x = Math.random() * width;
        }

        // Parallax position
        const posX = star.x + currentMouseX * star.z;
        const posY = star.y + currentMouseY * star.z;

        ctx.beginPath();
        ctx.arc(posX, posY, star.size, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = star.alpha;
        ctx.fill();

        // Subtle glow on larger stars
        if (star.size > 1.4) {
          ctx.beginPath();
          ctx.arc(posX, posY, star.size * 2.4, 0, Math.PI * 2);
          ctx.fillStyle = star.color;
          ctx.globalAlpha = star.alpha * 0.2;
          ctx.fill();
        }
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block"
        aria-hidden="true"
      />
      {/* Cosmic nebula atmospheric glows */}
      <div 
        className="absolute top-[-10%] left-[-10%] w-[55vw] h-[55vw] rounded-full blur-[140px] opacity-25 pointer-events-none bg-blue-600/30"
        aria-hidden="true"
      />
      <div 
        className="absolute top-[30%] right-[-15%] w-[50vw] h-[50vw] rounded-full blur-[160px] opacity-20 pointer-events-none bg-indigo-600/30"
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] rounded-full blur-[180px] opacity-15 pointer-events-none bg-cyan-600/20"
        aria-hidden="true"
      />
      {/* Subtle scanline / grid texture overlay */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,7,14,0.65)_100%)] pointer-events-none" 
        aria-hidden="true"
      />
    </div>
  );
}

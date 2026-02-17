"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-4 pt-12"
      id="overview"
    >
      {/* Subtle radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 60%, hsl(0 0% 10%) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Product name */}
      <h1
        className="relative z-10 text-balance text-center text-6xl font-bold tracking-tight text-foreground md:text-8xl lg:text-9xl"
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 1s cubic-bezier(0.21, 0.47, 0.32, 0.98) 0.2s",
        }}
      >
        BOOSTER K1
      </h1>

      {/* Subtext */}
      <p
        className="relative z-10 mt-4 max-w-xl text-center text-lg font-normal leading-relaxed text-muted-foreground md:text-xl"
        style={{
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateY(0)" : "translateY(20px)",
          transition:
            "opacity 0.8s cubic-bezier(0.21, 0.47, 0.32, 0.98) 0.6s, transform 0.8s cubic-bezier(0.21, 0.47, 0.32, 0.98) 0.6s",
        }}
      >
        A revolutionary humanoid robot for education, research, and AI
        experimentation. 22 DOF. 117 TOPS. Built to move.
      </p>

      {/* Robot Image */}
      <div
        className="relative z-10 mt-10 flex items-center justify-center"
        style={{
          opacity: loaded ? 1 : 0,
          transform: loaded ? "scale(1)" : "scale(0.96)",
          transition:
            "opacity 1s cubic-bezier(0.21, 0.47, 0.32, 0.98) 0.4s, transform 1s cubic-bezier(0.21, 0.47, 0.32, 0.98) 0.4s",
        }}
      >
        <div className="relative h-[380px] w-[280px] md:h-[520px] md:w-[380px]">
          <Image
            src="/images/robot-fullbody.jpg"
            alt="BOOSTER K1 humanoid robot full body view"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* CTA Buttons */}
      <div
        className="relative z-10 mt-8 flex items-center gap-6 pb-12"
        style={{
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateY(0)" : "translateY(16px)",
          transition:
            "opacity 0.6s cubic-bezier(0.21, 0.47, 0.32, 0.98) 1s, transform 0.6s cubic-bezier(0.21, 0.47, 0.32, 0.98) 1s",
        }}
      >
        <a
          href="#buy"
          className="rounded-full bg-foreground px-7 py-3 text-sm font-medium text-background transition-opacity hover:opacity-85"
        >
          Buy
        </a>
        <a
          href="#features"
          className="text-sm font-medium text-accent transition-opacity hover:opacity-75"
        >
          {"Learn more >"}
        </a>
      </div>
    </section>
  );
}

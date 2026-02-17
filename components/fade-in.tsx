"use client";

import React, { useRef, useEffect, useState } from "react";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
}

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.6,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "-80px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const directionStyles: Record<string, { transform: string }> = {
    up: { transform: "translateY(30px)" },
    down: { transform: "translateY(-30px)" },
    left: { transform: "translateX(30px)" },
    right: { transform: "translateX(-30px)" },
    none: { transform: "none" },
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate(0, 0)" : directionStyles[direction].transform,
        transition: `opacity ${duration}s cubic-bezier(0.21, 0.47, 0.32, 0.98) ${delay}s, transform ${duration}s cubic-bezier(0.21, 0.47, 0.32, 0.98) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

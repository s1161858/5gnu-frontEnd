"use client";

import Image from "next/image";
import { Cpu, GitBranch, Accessibility, ScanEye } from "lucide-react";
import { FadeIn } from "@/components/fade-in";

const bentoCards = [
  {
    icon: Cpu,
    title: "117 TOPS AI Power",
    description:
      "Powered by NVIDIA Jetson Orin NX 8GB processor, delivering 117 TOPS of AI computing power for running complex perception models and decision-making algorithms directly on-device.",
    span: "lg:col-span-2 lg:row-span-2",
    size: "large" as const,
    image: "/images/robot-closeup.jpg",
    imageAlt: "Close-up of BOOSTER K1 robot torso showing Booster Robotics branding",
  },
  {
    icon: GitBranch,
    title: "ROS 2 Native",
    description:
      "Supports secondary development with full ROS2 communication protocol compatibility. Provides low-level joint and sensor interfaces as well as high-level motion APIs.",
    span: "lg:col-span-1 lg:row-span-1",
    size: "small" as const,
  },
  {
    icon: Accessibility,
    title: "22 Degrees of Freedom",
    description:
      "6 DOF per leg, 4 DOF per arm, and 2 DOF head for fluid, lifelike movement. Hip joint range: P -170 to 100 degrees, R -23 to +90 degrees, Y +/- 60 degrees. Knee: 0 to 130 degrees.",
    span: "lg:col-span-1 lg:row-span-2",
    size: "tall" as const,
  },
  {
    icon: ScanEye,
    title: "Deep Sensing",
    description:
      "RGBD camera, 9-axis IMU, microphone array, and built-in speaker for comprehensive spatial awareness and voice interaction.",
    span: "lg:col-span-2 lg:row-span-1",
    size: "small" as const,
  },
];

export function HighlightsSection() {
  return (
    <section className="bg-background" id="features">
      <div className="mx-auto max-w-[1200px] px-4 py-20 lg:px-6 lg:py-32">
        <FadeIn className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Features
          </p>
          <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Built different.
          </h2>
        </FadeIn>

        <div className="grid gap-4 lg:grid-cols-3 lg:grid-rows-3">
          {bentoCards.map((card, i) => (
            <FadeIn key={card.title} delay={i * 0.1} className={card.span}>
              <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-card p-8 ring-1 ring-border transition-colors hover:ring-muted-foreground/30">
                {/* Background image for the large card */}
                {card.image && (
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={card.image}
                      alt={card.imageAlt || ""}
                      fill
                      className="object-cover opacity-30 transition-opacity group-hover:opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent" />
                  </div>
                )}
                <div className="relative z-10">
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-muted-foreground">
                    <card.icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <h3
                    className={`mb-3 font-bold tracking-tight text-foreground ${
                      card.size === "large"
                        ? "text-2xl md:text-3xl"
                        : "text-lg md:text-xl"
                    }`}
                  >
                    {card.title}
                  </h3>
                </div>
                <p
                  className={`relative z-10 leading-relaxed text-muted-foreground ${
                    card.size === "large" ? "max-w-md text-base" : "text-sm"
                  }`}
                >
                  {card.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

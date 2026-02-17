"use client";

import Image from "next/image";
import { FadeIn } from "@/components/fade-in";

const features = [
  {
    title: "Education Partner",
    subtitle: "Learning reimagined.",
    description:
      "BOOSTER K1 brings robotics and AI education to life. Designed for classrooms, labs, and research centers, it engages students with hands-on interaction, making complex STEM concepts tangible and exciting.",
    image: "/images/robot-classroom.jpg",
    imageAlt: "BOOSTER K1 robot teaching children in a classroom setting",
  },
  {
    title: "Interactive Companion",
    subtitle: "Built to connect.",
    description:
      "With natural voice interaction through its microphone array and speaker, plus expressive movement across 22 degrees of freedom, K1 creates genuine engagement. Children and researchers alike find a responsive, intuitive partner.",
    image: "/images/robot-kids-playing.jpg",
    imageAlt: "Children playing and interacting with the BOOSTER K1 robot",
  },
  {
    title: "Open Platform",
    subtitle: "Your code. Your robot.",
    description:
      "Fully programmable with ROS 2 compatibility, providing interfaces for low-level joints and sensors as well as high-level motion controls. Supports simulation environments like Isaac Sim, plus a mobile app for network configuration and remote control.",
    image: "/images/robot-learning.jpg",
    imageAlt: "BOOSTER K1 robot assisting a child with studying at a desk",
  },
];

export function FeaturesSection() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-[1200px] px-4 py-20 lg:px-6 lg:py-32">
        <div className="flex flex-col gap-32 lg:gap-40">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="grid items-center gap-8 lg:grid-cols-2 lg:gap-20"
            >
              {/* Text */}
              <FadeIn
                delay={0.1}
                className={i % 2 !== 0 ? "lg:order-2" : ""}
              >
                <p className="mb-2 text-sm font-medium uppercase tracking-widest text-muted-foreground">
                  {feature.subtitle}
                </p>
                <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">
                  {feature.title}
                </h2>
                <p className="max-w-lg text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
                  {feature.description}
                </p>
              </FadeIn>

              {/* Image */}
              <FadeIn
                delay={0.25}
                direction={i % 2 !== 0 ? "left" : "right"}
                className={i % 2 !== 0 ? "lg:order-1" : ""}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-card ring-1 ring-border">
                  <Image
                    src={feature.image}
                    alt={feature.imageAlt}
                    fill
                    className="object-cover"
                  />
                </div>
              </FadeIn>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

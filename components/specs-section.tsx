"use client";

import Image from "next/image";
import { FadeIn } from "@/components/fade-in";

const specs = [
  { label: "Model", value: "BOOSTER K1" },
  { label: "Robot Type", value: "Humanoid" },
  { label: "Robot Use", value: "Education, Research, Sports" },
  { label: "Height", value: "95.0 cm" },
  { label: "Weight", value: "19.5 kg" },
  { label: "Total Degrees of Freedom", value: "22 DOF" },
  { label: "Head / Neck DOF", value: "2 DOF" },
  { label: "Arm DOF", value: "4 DOF (per arm)" },
  { label: "Leg DOF", value: "6 DOF (per leg)" },
  { label: "GPU", value: "NVIDIA Jetson Orin NX 8GB" },
  { label: "AI Computing Power", value: "117 TOPS" },
  { label: "Sensors", value: "RGBD Camera, Mic Array, Speaker, 9-axis IMU" },
  { label: "Hip Joint Range", value: "P -170\u00B0 to 100\u00B0, R -23\u00B0 to +90\u00B0, Y \u00B160\u00B0" },
  { label: "Knee Joint Range", value: "0\u00B0 to 130\u00B0" },
  { label: "Ankle Joint Range", value: "P -50\u00B0 to 20\u00B0, R \u00B120\u00B0" },
  { label: "Battery Life", value: "~40 min" },
  { label: "Secondary Development", value: "Supported (ROS 2)" },
  { label: "Brand", value: "BOOSTER Robotics" },
];

const accessories = [
  "Remote Control",
  "Charger",
  "Robot Transport Case",
];

export function SpecsSection() {
  return (
    <section className="bg-background" id="specs">
      <div className="mx-auto max-w-[1200px] px-4 py-20 lg:px-6 lg:py-32">
        <FadeIn className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Technical Specifications
          </p>
          <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Under the hood.
          </h2>
        </FadeIn>

        <div className="grid items-start gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Specs list */}
          <FadeIn delay={0.15} className="lg:col-span-3">
            <dl>
              {specs.map((spec, i) => (
                <div
                  key={spec.label}
                  className={`flex items-baseline justify-between py-4 ${
                    i !== specs.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <dt className="text-sm text-muted-foreground">{spec.label}</dt>
                  <dd className="text-right text-sm font-medium text-foreground">
                    {spec.value}
                  </dd>
                </div>
              ))}
            </dl>

            {/* Accessories */}
            <div className="mt-10 border-t border-border pt-6">
              <h3 className="mb-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Included Accessories
              </h3>
              <ul className="flex flex-wrap gap-3">
                {accessories.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-secondary px-4 py-1.5 text-xs font-medium text-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Robot image */}
          <FadeIn delay={0.3} direction="right" className="lg:col-span-2">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl bg-card ring-1 ring-border">
              <Image
                src="/images/robot-companion.jpg"
                alt="BOOSTER K1 humanoid robot interacting with children"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

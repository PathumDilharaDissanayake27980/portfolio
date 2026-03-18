"use client";

import { motion } from "framer-motion";

interface AuroraOrb {
  size: number;
  blur: number;
  color: string;
  initialX: string;
  initialY: string;
  animateX: string[];
  animateY: string[];
  duration: number;
  opacity: number;
}

const INTENSITY_OPACITY: Record<"low" | "medium" | "high", number> = {
  low: 0.07,
  medium: 0.12,
  high: 0.18,
};

const ORBS: AuroraOrb[] = [
  {
    size: 700,
    blur: 120,
    color: "#3B82F6",
    initialX: "-10%",
    initialY: "10%",
    animateX: ["-10%", "15%", "-5%", "-10%"],
    animateY: ["10%", "30%", "5%", "10%"],
    duration: 14,
    opacity: 1,
  },
  {
    size: 600,
    blur: 100,
    color: "#8B5CF6",
    initialX: "60%",
    initialY: "50%",
    animateX: ["60%", "40%", "70%", "60%"],
    animateY: ["50%", "20%", "60%", "50%"],
    duration: 18,
    opacity: 0.85,
  },
  {
    size: 500,
    blur: 90,
    color: "#22D3EE",
    initialX: "30%",
    initialY: "70%",
    animateX: ["30%", "50%", "20%", "30%"],
    animateY: ["70%", "50%", "80%", "70%"],
    duration: 22,
    opacity: 0.7,
  },
  {
    size: 400,
    blur: 80,
    color: "#6366F1",
    initialX: "80%",
    initialY: "20%",
    animateX: ["80%", "65%", "85%", "80%"],
    animateY: ["20%", "40%", "10%", "20%"],
    duration: 12,
    opacity: 0.6,
  },
];

export default function AuroraBackground({
  intensity = "medium",
}: {
  intensity?: "low" | "medium" | "high";
}) {
  const baseOpacity = INTENSITY_OPACITY[intensity];

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {ORBS.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: orb.size,
            height: orb.size,
            background: orb.color,
            filter: `blur(${orb.blur}px)`,
            opacity: baseOpacity * orb.opacity,
            left: orb.initialX,
            top: orb.initialY,
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            left: orb.animateX,
            top: orb.animateY,
          }}
          transition={{
            repeat: Infinity,
            duration: orb.duration,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

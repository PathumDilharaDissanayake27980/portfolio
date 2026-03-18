"use client";
import { motion } from "framer-motion";

export default function GlobalAurora() {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      {/* Blue blob — top left */}
      <motion.div
        className="absolute rounded-full bg-blue-500/10 blur-[150px]"
        style={{ width: 900, height: 900, top: -200, left: -200 }}
        animate={{ x: [0, 200, 50, 0], y: [0, 100, -100, 0] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
      {/* Purple blob — center right */}
      <motion.div
        className="absolute rounded-full bg-violet-500/10 blur-[150px]"
        style={{ width: 800, height: 800, top: "30%", right: -300 }}
        animate={{ x: [0, -150, -50, 0], y: [0, 200, -100, 0] }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
      {/* Cyan blob — bottom left */}
      <motion.div
        className="absolute rounded-full blur-[120px]"
        style={{
          width: 700,
          height: 700,
          bottom: "10%",
          left: "10%",
          background: "rgba(34,211,238,0.08)",
        }}
        animate={{ x: [0, 150, -50, 0], y: [0, -150, 50, 0] }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
      {/* Indigo blob — top right */}
      <motion.div
        className="absolute rounded-full blur-[130px]"
        style={{
          width: 600,
          height: 600,
          top: "15%",
          right: "15%",
          background: "rgba(99,102,241,0.08)",
        }}
        animate={{ x: [0, -100, 100, 0], y: [0, 150, -50, 0] }}
        transition={{
          duration: 22,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
      {/* Teal blob — center */}
      <motion.div
        className="absolute rounded-full blur-[180px]"
        style={{
          width: 1000,
          height: 1000,
          top: "40%",
          left: "20%",
          background: "rgba(20,184,166,0.06)",
        }}
        animate={{ x: [0, 100, -100, 0], y: [0, -200, 100, 0] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

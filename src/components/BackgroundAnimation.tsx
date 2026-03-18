"use client";
import { motion } from "framer-motion";

export default function BackgroundAnimation() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute top-0 left-0 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl"
        animate={{
          x: [0, 200, 0],
          y: [0, 200, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"
        animate={{
          x: [0, -200, 0],
          y: [0, -200, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 5,
        }}
      />
    </div>
  );
}

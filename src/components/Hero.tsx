"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import BackgroundAnimation from "./BackgroundAnimation";

export default function Hero() {
  return (
    <section className="relative h-[calc(100vh-64px)]">
      <BackgroundAnimation />
      <div className="container mx-auto flex flex-col items-center justify-center h-full">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-center mb-4"
        >
          Welcome to My Portfolio
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-center text-muted-foreground mb-8"
        >
          I'm a passionate web developer creating modern and responsive
          websites.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link href="/projects">
            <Button size="lg">View My Work</Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
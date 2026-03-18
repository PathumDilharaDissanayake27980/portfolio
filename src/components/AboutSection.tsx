"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  MapPin,
  GraduationCap,
  Star,
  Calendar,
  Globe,
  Cpu,
} from "lucide-react";

const INTERESTS = [
  "Wireless Security",
  "AI/ML",
  "Embedded Systems",
  "Computer Vision",
  "Software Development",
  "Neural Networks",
];

const LANGUAGES = [
  { name: "Sinhala", level: "Native", color: "from-green-400 to-emerald-500" },
  { name: "English", level: "Fluent", color: "from-blue-400 to-blue-600" },
  { name: "Hindi", level: "Conversational", color: "from-orange-400 to-amber-500" },
];

const KEY_FACTS = [
  { icon: GraduationCap, label: "University", value: "University of Peradeniya", color: "text-blue-400" },
  { icon: MapPin, label: "Location", value: "Anuradhapura, Sri Lanka", color: "text-cyan-400" },
  { icon: Calendar, label: "Status", value: "Undergraduate (2022–2026)", color: "text-violet-400" },
  { icon: Star, label: "GPA", value: "3.79 / 4.00", color: "text-yellow-400" },
  { icon: Globe, label: "Availability", value: "Open to Opportunities", color: "text-green-400" },
];

// Terminal lines with the typed animation
const TERMINAL_LINES = [
  { prompt: "$ whoami", output: "pathum-dilhara" },
  { prompt: "$ status", output: "researching-wifi-7-security" },
  { prompt: "$ passion", output: "building-intelligent-systems" },
];

const EASE = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

const leftVariants: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

const rightVariants: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

function TerminalCard() {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [typedOutput, setTypedOutput] = useState<string>("");
  const [currentLineOutput, setCurrentLineOutput] = useState<number>(0);
  const [charIdx, setCharIdx] = useState<number>(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    // Show lines one by one with typed output
    if (currentLineOutput < TERMINAL_LINES.length) {
      const line = TERMINAL_LINES[currentLineOutput];
      if (visibleLines <= currentLineOutput) {
        // Delay before showing prompt
        const t = setTimeout(() => setVisibleLines((v) => v + 1), currentLineOutput === 0 ? 500 : 600);
        return () => clearTimeout(t);
      }
      // Type out the output character by character
      if (charIdx < line.output.length) {
        const t = setTimeout(() => {
          setTypedOutput((prev) => prev + line.output[charIdx]);
          setCharIdx((i) => i + 1);
        }, 60);
        return () => clearTimeout(t);
      } else {
        // Move to next line
        const t = setTimeout(() => {
          setCurrentLineOutput((n) => n + 1);
          setTypedOutput("");
          setCharIdx(0);
        }, 800);
        return () => clearTimeout(t);
      }
    }
  }, [visibleLines, currentLineOutput, charIdx]);

  // Cursor blink handled by CSS

  return (
    <div className="glass-card p-5 font-mono text-sm">
      {/* Terminal header */}
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/[0.06]">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
        <span className="ml-auto text-[10px] text-slate-600 font-medium">~/pathum</span>
      </div>

      {/* Terminal lines */}
      <div className="space-y-2">
        {TERMINAL_LINES.map((line, i) => (
          <div key={i}>
            {visibleLines > i && (
              <div className="text-cyan-400">{line.prompt}</div>
            )}
            {currentLineOutput === i && visibleLines > i && (
              <div className="text-green-300 pl-2">
                &gt; {typedOutput}
                <span className="terminal-cursor" />
              </div>
            )}
            {currentLineOutput > i && (
              <div className="text-green-300 pl-2">&gt; {line.output}</div>
            )}
          </div>
        ))}
        {currentLineOutput >= TERMINAL_LINES.length && (
          <div className="text-cyan-400">
            $ <span className="terminal-cursor" />
          </div>
        )}
      </div>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section divider */}
        <div className="section-divider mb-16" />

        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-tag mb-4">About Me</p>
          <h2 className="font-archivo text-4xl md:text-5xl font-black tracking-tighter text-[#E2E8F0] shimmer-text">
            The Story Behind{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 animate-gradient-shift">
              the Code
            </span>
          </h2>
        </motion.div>

        {/* Two Column Grid */}
        <div className="grid lg:grid-cols-[1fr_400px] gap-16 items-start">

          {/* Left Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={leftVariants}>
              <p className="text-xl text-slate-200 font-medium leading-relaxed mb-5">
                I&apos;m a{" "}
                <span className="text-gradient font-bold">
                  Computer Engineering undergraduate
                </span>{" "}
                at the University of Peradeniya, Sri Lanka — driven by curiosity
                and a deep passion for building intelligent systems.
              </p>

              <p className="text-base text-slate-400 leading-relaxed mb-5">
                My journey spans wireless security research exploring
                vulnerabilities in next-generation Wi-Fi 7 networks, developing
                AI-powered applications, and building embedded systems that
                bridge the digital and physical worlds. I believe in writing
                code that doesn&apos;t just work — it{" "}
                <em className="text-slate-300">matters</em>.
              </p>

              <p className="text-base text-slate-400 leading-relaxed mb-8">
                Beyond the screen, I&apos;ve contributed as a Casual Instructor
                at my university and volunteered at community and engineering
                events. I enjoy turning complex problems into elegant,
                user-centric solutions — one commit at a time.
              </p>
            </motion.div>

            {/* Interests */}
            <motion.div variants={itemVariants} className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Cpu className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-semibold text-slate-300 uppercase tracking-wider">
                  Interests
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {INTERESTS.map((interest) => (
                  <span
                    key={interest}
                    className="px-4 py-2 glass-card text-sm text-slate-300 hover:text-blue-400 hover:border-blue-500/30 transition-all duration-200 cursor-default hover:scale-105"
                    style={{ borderRadius: "9999px" }}
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-2 mb-4">
                <Globe className="w-4 h-4 text-cyan-400" />
                <span className="text-sm font-semibold text-slate-300 uppercase tracking-wider">
                  Languages
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {LANGUAGES.map((lang) => (
                  <div
                    key={lang.name}
                    className="flex items-center gap-2 px-4 py-2.5 glass-card hover:border-blue-500/20 transition-all duration-200"
                    style={{ borderRadius: "12px" }}
                  >
                    <div className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r ${lang.color}`} />
                    <span className="text-sm font-medium text-slate-200">{lang.name}</span>
                    <span className="text-xs text-slate-500">{lang.level}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="flex flex-col gap-6"
          >
            {/* Avatar — MUCH LARGER with spinning conic border */}
            <motion.div
              variants={rightVariants}
              className="flex justify-center"
            >
              <div className="relative">
                {/* Outer glow */}
                <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-blue-500/20 via-violet-500/10 to-cyan-500/20 blur-2xl" />

                {/* Spinning conic gradient ring */}
                <div
                  className="absolute -inset-2 rounded-full animate-spin-slow"
                  style={{
                    background: "conic-gradient(from 0deg, #3B82F6, #8B5CF6, #22D3EE, #3B82F6)",
                  }}
                />

                {/* Dark inset ring */}
                <div className="absolute -inset-1 rounded-full bg-[#080C18]" />

                {/* Avatar circle */}
                <div className="relative w-64 h-64 rounded-full bg-gradient-to-br from-blue-600 via-violet-600 to-cyan-600 flex items-center justify-center shadow-2xl shadow-blue-500/30">
                  <span className="font-archivo font-black text-7xl text-white tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-white via-blue-100 to-cyan-200">
                    PD
                  </span>
                </div>

                {/* Online status dot */}
                <div className="absolute bottom-4 right-4 w-6 h-6 rounded-full bg-green-400 border-2 border-[#080C18] shadow-lg shadow-green-400/60">
                  <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75" />
                </div>
              </div>
            </motion.div>

            {/* Key Facts Card */}
            <motion.div
              variants={rightVariants}
              className="glass-card p-6 card-hover"
            >
              <h3 className="font-archivo font-bold text-[#E2E8F0] text-lg mb-5 flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-400" />
                Quick Facts
              </h3>
              <div className="flex flex-col gap-3.5">
                {KEY_FACTS.map((fact) => {
                  const Icon = fact.icon;
                  return (
                    <div key={fact.label} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white/[0.04] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon className={`w-4 h-4 ${fact.color}`} />
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 uppercase tracking-wider mb-0.5">
                          {fact.label}
                        </div>
                        <div className="text-sm text-slate-200 font-medium">{fact.value}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Terminal card */}
            <motion.div variants={rightVariants}>
              <TerminalCard />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

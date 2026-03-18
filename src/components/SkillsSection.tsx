"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { Code2, Layers, Wrench, Database, Cpu, Sparkles } from "lucide-react";

type SkillCategory = "All" | "Languages" | "Frameworks" | "Tools" | "Databases" | "Interests";

interface Skill {
  name: string;
  color: string;
  category: Exclude<SkillCategory, "All">;
}

const SKILLS: Skill[] = [
  // Languages
  { name: "Python", color: "blue", category: "Languages" },
  { name: "Java", color: "orange", category: "Languages" },
  { name: "JavaScript", color: "yellow", category: "Languages" },
  { name: "TypeScript", color: "blue", category: "Languages" },
  { name: "C++", color: "purple", category: "Languages" },
  { name: "SQL", color: "cyan", category: "Languages" },
  // Frameworks
  { name: "React", color: "cyan", category: "Frameworks" },
  { name: "Next.js", color: "white", category: "Frameworks" },
  { name: "Tailwind CSS", color: "cyan", category: "Frameworks" },
  { name: "Flutter", color: "blue", category: "Frameworks" },
  { name: "Spring Boot", color: "green", category: "Frameworks" },
  { name: "Spring MVC", color: "green", category: "Frameworks" },
  { name: "Microservices", color: "purple", category: "Frameworks" },
  { name: "TensorFlow", color: "orange", category: "Frameworks" },
  { name: "Flask", color: "white", category: "Frameworks" },
  // Tools
  { name: "Git", color: "orange", category: "Tools" },
  { name: "VS Code", color: "blue", category: "Tools" },
  { name: "IntelliJ IDEA", color: "purple", category: "Tools" },
  { name: "PyCharm", color: "green", category: "Tools" },
  { name: "Android Studio", color: "green", category: "Tools" },
  { name: "OpenCV", color: "blue", category: "Tools" },
  // Databases
  { name: "MySQL", color: "blue", category: "Databases" },
  { name: "PostgreSQL", color: "cyan", category: "Databases" },
  { name: "MongoDB", color: "green", category: "Databases" },
  { name: "Firebase", color: "yellow", category: "Databases" },
  // Interests
  { name: "Wireless Security", color: "red", category: "Interests" },
  { name: "AI/ML", color: "blue", category: "Interests" },
  { name: "Embedded Systems", color: "orange", category: "Interests" },
  { name: "Computer Vision", color: "purple", category: "Interests" },
  { name: "Wi-Fi 7 Research", color: "cyan", category: "Interests" },
  { name: "Frontend Development", color: "blue", category: "Interests" },
  { name: "Full-Stack Dev", color: "green", category: "Interests" },
];

const CATEGORIES: { label: SkillCategory; icon: React.ElementType }[] = [
  { label: "All", icon: Sparkles },
  { label: "Languages", icon: Code2 },
  { label: "Frameworks", icon: Layers },
  { label: "Tools", icon: Wrench },
  { label: "Databases", icon: Database },
  { label: "Interests", icon: Cpu },
];

const COLOR_MAP: Record<
  string,
  {
    dot: string;
    dotGlow: string;
    bg: string;
    hoverBg: string;
    text: string;
    border: string;
    glow: string;
    fill: string;
  }
> = {
  blue: {
    dot: "bg-blue-400",
    dotGlow: "shadow-blue-400/60",
    bg: "bg-transparent",
    hoverBg: "hover:bg-blue-500/10",
    text: "text-slate-300 hover:text-blue-400",
    border: "border-white/[0.07] hover:border-blue-500/40",
    glow: "hover:shadow-blue-500/20",
    fill: "rgba(59,130,246,0.08)",
  },
  orange: {
    dot: "bg-orange-400",
    dotGlow: "shadow-orange-400/60",
    bg: "bg-transparent",
    hoverBg: "hover:bg-orange-500/10",
    text: "text-slate-300 hover:text-orange-400",
    border: "border-white/[0.07] hover:border-orange-500/40",
    glow: "hover:shadow-orange-500/20",
    fill: "rgba(249,115,22,0.08)",
  },
  yellow: {
    dot: "bg-yellow-400",
    dotGlow: "shadow-yellow-400/60",
    bg: "bg-transparent",
    hoverBg: "hover:bg-yellow-500/10",
    text: "text-slate-300 hover:text-yellow-400",
    border: "border-white/[0.07] hover:border-yellow-500/40",
    glow: "hover:shadow-yellow-500/20",
    fill: "rgba(234,179,8,0.08)",
  },
  purple: {
    dot: "bg-violet-400",
    dotGlow: "shadow-violet-400/60",
    bg: "bg-transparent",
    hoverBg: "hover:bg-violet-500/10",
    text: "text-slate-300 hover:text-violet-400",
    border: "border-white/[0.07] hover:border-violet-500/40",
    glow: "hover:shadow-violet-500/20",
    fill: "rgba(139,92,246,0.08)",
  },
  cyan: {
    dot: "bg-cyan-400",
    dotGlow: "shadow-cyan-400/60",
    bg: "bg-transparent",
    hoverBg: "hover:bg-cyan-500/10",
    text: "text-slate-300 hover:text-cyan-400",
    border: "border-white/[0.07] hover:border-cyan-500/40",
    glow: "hover:shadow-cyan-500/20",
    fill: "rgba(34,211,238,0.08)",
  },
  green: {
    dot: "bg-green-400",
    dotGlow: "shadow-green-400/60",
    bg: "bg-transparent",
    hoverBg: "hover:bg-green-500/10",
    text: "text-slate-300 hover:text-green-400",
    border: "border-white/[0.07] hover:border-green-500/40",
    glow: "hover:shadow-green-500/20",
    fill: "rgba(34,197,94,0.08)",
  },
  red: {
    dot: "bg-red-400",
    dotGlow: "shadow-red-400/60",
    bg: "bg-transparent",
    hoverBg: "hover:bg-red-500/10",
    text: "text-slate-300 hover:text-red-400",
    border: "border-white/[0.07] hover:border-red-500/40",
    glow: "hover:shadow-red-500/20",
    fill: "rgba(239,68,68,0.08)",
  },
  white: {
    dot: "bg-slate-300",
    dotGlow: "shadow-slate-300/60",
    bg: "bg-transparent",
    hoverBg: "hover:bg-slate-500/10",
    text: "text-slate-300 hover:text-slate-200",
    border: "border-white/[0.07] hover:border-slate-500/40",
    glow: "hover:shadow-slate-500/20",
    fill: "rgba(148,163,184,0.08)",
  },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.04 },
  },
};

const pillVariants: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.85,
    transition: { duration: 0.2 },
  },
};

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("All");

  const filteredSkills =
    activeCategory === "All"
      ? SKILLS
      : SKILLS.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-20 md:py-28 px-6 relative overflow-hidden">
      {/* Animated grid lines background */}
      <div
        className="absolute inset-0 -z-10 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59,130,246,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          animation: "gradient-shift 8s ease infinite",
          backgroundPositionX: "0%",
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section divider */}
        <div className="section-divider mb-16" />
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-tag mb-4">Skills</p>
          <h2 className="font-archivo text-4xl md:text-5xl font-black tracking-tighter text-[#E2E8F0] shimmer-text">
            Technical{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 animate-gradient-shift">
              Arsenal
            </span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto">
            Technologies and tools I use to bring ideas to life — from machine
            learning models to embedded firmware.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {CATEGORIES.map(({ label, icon: Icon }) => (
            <button
              key={label}
              onClick={() => setActiveCategory(label)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === label
                  ? "bg-blue-500/20 border border-blue-500/40 text-blue-400 shadow-lg shadow-blue-500/15"
                  : "glass-card text-slate-400 hover:text-slate-200 hover:border-white/[0.12]"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              {label}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="flex flex-wrap justify-center gap-3"
          >
            {filteredSkills.map((skill) => {
              const colors = COLOR_MAP[skill.color] || COLOR_MAP.blue;
              return (
                <motion.div
                  key={`${skill.category}-${skill.name}`}
                  variants={pillVariants}
                  className={`
                    relative flex items-center gap-3 px-5 py-3 glass-card cursor-default
                    transition-all duration-200 ${colors.hoverBg} ${colors.border}
                    hover:shadow-lg ${colors.glow} overflow-hidden group
                  `}
                  style={{ borderRadius: "12px" }}
                  whileHover={{ scale: 1.06, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {/* Animated background fill on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ background: colors.fill }}
                  />

                  {/* Glowing dot */}
                  <div className={`relative w-2.5 h-2.5 rounded-full ${colors.dot} flex-shrink-0 shadow-sm ${colors.dotGlow}`}>
                    <span className={`absolute inset-0 rounded-full ${colors.dot} animate-ping opacity-0 group-hover:opacity-60`} />
                  </div>

                  <span className={`text-sm font-medium relative z-10 transition-colors duration-200 ${colors.text}`}>
                    {skill.name}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Count */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <span className="text-slate-600 text-sm">
            Showing{" "}
            <span className="text-gradient font-bold text-base">
              {filteredSkills.length}
            </span>{" "}
            {activeCategory === "All" ? "technologies" : activeCategory.toLowerCase()}
          </span>
        </motion.div>
      </div>
    </section>
  );
}

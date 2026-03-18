"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  ExternalLink,
  Github,
  Shield,
  Brain,
  Cpu,
  Globe,
  Filter,
  Heart,
  TrendingUp,
  CloudRain,
  Code2,
} from "lucide-react";
import Link from "next/link";

type FilterCategory = "All" | "AI/ML" | "Security" | "Embedded" | "Web";

interface Project {
  title: string;
  description: string;
  longDescription: string;
  category: Exclude<FilterCategory, "All">;
  year: string;
  tags: string[];
  color: string;
  bannerGradient: string;
  BannerIcon: React.ElementType;
  featured?: boolean;
  githubUrl?: string;
  liveUrl?: string;
}

const PROJECTS: Project[] = [
  {
    title: "Security Testing & Threat Prediction of MLOs in Wi-Fi 7",
    description:
      "Investigating Backoff mechanism vulnerabilities in Wi-Fi 7 Multi-Link Operation using Digital Twins, developing novel mitigation strategies against timing-based attacks.",
    longDescription:
      "Final Year Project (2025-2026). Focuses on security vulnerabilities in Wi-Fi 7's MLO feature, specifically Backoff mechanism weaknesses that could expose networks to timing and denial-of-service attacks.",
    category: "Security",
    year: "2025–2026",
    tags: ["Wi-Fi 7", "MLO", "Digital Twins", "Security Research", "Python", "Network Analysis"],
    color: "red",
    bannerGradient: "from-red-900/80 via-orange-900/60 to-[#080C18]",
    BannerIcon: Shield,
    featured: true,
    githubUrl: "https://github.com/PathumDilharaDissanayake/e20-4yp-wifi-7-backoff-security-testing-and-threat-prediction",
  },
  {
    title: "Smart Canteen Management System",
    description:
      "IoT-driven canteen system featuring e-menu displays, real-time crowd monitoring via computer vision, and RFID-based cashless payment processing.",
    longDescription:
      "3rd Year Embedded Systems project (2024-2025). Integrates RFID payment terminals, camera-based crowd counting, and a digital menu management interface.",
    category: "Embedded",
    year: "2024–2025",
    tags: ["Embedded C", "RFID", "OpenCV", "React", "IoT", "MySQL"],
    color: "orange",
    bannerGradient: "from-orange-900/80 via-amber-900/60 to-[#080C18]",
    BannerIcon: Cpu,
    featured: true,
    githubUrl: "https://github.com/PathumDilharaDissanayake",
  },
  {
    title: "CardioGuard — Heart Patient Management System",
    description:
      "ML-powered clinical system that predicts heart failure probability, enabling data-driven patient triage with full doctor/patient portal.",
    longDescription:
      "2nd Year ML project (2023-2024). Trained classification models on clinical datasets. Backend in Python/Flask, frontend in React, with SQL database.",
    category: "AI/ML",
    year: "2023–2024",
    tags: ["Python", "Machine Learning", "Flask", "React", "MySQL", "Scikit-learn"],
    color: "blue",
    bannerGradient: "from-blue-900/80 via-violet-900/60 to-[#080C18]",
    BannerIcon: Heart,
    featured: true,
    githubUrl: "https://github.com/PathumDilharaDissanayake/e20-co227-Cardiac-Patient-Data-Management-System",
  },
  {
    title: "Stock Market Prediction System",
    description:
      "Deep learning neural network for stock price prediction using LSTM architecture, trained on historical market data with TensorFlow.",
    longDescription:
      "Neural Networks course project (2024). Implements LSTM-based time series prediction for stock market data, with data pipeline and visualization.",
    category: "AI/ML",
    year: "2024",
    tags: ["TensorFlow", "LSTM", "Python", "Deep Learning", "Pandas", "Matplotlib"],
    color: "purple",
    bannerGradient: "from-blue-900/80 via-violet-900/60 to-[#080C18]",
    BannerIcon: TrendingUp,
    githubUrl: "https://github.com/PathumDilharaDissanayake",
  },
  {
    title: "Weather Effect Removal from Images",
    description:
      "Computer vision system that detects and removes weather artifacts (fog, rain, haze) from images using classical and deep learning techniques.",
    longDescription:
      "Computer Vision course project (2024). Implements fog removal using dark channel prior and deep learning enhancement to restore image clarity.",
    category: "AI/ML",
    year: "2024",
    tags: ["Python", "OpenCV", "Computer Vision", "Deep Learning", "NumPy"],
    color: "cyan",
    bannerGradient: "from-blue-900/80 via-violet-900/60 to-[#080C18]",
    BannerIcon: CloudRain,
    githubUrl: "https://github.com/PathumDilharaDissanayake",
  },
  {
    title: "CO528 Mini Project",
    description:
      "Course mini project exploring advanced computer science concepts with practical Python implementations.",
    longDescription:
      "CO528 coursework mini project (2026). Python-based implementation of course concepts.",
    category: "Web",
    year: "2026",
    tags: ["Python", "CO528"],
    color: "green",
    bannerGradient: "from-green-900/80 via-teal-900/60 to-[#080C18]",
    BannerIcon: Code2,
    githubUrl: "https://github.com/PathumDilharaDissanayake/e20-CO528-Mini-Project",
  },
];

const FILTERS: { label: FilterCategory; icon: React.ElementType }[] = [
  { label: "All", icon: Filter },
  { label: "AI/ML", icon: Brain },
  { label: "Security", icon: Shield },
  { label: "Embedded", icon: Cpu },
  { label: "Web", icon: Globe },
];

const COLOR_STYLES: Record<string, { badge: string; border: string; iconBg: string; iconColor: string }> = {
  red: {
    badge: "bg-red-500/15 text-red-400 border border-red-500/20",
    border: "hover:border-red-500/30",
    iconBg: "bg-red-500/20",
    iconColor: "text-red-400",
  },
  orange: {
    badge: "bg-orange-500/15 text-orange-400 border border-orange-500/20",
    border: "hover:border-orange-500/30",
    iconBg: "bg-orange-500/20",
    iconColor: "text-orange-400",
  },
  blue: {
    badge: "bg-blue-500/15 text-blue-400 border border-blue-500/20",
    border: "hover:border-blue-500/30",
    iconBg: "bg-blue-500/20",
    iconColor: "text-blue-400",
  },
  purple: {
    badge: "bg-violet-500/15 text-violet-400 border border-violet-500/20",
    border: "hover:border-violet-500/30",
    iconBg: "bg-violet-500/20",
    iconColor: "text-violet-400",
  },
  cyan: {
    badge: "bg-cyan-500/15 text-cyan-400 border border-cyan-500/20",
    border: "hover:border-cyan-500/30",
    iconBg: "bg-cyan-500/20",
    iconColor: "text-cyan-400",
  },
  green: {
    badge: "bg-green-500/15 text-green-400 border border-green-500/20",
    border: "hover:border-green-500/30",
    iconBg: "bg-green-500/20",
    iconColor: "text-green-400",
  },
};

const EASE = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: EASE },
  },
  exit: {
    opacity: 0,
    y: -16,
    scale: 0.97,
    transition: { duration: 0.3 },
  },
};

function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const colors = COLOR_STYLES[project.color] || COLOR_STYLES.blue;
  const { BannerIcon } = project;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(800px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) translateZ(10px)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (card) card.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg) translateZ(0px)";
  };

  return (
    <motion.div
      variants={cardVariants}
      ref={cardRef}
      className={`glass-card card-3d flex flex-col overflow-hidden ${colors.border} group`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: "transform 0.15s ease-out, box-shadow 0.15s ease-out" }}
    >
      {/* Gradient Banner */}
      <div className={`relative h-36 bg-gradient-to-b ${project.bannerGradient} flex flex-col items-center justify-center gap-2`}>
        {/* Icon */}
        <div className={`w-14 h-14 rounded-2xl ${colors.iconBg} flex items-center justify-center shadow-lg`}>
          <BannerIcon className={`w-7 h-7 ${colors.iconColor}`} />
        </div>
        {/* Category + Year row */}
        <div className="flex items-center gap-2 mt-1">
          <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${colors.badge}`}>
            {project.category}
          </span>
          {project.featured && (
            <span className="px-2 py-1 rounded-full text-xs font-semibold bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">
              Featured
            </span>
          )}
          <span className="text-xs text-slate-600 font-mono">{project.year}</span>
        </div>
      </div>

      {/* Card Body */}
      <div className="flex flex-col flex-grow p-6">
        {/* Title */}
        <h3 className="font-archivo font-bold text-[#E2E8F0] text-lg leading-snug mb-3 group-hover:text-gradient transition-all duration-300 line-clamp-2">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed mb-5 line-clamp-3 flex-grow">
          {project.description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-md text-xs text-slate-500 bg-white/[0.03] border border-white/[0.05] font-mono hover:text-slate-300 hover:border-white/[0.1] transition-colors duration-200"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="px-2.5 py-1 rounded-md text-xs text-slate-600">
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        {/* Bottom Row: Buttons */}
        <div className="flex items-center gap-2 pt-4 border-t border-white/[0.05]">
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass text-slate-400 hover:text-white hover:bg-white/[0.07] transition-all duration-200 text-xs font-medium"
            >
              <Github className="w-3.5 h-3.5" />
              Code
            </Link>
          )}
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass text-slate-400 hover:text-blue-400 hover:bg-blue-500/10 transition-all duration-200 text-xs font-medium"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Live
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("All");

  const filteredProjects =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 md:py-28 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
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
          <p className="section-tag mb-4">Projects</p>
          <h2 className="font-archivo text-4xl md:text-5xl font-black tracking-tighter text-[#E2E8F0] shimmer-text">
            Things I&apos;ve{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 animate-gradient-shift">
              Built
            </span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto">
            A collection of projects spanning security research, machine
            learning, embedded systems, and beyond.
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
          {FILTERS.map(({ label, icon: Icon }) => (
            <button
              key={label}
              onClick={() => setActiveFilter(label)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === label
                  ? "bg-blue-500/20 border border-blue-500/40 text-blue-400 shadow-lg shadow-blue-500/15"
                  : "glass-card text-slate-400 hover:text-slate-200 hover:border-white/[0.12]"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              {label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 text-slate-600"
          >
            No projects found in this category yet.
          </motion.div>
        )}
      </div>
    </section>
  );
}

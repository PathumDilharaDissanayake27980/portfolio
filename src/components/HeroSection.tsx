"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Mail,
  ArrowDown,
  ExternalLink,
  Wifi,
  Brain,
  Code2,
  Shield,
  Sparkles,
} from "lucide-react";

const ROLES = [
  "Computer Engineer",
  "Full-Stack Developer",
  "AI/ML Enthusiast",
  "Security Researcher",
  "Embedded Systems Dev",
];

const STATS = [
  { label: "GPA", value: "3.79", unit: "/4.0" },
  { label: "Projects", value: "6", unit: "+" },
  { label: "Coding", value: "3", unit: "+ Yrs" },
  { label: "Skills", value: "32", unit: "+" },
];

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/PathumDilharaDissanayake", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/pathum-dissanayaka-60364817a", icon: Linkedin },
  { label: "Email", href: "mailto:pathumdilharadissanayake@gmail.com", icon: Mail },
];

const FLOATING_BADGES = [
  { icon: Wifi, label: "Current Research", value: "Wi-Fi 7 Security", color: "text-blue-400", bg: "bg-blue-500/15", delay: 0 },
  { icon: Brain, label: "Specialization", value: "AI & Machine Learning", color: "text-violet-400", bg: "bg-violet-500/15", delay: 1.5 },
  { icon: Shield, label: "Final Year Project", value: "MLO Threat Prediction", color: "text-red-400", bg: "bg-red-500/15", delay: 3 },
];

const TECH_PILLS = ["Python", "React", "Java", "TensorFlow", "C++", "Spring Boot"];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  // Mouse parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-300, 300], [8, -8]);
  const rotateY = useTransform(mouseX, [-300, 300], [-8, 8]);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let timeout: NodeJS.Timeout;
    if (!isDeleting && charIndex <= currentRole.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, charIndex));
        setCharIndex((p) => p + 1);
      }, 70);
    } else if (!isDeleting && charIndex > currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, charIndex - 1));
        setCharIndex((p) => p - 1);
      }, 35);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((p) => (p + 1) % ROLES.length);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const EASE = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

  return (
    <section
      id="home"
      className="min-h-screen pt-24 pb-12 flex items-center relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* ===== BACKGROUND ===== */}
      <div className="absolute inset-0 -z-10">
        {/* Dot grid */}
        <div className="absolute inset-0 dot-grid opacity-40" />

        {/* Aurora orbs — enlarged */}
        <div className="absolute top-[15%] left-[5%] w-[800px] h-[800px] rounded-full bg-blue-600/12 blur-[140px] animate-float-1" />
        <div className="absolute bottom-[10%] right-[5%] w-[800px] h-[800px] rounded-full bg-violet-600/12 blur-[140px] animate-float-2" />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-cyan-500/8 blur-[120px] animate-float-3" />
        <div className="absolute top-[5%] right-[20%] w-[600px] h-[600px] rounded-full bg-indigo-600/8 blur-[120px]" style={{ animation: "float 13s ease-in-out 2s infinite" }} />

        {/* Vignette — softer */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,transparent_20%,#080C18_70%)]" />

        {/* Animated scan line */}
        <div
          className="absolute left-0 right-0 h-[2px] pointer-events-none animate-scanline"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.3), rgba(34,211,238,0.3), transparent)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center">

        {/* ===== LEFT COLUMN ===== */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
          }}
          className="flex flex-col"
        >
          {/* Status badge */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } } }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full glass border border-green-500/25 text-sm font-medium text-slate-300">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
              </span>
              Available for opportunities
              <Sparkles className="w-4 h-4 text-green-400" />
            </div>
          </motion.div>

          {/* Name — MASSIVE with glitch on hover */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } } }}
          >
            <h1
              className="font-archivo font-black leading-[0.88] tracking-tighter mb-5 select-none"
              style={{ fontSize: "clamp(4rem, 9vw, 8rem)" }}
            >
              <span className="block text-[#E2E8F0]">Pathum</span>
              <span
                className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 glitch-hover relative"
                data-text="Dilhara"
              >
                Dilhara
              </span>
            </h1>
          </motion.div>

          {/* Typewriter role */}
          <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.5, ease: EASE } } }}
            className="flex items-center gap-2 mb-7 h-10"
          >
            <span className="text-blue-400 font-mono text-2xl font-medium">&gt; </span>
            <span className="text-slate-200 font-mono text-2xl font-medium">{displayText}</span>
            <span className="text-blue-400 font-mono text-2xl font-medium cursor-blink">|</span>
          </motion.div>

          {/* Bio */}
          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } } }}
            className="text-slate-400 text-lg max-w-xl leading-relaxed mb-9"
          >
            BSc Computer Engineering at{" "}
            <span className="text-blue-400 font-semibold">University of Peradeniya</span>, Sri Lanka.
            Researching Wi-Fi 7 security, building AI-driven systems, and bridging the gap between hardware and intelligence.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } } }}
            className="flex flex-col sm:flex-row items-start gap-4 mb-10"
          >
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}
              className="btn-primary inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-white font-semibold text-base shadow-lg shadow-blue-500/25 cursor-pointer"
            >
              <ExternalLink className="w-5 h-5" /> View My Work
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl glass border border-white/[0.1] text-slate-300 hover:text-white hover:border-blue-500/30 font-semibold text-base transition-all duration-300 hover:bg-white/[0.05] cursor-pointer"
            >
              <Mail className="w-5 h-5" /> Get in Touch
            </a>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } } }}
            className="grid grid-cols-4 gap-3 max-w-md mb-9"
          >
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="glass-card p-4 text-center hover:border-blue-500/25 transition-all duration-300 animate-border-glow"
              >
                <div className="flex items-baseline justify-center gap-0.5">
                  <span className="font-archivo font-black text-3xl text-gradient">{stat.value}</span>
                  <span className="text-slate-500 text-xs font-medium">{stat.unit}</span>
                </div>
                <div className="text-slate-500 text-[10px] font-semibold mt-1 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Social icons */}
          <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.5, ease: EASE } } }}
            className="flex items-center gap-3"
          >
            {SOCIALS.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                rel={s.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="w-12 h-12 glass-card flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/30 transition-all duration-300 hover:scale-110 cursor-pointer"
                aria-label={s.label}
              >
                <s.icon className="w-5 h-5" />
              </Link>
            ))}
          </motion.div>
        </motion.div>

        {/* ===== RIGHT COLUMN — 3D parallax ===== */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: EASE }}
          className="hidden lg:flex items-center justify-center relative"
          style={{ perspective: "1000px" }}
        >
          <motion.div
            style={{ rotateX, rotateY }}
            className="relative w-full max-w-md"
          >
            {/* Floating badges */}
            {FLOATING_BADGES.map((badge, i) => (
              <motion.div
                key={badge.label}
                className={`absolute z-20 ${i === 0 ? "-top-10 right-0" : i === 1 ? "-bottom-10 left-0" : "top-1/2 -right-8"}`}
                animate={{ y: [0, i % 2 === 0 ? -12 : 12, 0] }}
                transition={{ repeat: Infinity, duration: 3 + i, ease: "easeInOut", delay: badge.delay }}
              >
                <div className="glass-card px-4 py-3 flex items-center gap-2.5 whitespace-nowrap shadow-xl animate-border-glow">
                  <div className={`w-8 h-8 rounded-lg ${badge.bg} flex items-center justify-center`}>
                    <badge.icon className={`w-4 h-4 ${badge.color}`} />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 font-medium">{badge.label}</div>
                    <div className="text-xs font-bold text-white">{badge.value}</div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Code Card with animated border glow */}
            <div className="relative">
              {/* Glow behind card */}
              <div className="absolute -inset-6 bg-gradient-to-br from-blue-600/25 via-violet-600/15 to-cyan-600/15 rounded-3xl blur-2xl" />

              {/* Animated border ring */}
              <div
                className="absolute -inset-[2px] rounded-2xl opacity-70"
                style={{
                  background: "conic-gradient(from 0deg, #3B82F6, #8B5CF6, #22D3EE, #3B82F6)",
                  animation: "spin-slow 6s linear infinite",
                }}
              />

              <div className="relative glass-card p-7 font-mono text-sm rounded-2xl">
                {/* Window chrome */}
                <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/[0.06]">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-auto text-xs text-slate-500 flex items-center gap-1.5">
                    <Code2 className="w-3 h-3" /> pathum.config.ts
                  </span>
                </div>

                {/* Code content */}
                <div className="space-y-[3px] leading-relaxed">
                  <div><span className="text-violet-400">const</span> <span className="text-blue-300">developer</span> <span className="text-slate-500">=</span> <span className="text-yellow-300">{"{"}</span></div>
                  <div className="pl-5"><span className="text-cyan-300">name</span><span className="text-slate-500">:</span> <span className="text-green-300">&quot;Pathum Dilhara&quot;</span><span className="text-slate-500">,</span></div>
                  <div className="pl-5"><span className="text-cyan-300">role</span><span className="text-slate-500">:</span> <span className="text-green-300">&quot;Computer Engineer&quot;</span><span className="text-slate-500">,</span></div>
                  <div className="pl-5"><span className="text-cyan-300">university</span><span className="text-slate-500">:</span> <span className="text-green-300">&quot;Peradeniya, SL&quot;</span><span className="text-slate-500">,</span></div>
                  <div className="pl-5"><span className="text-cyan-300">gpa</span><span className="text-slate-500">:</span> <span className="text-orange-300">3.79</span><span className="text-slate-500">,</span></div>
                  <div className="pl-5 mt-2"><span className="text-cyan-300">research</span><span className="text-slate-500">:</span> <span className="text-yellow-300">[</span></div>
                  <div className="pl-10"><span className="text-green-300">&quot;Wi-Fi 7 MLO Security&quot;</span><span className="text-slate-500">,</span></div>
                  <div className="pl-10"><span className="text-green-300">&quot;AI/ML Systems&quot;</span><span className="text-slate-500">,</span></div>
                  <div className="pl-10"><span className="text-green-300">&quot;Embedded Systems&quot;</span><span className="text-slate-500">,</span></div>
                  <div className="pl-5"><span className="text-yellow-300">]</span><span className="text-slate-500">,</span></div>
                  <div className="pl-5 mt-2"><span className="text-cyan-300">stack</span><span className="text-slate-500">:</span> <span className="text-yellow-300">[</span><span className="text-green-300">&quot;React&quot;</span><span className="text-slate-500">, </span><span className="text-green-300">&quot;Python&quot;</span><span className="text-slate-500">, </span><span className="text-green-300">&quot;Java&quot;</span><span className="text-yellow-300">]</span><span className="text-slate-500">,</span></div>
                  <div className="pl-5"><span className="text-cyan-300">available</span><span className="text-slate-500">:</span> <span className="text-blue-400">true</span></div>
                  <div><span className="text-yellow-300">{"}"}</span><span className="text-slate-500">;</span></div>
                  <div className="mt-3 text-slate-600">
                    <span className="text-slate-600">{"// "}</span>
                    <span className="text-slate-500">Currently building tomorrow&apos;s tech</span>
                    <span className="cursor-blink text-blue-400"> |</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tech stack pills */}
            <div className="flex flex-wrap gap-2 mt-5 justify-center">
              {TECH_PILLS.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-xs font-mono glass-card text-slate-400 hover:text-blue-400 hover:border-blue-500/30 transition-all duration-200 cursor-default hover:scale-105"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600">
        <span className="text-xs font-medium uppercase tracking-[0.2em]">scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce-slow" />
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, MapPin, Star, Calendar } from "lucide-react";

interface TimelineItem {
  title: string;
  subtitle: string;
  period: string;
  location?: string;
  description: string;
  highlights?: string[];
  type: "education" | "experience";
  accent: string;
}

const EDUCATION_ITEMS: TimelineItem[] = [
  {
    title: "BSc Engineering (Hons) Computer Engineering",
    subtitle: "University of Peradeniya",
    period: "2022 – 2026",
    location: "Peradeniya, Sri Lanka",
    description:
      "Currently pursuing a Bachelor of Science in Computer Engineering. Specializing in AI/ML, wireless security research, and embedded systems development.",
    highlights: ["GPA: 3.79 / 4.00", "Final Year Project: Wi-Fi 7 Security Research", "Dean's List Recognition"],
    type: "education",
    accent: "blue",
  },
  {
    title: "G.C.E. Advanced Level",
    subtitle: "Central College, Anuradhapura",
    period: "2020",
    location: "Anuradhapura, Sri Lanka",
    description:
      "Completed Advanced Level examinations in the Physical Science stream with outstanding results.",
    highlights: ["3 A Passes", "Combined Mathematics", "Physics", "Chemistry"],
    type: "education",
    accent: "violet",
  },
  {
    title: "G.C.E. Ordinary Level",
    subtitle: "Central College, Anuradhapura",
    period: "2017",
    location: "Anuradhapura, Sri Lanka",
    description:
      "Completed Ordinary Level examinations with exceptional academic performance across all subjects.",
    highlights: ["9 A Passes", "Island-level performance"],
    type: "education",
    accent: "cyan",
  },
];

const EXPERIENCE_ITEMS: TimelineItem[] = [
  {
    title: "Casual Instructor",
    subtitle: "University of Peradeniya",
    period: "2023 – 2024",
    location: "Peradeniya, Sri Lanka",
    description:
      "Assisted in academic instruction and laboratory sessions for undergraduate students. Supported faculty in course delivery and student mentoring.",
    highlights: ["Lab Instruction", "Student Mentoring", "Academic Support"],
    type: "experience",
    accent: "orange",
  },
  {
    title: "Volunteer",
    subtitle: "Arunella Community Organization",
    period: "Jan 2023 – May 2024",
    location: "Sri Lanka",
    description:
      "Active volunteer contributing to community development initiatives. Participated in organizing events and supporting educational outreach programs.",
    highlights: ["Community Development", "Event Organization", "Educational Outreach"],
    type: "experience",
    accent: "green",
  },
  {
    title: "Volunteer Organizer",
    subtitle: "EngEx 2025 Exhibition",
    period: "2025",
    location: "University of Peradeniya",
    description:
      "Contributed to organizing the EngEx 2025 engineering exhibition, showcasing student projects and innovations to industry professionals and the public.",
    highlights: ["Event Management", "Project Exhibition", "Industry Networking"],
    type: "experience",
    accent: "purple",
  },
];

const ACCENT_COLORS: Record<string, { dot: string; glow: string; badge: string; line: string }> = {
  blue: {
    dot: "from-blue-500 to-blue-600",
    glow: "shadow-blue-500/40",
    badge: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    line: "from-blue-500/50 to-transparent",
  },
  violet: {
    dot: "from-violet-500 to-violet-600",
    glow: "shadow-violet-500/40",
    badge: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    line: "from-violet-500/50 to-transparent",
  },
  cyan: {
    dot: "from-cyan-500 to-cyan-600",
    glow: "shadow-cyan-500/40",
    badge: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    line: "from-cyan-500/50 to-transparent",
  },
  orange: {
    dot: "from-orange-500 to-orange-600",
    glow: "shadow-orange-500/40",
    badge: "text-orange-400 bg-orange-500/10 border-orange-500/20",
    line: "from-orange-500/50 to-transparent",
  },
  green: {
    dot: "from-green-500 to-green-600",
    glow: "shadow-green-500/40",
    badge: "text-green-400 bg-green-500/10 border-green-500/20",
    line: "from-green-500/50 to-transparent",
  },
  purple: {
    dot: "from-purple-500 to-purple-600",
    glow: "shadow-purple-500/40",
    badge: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    line: "from-purple-500/50 to-transparent",
  },
};

function TimelineEntry({
  item,
  index,
  direction,
}: {
  item: TimelineItem;
  index: number;
  direction: "left" | "right";
}) {
  const colors = ACCENT_COLORS[item.accent];
  const EASE = [0.25, 0.46, 0.45, 0.94] as const;

  return (
    <motion.div
      initial={{ opacity: 0, x: direction === "left" ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: EASE,
      }}
      className="relative pl-8 pb-8 last:pb-0"
    >
      {/* Vertical line */}
      {index < (item.type === "education" ? EDUCATION_ITEMS.length - 1 : EXPERIENCE_ITEMS.length - 1) && (
        <div className="absolute left-[11px] top-7 bottom-0 w-px bg-gradient-to-b from-white/10 to-transparent" />
      )}

      {/* Dot */}
      <div
        className={`absolute left-0 top-1.5 w-[22px] h-[22px] rounded-full bg-gradient-to-br ${colors.dot} shadow-lg ${colors.glow} flex-shrink-0 flex items-center justify-center`}
      >
        <div className="w-2 h-2 rounded-full bg-white/60" />
      </div>

      {/* Card */}
      <div className="glass-card p-5 ml-2 hover:border-white/[0.12] transition-all duration-300 card-hover">
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
          <h3 className="font-archivo font-bold text-[#E2E8F0] text-base leading-snug">
            {item.title}
          </h3>
          <span
            className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium border flex-shrink-0 ${colors.badge}`}
          >
            <Calendar className="w-3 h-3" />
            {item.period}
          </span>
        </div>

        {/* Subtitle + Location */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="text-sm font-semibold text-slate-400">
            {item.subtitle}
          </span>
          {item.location && (
            <span className="flex items-center gap-1 text-xs text-slate-600">
              <MapPin className="w-3 h-3" />
              {item.location}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-slate-500 leading-relaxed mb-4">
          {item.description}
        </p>

        {/* Highlights */}
        {item.highlights && (
          <div className="flex flex-wrap gap-1.5">
            {item.highlights.map((h) => (
              <span
                key={h}
                className="flex items-center gap-1 px-2 py-0.5 rounded-md text-xs text-slate-500 bg-white/[0.03] border border-white/[0.05]"
              >
                <Star className="w-2.5 h-2.5 text-yellow-500/60" />
                {h}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function TimelineSection() {
  return (
    <section id="timeline" className="py-20 md:py-28 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
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
          <p className="section-tag mb-4">History</p>
          <h2 className="font-archivo text-4xl md:text-5xl font-black tracking-tighter text-[#E2E8F0]">
            My{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400">
              Journey
            </span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto">
            Education and experiences that shaped who I am as an engineer.
          </p>
        </motion.div>

        {/* Two Column Grid */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Education Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/20 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <h3 className="font-archivo font-black text-[#E2E8F0] text-xl">
                  Education
                </h3>
                <p className="text-sm text-slate-500">Academic background</p>
              </div>
            </motion.div>

            <div>
              {EDUCATION_ITEMS.map((item, index) => (
                <TimelineEntry
                  key={item.title}
                  item={item}
                  index={index}
                  direction="left"
                />
              ))}
            </div>
          </div>

          {/* Experience Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-10 h-10 rounded-xl bg-violet-500/15 border border-violet-500/20 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-violet-400" />
              </div>
              <div>
                <h3 className="font-archivo font-black text-[#E2E8F0] text-xl">
                  Experience
                </h3>
                <p className="text-sm text-slate-500">Roles & contributions</p>
              </div>
            </motion.div>

            <div>
              {EXPERIENCE_ITEMS.map((item, index) => (
                <TimelineEntry
                  key={item.title}
                  item={item}
                  index={index}
                  direction="right"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

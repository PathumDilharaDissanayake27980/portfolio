"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  Mail,
  Linkedin,
  MapPin,
  Github,
  Send,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const CONTACT_INFO = [
  {
    icon: Mail,
    label: "Email",
    value: "pathumdilharadissanayake@gmail.com",
    href: "mailto:pathumdilharadissanayake@gmail.com",
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/20",
    hoverBorder: "hover:border-blue-500/40",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "pathum-dissanayaka-60364817a",
    href: "https://www.linkedin.com/in/pathum-dissanayaka-60364817a",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10 border-cyan-500/20",
    hoverBorder: "hover:border-cyan-500/40",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "PathumDilharaDissanayake",
    href: "https://github.com/PathumDilharaDissanayake",
    color: "text-violet-400",
    bg: "bg-violet-500/10 border-violet-500/20",
    hoverBorder: "hover:border-violet-500/40",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Anuradhapura, Sri Lanka",
    href: null,
    color: "text-green-400",
    bg: "bg-green-500/10 border-green-500/20",
    hoverBorder: "hover:border-green-500/40",
  },
];

const EASE = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
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

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Build mailto link for now (can be replaced with Formspree or API)
    const mailtoUrl = `mailto:pathumdilharadissanayake@gmail.com?subject=${encodeURIComponent(
      formData.subject || "Portfolio Contact"
    )}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\n${formData.message}`
    )}`;

    window.open(mailtoUrl, "_blank");

    // Simulate short delay then show success
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }, 600);
  };

  return (
    <section id="contact" className="py-20 md:py-28 px-6 relative overflow-hidden">
      {/* Subtle dot-grid texture */}
      <div className="absolute inset-0 dot-grid opacity-10 -z-10" />

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
          <p className="section-tag mb-4">Contact</p>
          <h2 className="font-archivo text-4xl md:text-5xl font-black tracking-tighter text-[#E2E8F0]">
            Let&apos;s Build Something{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400">
              Together
            </span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto">
            Whether you have a project in mind, want to collaborate on research,
            or just want to say hello — I&apos;d love to hear from you.
          </p>
        </motion.div>

        {/* Two Column Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <motion.div variants={itemVariants}>
              <h3 className="font-archivo font-black text-[#E2E8F0] text-xl mb-2">
                Get in Touch
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                I&apos;m currently open to internship opportunities, research
                collaborations, and interesting projects. Feel free to reach
                out through any of these channels.
              </p>
            </motion.div>

            {CONTACT_INFO.map((info) => {
              const Icon = info.icon;
              const content = (
                <div
                  className={`glass-card flex items-center gap-4 p-4 transition-all duration-300 card-hover ${info.hoverBorder} group cursor-pointer`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl border flex items-center justify-center flex-shrink-0 ${info.bg}`}
                  >
                    <Icon className={`w-4.5 h-4.5 ${info.color}`} style={{ width: "18px", height: "18px" }} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs text-slate-600 uppercase tracking-wider mb-0.5">
                      {info.label}
                    </div>
                    <div className="text-sm text-slate-300 font-medium truncate group-hover:text-white transition-colors duration-200">
                      {info.value}
                    </div>
                  </div>
                  {info.href && (
                    <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-slate-400 transition-colors duration-200 flex-shrink-0" />
                  )}
                </div>
              );

              return (
                <motion.div key={info.label} variants={itemVariants}>
                  {info.href ? (
                    <Link
                      href={info.href}
                      target={info.href.startsWith("mailto") ? undefined : "_blank"}
                      rel={info.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    >
                      {content}
                    </Link>
                  ) : (
                    content
                  )}
                </motion.div>
              );
            })}

            {/* Availability note */}
            <motion.div
              variants={itemVariants}
              className="glass-card p-4 border-green-500/15"
            >
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400"></span>
                </span>
                <div>
                  <p className="text-sm font-medium text-slate-300">
                    Available for Opportunities
                  </p>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Open to internships, research, and projects
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <div className="glass-card p-7">
              <h3 className="font-archivo font-black text-[#E2E8F0] text-xl mb-6">
                Send a Message
              </h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-14 text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-green-500/15 border border-green-500/20 flex items-center justify-center mb-4">
                    <CheckCircle className="w-7 h-7 text-green-400" />
                  </div>
                  <h4 className="font-archivo font-bold text-[#E2E8F0] text-lg mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-slate-500 text-sm">
                    Your email client has been opened. I&apos;ll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {/* Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-slate-500 uppercase tracking-wider mb-2 block">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="glass-input w-full px-4 py-3 rounded-xl text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-slate-500 uppercase tracking-wider mb-2 block">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="glass-input w-full px-4 py-3 rounded-xl text-sm"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="text-xs text-slate-500 uppercase tracking-wider mb-2 block">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="What's this about?"
                      className="glass-input w-full px-4 py-3 rounded-xl text-sm"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-xs text-slate-500 uppercase tracking-wider mb-2 block">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell me about your project or idea..."
                      className="glass-input w-full px-4 py-3 rounded-xl text-sm resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className={`btn-primary w-full py-3.5 rounded-xl text-white font-semibold text-sm flex items-center justify-center gap-2.5 shadow-lg shadow-blue-500/20 ${
                      submitting ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    {submitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="text-xs text-slate-600 text-center">
                    This will open your email client. Alternatively, email me
                    directly at{" "}
                    <span className="text-slate-500">
                      pathumdilharadissanayake@gmail.com
                    </span>
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

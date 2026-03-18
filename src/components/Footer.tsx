import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUpRight, Code2 } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#timeline" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/PathumDilharaDissanayake",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/pathum-dissanayaka-60364817a",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:pathumdilharadissanayake@gmail.com",
    icon: Mail,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.07] relative">
      {/* Section divider glow */}
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Column 1: Logo + Tagline */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-white font-archivo font-black text-sm shadow-lg shadow-blue-500/20">
                PD
              </div>
              <span className="font-archivo font-bold text-[#E2E8F0] text-base tracking-tight">
                Pathum Dilhara
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-[220px]">
              Computer Engineering undergraduate passionate about AI, wireless
              security, and embedded systems.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-[0.15em] mb-5">
              Navigation
            </h4>
            <nav className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-1.5 text-slate-500 hover:text-slate-200 text-sm transition-colors duration-200 group w-fit"
                >
                  <Code2 className="w-3 h-3 text-blue-500/50 group-hover:text-blue-400 transition-colors duration-200" />
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Social Links */}
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-[0.15em] mb-5">
              Connect
            </h4>
            <div className="flex flex-col gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("mailto") ? undefined : "_blank"}
                    rel={
                      social.href.startsWith("mailto")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className="flex items-center gap-2.5 text-slate-500 hover:text-slate-200 text-sm transition-all duration-200 group w-fit"
                  >
                    <Icon className="w-4 h-4 group-hover:text-blue-400 transition-colors duration-200" />
                    <span>{social.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/[0.05] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm">
            &copy; {year} Pathum Dilhara Dissanayake. All rights reserved.
          </p>
          <p className="text-slate-700 text-sm flex items-center gap-1.5">
            Built with{" "}
            <span className="text-slate-500 font-medium">Next.js</span>
            {" & "}
            <span className="text-red-500/70">❤️</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

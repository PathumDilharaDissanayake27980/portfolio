"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Moon, Sun, Github, Menu, X, Code2 } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#timeline" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300`}
    >
      <div className="max-w-5xl mx-auto px-4">
        <div
          className={`flex items-center justify-between h-14 px-5 rounded-2xl transition-all duration-300 ${
            scrolled
              ? "glass shadow-2xl shadow-black/50 border border-white/[0.07]"
              : "bg-transparent border border-transparent"
          }`}
        >
          {/* Logo */}
          <Link
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-white font-archivo font-black text-sm shadow-lg shadow-blue-500/20">
              PD
            </div>
            <span className="hidden md:block font-archivo font-semibold text-[#E2E8F0] text-sm tracking-wide group-hover:text-gradient transition-all duration-300">
              Pathum Dilhara
            </span>
          </Link>

          {/* Center Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3.5 py-1.5 text-sm font-medium text-slate-400 hover:text-[#E2E8F0] rounded-lg hover:bg-white/[0.05] transition-all duration-200 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right: GitHub + Theme Toggle + Mobile Menu */}
          <div className="flex items-center gap-2">
            {/* GitHub */}
            <Link
              href="https://github.com/PathumDilharaDissanayake"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-[#E2E8F0] hover:bg-white/[0.07] transition-all duration-200"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </Link>

            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-[#E2E8F0] hover:bg-white/[0.07] transition-all duration-200"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </button>
            )}

            {/* Mobile Hamburger */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <button
                  className="md:hidden w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-[#E2E8F0] hover:bg-white/[0.07] transition-all duration-200"
                  aria-label="Open menu"
                >
                  <Menu className="w-4 h-4" />
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-72 bg-[#07071A] border-white/[0.07] p-0"
              >
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-center justify-between p-5 border-b border-white/[0.07]">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-white font-archivo font-black text-sm">
                        PD
                      </div>
                      <span className="font-archivo font-semibold text-[#E2E8F0] text-sm">
                        Pathum Dilhara
                      </span>
                    </div>
                  </div>

                  {/* Links */}
                  <nav className="flex flex-col p-4 gap-1 flex-grow">
                    {NAV_LINKS.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className="flex items-center gap-3 px-4 py-3 text-slate-300 hover:text-[#E2E8F0] hover:bg-white/[0.05] rounded-xl transition-all duration-200 text-sm font-medium cursor-pointer"
                      >
                        <Code2 className="w-3.5 h-3.5 text-blue-400" />
                        {link.label}
                      </a>
                    ))}
                  </nav>

                  {/* Footer */}
                  <div className="p-4 border-t border-white/[0.07]">
                    <Link
                      href="https://github.com/PathumDilharaDissanayake"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate-400 hover:text-[#E2E8F0] text-sm transition-colors duration-200"
                    >
                      <Github className="w-4 h-4" />
                      GitHub Profile
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}

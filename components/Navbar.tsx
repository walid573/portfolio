"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sun, Moon } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import { personalInfo } from "@/data/portfolio";
import { useTheme } from "@/components/ThemeProvider";

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Skills", href: "/skills" },
  { name: "Education", href: "/education" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#040508]/85 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/50 py-3"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between"
        aria-label="Main Navigation"
      >
        {/* Brand */}
        <Link
          href="/"
          className="group flex items-center focus:outline-none focus-visible:underline focus-visible:underline-offset-4"
        >
          <span className="font-bold text-lg sm:text-xl tracking-tight text-white group-hover:text-violet-300 transition-colors">
            Mohammad <span className="text-violet-400">Walid</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-7 lg:gap-8">
          <div className="flex items-center gap-6 lg:gap-7">
            {navItems.map((item) => {
              const active = isActiveLink(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-xs lg:text-sm font-medium transition-colors py-1 focus:outline-none focus:ring-0 focus-visible:underline ${
                    active
                      ? "text-white"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {item.name}
                  {active && (
                    <span className="nav-active-indicator absolute -bottom-1.5 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400 rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Far Right: GitHub + Functional Theme Toggle */}
          <div className="flex items-center gap-3 pl-2 border-l border-white/10">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-1.5 text-slate-400 hover:text-white transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            {/* Functional Theme Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
              title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
              className="w-8 h-8 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 flex items-center justify-center transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-violet-400 shadow-sm"
            >
              {theme === "dark" ? (
                <Sun className="w-3.5 h-3.5 text-amber-400" />
              ) : (
                <Moon className="w-3.5 h-3.5 text-indigo-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          {/* Mobile Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-xl glass border border-white/10 text-slate-300 hover:text-white"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-600" />
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            className="p-2.5 rounded-xl glass border border-white/10 text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-violet-400"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-3 pb-6 glass-strong border-b border-white/10 mt-2 space-y-2 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-1 pb-3 border-b border-white/10">
            {navItems.map((item) => {
              const active = isActiveLink(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                    active
                      ? "text-white bg-violet-600/30 border border-violet-500/40"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span>{item.name}</span>
                  {active && (
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl glass text-slate-300 hover:text-white"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl glass text-slate-300 hover:text-white"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600"
            >
              <span>Contact</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

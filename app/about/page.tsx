import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Terminal, Sparkles } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { About } from "@/components/About";

export const metadata: Metadata = {
  title: "About Me | Mohammad Walid — Full-Stack Web Developer",
  description:
    "Learn more about Mohammad Walid, his programming journey, hands-on learning philosophy, core tech stack, and future development aspirations.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#040508] text-slate-100 selection:bg-violet-600 selection:text-white flex flex-col relative">
      {/* Background with fine square grid and hero ambient glow */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-grid-pattern opacity-40" />
      <div className="fixed inset-0 pointer-events-none z-0 bg-radial-hero-glow" />

      <Navbar />

      <main className="flex-1 pt-28 pb-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <span>/</span>
            <span className="text-violet-400">About</span>
          </div>

          {/* Full About Component */}
          <About />
        </div>
      </main>

      <Footer />
    </div>
  );
}

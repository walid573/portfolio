import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, GraduationCap, BookOpen, Code2 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Education } from "@/components/Education";

export const metadata: Metadata = {
  title: "Education | Mohammad Walid — Full-Stack Web Developer",
  description:
    "Educational background and self-directed technical curriculum of Mohammad Walid, including Higher Secondary collegiate coursework and hands-on software development training.",
};

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-[#040508] text-slate-100 selection:bg-violet-600 selection:text-white flex flex-col relative">
      {/* Background with fine square grid and hero ambient glow */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-grid-pattern opacity-40" />
      <div className="fixed inset-0 pointer-events-none z-0 bg-radial-hero-glow" />

      <Navbar />

      <main className="flex-1 pt-28 pb-24 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <span>/</span>
            <span className="text-indigo-400">Education</span>
          </div>

          {/* Full Education Component */}
          <Education />

          {/* Self-Directed Technical Curriculum Card */}
          <div className="mt-12 max-w-3xl mx-auto rounded-3xl p-6 sm:p-8 bg-[#090b14]/85 backdrop-blur-md border border-white/[0.08]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-violet-500/15 border border-violet-500/30 flex items-center justify-center text-violet-300">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  Continuous Self-Taught Computer Science Studies
                </h3>
                <p className="text-xs text-slate-400 font-mono">
                  Applied Programming • Modern Web Standards • System Design
                </p>
              </div>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
              Alongside formal collegiate education, I dedicate regular time to learning foundational computer science topics: data structures, algorithm problem-solving, modern asynchronous JavaScript runtimes, state management patterns, and RESTful API architecture.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-slate-300">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="text-violet-400 font-bold block mb-1">Frontend Engineering</span>
                <span>Component life cycles, React 19 server actions, hooks, responsive layout engineering.</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="text-cyan-400 font-bold block mb-1">Backend &amp; Databases</span>
                <span>Express routing, middleware chains, MongoDB aggregation, JWT authentication flows.</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

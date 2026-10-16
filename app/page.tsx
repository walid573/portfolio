import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { HomeAbout } from "@/components/HomeAbout";
import { HomeTechGrid } from "@/components/HomeTechGrid";
import { HomeGitHub } from "@/components/HomeGitHub";
import { Footer } from "@/components/Footer";
import { Starfield } from "@/components/effects/Starfield";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#040508] text-slate-100 selection:bg-violet-600 selection:text-white flex flex-col relative">
      {/* Full-page Galaxy starfield + fine square grid and hero ambient glow */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
        <Starfield />
      </div>
      <div className="fixed inset-0 pointer-events-none z-0 bg-grid-pattern opacity-40" />
      <div className="fixed inset-0 pointer-events-none z-0 bg-radial-hero-glow" />

      <Navbar />
      <main className="flex-1 relative z-10">
        <Hero />
        <HomeAbout />
        <HomeTechGrid />
        <HomeGitHub />
      </main>
      <Footer />
    </div>
  );
}

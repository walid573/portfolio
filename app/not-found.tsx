import React from "react";
import { ArrowLeft, Home, Compass } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Magnetic } from "@/components/effects/Magnetic";
import { AdvancedButton } from "@/components/effects/AdvancedButton";
import { ClickSpark } from "@/components/effects/ClickSpark";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#040508] text-slate-100 selection:bg-violet-600 selection:text-white flex flex-col">
      <Navbar />

      <main className="flex-1 flex items-center justify-center py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-violet-600/15 blur-[150px]" />
          <div className="absolute inset-0 bg-dot-grid opacity-25" />
        </div>

        <div className="relative z-10 max-w-lg mx-auto text-center glass-strong p-8 sm:p-12 rounded-3xl border border-white/10 shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/25 text-violet-300 font-mono text-xs mb-6">
            <Compass className="w-3.5 h-3.5 text-violet-400" />
            <span>ERROR 404</span>
          </div>

          <h1 className="text-6xl sm:text-7xl font-extrabold tracking-tight text-white mb-4">
            <span className="gradient-text">404</span>
          </h1>

          <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
            Page Not Found
          </h2>

          <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-8">
            The page or project case study you are looking for does not exist or may have been moved.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Magnetic>
              <ClickSpark className="w-full sm:w-auto rounded-xl" sparkCount={12} color="167, 139, 250">
                <AdvancedButton
                  variant="aurora"
                  href="/"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white"
                >
                  <Home className="w-4 h-4" />
                  <span>Back to Homepage</span>
                </AdvancedButton>
              </ClickSpark>
            </Magnetic>

            <Magnetic strength={0.18}>
              <AdvancedButton
                variant="specular"
                href="/projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-slate-200 hover:text-white text-sm font-medium"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Explore Projects</span>
              </AdvancedButton>
            </Magnetic>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

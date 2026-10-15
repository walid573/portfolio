"use client";

import React, { useState } from "react";
import {
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ChevronDown,
  ExternalLink,
  Copy,
  Sparkles,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import { personalInfo } from "@/data/portfolio";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Trigger mailto client
    const subjectEncoded = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject || "Collaboration"}`);
    const bodyEncoded = encodeURIComponent(
      `Hello Mohammad Walid,\n\nMy name is ${formData.name} (${formData.email}).\n\n${formData.message}\n\n---\nSent from Portfolio Website`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;
    setStatus("sent");
  };

  return (
    <div className="min-h-screen bg-[#040508] text-slate-100 selection:bg-violet-600 selection:text-white flex flex-col relative">
      {/* Background with fine square grid and hero ambient glow */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-grid-pattern opacity-40" />
      <div className="fixed inset-0 pointer-events-none z-0 bg-radial-hero-glow" />

      <Navbar />

      <main className="flex-1 pt-28 pb-24 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section (Screenshot 4 Layout) */}
          <div className="text-center max-w-3xl mx-auto mb-16 pt-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-violet-400 mb-3 tracking-wider">
              <span>// GET IN TOUCH</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">
              Let&apos;s{" "}
              <span className="bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
                Connect
              </span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-8">
              Have an idea, opportunity, or just want to say hi? I&apos;d love to hear from you.
            </p>

            {/* Centered Mail Icon with glowing bead */}
            <div className="relative inline-flex items-center justify-center mb-6">
              <span className="absolute -left-6 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
              <div className="w-16 h-16 rounded-2xl bg-[#090b14]/90 border border-violet-500/30 flex items-center justify-center text-violet-400 shadow-xl">
                <Mail className="w-7 h-7" />
              </div>
            </div>

            {/* Down Chevron Indicator */}
            <div className="pt-2 flex flex-col items-center justify-center text-slate-500">
              <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase mb-1">
                REACH OUT
              </span>
              <ChevronDown className="w-4 h-4 animate-bounce" />
            </div>
          </div>

          {/* Section Heading: Let's build something extraordinary */}
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              Let&apos;s build something{" "}
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                extraordinary
              </span>
            </h2>
          </div>

          {/* 2-Column Grid (Screenshot 4 Layout) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-20">
            {/* Left Column: Direct Contact Info & Socials */}
            <div className="lg:col-span-5 space-y-4">
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                I&apos;m always open to discussing <span className="text-white font-semibold">new opportunities</span>, collaborating on exciting projects, or just having a great conversation about tech and development.
              </p>

              {/* Contact Info Card 1: Email */}
              <div
                onClick={copyEmail}
                className="p-4 rounded-2xl bg-[#090b14]/85 backdrop-blur-md border border-white/[0.08] hover:border-violet-500/40 transition-all cursor-pointer flex items-center justify-between group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                      EMAIL
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-white group-hover:text-violet-300 transition-colors">
                      {personalInfo.email}
                    </span>
                  </div>
                </div>
                <div className="p-2 text-slate-400 group-hover:text-white transition-colors">
                  {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </div>
              </div>

              {/* Contact Info Card 2: Location */}
              <div className="p-4 rounded-2xl bg-[#090b14]/85 backdrop-blur-md border border-white/[0.08] flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                    LOCATION
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-white">
                    Dhaka, Bangladesh • Available Remotely
                  </span>
                </div>
              </div>

              {/* Contact Info Card 3: Availability */}
              <div className="p-4 rounded-2xl bg-[#090b14]/85 backdrop-blur-md border border-white/[0.08] flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                    AVAILABILITY
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-emerald-300 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Open to opportunities &amp; collaboration
                  </span>
                </div>
              </div>

              {/* Social Links Row */}
              <div className="pt-2">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                  // FIND ME ONLINE
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white/[0.04] border border-white/10 hover:border-violet-500/40 text-slate-300 hover:text-white transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white/[0.04] border border-white/10 hover:border-violet-500/40 text-slate-300 hover:text-white transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="p-3 rounded-xl bg-white/[0.04] border border-white/10 hover:border-violet-500/40 text-slate-300 hover:text-white transition-colors"
                    aria-label="Send Email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Quote Box (Screenshot 4 Element) */}
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-xs text-slate-400 leading-relaxed font-sans italic">
                &ldquo;Great things happen when passionate developers connect. Don&apos;t hesitate to drop a message — even if it&apos;s just to say hello.&rdquo;
              </div>
            </div>

            {/* Right Column: "Send a message" Form Card (Screenshot 4 Layout) */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl p-6 sm:p-8 bg-[#090b14]/90 backdrop-blur-md border border-white/[0.08] shadow-2xl">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                  Send a message
                </h3>
                <p className="text-xs text-slate-400 mb-6 font-mono">
                  Fill out the form and I&apos;ll respond as soon as possible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Side-by-side inputs: Your Name & Email Address */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#111424] border border-white/[0.08] text-white text-xs sm:text-sm placeholder:text-slate-500 focus:outline-none focus:border-violet-500 transition-colors"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        required
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#111424] border border-white/[0.08] text-white text-xs sm:text-sm placeholder:text-slate-500 focus:outline-none focus:border-violet-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Subject Input */}
                  <div>
                    <input
                      type="text"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#111424] border border-white/[0.08] text-white text-xs sm:text-sm placeholder:text-slate-500 focus:outline-none focus:border-violet-500 transition-colors"
                    />
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <textarea
                      required
                      rows={5}
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#111424] border border-white/[0.08] text-white text-xs sm:text-sm placeholder:text-slate-500 focus:outline-none focus:border-violet-500 transition-colors resize-none"
                    />
                  </div>

                  {/* Send Message Button (Gradient Pill) */}
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 transition-all shadow-lg shadow-violet-600/30 hover:scale-105"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>

                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono pt-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>Usually respond within 24 hours</span>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Bottom Banner (Screenshot 4 Element) */}
          <div className="rounded-3xl p-8 sm:p-10 bg-[#090b14]/90 backdrop-blur-md border border-white/[0.08] text-center max-w-3xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Great things start with a{" "}
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                conversation.
              </span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto mb-6">
              Whether it&apos;s a project idea, a job opportunity, or just geeking out about tech — my inbox is always open.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-slate-300">
              <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08]">Next.js</span>
              <span className="text-slate-600">•</span>
              <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08]">React</span>
              <span className="text-slate-600">•</span>
              <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08]">Node.js</span>
              <span className="text-slate-600">•</span>
              <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08]">TypeScript</span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

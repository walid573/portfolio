"use client";

import React, { useState } from "react";
import {
  Mail,
  Send,
  MapPin,
  Phone,
  CheckCircle2,
  Copy,
  ExternalLink,
  MessageSquare,
  AlertCircle,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import { personalInfo } from "@/data/portfolio";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Please enter your name";
    if (!formData.email.trim()) {
      errs.email = "Please enter your email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.subject.trim()) errs.subject = "Please enter a subject";
    if (!formData.message.trim()) {
      errs.message = "Please enter your message";
    } else if (formData.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters long";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Construct mailto link with encoded parameters
    const subjectEncoded = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject}`);
    const bodyEncoded = encodeURIComponent(
      `Hello Mohammad Walid,\n\nMy name is ${formData.name} (${formData.email}).\n\n${formData.message}\n\n---\nSent via portfolio contact form`
    );
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;

    // Open user's default email client
    window.location.href = mailtoUrl;

    // Show transparent confirmation feedback
    setSubmitted(true);
  };

  return (
    <section id="contact" aria-label="Contact Section" className="relative py-24 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 -right-32 w-96 h-96 rounded-full bg-indigo-600/15 blur-[150px]" />
        <div className="absolute bottom-10 -left-32 w-96 h-96 rounded-full bg-violet-600/15 blur-[150px]" />
        <div className="absolute inset-0 bg-dot-grid opacity-25" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-violet-500/25 text-xs font-mono text-violet-300 mb-4">
            <Mail className="w-3.5 h-3.5 text-violet-400" />
            <span>// 06. GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Let&apos;s Build Something <span className="gradient-text">Together</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Whether you have an upcoming project, are looking for a dedicated full-stack developer, or just want to connect over modern web technologies, my inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Cards & Social Profiles */}
          <div className="lg:col-span-5 space-y-5">
            {/* Direct Email Card */}
            <div className="glass-card rounded-2xl p-6 border border-white/10 relative overflow-hidden group">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-violet-500/15 border border-violet-500/30 flex items-center justify-center text-violet-300">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      Direct Email
                    </h3>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-base sm:text-lg font-bold text-white hover:text-violet-300 transition-colors break-all"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={copyEmail}
                  aria-label="Copy email address"
                  className="p-2.5 rounded-xl glass border border-white/10 text-slate-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-violet-400"
                >
                  {copiedEmail ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
              <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>Response Time: Within 24 Hours</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-ping" />
                  Active
                </span>
              </div>
            </div>

            {/* Social Profiles Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* GitHub Card */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-2xl p-5 border border-white/10 hover:border-violet-500/40 hover:-translate-y-1 transition-all group flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-white">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-violet-400 transition-colors" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">GitHub Profile</h4>
                  <p className="text-xs text-slate-400 font-mono">@walid573</p>
                </div>
              </a>

              {/* LinkedIn Card */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-2xl p-5 border border-white/10 hover:border-cyan-500/40 hover:-translate-y-1 transition-all group flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-950/40 border border-blue-800/40 flex items-center justify-center text-cyan-300">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">LinkedIn</h4>
                  <p className="text-xs text-slate-400 font-mono">mohammad-walid1</p>
                </div>
              </a>
            </div>

            {/* Location & Honest Phone Placeholder Card */}
            <div className="glass-card rounded-2xl p-5 border border-white/10 space-y-3">
              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                <MapPin className="w-4 h-4 text-violet-400 shrink-0" />
                <span>Location: {personalInfo.location} (Timezone: GMT+6 / BST)</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-400 pt-2 border-t border-white/5">
                <Phone className="w-4 h-4 text-slate-500 shrink-0" />
                <span className="italic">Phone / WhatsApp: Available upon request via email</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 relative">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-4 h-4 text-violet-400" />
                <h3 className="text-lg font-bold text-white">Send a Direct Message</h3>
              </div>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 text-center animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">
                    Email Client Triggered!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md mx-auto mb-4">
                    Your message draft has been formatted and opened in your default email client addressed to <strong className="text-white">{personalInfo.email}</strong>.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="text-xs font-mono text-cyan-300 hover:text-cyan-200 underline focus:outline-none"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono text-slate-300 mb-1.5">
                        Your Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-900/80 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all ${
                          errors.name
                            ? "border-rose-500 focus:ring-rose-500/50"
                            : "border-slate-800 focus:border-violet-500 focus:ring-violet-500/30"
                        }`}
                      />
                      {errors.name && (
                        <p className="text-xs text-rose-400 mt-1 flex items-center gap-1 font-mono">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-mono text-slate-300 mb-1.5">
                        Your Email <span className="text-rose-400">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-900/80 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all ${
                          errors.email
                            ? "border-rose-500 focus:ring-rose-500/50"
                            : "border-slate-800 focus:border-violet-500 focus:ring-violet-500/30"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-rose-400 mt-1 flex items-center gap-1 font-mono">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-mono text-slate-300 mb-1.5">
                      Subject <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Project Inquiry / Full-Stack Role"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900/80 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all ${
                        errors.subject
                          ? "border-rose-500 focus:ring-rose-500/50"
                          : "border-slate-800 focus:border-violet-500 focus:ring-violet-500/30"
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-xs text-rose-400 mt-1 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-mono text-slate-300 mb-1.5">
                      Message <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project, timeline, or opportunity..."
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900/80 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all resize-y ${
                        errors.message
                          ? "border-rose-500 focus:ring-rose-500/50"
                          : "border-slate-800 focus:border-violet-500 focus:ring-violet-500/30"
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-rose-400 mt-1 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 transition-all shadow-lg shadow-violet-600/25 hover:shadow-violet-600/40 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-violet-400"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Mohammad Walid</span>
                  </button>

                  <p className="text-[11px] font-mono text-slate-400 text-center pt-2">
                    Direct delivery to <code className="text-slate-300">mdwalid19833@gmail.com</code> via secure client dispatch.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

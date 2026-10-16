"use client";

import React, { useEffect } from "react";
import { X, FileText, Download, Mail, CheckCircle2, Clock } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { Magnetic } from "@/components/effects/Magnetic";
import { AdvancedButton } from "@/components/effects/AdvancedButton";
import { ClickSpark } from "@/components/effects/ClickSpark";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Content */}
      <div className="relative w-full max-w-lg rounded-2xl glass-strong border border-violet-500/25 p-6 sm:p-8 shadow-2xl shadow-violet-950/50 z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-400"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header with Icon */}
        <div className="flex items-start gap-4 mb-5">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-violet-600/30 shrink-0">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-500/10 text-amber-300 border border-amber-500/20 mb-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>Resume coming soon</span>
            </div>
            <h3 id="resume-modal-title" className="text-xl font-bold text-white tracking-tight">
              Curriculum Vitae Status
            </h3>
          </div>
        </div>

        {/* Body Text */}
        <div className="space-y-3.5 text-slate-300 text-sm leading-relaxed mb-6">
          <p>
            Mohammad Walid&apos;s formal software engineering resume is currently being updated with
            the latest full-stack project case studies (including <strong className="text-white">The News Room</strong>, <strong className="text-white">Bazar Dor</strong>, and <strong className="text-white">FitLog</strong>).
          </p>
          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 space-y-1.5">
            <div className="flex items-center gap-2 text-violet-300 font-mono">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Configured target path: <code className="text-cyan-300">/resume.pdf</code></span>
            </div>
            <p className="pl-6">
              Once the final resume PDF is ready, it will be placed directly in the public root and download seamlessly upon clicking this button.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <Magnetic>
            <ClickSpark className="w-full sm:w-auto rounded-xl" sparkCount={12} color="167, 139, 250">
              <AdvancedButton
                variant="aurora"
                href={personalInfo.resumeUrl}
                download="Mohammad-Walid-Resume.pdf"
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-white font-medium text-sm"
              >
                <Download className="w-4 h-4" />
                <span>Download Placeholder</span>
              </AdvancedButton>
            </ClickSpark>
          </Magnetic>
          <Magnetic strength={0.18}>
            <AdvancedButton
              variant="specular"
              href={`mailto:${personalInfo.email}?subject=Resume%20Inquiry%20-%20Mohammad%20Walid`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-slate-200 hover:text-white font-medium text-sm"
            >
              <Mail className="w-4 h-4" />
              <span>Request via Email</span>
            </AdvancedButton>
          </Magnetic>
        </div>
      </div>
    </div>
  );
}

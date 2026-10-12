"use client";

import React, { useState } from "react";
import { PERSONAL_INFO } from "@/data/personal";
import { soundFx } from "@/lib/audio";
import {
  Mail,
  Linkedin,
  Github,
  Send,
  Copy,
  Check,
  AlertCircle,
  ExternalLink,
  MessageSquare,
  Sparkles,
} from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [responseStatus, setResponseStatus] = useState<{
    type: "success" | "fallback" | "error" | null;
    message: string;
    mailtoUrl?: string;
  }>({ type: null, message: "" });

  const handleCopyEmail = () => {
    soundFx.playChime(620, 0.15);
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    soundFx.playKeyClick(1.1);
    setLoading(true);
    setResponseStatus({ type: null, message: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setResponseStatus({
          type: "success",
          message: data.message || "Message sent successfully!",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else if (data.requiresDirectClientFallback) {
        // Honest disclosure: Server does not have external RESEND_API_KEY configured
        const mailto = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
          formData.subject || `Message from ${formData.name}`
        )}&body=${encodeURIComponent(
          `From: ${formData.name} (${formData.email})\n\n${formData.message}`
        )}`;

        setResponseStatus({
          type: "fallback",
          message:
            "No backend email delivery provider (e.g. Resend) is configured on this deployment. Please click below to send directly via your mail client.",
          mailtoUrl: mailto,
        });
      } else {
        setResponseStatus({
          type: "error",
          message: data.error || "Failed to process message.",
        });
      }
    } catch {
      const fallbackMailto = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
        formData.subject || `Message from ${formData.name}`
      )}&body=${encodeURIComponent(
        `From: ${formData.name} (${formData.email})\n\n${formData.message}`
      )}`;

      setResponseStatus({
        type: "fallback",
        message:
          "Network error reaching endpoint. Please use direct email client instead.",
        mailtoUrl: fallbackMailto,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
            <Mail size={16} />
          </div>
          <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest font-semibold">
            Section 07 // Connection & Inquiries
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
          Get In Touch
        </h2>
        <p className="text-sm text-slate-400 mb-8 max-w-xl">
          Interested in discussing software development internships, full-stack projects, or entry-level opportunities? Reach out directly.
        </p>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Verified Contact Channels Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-space-900/90 border border-slate-800 shadow-glass-md backdrop-blur-md">
              <h3 className="text-sm font-mono uppercase tracking-wider text-slate-300 font-semibold mb-4">
                Verified Contact Channels
              </h3>

              <div className="space-y-3">
                {/* Email Channel */}
                <div className="p-4 rounded-xl bg-space-950/70 border border-slate-800 flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono text-slate-400 uppercase">
                      Direct Email
                    </span>
                    <button
                      onClick={handleCopyEmail}
                      className="flex items-center gap-1 text-[11px] font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      {copied ? (
                        <>
                          <Check size={12} className="text-emerald-400" />
                          <span className="text-emerald-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy size={12} />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-sm font-medium text-white hover:text-cyan-300 transition-colors break-all"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>

                {/* LinkedIn Channel */}
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundFx.playKeyClick(1.0)}
                  className="p-4 rounded-xl bg-space-950/70 border border-slate-800 hover:border-cyan-500/50 flex items-center justify-between transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-950/50 text-blue-400 border border-blue-900/50">
                      <Linkedin size={18} />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 block uppercase">
                        LinkedIn
                      </span>
                      <span className="text-xs font-semibold text-white group-hover:text-cyan-300 transition-colors">
                        ujwal-shettigar-ab497b2b3
                      </span>
                    </div>
                  </div>
                  <ExternalLink size={14} className="text-slate-500 group-hover:text-cyan-400 transition-colors" />
                </a>

                {/* GitHub Channel */}
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundFx.playKeyClick(1.0)}
                  className="p-4 rounded-xl bg-space-950/70 border border-slate-800 hover:border-cyan-500/50 flex items-center justify-between transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-space-800 text-slate-200 border border-slate-700">
                      <Github size={18} />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 block uppercase">
                        GitHub Profile
                      </span>
                      <span className="text-xs font-semibold text-white group-hover:text-cyan-300 transition-colors">
                        @Ujwalushettigar
                      </span>
                    </div>
                  </div>
                  <ExternalLink size={14} className="text-slate-500 group-hover:text-cyan-400 transition-colors" />
                </a>
              </div>

              {/* Status Note */}
              <div className="mt-5 pt-4 border-t border-slate-800 text-xs font-mono text-slate-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Open for Software Development Internships</span>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-space-900/90 border border-slate-800 shadow-glass-md backdrop-blur-md">
              <h3 className="text-lg font-bold text-white tracking-tight mb-1 flex items-center gap-2">
                <MessageSquare size={18} className="text-cyan-400" />
                <span>Send a Message</span>
              </h3>
              <p className="text-xs text-slate-400 mb-6 font-mono">
                Fill in the details below. All fields are client-validated.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="e.g. Jane Doe"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-space-950/80 border border-slate-800 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 text-sm text-slate-200 placeholder-slate-600 font-sans transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="e.g. jane@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-space-950/80 border border-slate-800 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 text-sm text-slate-200 placeholder-slate-600 font-sans transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    placeholder="e.g. Internship Inquiry / Collaboration"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-space-950/80 border border-slate-800 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 text-sm text-slate-200 placeholder-slate-600 font-sans transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Write your message here..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-space-950/80 border border-slate-800 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 text-sm text-slate-200 placeholder-slate-600 font-sans transition-all resize-none"
                  />
                </div>

                {/* Submission Feedback Notices */}
                {responseStatus.type === "success" && (
                  <div className="p-3.5 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-mono flex items-start gap-2">
                    <Check size={16} className="shrink-0 mt-0.5" />
                    <span>{responseStatus.message}</span>
                  </div>
                )}

                {responseStatus.type === "fallback" && (
                  <div className="p-3.5 rounded-xl bg-amber-950/60 border border-amber-500/40 text-amber-300 text-xs font-mono space-y-2">
                    <div className="flex items-start gap-2">
                      <AlertCircle size={16} className="shrink-0 mt-0.5 text-amber-400" />
                      <span>{responseStatus.message}</span>
                    </div>
                    {responseStatus.mailtoUrl && (
                      <div className="pt-1">
                        <a
                          href={responseStatus.mailtoUrl}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 text-black font-semibold text-xs hover:bg-amber-400 transition-colors shadow-sm"
                        >
                          <Send size={12} />
                          <span>Open in Your Mail App with This Message</span>
                        </a>
                      </div>
                    )}
                  </div>
                )}

                {responseStatus.type === "error" && (
                  <div className="p-3.5 rounded-xl bg-rose-950/60 border border-rose-500/40 text-rose-300 text-xs font-mono flex items-start gap-2">
                    <AlertCircle size={16} className="shrink-0 mt-0.5" />
                    <span>{responseStatus.message}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold text-sm shadow-neon-cyan border border-cyan-400/40 transition-all flex items-center justify-center gap-2 active:scale-95 disabled:opacity-60"
                >
                  <Send size={15} />
                  <span>{loading ? "Processing..." : "Submit Message"}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

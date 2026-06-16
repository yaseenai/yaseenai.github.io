"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { socialData } from "@/data/social";

export default function ContactContent() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(socialData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="pt-24 pb-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-16">
          <div className="accent-line mb-6" />
          <h1 className="text-4xl font-extrabold tracking-tight text-text-primary sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-text-secondary leading-relaxed">
            Available for senior AI engineering roles, freelance projects, and
            research collaborations. Let&apos;s build something exceptional together.
          </p>

          <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-gold/20 bg-gold-dim px-4 py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
            </span>
            <span className="text-sm font-medium text-gold">{socialData.available}</span>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-5"
          >
            {[
              {
                label: "Email",
                value: socialData.email,
                action: copyEmail,
                icon: (
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                ),
                buttonText: copied ? "Copied!" : "Copy",
              },
              {
                label: "GitHub",
                value: "yaseenai",
                href: socialData.github,
                icon: (
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                ),
                buttonText: "View Profile",
              },
              {
                label: "LinkedIn",
                value: "yaseenai",
                href: socialData.linkedin,
                icon: (
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                ),
                buttonText: "Connect",
              },
              {
                label: "Location",
                value: socialData.location,
                icon: (
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                ),
              },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between rounded-lg border border-navy-border bg-navy-card p-4">
                <div className="flex items-center gap-3">
                  <span className="text-gold">{item.icon}</span>
                  <div>
                    <p className="text-[10px] text-text-muted uppercase tracking-wider">{item.label}</p>
                    <p className="text-sm text-text-primary">{item.value}</p>
                  </div>
                </div>
                {item.action ? (
                  <button onClick={item.action} className="text-xs text-gold hover:text-gold-light transition-colors font-medium">
                    {item.buttonText}
                  </button>
                ) : item.href ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-xs text-gold hover:text-gold-light transition-colors font-medium">
                    {item.buttonText}
                  </a>
                ) : null}
              </div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 exp-card rounded-xl p-8"
          >
            <h3 className="text-lg font-semibold text-text-primary mb-6">
              Send a Message
            </h3>
            <form
              action={`mailto:${socialData.email}`}
              method="POST"
              encType="text/plain"
              className="space-y-5"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="block text-xs text-text-muted uppercase tracking-wider mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className="form-input w-full rounded-lg px-4 py-2.5 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs text-text-muted uppercase tracking-wider mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className="form-input w-full rounded-lg px-4 py-2.5 text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs text-text-muted uppercase tracking-wider mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Project Inquiry / Collaboration"
                  className="form-input w-full rounded-lg px-4 py-2.5 text-sm"
                />
              </div>
              <div>
                <label className="block text-xs text-text-muted uppercase tracking-wider mb-2">Message</label>
                <textarea
                  name="body"
                  required
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  className="form-input w-full rounded-lg px-4 py-3 text-sm resize-none"
                />
              </div>
              <button type="submit" className="btn-primary rounded-lg px-6 py-3 text-sm w-full sm:w-auto">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

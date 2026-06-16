"use client";

import { useState, useRef, type RefObject } from "react";
import { motion } from "framer-motion";
import { socialData } from "@/data/social";

function BuildUrls({
  email,
  nameRef,
  emailRef,
  subjectRef,
  bodyRef,
}: {
  email: string;
  nameRef: RefObject<HTMLInputElement | null>;
  emailRef: RefObject<HTMLInputElement | null>;
  subjectRef: RefObject<HTMLInputElement | null>;
  bodyRef: RefObject<HTMLTextAreaElement | null>;
}) {
  const [copied, setCopied] = useState(false);

  const getParams = () => {
    const name = nameRef.current?.value || "";
    const sender = emailRef.current?.value || "";
    const subject = subjectRef.current?.value || "";
    const body = bodyRef.current?.value || "";
    const fullBody = sender || name ? `From: ${name}${sender ? ` (${sender})` : ""}\n\n${body}` : body;
    return { subject: encodeURIComponent(subject), body: encodeURIComponent(fullBody) };
  };

  const openGmail = () => {
    const { subject, body } = getParams();
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`, "_blank", "noopener,noreferrer");
  };

  const openOutlook = () => {
    const { subject, body } = getParams();
    window.open(`https://outlook.live.com/mail/0/deeplink/compose?to=${email}&subject=${subject}&body=${body}`, "_blank", "noopener,noreferrer");
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="space-y-5">
      {/* Email display + copy */}
      <div className="flex items-center justify-between rounded-lg border border-gold/20 bg-gold-dim px-4 py-3">
        <div className="flex items-center gap-3">
          <svg className="h-5 w-5 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
          <span className="text-sm font-medium text-text-primary">{email}</span>
        </div>
        <button
          onClick={copyEmail}
          className="text-xs font-medium text-gold hover:text-gold-light transition-colors flex-shrink-0"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      {/* Gmail + Outlook buttons */}
      <div className="grid gap-3 sm:grid-cols-2">
        <button
          onClick={openGmail}
          className="flex items-center justify-center gap-2 rounded-lg border border-navy-border bg-navy-card px-5 py-3 text-sm font-medium text-text-primary hover:border-accent-cyan/30 hover:bg-accent-cyan/5 transition-all"
        >
          <svg className="h-5 w-5 text-red-400" viewBox="0 0 24 24" fill="currentColor"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>
          Open in Gmail
        </button>
        <button
          onClick={openOutlook}
          className="flex items-center justify-center gap-2 rounded-lg border border-navy-border bg-navy-card px-5 py-3 text-sm font-medium text-text-primary hover:border-accent-cyan/30 hover:bg-accent-cyan/5 transition-all"
        >
          <svg className="h-5 w-5 text-blue-400" viewBox="0 0 24 24" fill="currentColor"><path d="M21.33 21.33 21.33 21.33C21.33 21.33 21.33 21.33 21.33 21.33 21.33 21.33 21.33 21.33 21.33 21.33 21.33 21.33 21.33 21.33 21.33 21.33 21.33 21.33 21.33 21.33 21.33 21.33M7.33 4.67 7.33 4.67C7.33 4.67 7.33 4.67 7.33 4.67 7.33 4.67 7.33 4.67 7.33 4.67 7.33 4.67 7.33 4.67 7.33 4.67M12 2 2 5.33 2 18.67 12 22 22 18.67 22 5.33 12 2Z"/></svg>
          Open in Outlook
        </button>
      </div>
    </div>
  );
}

export default function ContactContent() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLTextAreaElement>(null);

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
                href: `mailto:${socialData.email}`,
                buttonText: "Send Email",
                icon: (
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                ),
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
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-xs text-gold hover:text-gold-light transition-colors font-medium">
                    {item.buttonText}
                  </a>
                ) : null}
              </div>
            ))}
          </motion.div>

          {/* Email & Webmail */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 exp-card rounded-xl p-8"
          >
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              Reach Out
            </h3>
            <p className="text-sm text-text-muted mb-6">
              Fill the fields below, then open your preferred email client — the message will be pre-filled.
            </p>

            {/* Form fields */}
            <div className="space-y-4 mb-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="block text-xs text-text-muted uppercase tracking-wider mb-2">Your Name</label>
                  <input
                    id="contact-name"
                    ref={nameRef}
                    type="text"
                    placeholder="John Doe"
                    className="form-input w-full rounded-lg px-4 py-2.5 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-xs text-text-muted uppercase tracking-wider mb-2">Your Email</label>
                  <input
                    id="contact-email"
                    ref={emailRef}
                    type="email"
                    placeholder="you@example.com"
                    className="form-input w-full rounded-lg px-4 py-2.5 text-sm"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="contact-subject" className="block text-xs text-text-muted uppercase tracking-wider mb-2">Subject</label>
                <input
                  id="contact-subject"
                  ref={subjectRef}
                  type="text"
                  placeholder="Project Inquiry / Collaboration"
                  className="form-input w-full rounded-lg px-4 py-2.5 text-sm"
                />
              </div>
              <div>
                <label htmlFor="contact-body" className="block text-xs text-text-muted uppercase tracking-wider mb-2">Message</label>
                <textarea
                  id="contact-body"
                  ref={bodyRef}
                  rows={4}
                  placeholder="Tell me about your project or opportunity..."
                  className="form-input w-full rounded-lg px-4 py-3 text-sm resize-none"
                />
              </div>
            </div>

            {/* Construct URLs */}
            <BuildUrls
              email={socialData.email}
              nameRef={nameRef}
              emailRef={emailRef}
              subjectRef={subjectRef}
              bodyRef={bodyRef}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

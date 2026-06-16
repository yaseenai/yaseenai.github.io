"use client";

import Link from "next/link";
import { motion } from "framer-motion";

function Photo({ size }: { size: "sm" | "lg" }) {
  const dims = size === "lg"
    ? "w-72 h-72 lg:w-80 lg:h-80"
    : "w-48 h-48 sm:w-56 sm:h-56";

  return (
    <div className="relative">
      <div className="absolute inset-0 rounded-full bg-gold blur-3xl opacity-[0.08] scale-125" />
      <div className="relative rounded-full border-2 border-gold/20 p-1.5 shadow-[0_0_60px_rgba(201,168,76,0.08)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/yaseen.webp"
          alt="Muhammad Yaseen"
          className={`${dims} rounded-full object-cover bg-navy-card`}
          loading="eager"
          fetchPriority="high"
        />
      </div>
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-navy-card px-4 py-2 shadow-lg shadow-navy-deep/50">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
        </span>
        <span className="text-[11px] font-medium text-gold tracking-wide uppercase whitespace-nowrap">
          Open to Work
        </span>
      </div>
    </div>
  );
}

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "20+", label: "AI Projects" },
  { value: "3", label: "Companies" },
  { value: "1", label: "Published Paper" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-pattern overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-12 w-full">
        {/* Desktop: 2-column grid */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-sm font-medium text-gold tracking-widest uppercase mb-6"
            >
              Senior Full-Stack AI Engineer
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl font-extrabold tracking-tight text-text-primary sm:text-5xl lg:text-6xl leading-[1.08]"
            >
              Muhammad <span className="text-gold">Yaseen</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-6 max-w-xl text-base text-text-secondary leading-relaxed sm:text-lg"
            >
              I architect and deploy production-grade AI systems — specializing in
              Computer Vision, Large Language Models, and Generative AI.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link href="/projects/" className="btn-primary rounded-lg px-8 py-3.5 text-sm">View Projects</Link>
              <Link href="/contact/" className="btn-outline rounded-lg px-8 py-3.5 text-sm">Get in Touch</Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-16 grid grid-cols-4 gap-6"
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="stat-number text-4xl font-bold">{s.value}</p>
                  <p className="mt-1 text-xs text-text-muted tracking-wide uppercase">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex justify-end"
          >
            <Photo size="lg" />
          </motion.div>
        </div>

        {/* Mobile: single column, ordered: label → name → photo → desc → CTAs → stats */}
        <div className="flex flex-col items-center text-center lg:hidden">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xs font-medium text-gold tracking-widest uppercase"
          >
            Senior Full-Stack AI Engineer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="mt-3 text-4xl font-extrabold tracking-tight text-text-primary leading-[1.1]"
          >
            Muhammad <span className="text-gold">Yaseen</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="mt-8"
          >
            <Photo size="sm" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="mt-8 max-w-sm text-sm text-text-secondary leading-relaxed"
          >
            I architect and deploy production-grade AI systems — specializing in
            Computer Vision, Large Language Models, and Generative AI.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-6 flex flex-wrap justify-center gap-3"
          >
            <Link href="/projects/" className="btn-primary rounded-lg px-6 py-3 text-sm">View Projects</Link>
            <Link href="/contact/" className="btn-outline rounded-lg px-6 py-3 text-sm">Get in Touch</Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65 }}
            className="mt-12 grid grid-cols-2 gap-x-8 gap-y-5"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <p className="stat-number text-2xl font-bold">{s.value}</p>
                <p className="mt-0.5 text-[10px] text-text-muted tracking-wide uppercase">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

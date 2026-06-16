"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";

export default function ExperienceCards() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-16">
          <div className="accent-line mb-6" />
          <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            Professional Journey
          </h2>
          <p className="mt-4 max-w-2xl text-text-secondary leading-relaxed">
            Building AI systems that drive measurable business impact.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <div className={`exp-card rounded-xl p-8 ${exp.current ? "current" : ""}`}>
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="text-xs text-gold font-medium tracking-wide uppercase">
                    {exp.period}
                  </span>
                  {exp.current && (
                    <span className="text-[10px] bg-gold text-navy-deep font-semibold rounded-full px-2.5 py-0.5 uppercase tracking-wider">
                      Current
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-text-primary">
                  {exp.role}
                </h3>
                <p className="text-gold font-medium mt-1">
                  {exp.company}
                </p>
                <p className="text-sm text-text-muted mt-0.5">
                  {exp.location} &middot; {exp.type}
                </p>

                <p className="text-sm text-text-secondary mt-4 leading-relaxed">
                  {exp.description}
                </p>

                <div className="mt-5 space-y-2">
                  {exp.achievements.map((achievement, j) => (
                    <div key={j} className="flex items-start gap-3 text-sm text-text-secondary">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 pt-4 border-t border-navy-border flex flex-wrap gap-2">
                  {exp.techStack.map((tech) => (
                    <span key={tech} className="skill-tag rounded-md px-3 py-1 text-[11px]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

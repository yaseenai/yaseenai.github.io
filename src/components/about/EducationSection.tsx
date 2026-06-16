"use client";

import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import { education } from "@/data/education";

export default function EducationSection() {
  return (
    <section className="py-24">
      <div className="section-divider">
        <hr />
      </div>
      <div className="mx-auto max-w-4xl px-6 pt-24">
        <div className="mb-16">
          <div className="accent-line mb-6" />
          <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            Education & Research
          </h2>
        </div>

        {education.map((edu) => (
          <motion.div
            key={edu.degree}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="exp-card rounded-xl p-8"
          >
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div>
                <h3 className="text-xl font-semibold text-text-primary">
                  {edu.degree}
                </h3>
                <p className="text-gold font-medium mt-1">{edu.institution}</p>
                <p className="text-sm text-text-muted mt-1">
                  {edu.location} &middot; {edu.period}
                </p>
              </div>
              <Badge variant="cyan">
                CGPA: {edu.cgpa}
              </Badge>
            </div>

            {edu.paper && (
              <div className="mb-6 rounded-xl border border-gold/20 bg-gold-dim p-5">
                <p className="text-xs font-semibold text-gold uppercase tracking-wide mb-2">
                  Published Research Paper
                </p>
                <p className="text-sm font-medium text-text-primary mb-2">
                  {edu.paper.title}
                </p>
                <a
                  href={edu.paper.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-gold hover:text-gold-light transition-colors"
                >
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  DOI: {edu.paper.url.replace("https://doi.org/", "")}
                </a>
              </div>
            )}

            <h4 className="text-sm font-semibold text-text-primary mb-3">
              Key Achievements
            </h4>
            <ul className="space-y-2.5">
              {edu.achievements.map((achievement, j) => (
                <li key={j} className="flex items-start gap-3 text-sm text-text-secondary">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                  {achievement}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

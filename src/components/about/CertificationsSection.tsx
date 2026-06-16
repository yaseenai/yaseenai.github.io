"use client";

import { motion } from "framer-motion";
import { certificates } from "@/data/certificates";

export default function CertificationsSection() {
  return (
    <section className="py-24">
      <div className="section-divider">
        <hr />
      </div>
      <div className="mx-auto max-w-4xl px-6 pt-24">
        <div className="mb-12">
          <div className="accent-line mb-6" />
          <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            Certifications
          </h2>
          <p className="mt-4 text-text-secondary leading-relaxed">
            Professional certifications from leading institutions, reinforcing expertise
            in AI, machine learning, and data science.
          </p>
        </div>

        <div className="space-y-3">
          {certificates.map((cert, i) => (
            <motion.a
              key={cert.name}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="flex items-center justify-between rounded-lg border border-navy-border bg-navy-card p-5 hover:border-gold/30 transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 rounded-lg bg-gold-dim p-2.5 text-gold">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                </div>
                <span className="text-sm font-medium text-text-primary group-hover:text-gold transition-colors">
                  {cert.name}
                </span>
              </div>
              <span className="flex-shrink-0 text-xs text-gold font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                View →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

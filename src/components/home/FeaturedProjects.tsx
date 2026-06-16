"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { featuredProjects } from "@/data/projects";

const categoryLabels: Record<string, string> = {
  "ai-ml": "AI / ML",
  "full-stack": "Full-Stack",
  mobile: "Mobile Apps",
  "computer-vision": "Computer Vision",
  llm: "LLM & Gen AI",
};

export default function FeaturedProjects() {
  return (
    <section className="py-24">
      <div className="section-divider">
        <hr />
      </div>
      <div className="mx-auto max-w-7xl px-6 pt-24">
        <div className="mb-16">
          <div className="accent-line mb-6" />
          <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            Selected Work
          </h2>
          <p className="mt-4 max-w-2xl text-text-secondary leading-relaxed">
            Production-grade AI systems deployed across computer vision, LLMs,
            and full-stack applications.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <Link href={`/projects/${project.slug}/`} className="block h-full">
                <div className="project-card rounded-xl p-6 h-full flex flex-col">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-[11px] text-gold uppercase tracking-wider font-medium">
                      {categoryLabels[project.category] || project.category}
                    </span>
                    <span className="text-xs text-text-muted">{project.year}</span>
                  </div>

                  <h3 className="text-base font-semibold text-text-primary mb-2">
                    {project.title}
                  </h3>

                  <p className="text-sm text-text-secondary leading-relaxed mb-4 flex-1 line-clamp-3">
                    {project.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-navy-border">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span key={tech} className="text-[11px] text-text-muted">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="text-[11px] text-gold">+{project.techStack.length - 3}</span>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/projects/"
            className="inline-flex items-center gap-2 text-sm font-medium text-gold hover:text-gold-light transition-colors"
          >
            View All Projects
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

const categoryLabels: Record<string, string> = {
  "ai-ml": "AI / ML",
  "full-stack": "Full-Stack",
  mobile: "Mobile Apps",
  "computer-vision": "Computer Vision",
  llm: "LLM & Gen AI",
};

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
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
            {project.techStack.slice(0, 4).map((tech) => (
              <span key={tech} className="text-[11px] text-text-muted">
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="text-[11px] text-gold">+{project.techStack.length - 4}</span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

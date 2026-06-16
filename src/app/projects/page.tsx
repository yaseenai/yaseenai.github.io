"use client";

import { useState } from "react";
import ProjectCard from "@/components/projects/ProjectCard";
import FilterBar from "@/components/projects/FilterBar";
import { projects } from "@/data/projects";
import type { ProjectCategory } from "@/lib/constants";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");

  const filtered =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-24 pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <div className="accent-line mb-6" />
          <h1 className="text-4xl font-extrabold tracking-tight text-text-primary sm:text-5xl">
            Projects
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-text-secondary leading-relaxed">
            A portfolio of AI systems, full-stack applications, and mobile products built for production.
          </p>
        </div>

        <FilterBar active={activeCategory} onChange={setActiveCategory} />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-16 text-center text-text-muted">No projects found in this category.</p>
        )}
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };
  return { title: project.title, description: project.shortDescription };
}

const categoryLabels: Record<string, string> = {
  "ai-ml": "AI / ML",
  "full-stack": "Full-Stack",
  mobile: "Mobile Apps",
  "computer-vision": "Computer Vision",
  llm: "LLM & Gen AI",
};

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div className="pt-24 pb-24">
      <div className="mx-auto max-w-4xl px-6">
        <Link
          href="/projects/"
          className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-gold transition-colors mb-8"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
          Back to Projects
        </Link>

        <div className="mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-[11px] text-gold uppercase tracking-wider font-medium">
              {categoryLabels[project.category] || project.category}
            </span>
            <span className="text-sm text-text-muted">{project.year}</span>
            {project.links?.paper && (
              <a
                href={project.links.paper}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-gold hover:text-gold-light transition-colors"
              >
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                View Paper
              </a>
            )}
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl lg:text-5xl leading-tight">
            {project.title}
          </h1>

          <p className="mt-6 text-lg text-text-secondary leading-relaxed">
            {project.description}
          </p>
        </div>

        {project.impact && (
          <div className="mb-10 rounded-xl border border-gold/20 bg-gold-dim p-6">
            <div className="flex items-start gap-3">
              <svg className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              <div>
                <p className="text-xs font-semibold text-gold uppercase tracking-wide mb-1">Business Impact</p>
                <p className="text-sm text-text-secondary leading-relaxed">{project.impact}</p>
              </div>
            </div>
          </div>
        )}

        <div className="mb-10">
          <h2 className="text-xl font-bold text-text-primary mb-5">Key Features</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {project.features.map((feature, i) => (
              <div key={i} className="flex items-start gap-3 rounded-lg border border-navy-border bg-navy-card p-4">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gold-dim text-xs text-gold font-mono">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm text-text-secondary leading-relaxed">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold text-text-primary mb-5">Technology Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span key={tech} className="skill-tag rounded-md px-3 py-1.5 text-xs">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-16 flex items-center justify-between border-t border-navy-border pt-8">
          <Link href="/projects/" className="text-sm text-text-muted hover:text-gold transition-colors">
            ← All Projects
          </Link>
          <Link href="/contact/" className="text-sm text-gold hover:text-gold-light transition-colors">
            Discuss a Similar Project →
          </Link>
        </div>
      </div>
    </div>
  );
}

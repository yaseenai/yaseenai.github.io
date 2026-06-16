import React from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div className={`mb-16 ${align === "center" ? "text-center" : ""}`}>
      <div className={`accent-line ${align === "center" ? "mx-auto" : ""} mb-6`} />
      <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-text-secondary leading-relaxed mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}

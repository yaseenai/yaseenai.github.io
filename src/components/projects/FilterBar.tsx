"use client";

import { PROJECT_CATEGORIES, type ProjectCategory } from "@/lib/constants";

interface FilterBarProps {
  active: ProjectCategory;
  onChange: (category: ProjectCategory) => void;
}

export default function FilterBar({ active, onChange }: FilterBarProps) {
  return (
    <div className="flex flex-wrap justify-center gap-1 border-b border-navy-border pb-4">
      {PROJECT_CATEGORIES.map((cat) => (
        <button
          key={cat.key}
          onClick={() => onChange(cat.key)}
          className={`filter-tab px-4 py-2 text-sm font-medium ${active === cat.key ? "active" : ""}`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}

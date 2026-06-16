"use client";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "gold" | "cyan" | "violet" | "muted" | "outline";
  className?: string;
}

export default function Badge({
  children,
  variant = "gold",
  className = "",
}: BadgeProps) {
  const variants: Record<string, string> = {
    gold: "bg-gold-dim text-gold border-gold/20",
    cyan: "bg-gold-dim text-gold border-gold/20",
    violet: "bg-gold-dim text-gold border-gold/20",
    muted: "bg-navy-card text-text-muted border-navy-border",
    outline: "bg-transparent text-text-secondary border-navy-border",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-colors ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}

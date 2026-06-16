export const SITE = {
  name: "Muhammad Yaseen",
  title: "Senior Full-Stack AI Engineer",
  description:
    "Senior AI Engineer specializing in Computer Vision, LLMs, Generative AI, and full-stack AI systems. Building production-grade AI solutions from research to deployment.",
  url: "https://yaseenai.github.io",
  location: "Islamabad, Pakistan",
  email: "yaseenaidev@gmail.com",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  { label: "Projects", href: "/projects/" },
  { label: "Experience", href: "/experience/" },
  { label: "Contact", href: "/contact/" },
];

export const SOCIAL_LINKS = {
  github: "https://github.com/yaseenai",
  linkedin: "https://linkedin.com/in/yaseenuom",
  email: "mailto:yaseenaidev@gmail.com",
};

export const PROJECT_CATEGORIES = [
  { key: "all", label: "All Projects" },
  { key: "ai-ml", label: "AI / ML" },
  { key: "full-stack", label: "Full-Stack" },
  { key: "mobile", label: "Mobile Apps" },
  { key: "computer-vision", label: "Computer Vision" },
  { key: "llm", label: "LLM & Gen AI" },
] as const;

export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number]["key"];

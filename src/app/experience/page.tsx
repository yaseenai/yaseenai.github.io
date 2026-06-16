import type { Metadata } from "next";
import ExperienceCards from "@/components/experience/ExperienceCards";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Career journey of Muhammad Yaseen — AI Engineer at One Network (FWO), EmporionSoft, and Evolve Innovative Solutions.",
};

export default function ExperiencePage() {
  return (
    <div className="pt-20">
      <ExperienceCards />
    </div>
  );
}

import type { Metadata } from "next";
import BioSection from "@/components/about/BioSection";
import SkillsTags from "@/components/about/SkillsTags";
import EducationSection from "@/components/about/EducationSection";
import CertificationsSection from "@/components/about/CertificationsSection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Senior Full-Stack AI Engineer with expertise in Computer Vision, LLMs, and Generative AI. 3+ years building production AI systems.",
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      <BioSection />
      <SkillsTags />
      <EducationSection />
      <CertificationsSection />
    </div>
  );
}

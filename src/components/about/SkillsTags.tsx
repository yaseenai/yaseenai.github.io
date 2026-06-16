"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/data/skills";

export default function SkillsTags() {
  const allSkills = skillGroups.flatMap((g) =>
    g.skills.map((s) => ({ name: s.name, category: g.category, level: s.level }))
  );

  const tiers = {
    Expert: allSkills.filter((s) => s.level >= 92),
    Advanced: allSkills.filter((s) => s.level >= 85 && s.level < 92),
    Proficient: allSkills.filter((s) => s.level >= 75 && s.level < 85),
    Familiar: allSkills.filter((s) => s.level < 75),
  };

  return (
    <section className="py-24">
      <div className="section-divider">
        <hr />
      </div>
      <div className="mx-auto max-w-7xl px-6 pt-24">
        <div className="mb-16">
          <div className="accent-line mb-6" />
          <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            Technical Skills
          </h2>
          <p className="mt-4 max-w-2xl text-text-secondary leading-relaxed">
            Proficiency across the full AI and software engineering stack.
          </p>
        </div>

        <div className="space-y-10">
          {Object.entries(tiers).map(([tier, skills], ti) => (
            skills.length > 0 && (
              <motion.div
                key={tier}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: ti * 0.1, duration: 0.4 }}
              >
                <h3 className="text-xs font-semibold text-gold uppercase tracking-widest mb-4">
                  {tier}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills
                    .sort((a, b) => b.level - a.level)
                    .map((skill) => (
                      <span key={skill.name} className="skill-tag rounded-md px-3 py-1.5 text-xs">
                        {skill.name}
                      </span>
                    ))}
                </div>
              </motion.div>
            )
          ))}
        </div>
      </div>
    </section>
  );
}

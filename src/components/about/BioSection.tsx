"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function BioSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="accent-line mb-6" />
            <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl mb-6">
              About Me
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              I am a <span className="text-gold font-medium">Senior Full-Stack AI Engineer</span> based in
              Islamabad, Pakistan, with over 3 years of experience architecting and deploying
              production AI systems. My expertise spans the complete AI lifecycle — from data
              engineering and model research to cloud deployment and continuous monitoring.
            </p>
            <p className="text-text-secondary leading-relaxed mb-4">
              Currently leading AI/ML initiatives at <span className="text-gold font-medium">One Network (FWO)</span>,
              I design intelligent microservices for national-scale network optimization,
              infrastructure monitoring, and predictive analytics. Previously, I built fraud
              detection systems for Amazon&apos;s advertising ecosystem and pioneered automated
              multimedia-to-documentation frameworks.
            </p>
            <p className="text-text-secondary leading-relaxed">
              My work sits at the intersection of cutting-edge research and pragmatic engineering —
              delivering systems that are as robust as they are innovative. I have published a
              peer-reviewed paper on multi-disease prediction using ML/DL models.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/muhammad-yaseen-ai-engineer-resume.pdf"
                className="btn-primary inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm"
                download
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                Download Resume
              </a>
              <Link href="/contact/" className="btn-outline inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm">
                Contact Me
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {[
              {
                title: "End-to-End AI Architecture",
                desc: "Complete technical lifecycle — requirements gathering, dataset engineering, model training, API design, cloud deployment, and monitoring.",
              },
              {
                title: "Computer Vision Systems",
                desc: "YOLOv8, CNNs, and Siamese networks for object detection, vehicle re-identification, and automated infrastructure surveillance.",
              },
              {
                title: "LLM & Generative AI Integration",
                desc: "RAG pipelines, role-aware chatbots, intent classification, STT/TTS voice bots, and fine-tuned generative models for enterprise.",
              },
              {
                title: "Production ML Engineering",
                desc: "Scalable microservices with sub-100ms inference, automated drift detection, CI/CD pipelines, and containerized deployment.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="service-card rounded-lg p-5"
              >
                <h3 className="text-sm font-semibold text-text-primary mb-1.5">
                  {item.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

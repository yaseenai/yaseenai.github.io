import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  AlignmentType,
  TabStopPosition,
  TabStopType,
  BorderStyle,
} from "docx";
import { writeFileSync } from "fs";
import { experiences } from "../src/data/experience";
import { skillGroups } from "../src/data/skills";
import { education } from "../src/data/education";
import { certificates } from "../src/data/certificates";
import { socialData } from "../src/data/social";
import { SITE } from "../src/lib/constants";

// ─── Constants ──────────────────────────────────────────────────

const F = "Calibri";
const BODY = 21; // 10.5pt
const SMALL = 20; // 10pt
const HEAD = 24; // 12pt
const NAME = 36; // 18pt
const MARGIN = 1440; // 1"
const GRAY = "333333";
const MID = "555555";
const LIGHT = "777777";
const BLACK = "000000";

// ─── Helpers ────────────────────────────────────────────────────

function hdr(text: string): Paragraph {
  return new Paragraph({
    spacing: { before: 200, after: 60 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 1, space: 6 } },
    children: [new TextRun({ text, font: F, size: HEAD, bold: true, color: BLACK })],
  });
}

function t(text: string, opts?: { b?: boolean; s?: number; c?: string }): TextRun {
  return new TextRun({ text, font: F, size: opts?.s ?? BODY, bold: opts?.b, color: opts?.c ?? GRAY });
}

function p(children: TextRun[], opts?: { before?: number; after?: number; indent?: number }): Paragraph {
  return new Paragraph({
    spacing: { before: opts?.before ?? 0, after: opts?.after ?? 0 },
    indent: opts?.indent ? { left: opts.indent } : undefined,
    children,
  });
}

function rl(left: string, right: string, leftBold?: boolean): Paragraph {
  return new Paragraph({
    spacing: { before: 0, after: 0 },
    tabStops: [{ type: TabStopType.RIGHT, position: TabStopPosition.MAX }],
    children: [
      t(left, { b: leftBold, s: BODY, c: BLACK }),
      t("\t" + right, { s: SMALL, c: LIGHT }),
    ],
  });
}

function bl(text: string): Paragraph {
  return new Paragraph({
    spacing: { before: 30, after: 30 },
    indent: { left: 360 },
    bullet: { level: 0 },
    children: [t(text)],
  });
}

function skillLine(cat: string, skills: string): Paragraph {
  return new Paragraph({
    spacing: { before: 30, after: 30 },
    children: [
      t(cat + ": ", { b: true, c: BLACK }),
      t(skills, { c: MID }),
    ],
  });
}

// ─── Content ────────────────────────────────────────────────────

const summary =
  "Senior Full-Stack AI Engineer with 3+ years of experience architecting and deploying 20+ production-grade AI systems " +
  "spanning computer vision, large language models, generative AI, and IoT. Currently leading AI/ML initiatives at " +
  "One Network (FWO), designing intelligent microservices for national-scale network optimization and infrastructure " +
  "monitoring. Previously engineered fraud detection systems processing 20M+ daily events for Amazon's advertising " +
  "ecosystem at EmporionSoft, and pioneered automated video-to-documentation ML frameworks at Evolve Innovative Solutions. " +
  "Published peer-reviewed research on multi-disease prediction. Expert in end-to-end AI product delivery — " +
  "from research and data engineering to cloud deployment and continuous monitoring.";

const expBullets: string[][] = [
  [
    "Architected AI microservice ecosystem achieving 99.7% uptime and sub-100ms inference latency across 50+ edge nodes for real-time network traffic optimization.",
    "Built generative AI pipelines producing synthetic telemetry data, reducing sensor dependency costs 40% while improving anomaly detection recall from 82% to 96%.",
    "Designed YOLOv8 and CNN-based computer vision surveillance systems for automated infrastructure threat detection, cutting manual inspection overhead by 65%.",
    "Integrated LLM-powered conversational agents into customer support systems, reducing ticket resolution time by 58% through intelligent triage and contextual response generation.",
    "Established automated ML data pipelines with drift detection and model retraining triggers, maintaining 94%+ accuracy across 8 months of continuous production deployment.",
  ],
  [
    "Architected DNN-based crawler detection framework processing 20M+ daily traffic events, increasing robotic coverage by 11.9% and generating $2.3M in annualized advertiser savings.",
    "Designed multi-stage ML pipelines combining behavioral fingerprinting and real-time ensemble scoring to block sophisticated robotic fraud with 97.3% precision.",
    "Conducted statistical root-cause analysis on data quality degradation, implementing automated validation layers that reduced false positive rates by 34%.",
    "Developed adversarial robustness training protocols that hardened detection models against evolving bot signatures, maintaining 95%+ efficacy across 3 major attack cycles.",
  ],
  [
    "Engineered novel ML framework combining video action segmentation with neural language generation to auto-produce step-by-step technical documentation from procedural videos (BLEU: 0.74, ROUGE-L: 0.81).",
    "Reduced average documentation creation time from 4 hours to 12 minutes per video, validated across 6 diverse procedural domains.",
    "Published framework architecture and reproducible open-source tooling in academic proceedings, contributing to the multimedia understanding research community.",
  ],
];

const projLines: { t: string; d: string; tech: string; imp: string }[] = [
  {
    t: "Vehicle Visual Similarity & Matching Engine",
    d: "Siamese network with FAISS-powered vehicle re-identification across multi-angle camera feeds. 94.2% top-1 accuracy, 2,000+ req/min at <300ms latency.",
    tech: "PyTorch, FastAPI, Redis, PostgreSQL, Docker",
    imp: "Reduced manual verification time by 82%; identified 14,300+ toll evasion incidents in first quarter.",
  },
  {
    t: "AI Call Center Voice Bot",
    d: "End-to-end voice AI: Whisper STT → BERT intent classifier (96.8% accuracy, 47 intents) → RAG-augmented LLM → ElevenLabs TTS. Integrated via Twilio for live calls.",
    tech: "Python, GPT-4, Whisper, FastAPI, Redis",
    imp: "73% autonomous resolution rate; reduced support staffing costs by 61%.",
  },
  {
    t: "Smart Cities AI Monitoring Platform",
    d: "Real-time surveillance across 200+ camera feeds with edge AI on Jetson devices and centralized GPU-based cross-camera event correlation. Unified React command dashboard.",
    tech: "YOLOv8, OpenCV, Kafka, MQTT, React, Docker Swarm",
    imp: "Reduced incident response time by 64%; enabled proactive intervention for 1,200+ daily traffic anomalies.",
  },
  {
    t: "HRMS Role-Aware AI Chatbot",
    d: "Enterprise RAG chatbot with 6-tier RBAC integrated into the LLM pipeline — dynamically scopes responses by user clearance level. Streaming token generation with source attribution.",
    tech: "Next.js, LangChain, ChromaDB, GPT-4, FastAPI, JWT",
    imp: "92% autonomous query resolution; zero privilege-escalation incidents in security audits.",
  },
  {
    t: "Multi-Disease Prediction Using ML & DL (Published)",
    d: "Comparative evaluation of 8 ML + 3 DL models for simultaneous prediction of 4 diseases from 132 clinical features. Ensemble (XGBoost + TabNet) achieved 96.4% accuracy and 0.98 AUC-ROC.",
    tech: "Scikit-learn, TensorFlow, XGBoost, SHAP, Streamlit",
    imp: "Published in peer-reviewed journal (DOI: 10.71146/kjmr176).",
  },
  {
    t: "Toll Plaza MTag Automation System",
    d: "Contactless toll collection with RFID vehicle identification, real-time fee deduction, and automated barrier control — all within 500ms. Includes React operator dashboard and mobile recharge portal.",
    tech: "Python, FastAPI, RFID/IoT, PostgreSQL, MQTT, Redis",
    imp: "Reduced vehicle processing time from 45s to 0.5s; eliminated plaza congestion entirely.",
  },
];

// ─── Build ──────────────────────────────────────────────────────

const children: Paragraph[] = [];

// HEADER
children.push(
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 20 },
    children: [t("MUHAMMAD YASEEN", { b: true, s: NAME, c: BLACK })],
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 40 },
    children: [t(SITE.title, { s: BODY, c: MID })],
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 80 },
    children: [
      t(socialData.location, { s: SMALL, c: LIGHT }),
      t("  |  " + socialData.email, { s: SMALL, c: GRAY }),
      t("  |  " + "github.com/yaseenai", { s: SMALL, c: GRAY }),
      t("  |  " + "linkedin.com/in/yaseenuom", { s: SMALL, c: GRAY }),
    ],
  }),
);

// PROFESSIONAL SUMMARY
children.push(
  hdr("PROFESSIONAL SUMMARY"),
  p([t(summary)], { before: 40, after: 40 }),
);

// TECHNICAL SKILLS
children.push(hdr("TECHNICAL SKILLS"));
for (const g of skillGroups) {
  children.push(skillLine(g.category, g.skills.map((s) => s.name).join(", ")));
}

// PROFESSIONAL EXPERIENCE
children.push(hdr("PROFESSIONAL EXPERIENCE"));

for (let i = 0; i < experiences.length; i++) {
  const exp = experiences[i];
  children.push(
    rl(exp.role + (exp.current ? " (Current)" : ""), exp.period, true),
    p([t(exp.company + " — " + exp.location, { s: SMALL, c: MID })], { after: 60 }),
  );
  for (const b of expBullets[i]) {
    children.push(bl(b));
  }
  if (i < experiences.length - 1) {
    children.push(new Paragraph({ spacing: { before: 80 }, children: [] }));
  }
}

// PROJECT HIGHLIGHTS
children.push(hdr("PROJECT HIGHLIGHTS"));

for (const pj of projLines) {
  children.push(
    new Paragraph({
      spacing: { before: 60, after: 30 },
      children: [t(pj.t, { b: true, c: BLACK })],
    }),
    new Paragraph({
      spacing: { before: 0, after: 20 },
      children: [t(pj.d)],
    }),
    new Paragraph({
      spacing: { before: 0, after: 20 },
      children: [t("Technologies: ", { b: true, c: MID, s: SMALL }), t(pj.tech, { s: SMALL, c: LIGHT })],
    }),
    new Paragraph({
      spacing: { before: 0, after: 0 },
      children: [t("Impact: ", { b: true, c: MID, s: SMALL }), t(pj.imp, { s: SMALL, c: LIGHT })],
    }),
  );
}

// EDUCATION
children.push(hdr("EDUCATION"));

for (const edu of education) {
  children.push(
    rl(edu.degree, edu.cgpa, true),
    p([t(edu.institution + " — " + edu.location + " | " + edu.period, { s: SMALL, c: MID })], { after: 40 }),
  );
  if (edu.paper) {
    children.push(
      new Paragraph({
        spacing: { before: 0, after: 40 },
        children: [
          t("Research: ", { b: true, s: SMALL, c: BLACK }),
          t(edu.paper.title, { s: SMALL, c: GRAY }),
          t("  DOI: " + edu.paper.url.replace("https://doi.org/", ""), { s: SMALL, c: MID }),
        ],
      }),
    );
  }
}

// CERTIFICATIONS
children.push(hdr("CERTIFICATIONS"));
for (const cert of certificates) {
  children.push(
    new Paragraph({
      spacing: { before: 30, after: 30 },
      indent: { left: 360 },
      bullet: { level: 0 },
      children: [t(cert.name, { s: SMALL, c: GRAY }), t(" — Coursera", { s: SMALL, c: LIGHT })],
    }),
  );
}

// ─── Document ───────────────────────────────────────────────────

const doc = new Document({
  styles: {
    default: {
      document: {
        run: { font: F, size: BODY },
        paragraph: { spacing: { line: 276 } },
      },
    },
  },
  sections: [
    {
      properties: {
        page: { margin: { top: MARGIN, bottom: MARGIN, left: MARGIN, right: MARGIN } },
      },
      children,
    },
  ],
});

const OUTPUT = "muhammad-yaseen-ai-engineer-resume.docx";

Packer.toBuffer(doc).then((buffer) => {
  writeFileSync(OUTPUT, buffer);
  console.log(`✓ Resume generated: ${OUTPUT}`);
  console.log(`  Size: ${(buffer.byteLength / 1024).toFixed(1)} KB`);
});

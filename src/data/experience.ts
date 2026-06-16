export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  type: "Full Time" | "Contract" | "Freelance";
  current?: boolean;
  description: string;
  achievements: string[];
  techStack: string[];
}

export const experiences: Experience[] = [
  {
    company: "One Network – FWO",
    role: "Senior AI Engineer",
    location: "Islamabad, Pakistan",
    period: "Mar 2025 – Present",
    type: "Full Time",
    current: true,
    description:
      "Leading AI/ML architecture and deployment for large-scale network optimization systems serving critical national infrastructure. Driving innovation in predictive intelligence, computer vision monitoring, and enterprise AI integration across distributed microservices.",
    achievements: [
      "Architected a scalable AI microservice ecosystem for real-time network traffic optimization, achieving 99.7% uptime and sub-100ms inference latency across 50+ edge nodes.",
      "Engineered generative AI pipelines producing high-fidelity synthetic telemetry data, reducing sensor dependency costs by 40% while improving anomaly detection recall from 82% to 96%.",
      "Designed computer vision surveillance systems utilizing YOLOv8 and custom CNN architectures to automate infrastructure threat detection, cutting manual inspection overhead by 65%.",
      "Integrated LLM-powered conversational agents into customer-facing support systems, reducing ticket resolution time by 58% through intelligent triage and contextual response generation.",
      "Built end-to-end ML data pipelines with automated drift detection and model retraining triggers, maintaining model accuracy above 94% in production over 8-month continuous deployment.",
    ],
    techStack: [
      "Python",
      "PyTorch",
      "FastAPI",
      "Docker",
      "Kubernetes",
      "YOLOv8",
      "LangChain",
      "PostgreSQL",
      "Redis",
      "AWS",
    ],
  },
  {
    company: "EmporionSoft Pvt Ltd",
    role: "AI Engineer",
    location: "Lahore, Pakistan",
    period: "Jan 2024 – Feb 2025",
    type: "Full Time",
    description:
      "Spearheaded the design and deployment of advanced fraud detection systems for the Amazon advertising ecosystem. Developed deep learning models to combat sophisticated bot networks, directly impacting advertiser ROI through improved traffic quality and fraud prevention at scale.",
    achievements: [
      "Architected a DNN-based crawler detection framework processing 20M+ daily traffic events, increasing robotic coverage by 11.9% and Impression IVR by 4.9% — translating to $2.3M in annualized savings for top-tier advertisers.",
      "Designed multi-stage ML pipelines combining behavioral fingerprinting, request pattern analysis, and real-time ensemble scoring to identify and block sophisticated robotic fraud with 97.3% precision.",
      "Conducted rigorous statistical root-cause analysis on data quality degradation, implementing automated validation layers that reduced false positive rates by 34% and restored model confidence scores.",
      "Developed an adversarial robustness training protocol that hardened detection models against evolving bot signatures, maintaining 95%+ detection efficacy across 3 major botnet evolution cycles.",
      "Collaborated with cross-functional teams to integrate fraud detection outputs into real-time bidding dashboards, giving advertisers granular visibility into traffic authenticity metrics.",
    ],
    techStack: [
      "Python",
      "TensorFlow",
      "Scikit-learn",
      "SQL",
      "Apache Spark",
      "AWS SageMaker",
      "MLflow",
      "Grafana",
    ],
  },
  {
    company: "Evolve Innovative Solutions",
    role: "Machine Learning Engineer",
    location: "Lahore, Pakistan",
    period: "Sep 2023 – Dec 2023",
    type: "Full Time",
    description:
      "Pioneered an automated multimedia-to-documentation framework that transformed procedural video content into structured, actionable documentation. Bridged computer vision and NLP to create an end-to-end pipeline democratizing knowledge extraction from visual media.",
    achievements: [
      "Engineered a novel ML framework combining video understanding (action segmentation, object detection) with NLG models to auto-generate step-by-step technical documents from raw procedural videos.",
      "Achieved BLEU score of 0.74 and ROUGE-L of 0.81 on generated documentation quality — outperforming existing benchmarks by 18% through custom attention mechanisms and domain-specific fine-tuning.",
      "Validated framework robustness through empirical evaluation across 6 diverse procedural domains (manufacturing, lab protocols, IT operations, medical procedures, cooking, assembly), demonstrating cross-domain generalization.",
      "Reduced documentation creation time from an average of 4 hours to 12 minutes per video, enabling rapid knowledge capture for enterprise training and compliance workflows.",
      "Published framework architecture and results in academic proceedings, contributing reproducible open-source tooling to the multimedia understanding research community.",
    ],
    techStack: [
      "Python",
      "PyTorch",
      "OpenCV",
      "HuggingFace Transformers",
      "T5",
      "Whisper",
      "Docker",
      "NLTK",
    ],
  },
];

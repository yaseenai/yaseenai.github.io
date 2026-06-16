export interface SkillGroup {
  category: string;
  icon: string;
  skills: {
    name: string;
    level: number; // 0-100
  }[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Core AI & Machine Learning",
    icon: "brain",
    skills: [
      { name: "PyTorch", level: 95 },
      { name: "TensorFlow / Keras", level: 90 },
      { name: "Scikit-learn", level: 92 },
      { name: "Deep Neural Networks", level: 95 },
      { name: "Transformers & Attention Mechanisms", level: 93 },
      { name: "Siamese Networks & Metric Learning", level: 88 },
      { name: "MLOps (MLflow, W&B, SageMaker)", level: 87 },
    ],
  },
  {
    category: "Computer Vision",
    icon: "eye",
    skills: [
      { name: "YOLOv5/v8/v10", level: 95 },
      { name: "OpenCV", level: 94 },
      { name: "Object Detection & Tracking", level: 93 },
      { name: "Image Segmentation", level: 88 },
      { name: "Feature Extraction & Matching", level: 90 },
      { name: "Video Analytics", level: 87 },
    ],
  },
  {
    category: "LLM & Generative AI",
    icon: "sparkles",
    skills: [
      { name: "LangChain / LlamaIndex", level: 92 },
      { name: "RAG Pipelines & Vector DBs", level: 91 },
      { name: "GPT / Claude / Gemini Integration", level: 94 },
      { name: "Prompt Engineering & Fine-Tuning", level: 90 },
      { name: "Stable Diffusion & ControlNet", level: 87 },
      { name: "LoRA & DreamBooth Fine-Tuning", level: 85 },
      { name: "Whisper STT / ElevenLabs TTS", level: 89 },
    ],
  },
  {
    category: "Backend & Infrastructure",
    icon: "server",
    skills: [
      { name: "Python (Expert)", level: 97 },
      { name: "FastAPI / Flask", level: 95 },
      { name: "PostgreSQL / Redis", level: 88 },
      { name: "Docker & Kubernetes", level: 85 },
      { name: "Apache Spark", level: 78 },
      { name: "AWS (SageMaker, EC2, S3, Lambda)", level: 84 },
      { name: "CI/CD Pipelines (GitHub Actions)", level: 86 },
    ],
  },
  {
    category: "Frontend & Mobile",
    icon: "layout",
    skills: [
      { name: "Next.js / React", level: 90 },
      { name: "TypeScript", level: 88 },
      { name: "React Native", level: 91 },
      { name: "Tailwind CSS", level: 92 },
      { name: "State Management (Zustand, Redux)", level: 85 },
    ],
  },
  {
    category: "IoT & Real-Time Systems",
    icon: "cpu",
    skills: [
      { name: "RFID / NFC Integration", level: 88 },
      { name: "MQTT & Real-Time Streams", level: 85 },
      { name: "Sensor Fusion", level: 82 },
      { name: "Embedded Systems Integration", level: 78 },
    ],
  },
];

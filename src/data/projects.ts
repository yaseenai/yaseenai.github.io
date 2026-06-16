export interface Project {
  slug: string;
  title: string;
  category: "ai-ml" | "full-stack" | "mobile" | "computer-vision" | "llm";
  shortDescription: string;
  description: string;
  techStack: string[];
  features: string[];
  impact?: string;
  year: string;
  image: string;
  links?: {
    github?: string;
    live?: string;
    paper?: string;
  };
}

export const projects: Project[] = [
  // 1
  {
    slug: "vehicle-visual-similarity-matching-engine",
    title: "Vehicle Visual Similarity & Matching Engine",
    category: "ai-ml",
    shortDescription:
      "Deep learning engine that matches vehicles across camera feeds using visual embeddings for toll fraud detection and smart city enforcement.",
    description:
      "An enterprise-grade AI system that accepts a base vehicle image and ranks multiple target images by visual similarity using deep neural embeddings. The engine extracts discriminative visual features through a Siamese network architecture, computing embedding distances to identify the same vehicle across different cameras, angles, and lighting conditions. Deployed as a production REST API handling thousands of comparison requests per minute for real-time toll fraud detection and smart city surveillance workflows.",
    techStack: [
      "Python",
      "PyTorch",
      "FastAPI",
      "Siamese Networks",
      "Vector Embeddings",
      "PostgreSQL",
      "Docker",
      "Redis",
    ],
    features: [
      "Siamese network with triplet loss for metric learning on vehicle re-identification",
      "Cosine similarity ranking across multi-angle vehicle crops with 94.2% top-1 accuracy",
      "Real-time REST API handling 2,000+ comparison requests per minute at <300ms latency",
      "Automated embedding index with FAISS for sub-linear nearest-neighbor search at scale",
      "Robust to partial occlusions, varying lighting, and cross-camera viewpoint changes",
      "Dockerized microservice architecture with horizontal scaling and health monitoring",
    ],
    impact:
      "Reduced manual vehicle verification time by 82% and identified 14,300+ toll evasion incidents in the first quarter of production deployment.",
    year: "2024",
    image: "/images/projects/vehicle-matching.jpg",
  },
  // 2
  {
    slug: "ai-call-center-voice-bot",
    title: "AI Call Center Voice Bot",
    category: "llm",
    shortDescription:
      "End-to-end voice AI pipeline — from curating 20K call recordings to deploying a live STT → classification → LLM → TTS voice bot.",
    description:
      "A complete end-to-end conversational voice AI system built entirely from scratch. Starting with the curation and cleaning of 20,000 real call recordings, the pipeline encompasses audio transcription using Whisper, intent classification using fine-tuned BERT-based models, LLM-powered response generation with domain-specific RAG, and neural TTS for lifelike voice output — all orchestrated into a real-time telephony system handling live customer calls autonomously.",
    techStack: [
      "Python",
      "Whisper STT",
      "LLMs (GPT-4, Claude)",
      "ElevenLabs TTS",
      "BERT",
      "FastAPI",
      "Twilio",
      "Redis",
    ],
    features: [
      "Curated and transcribed 20,000 real call recordings to build domain-specific training corpus",
      "Fine-tuned intent classifier achieving 96.8% accuracy across 47 intent categories",
      "RAG-augmented LLM pipeline with vector-store-backed knowledge retrieval for factual grounding",
      "Neural TTS with emotion modulation and natural prosody for lifelike voice responses",
      "Real-time telephony integration via Twilio handling concurrent calls with <800ms total round-trip",
      "Conversation analytics dashboard tracking resolution rate, sentiment, and escalation triggers",
    ],
    impact:
      "Autonomously resolved 73% of inbound customer inquiries without human intervention, reducing support staffing costs by 61%.",
    year: "2024",
    image: "/images/projects/voice-bot.jpg",
  },
  // 3
  {
    slug: "smart-cities-ai-monitoring-platform",
    title: "Smart Cities AI Monitoring Platform",
    category: "computer-vision",
    shortDescription:
      "City-wide real-time AI surveillance platform integrating camera feeds and IoT sensors for anomaly detection, traffic monitoring, and security incident response.",
    description:
      "A large-scale AI analytics platform that ingests hundreds of city-wide camera feeds and thousands of IoT sensor streams in real time. The system detects traffic anomalies, crowd density spikes, security breaches, and infrastructure faults — presenting all insights through a unified command-center dashboard. Edge AI modules perform on-device inference to minimize bandwidth, while centralized GPU clusters handle complex cross-camera event correlation and long-term trend analysis.",
    techStack: [
      "Python",
      "YOLOv8",
      "React Dashboard",
      "OpenCV",
      "MQTT",
      "Apache Kafka",
      "PostgreSQL",
      "Docker Swarm",
    ],
    features: [
      "Real-time multi-camera object detection and tracking across 200+ concurrent streams",
      "Edge AI inference on Jetson devices reducing cloud bandwidth requirements by 78%",
      "Anomaly detection engine flagging traffic violations, crowd surges, and unauthorized access",
      "Unified React command dashboard with live heatmaps, event timelines, and camera grids",
      "IoT sensor fusion correlating environmental data (noise, air quality, motion) with visual feeds",
      "Automated alert routing with severity-based escalation to law enforcement and city operators",
    ],
    impact:
      "Reduced incident response time by 64% and enabled proactive intervention for 1,200+ traffic anomalies per day across monitored zones.",
    year: "2024",
    image: "/images/projects/smart-city.jpg",
  },
  // 4
  {
    slug: "hrms-role-aware-ai-chatbot",
    title: "HRMS Role-Aware AI Chatbot",
    category: "llm",
    shortDescription:
      "Enterprise-grade HR chatbot with granular RBAC — dynamically scopes LLM responses based on the authenticated user's organizational clearance level.",
    description:
      "A sophisticated enterprise HR assistant built on a RAG architecture with role-based access control deeply integrated into the LLM response pipeline. When a C-suite executive queries organizational data, the chatbot provides comprehensive insights across departments. When a junior staff member asks the same question, the response is dynamically scoped to their clearance tier — leveraging a permission-aware retrieval layer that filters knowledge base vectors based on the user's role attributes before generation.",
    techStack: [
      "Next.js",
      "Python FastAPI",
      "LangChain",
      "ChromaDB",
      "GPT-4",
      "RBAC Middleware",
      "PostgreSQL",
      "JWT Auth",
    ],
    features: [
      "Role-aware RAG pipeline that filters vector retrieval results based on user clearance level",
      "Hierarchical RBAC with 6 permission tiers (Admin, C-Suite, Manager, Team Lead, Employee, Intern)",
      "Streaming LLM responses with real-time token generation and source attribution",
      "Self-auditing answer validation that detects and redacts unauthorized information leakage",
      "Conversation memory scoped per user with automatic data isolation across departments",
      "Admin dashboard for monitoring query patterns, permission audit trails, and usage analytics",
    ],
    impact:
      "Eliminated HR ticket backlog by responding to 92% of employee queries autonomously while maintaining zero privilege-escalation incidents in security audits.",
    year: "2024",
    image: "/images/projects/hrms-chatbot.jpg",
  },
  // 5
  {
    slug: "toll-plaza-mtag-automation",
    title: "Toll Plaza MTag Automation System",
    category: "full-stack",
    shortDescription:
      "Fully automated, contactless toll collection system using RFID readers at plaza entry points with real-time fee deduction and barrier control.",
    description:
      "An end-to-end automated toll collection system that eliminates manual toll booths entirely. MTag RFID readers installed at plaza entry and exit points instantly identify approaching vehicles, cross-reference their accounts, deduct applicable toll fees in real time, and trigger barrier control signals — all within 500ms. The system includes a web dashboard for operators, a mobile app for users to recharge MTag accounts, and comprehensive reporting for revenue reconciliation.",
    techStack: [
      "Python",
      "FastAPI",
      "React Dashboard",
      "RFID / IoT",
      "PostgreSQL",
      "Payment API Gateway",
      "MQTT",
      "Redis",
    ],
    features: [
      "Sub-500ms RFID read → account lookup → fee deduction → barrier trigger pipeline",
      "Real-time React operator dashboard with live throughput metrics and revenue tracking",
      "Automated failure fallback: camera-based ANPR as secondary identification when RFID fails",
      "User mobile portal for MTag balance top-up, transaction history, and vehicle registration",
      "Multi-lane concurrency handling 40+ vehicles per minute per plaza without race conditions",
      "Daily automated reconciliation reports with bank settlement matching and discrepancy alerts",
    ],
    impact:
      "Reduced average vehicle processing time from 45 seconds (manual) to under 0.5 seconds (automated), eliminating plaza congestion entirely.",
    year: "2024",
    image: "/images/projects/toll-mtag.jpg",
  },
  // 6
  {
    slug: "imagine-short-ai-media-generator",
    title: "Imagine Short — AI Photo & Video Generator",
    category: "mobile",
    shortDescription:
      "Generative AI creative studio for mobile — text-to-image and text-to-video with style presets, aspect ratio controls, and social sharing integration.",
    description:
      "A mobile creative powerhouse that puts state-of-the-art generative AI at users' fingertips. Type a prompt and generate stunning photos or short-form video clips using Stable Diffusion and video generation models running on cloud GPUs. The app features 50+ curated style presets (cinematic, anime, oil painting, cyberpunk, etc.), precise aspect ratio controls for Instagram/YouTube/TikTok, and one-tap sharing to social platforms with optimized media encoding.",
    techStack: [
      "React Native",
      "Stable Diffusion API",
      "Video Gen APIs",
      "Cloud GPU (RunPod)",
      "Redux Toolkit",
      "Firebase",
      "RevenueCat",
    ],
    features: [
      "Text-to-image generation with 50+ style presets and negative prompt refinement",
      "Short-form video generation from text prompts with keyframe interpolation",
      "Aspect ratio controls optimized for Instagram (1:1, 4:5), YouTube (16:9), TikTok (9:16)",
      "Batch generation queue with background processing and push notification completion alerts",
      "In-app gallery with favorites, collections, and direct share to social media platforms",
      "Freemium monetization with credit packs and subscription tiers via RevenueCat",
    ],
    impact:
      "Achieved 50K+ downloads in first 3 months with 4.6★ rating and 32% week-1 retention rate.",
    year: "2023",
    image: "/images/projects/imagine-short.jpg",
  },
  // 7
  {
    slug: "smart-automated-car-parking-system",
    title: "Smart Automated Car Parking System",
    category: "full-stack",
    shortDescription:
      "End-to-end automated parking infrastructure with RFID vehicle detection, real-time slot management, automated billing, and contactless payment processing.",
    description:
      "A fully automated parking management solution that replaces human attendants with an integrated IoT + software system. MTag RFID readers detect vehicle entry and exit, ultrasonic parking sensors monitor slot occupancy in real time, and a central server handles automated fee calculation and contactless deduction from linked accounts. The system includes a React dashboard for facility managers showing live occupancy heatmaps, revenue analytics, and anomaly alerts, plus a mobile app for drivers to find, reserve, and pay for parking spots.",
    techStack: [
      "Python",
      "FastAPI",
      "React Dashboard",
      "PostgreSQL",
      "IoT / RFID",
      "MQTT",
      "Redis",
      "Docker",
    ],
    features: [
      "Dual RFID + ultrasonic sensor validation eliminating false occupancy readings",
      "Real-time slot availability map with color-coded occupancy visualization",
      "Automated tiered pricing engine with peak/off-peak rates, duration caps, and loyalty discounts",
      "Contactless payment deduction from MTag wallet with instant SMS/email receipts",
      "Anomaly detection for overstay vehicles, sensor failures, and payment exceptions",
      "Historical analytics dashboard with utilization trends, revenue forecasting, and peak hour predictions",
    ],
    impact:
      "Increased parking throughput by 3.2x and eliminated revenue leakage from manual collection errors, recovering an estimated 18% in previously lost fees.",
    year: "2024",
    image: "/images/projects/smart-parking.jpg",
  },
  // 8
  {
    slug: "transfer-my-data-phone-clone",
    title: "Transfer My Data — Phone Clone App",
    category: "mobile",
    shortDescription:
      "Cross-platform data migration app for seamless device-to-device transfer of contacts, media, apps, and settings over encrypted local Wi-Fi Direct — no cloud needed.",
    description:
      "A high-performance cross-platform mobile application enabling complete device-to-device data migration without cloud intermediaries. The app establishes a secure local Wi-Fi Direct connection between Android and iOS devices, then transfers contacts, SMS messages, call logs, photos, videos, music, installed apps (with APK/IPA bundles), calendar entries, and system settings. AES-256 encryption protects data in transit, with transfer speeds exceeding 80 Mbps on modern devices — cloning a full 64GB device in under 90 minutes.",
    techStack: [
      "React Native",
      "Wi-Fi Direct",
      "Android APIs",
      "iOS APIs",
      "AES-256",
      "SQLite",
      "FFmpeg",
    ],
    features: [
      "Cross-platform migration: Android ↔ Android, Android ↔ iOS, iOS ↔ iOS",
      "Wi-Fi Direct P2P connection achieving 80+ Mbps transfer speeds without router dependency",
      "AES-256 encryption on all transferred data with integrity hash verification",
      "Selective transfer: granular control to pick specific categories (contacts only, photos only, etc.)",
      "Resumable transfers with checkpoint recovery after connection drops or app backgrounding",
      "Pre-transfer device analysis estimating total data size and projected transfer duration",
    ],
    impact:
      "Facilitated 200K+ successful device migrations with 4.4★ rating and 91% transfer completion rate.",
    year: "2023",
    image: "/images/projects/phone-clone.jpg",
  },
  // 9
  {
    slug: "ai-wardrobe-smart-outfit-maker",
    title: "AI Wardrobe — Smart Outfit Maker",
    category: "mobile",
    shortDescription:
      "AI-powered personal stylist that digitizes wardrobe items, generates outfit combinations, and enables virtual try-on with AR — powered by computer vision and generative AI.",
    description:
      "A personal AI fashion stylist that transforms how users interact with their wardrobe. Users photograph their clothing items, and the app automatically segments and categorizes each piece using computer vision. The AI stylist then generates curated outfit combinations based on occasion, weather, color theory, and personal style preferences. An AR virtual try-on module overlays outfits onto the user's live camera feed, and the integrated shopping engine recommends new items to fill wardrobe gaps — creating a complete fashion ecosystem.",
    techStack: [
      "React Native",
      "TensorFlow Lite",
      "Stable Diffusion",
      "ARKit / ARCore",
      "OpenCV",
      "Firebase",
      "Weather API",
    ],
    features: [
      "AI-powered clothing digitization: auto-segment, classify, and catalog items from photos",
      "Outfit generation engine using color harmony algorithms, occasion matching, and weather context",
      "AR virtual try-on with real-time cloth draping simulation and pose adaptation",
      "Smart wardrobe analytics: most/least worn items, cost-per-wear, style distribution charts",
      "Shopping integration recommending new items to complete outfits based on wardrobe gaps",
      "Social sharing of outfit-of-the-day with AI-generated styling notes and tag suggestions",
    ],
    impact:
      "Generated over 1.2M outfit combinations for active users with 38% reporting reduced clothing overspending.",
    year: "2023",
    image: "/images/projects/ai-wardrobe.jpg",
  },
  // 10
  {
    slug: "multi-disease-prediction-system",
    title: "Multi-Disease Prediction Using ML & DL",
    category: "ai-ml",
    shortDescription:
      "Published research: comparative analysis of machine learning and deep learning models for simultaneous prediction of multiple diseases from patient health data.",
    description:
      "A research-grade multi-disease prediction system that simultaneously assesses risk for diabetes, cardiovascular disease, chronic kidney disease, and liver disorder from a unified patient health dataset. The system implements and rigorously compares 8 machine learning algorithms (Random Forest, XGBoost, SVM, Logistic Regression, KNN, Naive Bayes, Decision Tree, Gradient Boosting) against 3 deep learning architectures (MLP, CNN-1D, TabNet) across metrics including accuracy, precision, recall, F1-score, and AUC-ROC. The ensemble model combining XGBoost and TabNet achieved state-of-the-art performance, published in a peer-reviewed journal.",
    techStack: [
      "Python",
      "Scikit-learn",
      "TensorFlow",
      "XGBoost",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Jupyter",
    ],
    features: [
      "Multi-label classification predicting 4 diseases simultaneously from 132 clinical features",
      "8 ML + 3 DL models compared across 6 evaluation metrics with statistical significance testing",
      "XGBoost + TabNet ensemble achieving 96.4% accuracy and 0.98 AUC-ROC on held-out test set",
      "SHAP-based explainability layer providing feature importance explanations for each prediction",
      "Interactive Streamlit dashboard for clinicians to input patient data and receive risk assessments",
      "Peer-reviewed publication with reproducible codebase and documented methodology",
    ],
    impact:
      "Published in a peer-reviewed journal (DOI: 10.71146/kjmr176), with the open-source implementation serving as a reference benchmark for multi-disease classification research.",
    year: "2023",
    image: "/images/projects/multi-disease.jpg",
    links: {
      paper: "https://doi.org/10.71146/kjmr176",
    },
  },
];

export const featuredProjects = projects.slice(0, 4);

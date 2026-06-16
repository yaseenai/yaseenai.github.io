export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  cgpa: string;
  paper?: {
    title: string;
    url: string;
  };
  achievements: string[];
}

export const education: Education[] = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Malakand",
    location: "Khyber Pakhtunkhwa, Pakistan",
    period: "2019-09 – 2023-08",
    cgpa: "3.73 / 4.00",
    paper: {
      title: "Multi-Disease Prediction Using Machine Learning and Deep Learning Models",
      url: "https://doi.org/10.71146/kjmr176",
    },
    achievements: [
      "Led the complete technical product lifecycle — from requirements gathering and dataset curation to model training, API design, and cloud deployment — for complex AI applications.",
      "Built robust computer vision systems using YOLO and Deep Learning frameworks for automated infrastructure monitoring and real-time object detection.",
      "Developed AI-driven conversational bots integrating LLMs into enterprise support systems, managing end-to-end NLP pipelines including intent classification and response generation.",
      "Authored and published a peer-reviewed research paper on multi-disease prediction, demonstrating expertise in comparative ML/DL model evaluation and scientific communication.",
    ],
  },
];

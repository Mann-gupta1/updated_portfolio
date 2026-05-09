"use client";

import React from "react";
import WordAnimation from "@/components/UI/WordAnimation";

const stack = {
  "Cloud & Infrastructure": ["AWS (EKS, EC2, S3)", "Docker", "Kubernetes", "CI/CD", "Prometheus", "Grafana"],
  "AI & Data": ["RAG Pipelines", "LangChain", "Embeddings", "Semantic Search", "pgvector", "Redis"],
  "Backend & Systems": ["Python", "Go", "Django", "Node.js", "FastAPI", "WebRTC", "WebSockets"],
  "Languages": ["Python", "C++", "Java", "JavaScript", "Go"],
};

export default function TechStackSection() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
      <WordAnimation
        text="Tech Stack"
        className="text-sec text-2xl sm:text-3xl md:text-4xl font-cabinetGrotesk font-bold mb-10"
        trigger=".techstack-section"
        start="top 90%"
        stagger={0.03}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {Object.entries(stack).map(([category, techs]) => (
          <div key={category}>
            <h3 className="font-cabinetGrotesk font-semibold text-sm uppercase tracking-wider text-black/70 mb-3">
              {category}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {techs.map((tech) => (
                <li
                  key={tech}
                  className="px-3 py-1.5 rounded-full bg-black text-white text-sm font-medium"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

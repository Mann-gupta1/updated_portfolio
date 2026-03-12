"use client";

import React from "react";
import WordAnimation from "@/components/UI/WordAnimation";

const experiments = [
  {
    title: "LLM Evaluation Pipeline",
    description: "Testing hallucination rates using curated support queries.",
  },
  {
    title: "Kubernetes Scaling Tests",
    description: "Experimented with autoscaling behavior under simulated load.",
  },
];

export default function ExperimentsSection() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
      <WordAnimation
        text="Experiments / Lab"
        className="text-sec text-2xl sm:text-3xl md:text-4xl font-cabinetGrotesk font-bold mb-10"
        trigger=".experiments-section"
        start="top 90%"
        stagger={0.03}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {experiments.map((exp, i) => (
          <div
            key={i}
            className="p-6 rounded-xl border border-black/10 bg-white/50 hover:bg-white/80 transition-colors"
          >
            <h3 className="font-cabinetGrotesk font-semibold text-lg md:text-xl text-black mb-2">
              {exp.title}
            </h3>
            <p className="text-black/70 text-sm md:text-base leading-relaxed">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

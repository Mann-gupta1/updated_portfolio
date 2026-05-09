"use client";

import React, { useEffect, useRef } from "react";
import LogoWithText from "../../componet/UI/LogoWithText";
import Navbar from "../../componet/Navbar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ana from "../../assest/Images/about/mannz-about-me.png";
import SlidingBars from "../../componet/Home/SlidingBars";
import GrayLine from "../../componet/UI/GrayLine";
import Footer from "../../componet/Footer/Footer";
import Curve from "../../componet/UI/NavCurve";
import SplitType from "split-type";
import CustomEase from "gsap/dist/CustomEase";
import Image from "next/image";
import WordAnimation from "@/components/UI/WordAnimation";

function Index() {
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const statsRef = useRef(null);

  const Data = [
    {
      skill: "Distributed Systems",
      p: "I design and ship distributed backend systems with fault-tolerant execution, queue-based orchestration, and async processing. My focus is predictable behavior under load, safe retry strategies, and reliable runtime operations.",
    },
    {
      skill: "RAG & AI Platforms",
      p: "I build production-oriented AI systems including semantic chunking, embedding pipelines, hybrid search, and LLM application workflows. I prioritize measurable quality improvements through retrieval relevance, latency optimization, and system-level observability.",
    },
    {
      skill: "Real-time SaaS Engineering",
      p: "I architect multi-tenant SaaS products with strict RBAC boundaries, secure tenant data isolation, and real-time features like live classes and collaborative workflows. I own delivery end-to-end from architecture to production hardening.",
    },
  ];

  const impactMetrics = [
    {
      number: "40%",
      label: "Performance Improvement",
      description: "Reduced AI response latency through optimized RAG retrieval and concurrency patterns",
    },
    {
      number: "80%",
      label: "Workflow Automation",
      description: "Decreased manual lead processing time with background job automation",
    },
    {
      number: "10+",
      label: "Production Applications",
      description: "Successfully deployed and maintained across various industries",
    },
    {
      number: "100%",
      label: "Type-Safe Architecture",
      description: "End-to-end type safety with TypeScript, tRPC, and modern tooling",
    },
  ];

  const techCategories = [
    {
      category: "Cloud & Infrastructure",
      techs: ["AWS (EKS, EC2, S3)", "Docker", "Kubernetes", "CI/CD", "Prometheus", "Grafana"],
    },
    {
      category: "AI & Data",
      techs: ["RAG Pipelines", "LangChain", "Embeddings", "Semantic Search", "pgvector", "Redis"],
    },
    {
      category: "Backend Development",
      techs: ["Django", "Node.js", "FastAPI", "REST APIs", "Async Processing", "WebSockets", "WebRTC"],
    },
    {
      category: "Programming Languages",
      techs: ["Python", "C++", "Java", "JavaScript", "Go"],
    },
    {
      category: "Databases",
      techs: ["PostgreSQL", "pgvector", "Redis"],
    },
    {
      category: "Highlights",
      techs: ["DAG Engines", "Hybrid Retrieval", "Tenant Isolation", "Observability", "Cost Optimization"],
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  gsap.registerPlugin(CustomEase, ScrollTrigger);

  useEffect(() => {
    gsap.to(imageRef.current, {
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
      y: "25%",
      scale: 1.1,
      ease: "none",
    });
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".item",
      { y: 150 },
      {
        y: 0,
        delay: 0.7,
        duration: 0.4,
        stagger: 0.05,
        ease: "power1.out",
      }
    );

    gsap.to(".About_item", {
      scrollTrigger: {
        trigger: ".About_item",
        start: "top bottom",
        scrub: true,
      },
      y: -50,
      opacity: 1,
      stagger: 0.02,
      ease: "power3.inOut",
      duration: 0.5,
    });
  }, []);

  return (
    <Curve>
      <div className="aboutMe pb-44 overflow-hidden">
        <Navbar />

        {/* Hero Section */}
        <div className="item pt-20 px-[0.8rem] md:px-[2rem] flex md:flex-row gap-7 flex-col justify-between relative">
          <div className="pt-12 pb-7">
            <WordAnimation
              className="works-title text-5xl md:text-6xl lg:text-8xl font-cabinetGrotesk leading-tight text-black"
              stagger={0.05}
              delay={1}
              once={true}
              text="About Me"
            />

            <div className="text-lg md:text-xl text-gray-600 leading-relaxed font-cabinetGrotesk max-w-5xl mt-6">
              <WordAnimation
                delay={1}
                stagger={0.01}
                once={true}
                text="Backend and AI engineer delivering systems end-to-end: from workflow engines and retrieval-based AI platforms to real-time multi-tenant SaaS. I focus on production reliability, performance, and measurable business outcomes."
              />
            </div>
          </div>
          <div className="lg:flex hidden md:w-fit w-full items-end justify-end mb-10 mr-10">
            <LogoWithText style={"md:scale-[1.4] scale-100"} isBlack={true} />
          </div>
        </div>

        {/* Main Content with Image */}
        <div className="h-auto md:h-[100vh] item flex md:flex-row flex-col w-full font-cabinetGrotesk gap-10 pt-10 md:text-lg text-base md:px-[2rem] px-[1rem]">
          <div className="w-full md:w-[50%] text-lg md:text-xl text-gray-600 leading-relaxed font-cabinetGrotesk">
            <WordAnimation
              once={true}
              stagger={0.01}
              className="w-full"
              text="I build backend-heavy products that need to run reliably at scale. My work includes distributed DAG execution, semantic retrieval systems for large document corpora, and secure multi-tenant product architectures."
            />
            <br />
            <br />
            <WordAnimation
              once={true}
              stagger={0.01}
              delay={0.2}
              className="w-full"
              text="I have owned production systems in fast-moving environments, including EKS migration for 15+ microservices, autoscaling initiatives that reduced cloud spend by ~50%, and observability setups that improved incident response speed."
            />
            <br />
            <br />
            <WordAnimation
              once={true}
              stagger={0.01}
              delay={0.4}
              className="w-full"
              text="I work comfortably across backend systems, AI integrations, and infrastructure operations. The goal is always the same: ship robust products with clear technical quality and measurable user impact."
            />
          </div>
          <div className="relative overflow-hidden h-[60vh] md:h-[100vh] object-cover w-full md:w-[50%] rounded-md">
            <Image
              src={ana.src}
              ref={imageRef}
              quality={100}
              layout="fill"
              objectFit="cover"
              className="scale-125 absolute top-0 right-0 w-full h-full"
              placeholder="blur"
              blurDataURL="/path-to-small-blurry-image.jpg"
            />
          </div>
        </div>

        {/* Three Column Section */}
        <div className="pt-[3rem] md:pt-[10rem] text-gray-800 md:px-[2rem] px-[1rem] grid md:grid-cols-3 grid-cols-1 flex-col gap-[2rem] lg:gap-[8rem]">
          {Data.map((item, index) => (
            <div key={index} className="font-cabinetGrotesk flex flex-col gap-3">
              <div className="flex gap-1 flex-col">
                0{index + 1}
                <GrayLine />
              </div>
              <h1 className="md:text-[1.5rem] text-[1.3rem] font-cabinetGrotesk font-semibold">
                <WordAnimation
                  className="md:text-[1.5rem] text-[1.3rem] font-cabinetGrotesk font-semibold"
                  delay={0.01}
                  once={true}
                  stagger={0.01}
                  text={item.skill}
                />
              </h1>
              <WordAnimation
                className="text-base md:text-lg text-gray-600 leading-relaxed font-cabinetGrotesk"
                delay={0.01}
                stagger={0.01}
                once={true}
                text={item.p}
              />
            </div>
          ))}
        </div>

        {/* Impact Metrics Section */}
        {/* <div className="stats-section pt-[5rem] md:pt-[12rem] md:px-[2rem] px-[1rem]">
          <div className="text-center mb-16">
            <WordAnimation
              className="text-2xl md:text-4xl font-cabinetGrotesk font-bold text-black mb-4"
              stagger={0.02}
              once={true}
              text="Proven Impact"
            />
            <WordAnimation
              className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-cabinetGrotesk"
              stagger={0.01}
              once={true}
              text="Throughout my career, I've delivered measurable results that matter"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
              <div
                key={index}
                className="bg-black text-white p-8 rounded-lg hover:scale-105 transition-transform duration-300 opacity-100"
              >
                <WordAnimation
                  className="text-5xl md:text-6xl font-bold font-cabinetGrotesk mb-3"
                  stagger={0.05}
                  once={true}
                  text={metric.number}
                />
                <WordAnimation
                  className="text-xl font-semibold mb-3 font-cabinetGrotesk"
                  stagger={0.02}
                  once={true}
                  text={metric.label}
                />
                <WordAnimation
                  className="text-sm text-gray-300 font-cabinetGrotesk leading-relaxed"
                  stagger={0.01}
                  once={true}
                  text={metric.description}
                />
              </div>
            ))}
          </div>
        </div> */}

        {/* Technology Arsenal Section */}
        <div className="tech-section pt-[5rem] md:pt-[12rem] md:px-[2rem] px-[1rem]">
          <div className="text-center mb-16">
            <WordAnimation
              className="text-2xl md:text-4xl font-cabinetGrotesk font-bold text-black mb-4"
              stagger={0.02}
              once={true}
              text="Technology Arsenal"
            />
            <WordAnimation
              className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto font-cabinetGrotesk"
              stagger={0.01}
              once={true}
              text="A comprehensive toolkit for building modern, scalable applications"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {techCategories.map((category, index) => (
              <div key={index} className="tech-category opacity-100">
                <WordAnimation
                  className="text-2xl font-bold font-cabinetGrotesk mb-6 text-black"
                  stagger={0.02}
                  once={true}
                  text={category.category}
                />
                <div className="flex flex-wrap gap-3">
                  {category.techs.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-cabinetGrotesk hover:bg-black hover:text-white transition-colors duration-300 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="pt-[5rem] md:pt-[12rem] md:px-[2rem] px-[1rem]">
          <div className="bg-black text-white p-12 md:p-16 rounded-2xl text-center">
            <WordAnimation
              className="text-2xl md:text-4xl font-cabinetGrotesk font-bold mb-6"
              stagger={0.02}
              once={true}
              text="Ready to Build Something Exceptional?"
            />
            <WordAnimation
              className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto font-cabinetGrotesk leading-relaxed"
              stagger={0.01}
              once={true}
              text="Whether you need an AI-powered SaaS platform, an immersive 3D experience, or a high-performance web application, I bring the technical expertise and creative vision to make it happen. Let's discuss how we can turn your ambitious ideas into production-ready solutions that drive real business results."
            />
          </div>
        </div>

        <SlidingBars />
      </div>
      <Footer />
    </Curve>
  );
}

export default Index;
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
import SEO from "@/componet/SEO/Seo";

function Index() {
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const statsRef = useRef(null);

  const Data = [
    {
      skill: "AI Product Ownership",
      p: "I own AI products from problem framing to shipped spec: user research, persona definition, and requirements engineering can build. I chose a confidence-gated LLM agent with human escalation over full automation to protect brand voice on high-intent conversations, and removed roughly 70% of manual reply volume.",
    },
    {
      skill: "Pricing & Unit Economics",
      p: "I model AI cost per user before launch rather than after the first invoice. I priced three revenue lines denominated in AI replies instead of tokens, with a bundled allowance and stackable top-ups, so gross margin per account stays flat as usage grows. I rejected bring-your-own-key after research showed the segment will not manage API credentials.",
    },
    {
      skill: "Strategy & Analysis",
      p: "I write recommendations the way an engagement does: bottom-up market sizing, three-scenario P&L, CAC and payback modelling, and competitive benchmarking. Every call names the alternative I rejected and the one assumption that would reverse it.",
    },
  ];

  // These must match the resume and the rest of the site exactly. This block used
  // to claim "80% Workflow Automation" while the resume said 70% for the same work,
  // and "100% Type-Safe Architecture", which is a tooling choice rather than an
  // outcome. Mismatched numbers across a portfolio and CV are a credibility problem
  // the moment an interviewer has both open.
  const impactMetrics = [
    {
      number: "70%",
      label: "Company Spend Cut",
      description: "Audited every line item as budget owner, retired idle services, then held the new baseline",
    },
    {
      number: "70%",
      label: "Manual Work Removed",
      description: "Confidence-gated LLM agent cut lead first-response from hours to seconds",
    },
    {
      number: "3",
      label: "Products Owned 0 to 1",
      description: "AI messaging platform, internal CRM, and a four-persona marketplace",
    },
    {
      number: "4.35%",
      label: "Top on LeetCode",
      description: "Globally, max rating 1976, across data structures, algorithms, and contests",
    },
  ];

  // Product and strategy lead deliberately. The engineering stack stays below as
  // supporting evidence, because "I can build it" is the differentiator against
  // other PM candidates, not the headline.
  const techCategories = [
    {
      category: "Product",
      techs: ["Product Strategy", "Roadmapping", "Scope Definition", "Prioritisation", "PRD Writing", "Launch Planning", "Metrics Definition"],
    },
    {
      category: "Pricing & Economics",
      techs: ["Pricing and Packaging", "Unit Economics", "Token and Cost Economics", "Monetisation", "Willingness to Pay Research"],
    },
    {
      category: "Strategy & Analysis",
      techs: ["Structured Problem Solving", "Hypothesis-Driven Analysis", "Market Sizing (TAM/SAM/SOM)", "Market Entry", "Profitability Analysis", "Scenario P&L", "Porter's Five Forces", "Competitive Benchmarking"],
    },
    {
      category: "AI & Data",
      techs: ["LLM Agents", "Human-in-the-Loop Design", "RAG Pipelines", "Embeddings", "Semantic Search", "LLM Evaluation & Observability", "pgvector"],
    },
    {
      category: "Cloud & Infrastructure",
      techs: ["AWS (EKS, EC2, S3)", "Docker", "Kubernetes", "CI/CD", "Prometheus", "Grafana"],
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
      <SEO
        title="About | Mann Gupta — AI Product Manager"
        description="AI Product Manager owning products end to end: AI product ownership, pricing and unit economics, and strategy analysis. Cut company spend 70% and removed 70% of manual lead-response work."
        url="https://gmannn.netlify.app/about-me"
        keywords="AI Product Manager, product owner, pricing strategy, unit economics, market sizing, product strategy, Mann Gupta"
      />
      <div className="aboutMe pb-44 overflow-hidden">
        <Navbar />

        {/* Hero Section */}
        <div className="item pt-20 px-[0.8rem] md:px-[2rem] flex md:flex-row gap-7 flex-col justify-between relative">
          <div className="pt-12 pb-7">
            {/* tag="h1": the only H1s on this page were the three pillar cards
                and the footer links, so there was no single primary heading. */}
            <WordAnimation
              tag="h1"
              className="works-title text-5xl md:text-6xl lg:text-8xl font-cabinetGrotesk leading-tight text-black"
              stagger={0.05}
              delay={1}
              once={true}
              text="AI Product Manager"
            />

            <div className="text-lg md:text-xl text-gray-600 leading-relaxed font-cabinetGrotesk max-w-5xl mt-6">
              <WordAnimation
                delay={1}
                stagger={0.01}
                once={true}
                text="AI Product Manager owning products end to end: discovery, pricing, scope, and the shipped software. Founding product owner across three products, with every call backed by a number and the assumption that would reverse it."
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
              text="I am an AI product manager who owns products end to end. I write the spec, price the tier, model the AI cost per user, and then ship it, which is why my roadmaps land with engineering instead of arriving as wishes."
            />
            <br />
            <br />
            <WordAnimation
              once={true}
              stagger={0.01}
              delay={0.2}
              className="w-full"
              text="As a founding team member at Acceltancy I own roadmap, pricing, and launch scope across three products. I cut company cloud and vendor spend by 70% as budget owner, and removed roughly 70% of manual lead-response work with a human-in-the-loop LLM agent."
            />
            <br />
            <br />
            <WordAnimation
              once={true}
              stagger={0.01}
              delay={0.4}
              className="w-full"
              text="Before that I shipped production systems at WorkIndia and ITC Infotech, so I know what an estimate costs. The goal is always the same: a decision with a number behind it, and the one assumption that would reverse it stated out loud."
            />
          </div>
          {/* blurDataURL is an inline data URI, not "/path-to-small-blurry-image.jpg" —
              that was a leftover placeholder path that 404'd on every visit to this
              page. A 1x1 grey pixel is all a blur placeholder needs, and inlining it
              costs no request. */}
          <div className="relative overflow-hidden h-[60vh] md:h-[100vh] object-cover w-full md:w-[50%] rounded-md">
            <Image
              src={ana.src}
              ref={imageRef}
              quality={100}
              layout="fill"
              objectFit="cover"
              className="scale-125 absolute top-0 right-0 w-full h-full"
              alt="Mann Gupta, AI Product Manager"
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNkOWQ5ZDkiLz48L3N2Zz4="
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
              {/* h2, not h1: these are the three pillars beneath the page title. */}
              <h2 className="md:text-[1.5rem] text-[1.3rem] font-cabinetGrotesk font-semibold">
                <WordAnimation
                  className="md:text-[1.5rem] text-[1.3rem] font-cabinetGrotesk font-semibold"
                  delay={0.01}
                  once={true}
                  stagger={0.01}
                  text={item.skill}
                />
              </h2>
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

        {/* Impact Metrics Section — was commented out, so the four strongest
            numbers on the page never rendered. Re-enabled now that they match the
            resume exactly. The old subheading ("delivered measurable results that
            matter") was filler; replaced with what a reviewer actually wants to know. */}
        <div className="stats-section pt-[5rem] md:pt-[12rem] md:px-[2rem] px-[1rem]">
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
              text="Four numbers I can walk you through line by line, including how they were measured."
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
              /* Plain elements, not WordAnimation. Each WordAnimation builds a GSAP
                 timeline plus a ScrollTrigger; 4 cards x 3 of them was 12 extra
                 scroll listeners on this page alone and the single biggest reason
                 total blocking time here hit 1,310 ms. A per-word reveal also adds
                 nothing to a two-character number like "3". */
              <div
                key={index}
                className="bg-black text-white p-8 rounded-lg hover:scale-105 transition-transform duration-300 opacity-100"
              >
                <p className="text-5xl md:text-6xl font-bold font-cabinetGrotesk mb-3 tabular-nums">
                  {metric.number}
                </p>
                <p className="text-xl font-semibold mb-3 font-cabinetGrotesk">
                  {metric.label}
                </p>
                <p className="text-sm text-gray-200 font-cabinetGrotesk leading-relaxed">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Arsenal Section */}
        <div className="tech-section pt-[5rem] md:pt-[12rem] md:px-[2rem] px-[1rem]">
          <div className="text-center mb-16">
            <WordAnimation
              className="text-2xl md:text-4xl font-cabinetGrotesk font-bold text-black mb-4"
              stagger={0.02}
              once={true}
              text="Product, Strategy & Stack"
            />
            <WordAnimation
              className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto font-cabinetGrotesk"
              stagger={0.01}
              once={true}
              text="Product and strategy lead here. The engineering stack sits below as supporting evidence, because being able to build it is the differentiator, not the headline."
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {techCategories.map((category, index) => (
              <div key={index} className="tech-category opacity-100">
                {/* Plain h3: was a WordAnimation, i.e. one more ScrollTrigger per
                    category (6 of them) for a two-word heading. */}
                <h3 className="text-2xl font-bold font-cabinetGrotesk mb-6 text-black">
                  {category.category}
                </h3>
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
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
      skill: "Full-Stack Architecture",
      p: "I architect end-to-end solutions using modern tech stacks—from Node.js backends with PostgreSQL/MongoDB to React and Next.js frontends. Whether building multi-tenant SaaS platforms, real-time dashboards with WebSockets, or RESTful APIs with tRPC, I ensure type-safe, scalable architecture that supports rapid growth and seamless deployment.",
    },
    {
      skill: "AI & Advanced Integration",
      p: "I specialize in integrating AI capabilities that deliver real value—implementing RAG systems with vector embeddings, building LangChain workflows, and connecting OpenAI APIs for intelligent automation. Beyond AI, I excel at complex integrations: Stripe/PayPal payment processing, Auth0 authentication, real-time Firebase notifications, and third-party API orchestration that powers sophisticated business logic.",
    },
    {
      skill: "3D & Interactive Experiences",
      p: "I create immersive web experiences using Three.js, React Three Fiber, and advanced techniques like Gaussian Splatting. From interactive 3D virtual tours to shader-based animations with GSAP, I transform standard websites into engaging, memorable digital experiences. I optimize WebGL performance for cross-device compatibility while maintaining stunning visual fidelity that makes brands stand out.",
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
      category: "Programming Languages",
      techs: ["Python", "C++", "JavaScript", "TypeScript", "Go", "SQL"],
    },
    {
      category: "AI / Machine Learning",
      techs: ["Deep Learning", "Reinforcement Learning", "Large Language Models", "Retrieval-Augmented Generation", "Computer Vision", "Natural Language Processing (NLP)", "Model Training, Inference, and Evaluation"],
    },
    {
      category: "Backend Development",
      techs: ["FastAPI", "Django", "Flask", "Node.js", "Express.js", "GraphQL", "REST APIs", "Microservices Architecture"],
    },
    {
      category: "Frontend Development",
      techs: ["React.js", "Next.js", "TypeScript", "HTML5 / CSS3", "Streamlit"],
    },
    {
      category: "Databases & Storage",
      techs: ["PostgreSQL", "MongoDB", "MySQL"],
    },
    {
      category: "Cloud and DevOps",
      techs: ["Docker", "CI/CD Pipelines (GitHub, Bitbucket Actions)", "AWS (Deployment-Level Experience)"],
    },
    {
      category: "Frameworks & Libraries",
      techs: ["PyTorch", "TensorFlow / Keras", "LangChain", "yfinance", "OpenCV", "PyPDF2"],
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
                text="I'm a Software Developer & AI/ML Developer specializing in building intelligent solutions, machine learning models, and scalable software applications. With expertise in Python, deep learning frameworks, and full-stack development, I create solutions that solve real-world problems—from medical diagnosis using CNNs to multi-tenant SaaS platforms."
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
              text="I'm a Software Developer & AI/ML Developer who bridges the gap between cutting-edge artificial intelligence and practical software solutions. With proven experience building machine learning models, full-stack applications, and enterprise-grade systems, I specialize in solving complex technical challenges while delivering efficient, scalable implementations."
            />
            <br />
            <br />
            <WordAnimation
              once={true}
              stagger={0.01}
              delay={0.2}
              className="w-full"
              text="My approach combines strategic problem-solving with hands-on development—whether it's implementing deep learning models with TensorFlow and Keras, building scalable backend systems with Django and Node.js, or deploying containerized applications with Docker and Kubernetes. I've worked across diverse domains from healthcare AI to enterprise software, consistently delivering production-ready solutions that make a real impact."
            />
            <br />
            <br />
            <WordAnimation
              once={true}
              stagger={0.01}
              delay={0.4}
              className="w-full"
              text="What sets me apart is my ability to work across the entire stack: designing systems in Node.js, building dynamic React frontends, integrating AI capabilities, and deploying Dockerized microservices with CI/CD pipelines. I don't just write code—I architect solutions that drive measurable business outcomes."
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
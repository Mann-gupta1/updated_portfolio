"use client";

import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Curve from "../../componet/UI/NavCurve";
import { worksObj } from "../../assest/data/WorkObj";
import Footer from "../../componet/Footer/Footer";
import Navbar from "../../componet/Navbar";
import ScrollReveal from "../../componet/gsap/ScrollReveal";
import Link from "next/link";
import FlowingMenu from "../../componet/UI/FlowingMenu";
import WordAnimation from "@/components/UI/WordAnimation";

function Page() {
  const worksRef = useRef(null);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 200);
  }, []);

  // Title animation is now handled by ScrollReveal component

  useEffect(() => {
    gsap.fromTo(
      ".item",
      { y: 150 },
      {
        y: 0,
        delay: 0.6,
        duration: 0.6,
        stagger: 0.06,
        ease: "power1.out",
      }
    );
  }, []);

  return (
    <Curve>
      <div
        className="works cursor-default overflow-hidden relative pb-20 bg-main flex  flex-col"
        ref={worksRef}
      >
        <Navbar />
        {/* Title Section */}
        <div className="pt-12 pb-7 px-[1rem] lg:px-[2rem]">
          <WordAnimation
            className="works-title text-5xl md:text-6xl lg:text-8xl font-cabinetGrotesk leading-tight  text-black"
            stagger={0.05}
            once={true}
            delay={1.2}
            text="My Work"
          />
          <div className=" text-lg md:text-xl leading-relaxed max-w-3xl font-cabinetGrotesk">
            <WordAnimation
              delay={1.2}
              once={true}
              stagger={0.02}
              text="Discover my latest projects—where design, technology, and creativity come together to craft engaging digital experiences. Below is a collection of my favourites."
            />

          </div>

        </div>

        {/* Content Area - Horizontal Flowing Menu Only */}
          <div className="pt-10 pb-44 w-full lg:px-[2rem] px-[1rem]">
            <FlowingMenu height={100} items={worksObj.map(item => ({
              link: `/project/${item.slug}` || "#",
              text: item.title,
              image: item.img?.src || item.img
            }))} />
          </div>
      </div>
      <Footer />
    </Curve>
  );
}

export default Page;

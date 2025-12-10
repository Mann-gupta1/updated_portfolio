"use client";

import React from "react";
import Link from "next/link";
import { worksObj } from "../assest/data/WorkObj";
import WordAnimation from "../components/UI/WordAnimation";
import FlowingMenu from "../componet/UI/FlowingMenu";

function ProjectsSequential() {
  // Show only first 4 projects
  const displayedProjects = worksObj ? worksObj.slice(0, 4) : [];

  if (!worksObj || !Array.isArray(worksObj) || worksObj.length === 0) {
    return (
      <div className="projects-sequential-section py-20">
        <div className="text-center text-gray-500">No projects available</div>
      </div>
    );
  }

  return (
    <div className="projects-sequential-section relative w-full min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20">
        {/* Section Title */}
        <div className="mb-16 md:mb-24">
          <WordAnimation
            text="Discover my latest work and creative solutions that bring ideas to life"
            className="text-sec lg:w-[70%] w-full text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl mb-8 sm:mb-12 leading-[1.1] lg:px-4 px-1 font-righteous"
            trigger=".projects-sequential-section"
            start="top 90%"
            end="bottom 50%"
            stagger={0.015}
            delay={0.2}
          />
        </div>

        {/* Horizontal Flowing Menu for Projects */}
        <div className="pt-10 pb-44 w-full">
          <FlowingMenu 
            height={100} 
            items={displayedProjects.map(item => ({
              link: `/project/${item.slug}` || "#",
              text: item.title,
              image: null // No images as requested
            }))} 
          />
        </div>

        {/* More Projects Button */}
        {worksObj.length > 4 && (
          <div className="flex justify-center items-center mt-16 md:mt-24">
            <Link
              href="/works"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:gap-4 hover:scale-105 bg-black text-white"
            >
              More Projects
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectsSequential;

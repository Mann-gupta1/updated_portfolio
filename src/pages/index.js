"use client";

import Navbar from "../componet/Navbar";
import Hero1 from "../sections/Hero1";
import AboutMe from "../sections/AboutMe";
import { useEffect } from "react";
// import FAQ from "../sections/FAQ.jsx";
import SlidingBars from "../componet/Home/SlidingBars";
import Curve from "@/componet/UI/NavCurve";
import Footer from "../componet/Footer/Footer";
import SEO from "@/componet/SEO/Seo";
import ExperienceSection from "../sections/ExperienceSection";
import PositioningSection from "../sections/PositioningSection";
import ProjectsSequential from "../sections/ProjectsSequential";
import ExperimentsSection from "../sections/ExperimentsSection";
import TechStackSection from "../sections/TechStackSection";

const Home = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 200);
  }, []);

  return (
    <Curve>
      <SEO
        title="Mann Gupta | AI Product Manager"
        description="AI Product Manager who owns products end to end: discovery, pricing, unit economics, and shipped software. Case studies in AI product strategy, market entry, and market microstructure."
        // Deliberately not `me.src`: that was the about-me portrait, which Next
        // hashes into /_next/static/... and which is not a 1200x630 share card.
        // Omitting `image` uses the generated og-image.png default.
        url="https://gmannn.netlify.app/"
        keywords="AI Product Manager, Product Manager, AI PM, LLM product, RAG, AI unit economics, pricing and packaging, product strategy, market entry, management consulting, market microstructure, Mann Gupta"
        includePersonSchema
      />
      <div className="home cursor-default bg-main relative flex flex-col overflow-y-hidden h-full">
        {/* <CursorMask /> */}
        <Navbar />
        <Hero1 />
        
        {/* About Me Section */}
        <section id="about-me-section" className="relative section-separator">
        <AboutMe />
        </section>
        
        {/* Positioning — sits directly after About so the role framing lands
            before the timeline, which is what recruiters scan next. */}
        <section id="positioning-section" className="relative section-separator">
          <PositioningSection />
        </section>

        {/* Experience Section */}
        <section id="experience-section" className="relative section-separator">
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent my-16 md:my-24"></div>
          </div>
        <ExperienceSection />
        </section>
        
        {/* Projects Section */}
        <section id="projects-section" className="relative section-separator">
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent mt-8 md:mt-10 mb-16 md:mb-24"></div>
          </div>
          <ProjectsSequential />
        </section>

        {/* Experiments / Lab */}
        <section className="experiments-section relative section-separator">
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent my-16 md:my-24"></div>
          </div>
          <ExperimentsSection />
        </section>

        {/* Tech Stack */}
        <section className="techstack-section relative section-separator">
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent my-16 md:my-24"></div>
          </div>
          <TechStackSection />
        </section>
        
        <SlidingBars />
        {/* <FAQ /> */}
        <Footer />
      </div>
    </Curve>
  );
};

export default Home;

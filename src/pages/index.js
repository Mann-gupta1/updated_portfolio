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
import me from "../assest/Images/about/mannz-about-me.png";
import ExperienceSection from "../sections/ExperienceSection";
import ProjectsSequential from "../sections/ProjectsSequential";
// import Testimonials from "@/sections/Testimonials";

const Home = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 200);
  }, []);

  return (
    <Curve>
      <SEO
        title="Mann Gupta | Portfolio"
        description="Explore Mann Gupta's portfolio showcasing innovative software development projects, AI/ML solutions, and creative technical implementations."
        image={me.src}
        url="https://mann-gupta-portfolio.vercel.app/"
      />
      <div className="home cursor-default bg-main relative flex flex-col overflow-y-hidden h-full">
        {/* <CursorMask /> */}
        <Navbar />
        <Hero1 />
        
        {/* About Me Section */}
        <section id="about-me-section" className="relative section-separator">
        <AboutMe />
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
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent my-16 md:my-24"></div>
          </div>
          <ProjectsSequential />
        </section>
        
        {/* <Testimonials /> */}
        <SlidingBars />
        {/* <FAQ /> */}
        <Footer />
      </div>
    </Curve>
  );
};

export default Home;

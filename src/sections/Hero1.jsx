"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import Socials from "./Socials.jsx";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import BackgroundVideo from "@/componet/BackgroundVideo";
import ButtonNew from "@/componet/UI/ButtonNew";

function Hero1() {
  const textRefs = useRef([]);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".word",
      {
        y: 250,
        rotate: 3,

      },
      {
        y: 0,
        opacity: 1,
        rotate: 0,
        stagger: 0.15,
        delay: 0.3,
        duration: 1,
        // ease: "power3.out"
      }
    );

    gsap.fromTo(
      ".item",
      { y: 150 },
      {
        y: 0,
        delay: 0.9,
        duration: 0.6,
        stagger: 0.02,
        ease: "power1.out",
      }
    );

    gsap.fromTo(
      ".obj3d",
      {
        y: 0,
      },
      {
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: 3,
        },
        y: -120,
        ease: "none",
      }
    );
  }, []);

  return (
    <div className="  hero  relative  h-screen  flex items-center justify-center   overflow-hidden z-20">
      {/* Animated background */}

      {/* left side */}
      <div className="  z-50 flex-col flex  lg:h-[80vh] h-[85vh] px-4  lg:px-10  pt-[5rem]   lg:mt-12 py-5 lg:py-10 items-center left-0 top-0  absolute   justify-end  lg:justify-between ">
        <div className="  item  lg:block hidden  h-[40vh] w-[1px] bg-gray-700  relative">
          <div className=" absolute  bottom-0 right-[50%] transform translate-x-[50%] h-[.3rem] bg-black rounded-[50%] w-[.3rem] "></div>
          <div className=" absolute top-0 right-[50%] transform translate-x-[50%] h-[.3rem] bg-black rounded-[50%] w-[.3rem] "></div>
        </div>
        <Socials />
      </div>
      {/* ------------------- */}

      <div className=" flex  lg:pl-0 pl-0  lg:-mt-[13rem] -mt-[40rem]  flex-col lg:flex-row justify-center items-center ">
        {/* Minimal hero: headline, subline, impact, buttons only */}
        <div className=" flex flex-col  item lg:px-0  px-[1rem] text-black z-50 justify-center text-center max-w-3xl mx-auto ">
          <div style={{ clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)" }} className=" words overflow-hidden lg:leading-[3.5rem] md:leading-[2.8rem] leading-[2rem] ">
            <h1 ref={(el) => (textRefs.current[0] = el)} className="font-cabinetGrotesk text-[1.6rem] xs:text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] xl:text-[4.5rem] pb-2 word">
              Backend & Infrastructure Engineer
            </h1>
          </div>
          <p className="item font-cabinetGrotesk text-base sm:text-lg md:text-xl text-black/80 mt-3 word">
            Building scalable cloud systems and production-ready AI services.
          </p>
          <p className="item font-cabinetGrotesk text-sm sm:text-base text-black/70 mt-2 mb-8 word">
            Reduced infrastructure cost by 50% through Kubernetes autoscaling at WorkIndia.
          </p>
          <motion.div
            className="item hero-buttons flex flex-wrap gap-3 sm:gap-4 justify-center word"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.08, delayChildren: 1.2 } },
              hidden: {},
            }}
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.4, ease: "easeOut" }} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="rounded-full ring-1 ring-black/20 hover:ring-black/40 transition-shadow">
              <ButtonNew text="Download CV" link="https://drive.google.com/uc?export=download&id=1he0Aq8VrHytDp5CDxD6_P4BozUOhOVmB" download hideArrow className="!bg-black !text-white hover:!bg-black/90" />
            </motion.div>
            <motion.div variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.4, ease: "easeOut" }} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="rounded-full ring-1 ring-black/20 hover:ring-black/40 transition-shadow">
              <ButtonNew text="GitHub" link="https://github.com/Mann-gupta1" hideArrow className="!bg-black !text-white hover:!bg-black/90" />
            </motion.div>
            <motion.div variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.4, ease: "easeOut" }} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="rounded-full ring-1 ring-black/20 hover:ring-black/40 transition-shadow">
              <ButtonNew text="Contact" link="/contact" hideArrow className="!bg-black !text-white hover:!bg-black/90" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className=" item absolute hidden font-cabinetGrotesk   -mt-10  lg:block -rotate-90 top-[40%] -right-[6.5%] transform -translate-y-1/2 writing-mode-vertical-rl text-orientation-mixed   tracking-wider pr-5">
        MANN GUPTA
      </div>

      <h1 className=" item letter-spacing-[1em] font-cabinetGrotesk  lg:text-2xl text-xl  cursor-default right-[50%] transform translate-x-[50%]  absolute z-[100] bottom-[16%]   ">
        scroll down
      </h1>

      <span className=" absolute 2xl:-top-[5.5rem] xl:-top-[3rem] lg:-top-[0rem] top-[16rem]  lg:-right-3 -z-10">
        <BackgroundVideo trigger={".hero"} />
      </span>
    </div>
  );
}

export default Hero1;

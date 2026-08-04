"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import Socials from "./Socials.jsx";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import BackgroundVideo from "@/componet/BackgroundVideo";
import ButtonNew from "@/componet/UI/ButtonNew";
import { links } from "@/assest/data/profile";

// Case Studies leads deliberately: it is the differentiator for AI PM and
// consulting reviewers, and it is the only thing here they cannot skim from a CV.
const heroButtons = [
  { text: "Case Studies", link: "/case-studies", isPrimary: true },
  { text: "Resume", link: links.resume },
  { text: "Medium", link: links.medium },
  { text: "GitHub", link: links.github },
];

function Hero1() {
  const textRefs = useRef([]);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // NOTE: the hero ".word" reveal is deliberately NOT animated here any more.
    // It lives in globals.css as the `heroWordIn` keyframe animation, because a
    // GSAP-driven reveal meant the LCP element could not paint until JavaScript had
    // hydrated (measured: 8.9s of LCP render delay). CSS reveals it independently.
    // Do not re-add a GSAP timeline for ".word" inside .hero — it would reintroduce
    // the JS dependency and fight the keyframes.

    gsap.fromTo(
      ".item",
      { y: 150 },
      {
        y: 0,
        delay: 0.25,
        duration: 0.45,
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
              AI Product Manager
            </h1>
          </div>
          <p className="item font-cabinetGrotesk text-base sm:text-lg md:text-xl text-black/80 mt-3 word">
            I write the spec, price the tier, model the AI cost per user, and ship it.
          </p>
          <p className="item font-cabinetGrotesk text-sm sm:text-base text-black/70 mt-2 mb-8 word">
            Founding product owner across three products. Cut company spend 70% and removed 70% of manual lead-response work with a human-in-the-loop LLM agent.
          </p>
          <motion.div
            className="item hero-buttons flex flex-wrap gap-3 sm:gap-4 justify-center word"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.05, delayChildren: 0.35 } },
              hidden: {},
            }}
          >
            {heroButtons.map(({ text, link, isPrimary }) => (
              <motion.div
                key={text}
                variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-full ring-1 ring-black/20 hover:ring-black/40 transition-shadow"
              >
                <ButtonNew
                  text={text}
                  link={link}
                  hideArrow
                  className={
                    isPrimary
                      ? "!bg-thr !text-black hover:!bg-thr/90"
                      : "!bg-black !text-white hover:!bg-black/90"
                  }
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className=" item absolute hidden font-cabinetGrotesk   -mt-10  lg:block -rotate-90 top-[40%] -right-[6.5%] transform -translate-y-1/2 writing-mode-vertical-rl text-orientation-mixed   tracking-wider pr-5">
        MANN GUPTA
      </div>

      {/* Was an <h1>, which made "scroll down" compete with the real page heading. */}
      <p className=" item letter-spacing-[1em] font-cabinetGrotesk  lg:text-2xl text-xl  cursor-default right-[50%] transform translate-x-[50%]  absolute z-[100] bottom-[16%]   ">
        scroll down
      </p>

      <span className=" absolute 2xl:-top-[5.5rem] xl:-top-[3rem] lg:-top-[0rem] top-[16rem]  lg:-right-3 -z-10">
        <BackgroundVideo trigger={".hero"} />
      </span>
    </div>
  );
}

export default Hero1;

import React, { useEffect, useRef } from "react";
import LogoWithText from "../UI/LogoWithText";
import Curve from "../Home/Works/Curve";
import Link from "next/link";
import gsap from "gsap";
import SplitType from "split-type";
// import { ScrollTrigger } from "gsap/all";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import LogoBlackBig from "../../assest/Images/mann-LogoBlackBig.png";
import Magnetic from "../../componet/gsap/Magnetic";
import FlipLink from "../UI/FlipLink";
import ButtonEffect from "../UI/ButtonEffect";
import useLocalTime from "@/Hooks/useLocalTime";
import BallsModal, { ShuffleModals } from "../BallsModal";
import Spline from "@splinetool/react-spline";

gsap.registerPlugin(ScrollTrigger);

function Footer() {
  const nameRef = useRef(null);
  const localTime = useLocalTime();

  const Links = [
    {
      title: "LINKS",
      links: [
        {
          text: "Home",
          link: "/",
        },
        {
          text: "Work",
          link: "/works",
        },
        {
          text: "About",
          link: "/about-me",
        },
        // {
        //   text: "Experience",
        //   link: "/expereince",
        // },
        {
          text: "Contact",
          link: "/contact",
        },
      ],
    },
    {
      title: "CONTACT",
      links: [
        {
          text: "Email — manngupta923@gmail.com",
          link: "mailto:manngupta923@gmail.com",
          isSocaial: true,
        },
        {
          text: "GitHub — github.com/Mann-gupta1",
          link: "https://github.com/Mann-gupta1",
          isSocaial: true,
        },
        {
          text: "Portfolio — gmannn.netlify.app",
          link: "https://gmannn.netlify.app",
          isSocaial: true,
        },
        {
          text: "LinkedIn",
          link: "https://linkedin.com/in/gupta-mann",
          isSocaial: true,
        },
      ],
    },
    {
      title: "LOCAL TIME",
      infos: [
        {
          p: localTime,
        },
      ],
    },
    {
      title: "VERSION",
      infos: [
        {
          p: "2025 © Edition",
        },
      ],
    },
  ];

  useEffect(() => {
    // // Split text into characters
    // const nameSplit = new SplitType(nameRef.current, { types: "chars" });

    // // Set initial state - characters hidden
    // gsap.set(nameSplit.chars, {
    //   y: 200,
    //   opacity: 0,
    //   scale: 0.5,
    // });

    // // Create scrub animation for each character with stagger
    // const totalChars = nameSplit.chars.length;
    // nameSplit.chars.forEach((char, index) => {
    //   gsap.to(char, {
    //     y: 0,
    //     opacity: 1,
    //     scale: 1,
    //     scrollTrigger: {
    //       trigger: ".footerSection",
    //       start: "top 80%",
    //       end: "bottom 20%",
    //       scrub: 1,
    //       stagger: 0.02,
    //       onUpdate: (self) => {
    //         // Split the scroll progress into equal segments for each character
    //         const segmentSize = 1 / totalChars; // Each character gets equal time
    //         const charStart = index * segmentSize;
    //         const charEnd = charStart + segmentSize;

    //         // Calculate progress for this specific character
    //         let charProgress = 0;
    //         if (self.progress >= charStart && self.progress <= charEnd) {
    //           charProgress = (self.progress - charStart) / segmentSize;
    //         } else if (self.progress > charEnd) {
    //           charProgress = 1;
    //         }

    //         gsap.set(char, {
    //           y: 200 * (1 - charProgress),
    //           opacity: charProgress,
    //           scale: 0.5 + (0.5 * charProgress),
    //         });
    //       },
    //     },
    //   });
    // });


    const letters = nameRef.current.querySelectorAll(".char");
    
    // Set initial state
    gsap.set(letters, {
      yPercent: 100,
    });

    // Animate each character coming up
    gsap.to(letters, {
      yPercent: 0,
      duration: 1,
      ease: "expo.out",
      stagger: {
        amount: 0.1, // Total time for all staggers
        from: "start"
      },
      scrollTrigger: {
        trigger: nameRef.current,
        start: "top 60%",
        toggleActions: "play none none reverse"
      }
    });


    // Footer text animation
    gsap.fromTo(
      ".Footertext",
      { y: 115, rotate: 20 },
      {
        y: 0,
        stagger: 0.04,
        delay: 0.2,
        rotate: 0,
        duration: 0.5,
        ease: "power1.out",
        scrollTrigger: {
          trigger: ".footerSection",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  useEffect(() => {
    gsap.to(".FooterCurve", {
      scrollTrigger: {
        trigger: ".footerSection",
        start: "top 75%", // Start the animation when the top of the footerSection is at 80% of the viewport
        end: "bottom 40%", // End the animation when the bottom of the FooterCurve reaches the top of the viewport
        scrub: 1.5, // Smoother scrub value for a gradual animation
      },
      scaleY: 0,
      duration: 2, // Increase the duration slightly
    });

    gsap.to(".cercel", {
      scrollTrigger: {
        trigger: ".footerSection",
        start: "top 80%", // Start the animation when the top of the footerSection is at 80% of the viewport
        end: "90% center", // End the animation when the bottom of the FooterCurve reaches the top of the viewport
        scrub: 1.5, // Smoother scrub value for a gradual animation
      },
      boxShadow: 0,
    });
  }, []);

  const text = "MANN";


  return (
    <div className=" footerSection font-cabinetGrotesk    relative overflow-x-hidden overflow-y-visible z-[30] ">
      {/* curve */}

      <div className="w-[120%] FooterCurve absolute left-[50%] -top-[5rem] sm:-top-[6rem] md:-top-[6.5rem] lg:-top-[7rem] transform translate-x-[-50%] h-[12px] sm:h-[15px] md:h-[20px] lg:h-[30px] z-50">
        <div
          style={{
            boxShadow: "  0px 60px 50px rgba(0,0,0,0.748) ",
          }}
          className=" cercel  absolute right-[-10%] rounded-[50%]   h-[1555%] w-[120%] bg-main "
        >
          {" "}
        </div>
      </div>

      <div className=" font-cabinetGrotesk  h-[80vh] sm:h-[85vh] md:h-[90vh] z-30 lg:h-[100vh] flex flex-col justify-between text-white  lg:pt-24 pt-[2rem] sm:pt-[3rem] md:pt-[4rem] px-[1rem] sm:px-[1.5rem] md:px-[2rem] lg:px-[2rem] relative bg-sec ">
        <div className=" flex flex-col lg:flex-row justify-between w-full gap-6 sm:gap-8 md:gap-10">
          <div className=" flex flex-wrap sm:flex-nowrap justify-start sm:justify-between gap-4 sm:gap-6 md:gap-8">
            {/* links */}
            <div className="lg:text-lg z-50 flex flex-wrap lg:gap-10 gap-4 sm:gap-6 md:gap-8 w-full sm:w-auto">
              {Links.map((item, index) => (
                <div key={index} className="flex flex-col gap-2 min-w-[100px] sm:min-w-0">
                  <div className="overflow-hidden">
                    <h1 className="Footertext opacity-50 text-xs sm:text-sm">
                      {item.title}
                    </h1>
                  </div>
                  <div className="flex gap-1 flex-col leading-5 sm:leading-6">
                    {item.links?.map((linkItem, linkIndex) => (
                      <div key={linkIndex} className="overflow-hidden">
                        <Link
                          href={linkItem.link}
                          target={linkItem?.isSocaial ? "_blank" : ""}
                          rel="noopener noreferrer"
                        >
                          <h1 className="Footertext text-[0.85rem] sm:text-[0.95rem] cursor-pointer hover:text-gray-400 text-gray-300 break-words">
                            <FlipLink>{linkItem.text}</FlipLink>
                          </h1>
                        </Link>
                      </div>
                    ))}
                    {/* Render the infos section */}
                    {item.infos?.map((infoItem, infoIndex) => (
                      <div key={infoIndex} className="overflow-hidden">
                        <p className="Footertext text-[0.85rem] sm:text-[0.95rem] break-words">
                          {infoItem.p}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* <div className=" h-full w-full absolute top-0 right-0">
            <ShuffleModals />
          </div> */}
          <div className="lg:flex-row lg:w-fit w-full lg:px-0 px-0 sm:px-[1rem] md:items-start items-center flex-col flex gap-4 sm:gap-5 pt-6 sm:pt-8 md:pt-10">
            <div className="w-full sm:w-auto lg:w-fit">
              <ButtonEffect
                strength={3.5}
                Style={
                  "bg-sec lg:w-fit w-full sm:w-auto hover:text-sec border-white hover:border-0 border-[1px] text-white text-sm sm:text-base"
                }
              >
                <a
                  href="https://wa.me/916266725150"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +91 6266725150
                </a>
              </ButtonEffect>
            </div>
            <div className="w-full sm:w-auto lg:w-fit">
              <ButtonEffect
                strength={3.5}
                Style={
                  "bg-sec border-white lg:w-fit w-full sm:w-auto hover:border-0 border-[1px] text-white text-sm sm:text-base"
                }
              >
                <a href="mailto:manngupta923@gmail.com">
                  manngupta923@gmail.com
                </a>
              </ButtonEffect>
            </div>
          </div>
        </div>

        {/* big text and robot */}
        <div className="flex flex-col items-center justify-center w-full relative min-h-[12rem] lg:min-h-[16rem]">

          {/* Spline Robot — no spaces in URL; z-index above MANN text; overflow-visible on section */}
          <div className="hidden md:block absolute -top-[min(12rem,22vh)] md:-top-[min(14rem,24vh)] lg:-top-[min(16rem,26vh)] left-1/2 -translate-x-1/2 z-[35] pointer-events-none w-[min(100%,380px)] h-[280px] md:w-[400px] md:h-[320px] lg:w-[450px] lg:h-[450px]">
            <Spline
              scene="/robot.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          <div className="relative z-[15] font-righteous leading-[6rem] sm:leading-[8rem] md:leading-[12rem] lg:leading-[28rem] text-[5rem] sm:text-[6rem] md:text-[10rem] lg:text-[30rem] flex flex-col text-center">
            {/* <div className="overflow-hidden mb-[1rem]">
              <h1 ref={nameRef} className="mann-text font-righteous ">MANN</h1>
            </div> */}

            <h1 ref={nameRef} className="mann-text font-righteous -mb-[2rem] sm:-mb-[3rem] md:-mb-[4rem] lg:-mb-[5rem] flex overflow-hidden">
              {text.split("").map((char, i) => (
                <span key={i} className="char inline-block">
                  {char}
                </span>
              ))}
            </h1>
          </div>


        </div>
      </div>
      <div className="hidden md:block">
        <LogoWithText style={"absolute bottom-1 left-4 md:left-6"} />
      </div>
    </div>
  );
}

export default Footer;

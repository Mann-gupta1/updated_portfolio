import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import { paragraphData } from "../assest/data/expData.js";
import WordAnimation from "@/components/UI/WordAnimation.jsx";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function ExperienceSection() {
  const mainRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Get the home page container
      const homeContainer = document.querySelector('.home');
      
      // Create simple scroll trigger that changes background
      ScrollTrigger.create({
        trigger: mainRef.current,
        start: "top-=50px top",
        end: "bottom bottom",
        pin: false,
        markers: false,
        onEnter: () => {
          // Change home page background to black
          if (homeContainer) {
            gsap.to(homeContainer, {
              backgroundColor: '#1E1E1E',
              duration: 0.4,
              ease: 'power1.inOut'
            });
          }
          
          // Change text colors to white
          gsap.to('.experience-text', {
            color: '#ffffff',
            duration: 0.4,
            ease: 'power1.inOut'
          });
          gsap.to('.experience-text-secondary', {
            color: 'rgba(255, 255, 255, 0.6)',
            duration: 0.4,
            ease: 'power1.inOut'
          });
          gsap.to('.timeline-line', {
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            duration: 0.4,
            ease: 'power1.inOut'
          });
          gsap.to('.timeline-dot', {
            borderColor: 'rgba(255, 255, 255, 0.6)',
            duration: 0.4,
            ease: 'power1.inOut'
          });
        },
        onLeave: () => {
          // Change back to main background
          if (homeContainer) {
            gsap.to(homeContainer, {
              backgroundColor: '#e7e7e7',
              duration: 0.4,
              ease: 'power1.inOut'
            });
          }
          
          // Change text colors back to sec
          gsap.to('.experience-text', {
            color: '#1E1E1E',
            duration: 0.4,
            ease: 'power1.inOut'
          });
          gsap.to('.experience-text-secondary', {
            color: 'rgba(0, 0, 0, 0.6)',
            duration: 0.4,
            ease: 'power1.inOut'
          });
        },
        onEnterBack: () => {
          // Change home page background to black
          if (homeContainer) {
            gsap.to(homeContainer, {
              backgroundColor: '#1E1E1E',
              duration: 0.4,
              ease: 'power1.inOut'
            });
          }
          
          // Change text colors to white
          gsap.to('.experience-text', {
            color: '#ffffff',
            duration: 0.4,
            ease: 'power1.inOut'
          });
          gsap.to('.experience-text-secondary', {
            color: 'rgba(255, 255, 255, 0.6)',
            duration: 0.4,
            ease: 'power1.inOut'
          });
          gsap.to('.timeline-line', {
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            duration: 0.4,
            ease: 'power1.inOut'
          });
          gsap.to('.timeline-dot', {
            borderColor: 'rgba(255, 255, 255, 0.6)',
            duration: 0.4,
            ease: 'power1.inOut'
          });
        },
        onLeaveBack: () => {
          // Change back to main background
          if (homeContainer) {
            gsap.to(homeContainer, {
              backgroundColor: '#e7e7e7',
              duration: 0.4,
              ease: 'power1.inOut'
            });
          }
          
          // Change text colors back to sec
          gsap.to('.experience-text', {
            color: '#1E1E1E',
            duration: 0.4,
            ease: 'power1.inOut'
          });
          gsap.to('.experience-text-secondary', {
            color: 'rgba(0, 0, 0, 0.6)',
            duration: 0.4,
            ease: 'power1.inOut'
          });
        }
      });
    }, mainRef);

    return () => {
      ctx.revert();
    };
  }, []);

  // Animate experience cards on scroll
  useEffect(() => {
    if (!contentRef.current) return;

    const ctx = gsap.context(() => {
      paragraphData.forEach((exp, i) => {
        const experienceCard = document.querySelector(`[data-index="${i}"]`);
        if (!experienceCard) return;

        ScrollTrigger.create({
          trigger: experienceCard,
          start: "top 80%",
          end: "bottom 20%",
          markers: false,
          onEnter: () => {
            const timelineDot = experienceCard.querySelector('.timeline-dot');
            const experienceContent = experienceCard.querySelector('.experience-content');

            const tl = gsap.timeline({
              defaults: {
                duration: 1,
                ease: "power3.out"
              }
            });

            if (timelineDot) {
              tl.fromTo(timelineDot, 
                { opacity: 0, scale: 0 },
                { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(2)" },
                0
              );
            }

            if (experienceContent) {
              tl.fromTo(experienceContent,
                { opacity: 0 },
                { opacity: 1, duration: 0.8 },
                0
              );
            }
          }
        });
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  // Update timeline progress line
  useEffect(() => {
    if (!contentRef.current) return;

    const timelineProgress = document.querySelector('.timeline-progress');
    const timelineContainer = document.querySelector('.experience-timeline-container');
    if (!timelineProgress || !timelineContainer) return;

    ScrollTrigger.create({
      trigger: timelineContainer,
      start: "top center",
      end: "bottom center",
      scrub: 1,
      markers: false,
      onUpdate: (self) => {
        const progress = self.progress;
        gsap.to(timelineProgress, {
          height: `${progress * 100}%`,
          duration: 0.3,
          ease: "none"
        });
      }
    });
  }, []);

  // SVG Line Animation
  useEffect(() => {
    const svgPath = document.querySelector('#experience-line-path');
    const timelineContainer = document.querySelector('.experience-timeline-container');
    if (!svgPath || !timelineContainer) return;

    const pathLength = svgPath.getTotalLength();

    gsap.set(svgPath, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
    });

    ScrollTrigger.create({
      trigger: timelineContainer,
      start: "top center",
      end: "bottom center",
      scrub: 1,
      markers: false,
      onUpdate: (self) => {
        const progress = self.progress;
        gsap.to(svgPath, {
          strokeDashoffset: pathLength * (1 - progress),
          duration: 0.3,
          ease: 'none',
        });
      }
    });
  }, []);

  return (
    <div className="w-full">
      {/* styles moved to src/styles/globals.css — see note there */}
      
      <div
        ref={mainRef}
        className="relative w-full min-h-screen"
      >
        {/* Center Content Section */}
        <div
          ref={contentRef}
          className="flex flex-col items-center w-full text-white lg:px-8 px-0 pt-12 md:pt-16 lg:pt-24 pb-8 md:pb-10 lg:pb-12 relative"
        >
          {/* Header Section */}
          <div className="text-center mb-10 md:mb-16 lg:mb-20 max-w-4xl px-4">
            <p className="experience-text-secondary lg:text-sm text-xs font-bold tracking-[0.3em] mb-4 md:mb-6 font-cabinetGrotesk" style={{ color: 'rgba(0, 0, 0, 0.6)' }}>Experience &amp; Technologies</p>
            <h2 className="lg:text-4xl text-2xl font-bold leading-tight mb-4 font-cabinetGrotesk">
              <WordAnimation
                text="Explore my journey and the technologies that define my craft."
                className="experience-text font-cabinetGrotesk font-bold leading-tight mb-4 font-cabinetGrotesk"
                stagger={0.015}
                style={{ color: '#1E1E1E' }}
              />
            </h2>
          </div>

          {/* Experience Timeline — decorative rope SVG height matches timeline content (not fixed vh) */}
          <div className="w-full px-[1rem] md:px-[3rem] lg:px-[6rem] mb-6 md:mb-8 lg:mb-10 relative">
            <div className="relative w-full">
              <div
                className="timeline-line absolute left-1/2 top-0 bottom-0 w-[1px]"
                style={{ transform: 'translateX(-50%)', backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
              />

              <div
                className="timeline-progress absolute left-1/2 top-0 lg:w-[2px] w-[1px] bg-orange-500 origin-top"
                style={{
                  height: '0%',
                  transform: 'translateX(-50%)',
                  backgroundColor: '#D4F534',
                  boxShadow: '0 0 15px #D4F534',
                  zIndex: 2,
                }}
              />

              {/* Lime rope — locked to timeline column height so it does not extend past last entry */}
              <div className="absolute inset-0 pointer-events-none z-[5] hidden lg:block overflow-hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                  viewBox="0 0 1200 3200"
                  fill="none"
                  preserveAspectRatio="xMidYMin meet"
                >
                  <path
                    id="experience-line-path"
                    d="M0.478149 0.14624C179.389 584.988 1024.24 241.063 1203.16 488.791C1382.07 736.519 591.549 555.192 685.399 850.592C754.827 1069.12 1251.74 767.219 1254.66 995.312C1257.47 1214.38 748.65 1128.11 748.65 1392.87C748.65 1678.93 1318.81 1483.96 1318.81 1754.67C1318.81 1978.88 826.875 1777.46 819.13 2001.55C811.613 2219.04 1126.15 2122.45 1318.81 2242.46C1511.48 2362.48 902.26 3183.15 902.26 3183.15"
                    stroke="#d4f534"
                    strokeWidth="20"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    opacity="0.9"
                  />
                </svg>
              </div>

              <div className="relative z-10 experience-timeline-container">
              {paragraphData.map((exp, index) => {
                const isLeft = index % 2 === 0;

                const isLast = index === paragraphData.length - 1;
                return (
                  <div
                    key={index}
                    className={`experience-item w-full flex items-center ${isLast ? 'mb-10 md:mb-12 lg:mb-16' : 'mb-[30vh] md:mb-[50vh] lg:mb-[80vh]'}`}
                    data-index={index}
                  >
                    <div
                      className="timeline-dot absolute left-1/2 w-3 h-3 rounded-full border bg-black z-50"
                      style={{ transform: 'translateX(-50%)', borderColor: 'rgba(0, 0, 0, 0.6)' }}
                    ></div>

                    <div
                      className={`experience-content experience-content-${index} z-[100] relative w-full md:w-[45%] ${isLeft ? 'md:pr-20 text-right' : 'md:ml-auto md:pl-20 text-left'} lg:px-6 px-0`}
                    >
                      <WordAnimation
                        trigger={`.experience-content-${index}`}
                        stagger={0.02}
                        delay={0}
                        className={`experience-text font-cabinetGrotesk font-bold text-4xl md:text-6xl lg:text-7xl lg:mb-5 mb-2 leading-tight company-name`}
                        text={exp.companyName}
                        style={{ color: index === paragraphData.length - 1 ? '#6B7280' : '#6B7280' }}
                      />

                      <WordAnimation
                        trigger={`.experience-content-${index}`}
                        stagger={0.015}
                        delay={0.3}
                        className={`experience-text-secondary font-cabinetGrotesk text-xl md:text-3xl lg:text-4xl font-light lg:mb-3 mb-2 leading-relaxed role-text`}
                        text={exp.role}
                        style={{ color: index === paragraphData.length - 1 ? '#9CA3AF' : '#9CA3AF' }}
                      />

                      <WordAnimation
                        trigger={`.experience-content-${index}`}
                        stagger={0.01}
                        delay={0.5}
                        className={`experience-text-secondary font-cabinetGrotesk text-base md:text-lg leading-2 lg:mb-3 mb-2 max-w-xl description-text`}
                        lineHeight="1"
                        marginLeft={isLeft ? 'auto' : '0'}
                        marginRight={isLeft ? '0' : 'auto'}
                        text={exp.shortDesc}
                        style={{ color: index === paragraphData.length - 1 ? '#9CA3AF' : '#9CA3AF' }}
                      />

                      <WordAnimation
                        trigger={`.experience-content-${index}`}
                        stagger={0.05}
                        delay={0.7}
                        className={`experience-text-secondary text-sm md:text-base font-light date-tag`}
                        text={exp.date}
                        style={{ color: index === paragraphData.length - 1 ? '#9CA3AF' : '#9CA3AF' }}
                      />

                      {/* Metrics and the decision line are plain elements, not
                          WordAnimation: they are the load-bearing content for a PM
                          or consulting reader, and a per-word reveal on a scrubbed
                          timeline can leave them mid-animation when someone scrolls
                          fast. They fade with the parent card instead. */}
                      {exp.metrics?.length > 0 && (
                        <ul
                          className={`list-none flex flex-wrap gap-x-8 gap-y-3 mt-6 ${
                            isLeft ? 'justify-end' : 'justify-start'
                          }`}
                        >
                          {exp.metrics.map((metric) => (
                            <li key={metric.label}>
                              <span
                                className="block text-2xl md:text-3xl font-bold tabular-nums leading-none"
                                style={{ color: exp.color }}
                              >
                                {metric.value}
                              </span>
                              <span className="experience-text-secondary block text-xs mt-1 opacity-70">
                                {metric.label}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {exp.caseStudy?.decision && (
                        <p
                          className={`experience-text-secondary text-sm md:text-base leading-relaxed mt-6 max-w-xl ${
                            isLeft ? 'ml-auto border-r-2 pr-4' : 'mr-auto border-l-2 pl-4'
                          }`}
                          style={{ borderColor: exp.color, color: '#9CA3AF' }}
                        >
                          <span className="block text-[0.65rem] uppercase tracking-[0.2em] opacity-60 mb-1">
                            The call
                          </span>
                          {exp.caseStudy.decision}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceSection;
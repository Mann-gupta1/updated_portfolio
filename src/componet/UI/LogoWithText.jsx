import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Circular rotating badge.
//
// This used to render `logo&textWhite.png`, which had "SOFTWARE · DEVELOPER · MANN"
// baked into the pixels — so the badge contradicted the AI Product Manager
// positioning on every page and could not be changed without a design tool.
// Rebuilt as SVG textPath: the text is now real, editable, selectable, and readable
// by search engines, and the scroll-rotation behaviour is unchanged.
// (The old cleanup called ScrollTrigger.getById(element), which never matched
// anything — getById takes a string id — so the trigger leaked on unmount.)
const BADGE_TEXT = "AI PRODUCT MANAGER · PRODUCT STRATEGY · ";

function LogoWithText({ style, isBlack, scale }) {
  const logoRef = useRef(null);

  useEffect(() => {
    const element = logoRef.current;
    if (!element) return;

    const trigger = ScrollTrigger.create({
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      onUpdate: (self) => {
        gsap.to(element, {
          rotation: self.progress * 150,
          overwrite: 'auto',
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  const color = isBlack ? "#1E1E1E" : "#ffffff";

  return (
    <div
      ref={logoRef}
      className={`${style} exp_item z-50 w-[7rem] h-[7rem]`}
      role="img"
      aria-label="Mann Gupta — AI Product Manager"
    >
      <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
        <defs>
          {/* Circle the text rides on, drawn from the top going clockwise. */}
          <path
            id="badge-circle"
            d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
            fill="none"
          />
        </defs>

        <text
          fill={color}
          style={{ fontSize: '8.4px', letterSpacing: '0.1em', fontWeight: 600 }}
        >
          <textPath href="#badge-circle" startOffset="0%">
            {BADGE_TEXT}
          </textPath>
        </text>

        {/* Centre monogram */}
        <circle cx="50" cy="50" r="19" fill={color} />
        <text
          x="50"
          y="50"
          textAnchor="middle"
          dominantBaseline="central"
          fill={isBlack ? "#ffffff" : "#1E1E1E"}
          style={{ fontSize: '19px', fontWeight: 800 }}
        >
          M
        </text>
      </svg>
    </div>
  );
}

export default LogoWithText;

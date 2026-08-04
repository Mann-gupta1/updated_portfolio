"use client";
import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";
import { text, curve, translate } from "./anim";
import styles from "./curve.module.css";
import { useRouter } from "next/router";
import { useMediaQuery } from "react-responsive";
import { AppContext } from "@/context/AppContext";
import { worksObj } from "@/assest/data/WorkObj";

const routes = {
  "/": "Home",
  "/about-me": "About",
  "/case-studies": "Case Studies",
  "/contact": "Contact",
  "/works": "Work",
  "/expereince": "Experience",
};

const anim = (variants) => {
  return {
    variants,
    initial: "initial",
    animate: "enter",
    exit: "exit",
  };
};

export default function Curve({ children, backgroundColor }) {
  const [dimensions, setDimensions] = useState({
    width: null,
    height: null,
  });
  const { firstLoad } = useContext(AppContext);

  const router = useRouter();
  
  // Get display text for current route
  const getDisplayText = () => {
    if (firstLoad && router.pathname === "/") {
      return "Hello!";
    }
    
    // Check if we're on a project page
    if (router.pathname === "/project/[id]" && router.query.id) {
      const project = worksObj.find(p => p.slug === router.query.id);
      return project ? project.title : "Project";
    }
    
    return routes[router.pathname] || "Page";
  };

  // useLayoutEffect for the FIRST measurement: this ran in useEffect, i.e. after
  // the browser had already painted, so the transition SVG mounted a frame late and
  // registered as a 0.667 layout shift (the single largest CLS contributor on the
  // site). Measuring before paint means the element exists in the first frame.
  // useEffect is kept for the resize listener, which must not block painting.
  const useIsomorphicLayoutEffect =
    typeof window !== "undefined" ? useLayoutEffect : useEffect;

  useIsomorphicLayoutEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  useEffect(() => {
    function resize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div
      className="page curveRoute overflow-hidden  relative "
      style={{ backgroundColor }}
    >
      <div
        style={{
          opacity: dimensions.width == null ? 1 : 0,
          zIndex: dimensions.width == null ? 100 : -100,
        }}
        className={`    ${styles.background}   h-[100vh] w-full fixed top-0  z-50 right-0 bg-[#111111]`}
      />

      <motion.div
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          position: 'fixed',
          top: '50%',
          left: '50%',
          zIndex: 100
        }}
        {...anim(text)}
        className={
          "lg:text-6xl text-4xl text-white font-righteous text-center"
        }
      >
        {getDisplayText()}
      </motion.div>
      {dimensions.width != null && <SVG {...dimensions} />}
      {children}
    </div>
  );
}

const SVG = ({ height, width }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const initialPath = `
        M0 ${isMobile ? "100" : "300"} 
        Q${width / 2} 0 ${width}  ${isMobile ? "100" : "300"}
        L${width} ${height + 300}
        Q${width / 2} ${height + (isMobile ? 450 : 600)} 0 ${height + 300}
        L0 0
    `;

  const targetPath = `
        M0  ${isMobile ? "100" : "300"}
        Q${width / 2} 0 ${width} ${isMobile ? "100" : "300"} 
        L${width} ${height}
        Q${width / 2} ${height} 0 ${height}
        L0 0
    `;

  return (
    <motion.svg
      style={{
        position: "fixed",
        height: "calc(100vh + 600px)",
        width: "100vw",
        zIndex: 70,
        fill: "#111111",
        pointerEvents: "none",
        left: 0,
        top: "-300px",
      }}
      {...anim(translate)}
    >
      <motion.path {...anim(curve(initialPath, targetPath))} />
    </motion.svg>
  );
};
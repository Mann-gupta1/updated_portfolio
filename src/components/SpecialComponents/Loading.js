"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import styles from "./Loading.module.css";

// Timings tightened from 400ms/greeting + 500ms tail (2.5s total) to 220ms + 180ms
// (~1.3s). The splash gates the hero paragraph, which IS the LCP element, so every
// millisecond here is a millisecond of Largest Contentful Paint. All five languages
// are kept — this is a pacing change, not a content cut.
const greetings = ["Hello", "नमस्ते", "Bonjour", "こんにちは", "مرحبا"];

const Loading = ({ onComplete }) => {
  const loadingContentRef = useRef(null);
  const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);
  const [allGreetingsShown, setAllGreetingsShown] = useState(false);

  // Rotate greetings every 400ms and mark when all have been shown.
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreetingIndex((prevIndex) => {
        if (prevIndex + 1 === greetings.length) {
          setAllGreetingsShown(true);
        }
        return (prevIndex + 1) % greetings.length;
      });
    }, 220);
    return () => clearInterval(interval);
  }, []);

  // Trigger onComplete when all greetings are shown.
  useEffect(() => {
    if (allGreetingsShown && onComplete) {
      // Add a small delay before completing
      setTimeout(() => {
        onComplete();
      }, 180);
    }
  }, [allGreetingsShown, onComplete]);

  // Update scale for loading content.
  useEffect(() => {
    const updateScale = () => {
      if (!loadingContentRef.current) return;
      const screenHeight = window.innerHeight;
      const screenWidth = window.innerWidth;
      let scaleValue = 1;
      if (screenHeight < 826 && screenWidth > 576) {
        scaleValue = screenHeight / 826;
      }
      loadingContentRef.current.style.zoom = `${scaleValue}`;
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return !allGreetingsShown ? (
    <motion.div
      className={styles.loadingContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Not an <h1>: this greeting renders on every route and, now that the page
          renders underneath the overlay, it was showing up as the FIRST heading in
          the document — so /case-studies advertised its H1 as "Hello". Also hidden
          from assistive tech, since it is a decorative splash. */}
      <div ref={loadingContentRef} className={styles.loadingContent} aria-hidden="true">
        <div className={styles.greeting}>
          <motion.div
            key={greetings[currentGreetingIndex]}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {greetings[currentGreetingIndex]}
          </motion.div>
        </div>
      </div>
    </motion.div>
  ) : null;
};

export default Loading;

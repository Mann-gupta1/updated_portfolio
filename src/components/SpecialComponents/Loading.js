"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import styles from "./Loading.module.css";

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
    }, 400);
    return () => clearInterval(interval);
  }, []);

  // Trigger onComplete when all greetings are shown.
  useEffect(() => {
    if (allGreetingsShown && onComplete) {
      // Add a small delay before completing
      setTimeout(() => {
        onComplete();
      }, 500);
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
      <div ref={loadingContentRef} className={styles.loadingContent}>
        <div className={styles.greeting}>
          <motion.h1
            key={greetings[currentGreetingIndex]}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {greetings[currentGreetingIndex]}
          </motion.h1>
        </div>
      </div>
    </motion.div>
  ) : null;
};

export default Loading;

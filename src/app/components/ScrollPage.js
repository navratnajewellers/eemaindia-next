"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

const ScrollPage = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  // Handle Scroll
  useEffect(() => {
    // if (typeof window === "undefined") return; // Ensure it runs only on the client

    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollRatio = maxScroll > 0 ? (scrolled / maxScroll) * 100 : 0;
      setScrollPercent(scrollRatio);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Circle properties
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const progress = (scrollPercent / 100) * circumference;

  return (
    // {/* Scroll Percentage Circle */}
    <motion.div
      className="fixed bottom-1 right-2 z-50 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <svg width="100" height="100" viewBox="0 0 100 100">
        {/* Background Circle (Gray) */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="rgba(255, 255, 255, 0.2)"
          strokeWidth="5"
          fill="none"
        />

        {/* Glow Effect */}
        <motion.filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </motion.filter>

        {/* Progress Circle (Orange + Glow) */}
        <motion.circle
          cx="50"
          cy="50"
          r={radius}
          stroke="orange"
          strokeWidth="5"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          strokeLinecap="round"
          filter="url(#glow)"
          transition={{ duration: 0.2, ease: "easeInOut" }}
        />

        {/* Scroll Percentage Text */}
        <text
          x="50"
          y="55"
          textAnchor="middle"
          fontSize="18"
          fill="orange"
          fontWeight="bold"
          onClick={() =>
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
          }
          style={{ cursor: "pointer" }}
          className="scroll-text"
        >
          {/* {Math.round(scrollPercent)}% */}
          &uarr;
          {/* BR */}
        </text>
      </svg>
    </motion.div>
  );
};

export default ScrollPage;

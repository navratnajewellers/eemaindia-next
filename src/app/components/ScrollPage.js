// "use client";

// import { useEffect, useState } from "react";
// import { motion } from "motion/react";

// const ScrollPage = () => {
//   const [scrollPercent, setScrollPercent] = useState(0);

//   // Handle Scroll
//   useEffect(() => {
//     // if (typeof window === "undefined") return; // Ensure it runs only on the client

//     const handleScroll = () => {
//       const scrolled = window.scrollY;
//       const maxScroll =
//         document.documentElement.scrollHeight - window.innerHeight;
//       const scrollRatio = maxScroll > 0 ? (scrolled / maxScroll) * 100 : 0;
//       setScrollPercent(scrollRatio);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Circle properties
//   const radius = 20;
//   const circumference = 2 * Math.PI * radius;
//   const progress = (scrollPercent / 100) * circumference;

//   return (
//     // {/* Scroll Percentage Circle */}
//     <motion.div
//       className="fixed bottom-1 right-2 z-50 "
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       <svg width="100" height="100" viewBox="0 0 100 100">
//         {/* Background Circle (Gray) */}
//         <circle
//           cx="50"
//           cy="50"
//           r={radius}
//           stroke="rgba(255, 255, 255, 0.2)"
//           strokeWidth="5"
//           fill="none"
//         />

//         {/* Glow Effect */}
//         <motion.filter id="glow">
//           <feGaussianBlur stdDeviation="3" result="coloredBlur" />
//           <feMerge>
//             <feMergeNode in="coloredBlur" />
//             <feMergeNode in="SourceGraphic" />
//           </feMerge>
//         </motion.filter>

//         {/* Progress Circle (Orange + Glow) */}
//         <motion.circle
//           cx="50"
//           cy="50"
//           r={radius}
//           stroke="orange"
//           strokeWidth="5"
//           fill="none"
//           strokeDasharray={circumference}
//           strokeDashoffset={circumference - progress}
//           strokeLinecap="round"
//           filter="url(#glow)"
//           transition={{ duration: 0.2, ease: "easeInOut" }}
//         />

//         {/* Scroll Percentage Text */}
//         <text
//           x="50"
//           y="55"
//           textAnchor="middle"
//           fontSize="18"
//           fill="orange"
//           fontWeight="bold"
//           onClick={() =>
//             window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
//           }
//           style={{ cursor: "pointer" }}
//           className="scroll-text"
//         >
//           {/* {Math.round(scrollPercent)}% */}
//           &uarr;
//           {/* BR */}
//         </text>
//       </svg>
//     </motion.div>
//   );
// };

// export default ScrollPage;

// 'use client';

// import { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import { FaArrowUp } from 'react-icons/fa';

// const ScrollPage = () => {
//   const [scrollPercent, setScrollPercent] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrolled = window.scrollY;
//       const maxScroll =
//         document.documentElement.scrollHeight - window.innerHeight;
//       const scrollRatio = maxScroll > 0 ? (scrolled / maxScroll) * 100 : 0;
//       setScrollPercent(scrollRatio);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const totalDots = 12;
//   const activeDots = Math.round((scrollPercent / 100) * totalDots);

//   return (
//     <motion.div
//       className="fixed bottom-5 right-5 z-50"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.4 }}
//     >
//       <div
//         onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//         className="relative w-[80px] h-[80px] flex items-center justify-center cursor-pointer group"
//       >
//         {/* Orbiting Dots */}
//         {Array.from({ length: totalDots }).map((_, i) => {
//           const angle = (360 / totalDots) * i;
//           const isActive = i < activeDots;
//           const x = 30 * Math.cos((angle * Math.PI) / 180);
//           const y = 30 * Math.sin((angle * Math.PI) / 180);

//           return (
//             <motion.div
//               key={i}
//               className={`absolute w-2 h-2 rounded-full ${
//                 isActive
//                   ? 'bg-gradient-to-br from-pink-500 to-orange-400 shadow-md'
//                   : 'bg-white/10'
//               }`}
//               style={{
//                 transform: `translate(${x}px, ${y}px)`,
//               }}
//               initial={{ scale: 0 }}
//               animate={{ scale: 1 }}
//               transition={{ delay: i * 0.02 }}
//             />
//           );
//         })}

//         {/* Glowing Center Button */}
//         <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-orange-400 flex items-center justify-center shadow-[0_0_20px_rgba(251,146,60,0.6)] group-hover:scale-105 transition-transform duration-200">
//           <FaArrowUp className="text-white w-5 h-5" />
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default ScrollPage;

'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

const ScrollPage = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollRatio = maxScroll > 0 ? (scrolled / maxScroll) * 100 : 0;
      setScrollPercent(scrollRatio);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalDots = 12;
  const activeDots = Math.round((scrollPercent / 100) * totalDots);

  return (
    <motion.div
      className="fixed bottom-5 right-5 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="relative w-[80px] h-[80px] flex items-center justify-center cursor-pointer group"
      >
        {/* Rotating Orbit Container */}
        <motion.div
          className="absolute w-full h-full flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
        >
          {Array.from({ length: totalDots }).map((_, i) => {
            const angle = (360 / totalDots) * i;
            const isActive = i < activeDots;
            const x = 30 * Math.cos((angle * Math.PI) / 180);
            const y = 30 * Math.sin((angle * Math.PI) / 180);

            return (
              <div
                key={i}
                className={`absolute w-2 h-2 rounded-full ${
                  isActive
                    ? 'bg-gradient-to-br from-pink-500 to-orange-400 shadow-md'
                    : 'bg-white/10'
                }`}
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                }}
              />
            );
          })}
        </motion.div>

        {/* Glowing Center Button */}
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-orange-400 flex items-center justify-center shadow-[0_0_20px_rgba(251,146,60,0.6)] group-hover:scale-105 transition-transform duration-200">
          <FaArrowUp className="text-white w-5 h-5" />
        </div>
      </div>
    </motion.div>
  );
};

export default ScrollPage;

/* eslint-disable @next/next/no-img-element */

'use client';
import { motion } from 'motion/react';

const HomeAboutSection = () => {
  return (
    <section className="relative w-full bg-white pt-10 pb-20 ">
      {/* Background Watermark Logo */}
      {/* <div className="absolute inset-0 opacity-5 z-0 pointer-events-none">
        <Image
          src="/images/company-logo.svg"
          alt="EEMA Watermark"
          fill
          className="object-contain mx-auto"
        />
      </div> */}
      <div className="absolute inset-0 opacity-5 z-0 pointer-events-none flex items-center justify-center">
        <img
          src="/images/company-logo.svg"
          alt="EEMA Watermark"
          className="w-2/3 h-auto object-contain"
        />
      </div>

      {/* Scroll Indicator */}
      {/* <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.2,
          duration: 1,
          repeat: Infinity,
          repeatType: 'loop',
          repeatDelay: 1,
        }}
        className="absolute left-1/2 bottom-6 transform -translate-x-1/2 z-20"
      >
        <div className="text-gray-500 animate-bounce text-2xl">⌄</div>
      </motion.div> */}

      {/* Content Container */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* Video Side */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <video
            src="/videos/eemaindia.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
          />
        </motion.div>

        {/* Text Side */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="home-aboutus-text-container"
        >
          <h2 className="text-5xl font-bold main-color m-b-15">About EEMA</h2>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            <strong>EEMA</strong> is an autonomous, non-profit body of
            registered companies, institutions, and professionals operating
            within India’s Events and Experiential Marketing industry.
          </p>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            The industry has observed exponential growth in the last two
            decades, with 1000+ entities across 100+ Indian cities.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>EEMA</strong> unites professionals from event management,
            brand activation, sports management, MICE, weddings, artist
            management, and more—under one national platform.
          </p>
          <a href="#" className="find-out-more">
            Find Out More
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeAboutSection;

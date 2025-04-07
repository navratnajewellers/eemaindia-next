/* eslint-disable @next/next/no-img-element */
'use client';

import { useEffect, useState } from 'react';
import EeHeader from './components/EeHeader';
import HImageSlider from './components/home/HImageSlider';
import HomeAboutSection from './components/home/HomeAboutSection';
import './styles/home.css';
import { motion } from 'motion/react';
import HomeMember from './components/home/HomeMember';
import HomePressCover from './components/home/HomePressCover';
import SubscribeSection from './components/home/SubscribeSection';
import ContactSection from './components/home/ContactSection';
import Scroll3DGallery from './components/home/Scroll3DGallery';
import HomeContact from './components/home/HomeContact';
import EeFooter from './components/EeFooter';
import ScrollPage from './components/ScrollPage';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevent rendering on the server

  return (
    <div className="home-container relative ">
      <div>
        <ScrollPage />
      </div>
      <div className="home-header-container">
        <EeHeader />
      </div>
      <div>
        <HImageSlider />
      </div>
      <div className=" relative  pb-20 ">
        <motion.section
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="home-aboutus-header"
        >
          <h3 className="special-text main-color ">Who We Are</h3>
          <p>
            Our mission is to empower and unify India’s events and experiential
            industry by fostering collaboration, setting standards, and driving
            growth across the nation’s vibrant ecosystem of event professionals
            and organizations.
          </p>
        </motion.section>
        <HomeAboutSection />
        <section className="home-aboutus-link-container custom-flex ">
          <div className="imageWrapper">
            <img src="/images/we-care-img.jpg" alt="we-care-img"></img>
          </div>
          {/* <div>
            <p>FOR SUPPORT PLEASE MAIL:</p>
            <a href="mailto:wecare@eemaindia.com">wecare@eemaindia.com</a>
          </div> */}
          <p>
            FOR SUPPORT PLEASE MAIL:{' '}
            <a href="mailto:wecare@eemaindia.com">wecare@eemaindia.com</a>
          </p>
        </section>

        {/* Scroll Indicator */}
        <motion.div
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
          <div className="text-gray-500 animate-bounce text-2xl">
            <a href="#member" style={{ all: 'unset', cursor: 'pointer' }}>
              ⌄
            </a>
          </div>
        </motion.div>
      </div>

      <div id="member">
        <HomeMember />
      </div>

      <div>
        <HomePressCover />
      </div>

      <div>
        <SubscribeSection />
      </div>

      <div>
        <HomeContact />
      </div>

      <footer>
        <EeFooter />
      </footer>

      {/* <div>
        <ContactSection />
      </div> */}

      {/* <div>
        <Scroll3DGallery />
      </div> */}
    </div>
  );
}

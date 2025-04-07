/* eslint-disable @next/next/no-img-element */
'use client';

import { Breadcrumb } from 'rsuite';
import EeFooter from '../components/EeFooter';
import EeHeader from '../components/EeHeader';
import { motion } from 'motion/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ScrollPage from '../components/ScrollPage';

export default function AboutUsPage() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
  };

  const slides = [
    {
      id: 1,
      img: '/images/aboutus/5cb83efcee90fyXDfyjmnIt.jpeg',
      alt: 'Slide 1',
    },
    {
      id: 2,
      img: '/images/aboutus/5cb83f483607cvxozanWZEU.jpeg',
      alt: 'Slide 2',
    },
    {
      id: 3,
      img: '/images/aboutus/5cb83f6ca1a95toWj3nMEgM.jpeg',
      alt: 'Slide 3',
    },
    {
      id: 4,
      img: '/images/aboutus/5cb83f9c74c4br3czzdY4OX.jpeg',
      alt: 'Slide 4',
    },
  ];

  return (
    <div>
      <div>
        <ScrollPage />
      </div>
      <div>
        <EeHeader />
      </div>

      {/* Hero Section */}
      <section className="breadcumb-container ">
        <img
          src="/images/banner-image.jpeg"
          alt="banner-image"
          className="breadcumb-bg"
        ></img>
        <div className=" bc-header ">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold mb-4"
          >
            About EEMA
          </motion.h1>
        </div>
        <Breadcrumb className="bc-content">
          <Breadcrumb.Item href="/" className="bc-non-active">
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item active className="bc-active">
            About Us
          </Breadcrumb.Item>
        </Breadcrumb>
      </section>

      {/* Navigation Tabs (Scrollspy Style) */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm py-3 border-b border-gray-200">
        <div className="flex justify-center gap-8 font-medium about-nav-menu-container ">
          <a href="/aboutus">About</a>
          <a href="#leadership">Leadership</a>
          <a href="#code">HR Code</a>
          <a href="#resources">White Papers</a>
        </div>
      </nav>

      {/* About Section */}

      <section className="about-sec1-container relative ">
        <motion.h2
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="main-color"
        >
          About EEMA
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          EEMA is an autonomous, non-profit body of registered companies,
          institutions and professionals that operate within India’s Events and
          Experiential marketings industry. The Industry has observed an
          exponential growth in the past two decades with more than 1000
          entities operating in various levels and segments that are spread
          across 100+ Indian cities.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          The only body of it’s kind, EEMA seeks to bring together the leading
          Event management, Brand Activation, Sports management, MICE, Wedding
          planners, Experiential marketers, Entertainment professionals, Artist
          management companies and their international counterparts on a single,
          convenient platform.
        </motion.p>
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
          <div className="text-gray-500 animate-bounce text-2xl">
            <a href="#eemaindia" style={{ all: 'unset', cursor: 'pointer' }}>
              ⌄
            </a>
          </div>
        </motion.div> */}
      </section>

      {/* <section id="eemaindia" className="about-sec2-container">
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
            className=" shadow-xl w-full h-[590px] object-cover"
          />
        </motion.div>
      </section> */}

      <section className="about-sec3-container">
        <motion.p
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          EEMA is the first and only body of its kind, which seeks to bring
          together the country’s leading Event Management, Sports Management and
          Brand Activation companies, MICE and Wedding Planners, Experiential
          Marketers, Entertainment Professionals, Artist Management Companies
          and International counterparts on the same platform.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          EEMA today is the only national association with a unified voice that
          leads dialogue within its members and with government, Statutory
          Bodies, Taxation Authorities, Private and Municipal Licensing Bodies,
          Corporate Industry, Vendors and Artists.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          EEMA is setting Industry Standards that guide its members and has
          prescribed a Code of Conduct for its members and their employees.
        </motion.p>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-2/3 about-sec4-container "
      >
        <Slider {...settings}>
          {slides.map(slide => (
            <div key={slide.id} className="w-screen h-[400px] ">
              <img
                src={slide.img}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </Slider>
      </motion.section>

      <section className="about-sec3-container">
        <motion.p
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Over the years, EEMA has also been instrumental in organizing the
          coming together of industry stakeholders at its annual convention
          EEMAGINE and has instituted EEMAX, the industry premier Award Ceremony
          to recognise excellence in the event and experiental marketing space.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Since its incorporation in 2008, EEMA has rapidly grown in membership
          to include all significant organised players across the length and
          breadth of the country, and it is estimated that close to 80% of the
          organized revenue in this space, is represented through EEMA members.
        </motion.p>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="about-sec5-container"
      >
        <a href="#">
          <div className="imageWrapper">
            <img src="/images/raj-bg-img.png" alt="raj-bg-img"></img>
          </div>
        </a>
        <a href="#">
          <div className="imageWrapper">
            <img src="/images/we-care-img.jpg" alt="we-care-img"></img>
          </div>
        </a>
      </motion.section>

      <footer>
        <EeFooter />
      </footer>
    </div>
  );
}

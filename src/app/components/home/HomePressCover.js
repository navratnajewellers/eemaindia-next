/* eslint-disable @next/next/no-img-element */
'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'motion/react';
import { Card, Tag, TagGroup } from 'rsuite';

const HomePressCover = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  const slides = [
    {
      id: 1,
      image: '/images/news/news1.webp',
      name: 'Event Community Steps forward for Covid Assistance',
      date: 'May 30, 2021 | Media',
      link: 'https://www.dailypioneer.com/2021/business/event-community-steps-forward-for-covid-assistance.html',
    },
    {
      id: 2,
      image: '/images/news/news2.webp',
      name: 'Live experience doesn’t always translate in virtual events: Roshan Abbas',
      date: 'May 29, 2021 | Media',
      link: 'https://www.thestatesman.com/entertainment/theatre/live-experience-doesnt-always-translate-virtual-events-roshan-abbas-1502969711.html',
    },
    {
      id: 3,
      image: '/images/news/news3.webp',
      name: 'EEMA joins Covid Relief Efforts',
      date: 'May 27, 2021 | Media',
      link: 'https://www.livemint.com/industry/media/eema-joins-covid-relief-efforts-11622090703730.html',
    },
    {
      id: 4,
      image: '/images/news/news4.webp',
      name: 'EEMA initiates 24-hour helpline to assist with refilling oxygen cylinders in Delhi',
      date: 'May 06, 2021 | Media',
      link: 'https://www.newindianexpress.com/cities/delhi/2021/may/05/24-hour-helpline-to-assist-with-refilling-oxygen-cylinders-in-delhi-2298612.html',
    },
    {
      id: 5,
      image: '/images/news/news5.webp',
      name: 'This 24-Hour Oxygen Helpline Is Proving To Be A Savior For Covid Patients In Delhi-NCR',
      date: 'May 06, 2021 | Media',
      link: 'https://news.abplive.com/news/india/this-24-hour-oxygen-helpline-is-proving-to-be-a-savior-for-covid-patients-in-delhi-ncr-1457177',
    },
    {
      id: 6,
      image: '/images/news/news6.webp',
      name: 'Event Industry’s Covid-SOS Service Addressing 1000 Critical Queries Daily With 50-60% Success Ratio',
      date: 'May 01, 2021 | Media',
      link: 'http://everythingexperiential.businessworld.in/article/Event-Industry-s-Covid-SOS-Service-Addressing-1000-Critical-Queries-Daily-With-50-60-Success-Ratio/01-05-2021-388325/',
    },
    {
      id: 7,
      image: '/images/news/news7.webp',
      name: 'With 5 Cr People Dependent On Event Industry, The Government Needs To Hear Us Now',
      date: 'Apr 22, 2021 | Media',
      link: 'http://everythingexperiential.businessworld.in/article/With-5-Cr-People-Dependent-On-Event-Industry-The-Government-Needs-To-Hear-Us-Now-/22-04-2021-387387/',
    },
    {
      id: 8,
      image: '/images/news/news8.webp',
      name: 'Live Events Sector braces for tough times ahead as infections rise',
      date: 'Apr 13, 2021 | Media',
      link: 'https://www.livemint.com/news/india/rising-covid-cases-curfews-hit-live-events-again-11618215000753.html',
    },
  ];

  return (
    <div className="home-press-container">
      <div className="home-press-heading">
        <motion.h3
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className=" text-center main-color special-text "
        >
          Press Coverage
        </motion.h3>
        <motion.h5
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className=" text-center pl-10 pr-10 pt-4 "
        >
          Highlighting our journey through the lens of leading media outlets —
          discover how we&apos;re making waves in the events and experiential
          industry.
        </motion.h5>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className=" custom-flex  home-press-content-container "
      >
        <Slider {...settings} className="w-4/5">
          {slides.map(data => (
            <div key={data.id} className="home-press-content">
              <Card
                width={320}
                shaded
                as="a"
                href={data.link}
                className="home-press-card"
              >
                <img
                  src={data.image}
                  alt={data.name}
                  className="home-press-image"
                />
                <Card.Header as="h5">{data.name}</Card.Header>
                <Card.Body></Card.Body>
                <Card.Footer>
                  <TagGroup>
                    <Tag size="sm">{data.date}</Tag>
                  </TagGroup>
                </Card.Footer>
              </Card>
            </div>
          ))}
        </Slider>
      </motion.div>
    </div>
  );
};

export default HomePressCover;

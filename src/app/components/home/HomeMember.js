/* eslint-disable @next/next/no-img-element */
'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Tooltip, Whisper } from 'rsuite';
import { motion } from 'motion/react';

const HomeMember = () => {
  const settings = {
    dots: true,
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
      image: '/images/teams/6320700b4c86evbt9GTwvGG.jpeg',
      name: 'Samit Garg',
      company: 'E Factor Experiences Limited',
      post: 'President',
      link: 'https://www.linkedin.com/in/samit-garg-5735598/',
    },
    {
      id: 2,
      image: '/images/teams/6321636da98a5iaAlyk0Hne.jpeg',
      name: 'PVN Vidyasagar',
      company: 'Catpro Events',
      post: 'Executive Vice President',
      link: 'https://www.linkedin.com/in/sagar-pingali-7831425/',
    },
    {
      id: 3,
      image: '/images/teams/66d067b7cd531o9FfLkFN4G.jpeg',
      name: 'Ankur Kalra',
      company: 'Vibgyor Brand Services',
      post: 'General Secretary',
      link: 'https://in.linkedin.com/in/kalraankur',
    },
    {
      id: 4,
      image: '/images/teams/66d06bd6dc4b0WYr0gjPeva.jpeg',
      name: 'Taranbir Sahni',
      company: 'White Horse Event Management',
      post: 'Secretary',
      link: 'https://in.linkedin.com/in/taranbir-sahni-3b45a215',
    },
    {
      id: 5,
      image: '/images/teams/66d06bacae4e6qsvFAT5inv.jpeg',
      name: 'Jagmohan Singh',
      company: 'TNBT Marketing Services Pvt. Ltd.',
      post: 'Treasurer',
      link: 'https://in.linkedin.com/in/jagmohan-singh-b69077a',
    },
    {
      id: 6,
      image: '/images/teams/66d06d6501e98j02SjdaOfl.jpeg',
      name: 'Ruchin Kohli',
      company: 'Occasion Experts Pvt. Ltd.',
      post: 'Vice President - North',
      link: 'https://in.linkedin.com/in/ruchin-kohli-807961167',
    },
    {
      id: 7,
      image: '/images/teams/632165e018745QS1P1TeH6b.jpeg',
      name: 'DV Vinod Gopal',
      company: 'Red Chariots Event Management & Marketing',
      post: 'Vice President - South',
      link: 'https://www.linkedin.com/in/d-v-vinod-gopal-80784321/',
    },
    {
      id: 8,
      image: '/images/teams/66d06f1549585lGSzXzedo7.jpeg',
      name: 'Harshal Kothari',
      company: 'Rising Events',
      post: 'Vice President - West',
      link: 'https://in.linkedin.com/in/harshal-kothari',
    },
    {
      id: 9,
      image: '/images/teams/632166ed25b67MfcUIxLlpf.jpeg',
      name: 'Sonu Nanda',
      company: 'Prelude Novel Ventures',
      post: 'Vice President - East',
      link: 'https://www.linkedin.com/in/sonu-nanda-4a951527/',
    },
  ];

  return (
    <div className="home-member-container">
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className=" custom-flex pt-16 pb-20  "
      >
        <h3 className=" special-text ">National Executive Committee</h3>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="home-m-slider-container custom-flex "
      >
        <Slider {...settings} className="w-4/5">
          {slides.map(slide => (
            <div key={slide.id} className=" home-m-s-content-container ">
              <Whisper followCursor speaker={<Tooltip>{slide.name}</Tooltip>}>
                <div className="imageWrapper">
                  <img src={slide.image} alt={slide.name}></img>
                </div>
              </Whisper>
              <div>
                <h4>
                  <a href={slide.link}>{slide.name}</a>
                </h4>
                <h5>{slide.company}</h5>
                <p>{slide.post}</p>
              </div>
            </div>
          ))}
        </Slider>
      </motion.div>
      <div className=" custom-flex pt-4 pb-4 " style={{ marginTop: '45px' }}>
        <a href="#" className="find-out-more">
          Find out More
        </a>
      </div>
    </div>
  );
};

export default HomeMember;

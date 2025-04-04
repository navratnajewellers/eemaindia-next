'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

/* eslint-disable @next/next/no-img-element */
export default function HImageSlider() {
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
    { id: 1, img: '/images/slider1.png', alt: 'Slide 1' },
    { id: 2, img: '/images/slider2.jpg', alt: 'Slide 2' },
    { id: 3, img: '/images/slider3.jpeg', alt: 'Slide 3' },
  ];

  return (
    <div className="w-full">
      <Slider {...settings}>
        {slides.map(slide => (
          <div key={slide.id} className="w-screen h-[600px] ">
            <img
              src={slide.img}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

const images = [
  { src: '/images/slider1.png', text: 'Text for Image 1' },
  { src: '/images/slider2.jpg', text: 'Text for Image 2' },
  { src: '/images/slider3.jpeg', text: 'Text for Image 3' },
];

export default function ThreeDCarousel() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-3xl font-bold mb-6">3D Image Carousel</h2>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: false,
        }}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Navigation, Pagination]}
        className="w-[80%] max-w-[500px]"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className="flex flex-col items-center">
            <Image
              src={img.src}
              alt={`Slide ${index + 1}`}
              width={500}
              height={350}
              className="rounded-lg shadow-lg"
            />
            <p className="text-lg font-semibold mt-4">{img.text}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Scroll3DGallery = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const rotateY = useTransform(scrollYProgress, [0, 1], ['-45deg', '45deg']);

  const images = [
    '/images/news/news1.webp',
    '/images/news/news2.webp',
    '/images/news/news3.webp',
    '/images/news/news4.webp',
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-zinc-900 p-20">
      <div
        ref={ref}
        className="grid grid-cols-2 md:grid-cols-3 gap-10 w-full max-w-6xl"
      >
        {images.map((img, index) => (
          <motion.img
            key={index}
            src={img}
            alt={`Gallery ${index}`}
            className="rounded-2xl shadow-xl object-cover h-80 w-full"
            style={{ rotateY }}
            whileHover={{ scale: 1.05, rotateY: 10 }}
          />
        ))}
      </div>
    </section>
  );
};

export default Scroll3DGallery;

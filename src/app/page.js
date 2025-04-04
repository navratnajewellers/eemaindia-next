'use client';

import { useEffect, useState } from 'react';
import EeHeader from './components/EeHeader';
import HImageSlider from './components/home/HImageSlider';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevent rendering on the server

  return (
    <div className="home-container relative ">
      <div className="home-header-container">
        <EeHeader />
      </div>
      <div>
        <HImageSlider />
      </div>
    </div>
  );
}

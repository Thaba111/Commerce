import React, { useState } from 'react';
import Carousel from '../components/Carousel'; // Ensure correct path
import HeroSection from '../components/HeroSection';
import ProductsSection from '../components/ProductsSection'; // Ensure correct path

function Home() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <>
      <HeroSection />
      <Carousel />
      <ProductsSection cartCount={cartCount} setCartCount={setCartCount} />
      
    </>
  );
}

export default Home;

// src/components/HeroSection.js
import React from 'react';

function HeroSection() {
  return (
    <section
      className="bg-cover bg-center h-96"
      style={{ backgroundImage: "url('/images/man&woman.jpg')" }}
    >
      <div className="container mx-auto h-full flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Step into Comfort with Rafiki Footwear</h1>
          <p className="mt-4 text-lg">Discover our latest collection of stylish and comfortable sandals.</p>
          <a href="/shop-now" className="mt-6 inline-block bg-blue-600 text-white py-2 px-4 rounded">Shop Now</a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

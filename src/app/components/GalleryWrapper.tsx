'use client';

import React from 'react';
import Gallery from './Gallery';

const GalleryWrapper = () => {
  const images = [
    '/img6.jpg',
    '/img5.jpg',
    '/img3.avif',
    '/img4.jpg',
    '/img2.avif',
  ];

  return (
    <section className="w-full">
      {/* Remove padding & margins */}
      <Gallery images={images} />
    </section>
  );
};

export default GalleryWrapper;

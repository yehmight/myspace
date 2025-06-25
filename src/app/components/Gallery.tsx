// app/components/Gallery.tsx

import React from 'react';
import Image from 'next/image';

interface GalleryProps {
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  if (!images || images.length < 5) {
    return <p className="text-red-500">At least 5 images are required.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
      {/* First column with one large image */}
      <div className="relative w-full h-[400px]">
        <Image
          src={images[0]}
          alt="Image 1"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Second column with two stacked images */}
      <div className="flex flex-col">
        <div className="relative w-full h-[200px]">
          <Image src={images[1]} alt="Image 2" fill className="object-cover" />
        </div>
        <div className="relative w-full h-[200px]">
          <Image src={images[2]} alt="Image 3" fill className="object-cover" />
        </div>
      </div>

      {/* Third column with two stacked images */}
      <div className="flex flex-col">
        <div className="relative w-full h-[200px]">
          <Image src={images[3]} alt="Image 4" fill className="object-cover" />
        </div>
        <div className="relative w-full h-[200px]">
          <Image src={images[4]} alt="Image 5" fill className="object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;

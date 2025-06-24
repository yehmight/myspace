// app/components/Gallery.tsx
import React from 'react';

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
      <div>
        <img src={images[0]} alt="Image 1" className="w-full h-full object-cover" />
      </div>

      {/* Second column with two stacked images */}
      <div className="flex flex-col">
        <img src={images[1]} alt="Image 2" className="w-full object-cover" />
        <img src={images[2]} alt="Image 3" className="w-full object-cover" />
      </div>

      {/* Third column with two stacked images */}
      <div className="flex flex-col">
        <img src={images[3]} alt="Image 4" className="w-full object-cover" />
        <img src={images[4]} alt="Image 5" className="w-full object-cover" />
      </div>
    </div>
  );
};

export default Gallery;

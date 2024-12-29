import React from 'react';
import { motion } from 'framer-motion';
import PhotoCard from '../components/gallery/PhotoCard';
import { photos } from '../data/photos';

const PhotoGallery = () => {
  return (
    <div className="min-h-screen bg-pink-50 py-8 md:py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-pink-600 mb-8 md:mb-12">
        Our Beautiful Moments
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto">
        {photos.map((photo, index) => (
          <PhotoCard key={index} photo={photo} index={index} />
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
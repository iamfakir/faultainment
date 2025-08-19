'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import ImageModal from '../components/ImageModal';

const Rotr25Page = () => {
  const [imageFilenames, setImageFilenames] = useState<string[]>([]);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [error, setError] = useState<string | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isGridLayout, setIsGridLayout] = useState<boolean>(false);
  const [imagePositions, setImagePositions] = useState<any[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch('/api/rotr25/images');
        if (!res.ok) {
          throw new Error('Failed to fetch images');
        }
        const data = await res.json();
        setImageFilenames(data.images);

        // Generate random positions and sizes once
        const positions = data.images.map(() => ({
          top: (Math.random() * 85),
          left: 10 + (Math.random() * 60),
          rotation: (Math.random() - 0.5) * 30,
          width: 180 + Math.random() * 120,
          height: 180 + Math.random() * 120,
        }));
        setImagePositions(positions);

      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        }
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '-1');
            if (index !== -1) {
              setLoadedImages((prev) => new Set([...prev, index]));
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { rootMargin: '0px', threshold: 0.1 } // Load when 10% of image is visible
    );

    // Observe each image container
    document.querySelectorAll('.image-container').forEach((container) => {
      observer.observe(container);
    });

    return () => observer.disconnect();
  }, [imageFilenames]); // Re-observe when imageFilenames change

  const openModal = useCallback((index: number) => {
    setSelectedImageIndex(index);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedImageIndex(null);
  }, []);

  const goToNextImage = useCallback(() => {
    setSelectedImageIndex((prevIndex) => {
      if (prevIndex === null) return null;
      return (prevIndex + 1) % imageFilenames.length;
    });
  }, [imageFilenames]);

  const goToPrevImage = useCallback(() => {
    setSelectedImageIndex((prevIndex) => {
      if (prevIndex === null) return null;
      return (prevIndex - 1 + imageFilenames.length) % imageFilenames.length;
    });
  }, [imageFilenames]);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="relative w-full min-h-screen bg-black pt-24 md:pt-32 flex flex-col justify-between">

      <div className={`relative w-full p-4 md:p-8 flex-grow ${isGridLayout ? 'grid grid-cols-2 md:grid-cols-4 gap-4' : 'overflow-auto h-[calc(100vh-200px)]'}`}>
        {imageFilenames.map((filename, index) => {
          const isLoaded = loadedImages.has(index);
          const { top, left, rotation, width, height } = imagePositions[index] || {};

          return (
            <div
              key={index}
              data-index={index} // Add data-index for Intersection Observer
              className={`image-container transform-gpu transition-all duration-500 hover:scale-110 ${isGridLayout ? 'relative w-full h-auto' : 'absolute'}`}
              style={isGridLayout ? {} : {
                top: `${top}%`,
                left: `${left}%`,
                transform: `rotate(${rotation}deg)`,
                width: `${width}px`,
                height: `${height}px`,
              }}
            >
              <Image
                src={`/rotr25/images/${filename}`}
                alt={filename}
                fill
                style={{ objectFit: 'contain' }}
                className={`rounded-lg shadow-lg transition-all duration-700 ${
                  isLoaded ? 'blur-0' : 'blur-md'
                }`}
                quality={isLoaded ? 100 : 20}
                onError={(e) => {
                  console.error('Image failed to load:', filename);
                }}
                onClick={(e) => {
                  e.stopPropagation(); // Prevent click from propagating to parent div
                  openModal(index);
                }}
              />
            </div>
          );
        })}
      </div>

      <div className="fixed bottom-0 left-0 right-0 flex justify-center p-4 bg-black bg-opacity-75 z-50">
        <button
          onClick={() => setIsGridLayout(!isGridLayout)}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          Arrange Photos
        </button>
      </div>

      {selectedImageIndex !== null && (
        <ImageModal
          src={`/rotr25/images/${imageFilenames[selectedImageIndex]}`}
          alt={imageFilenames[selectedImageIndex]}
          onClose={closeModal}
          onNext={goToNextImage}
          onPrev={goToPrevImage}
          hasPrev={selectedImageIndex > 0}
          hasNext={selectedImageIndex < imageFilenames.length - 1}
        />
      )}
    </div>
  );
};

export default Rotr25Page;
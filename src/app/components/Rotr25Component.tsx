'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import ImageModal from './ImageModal';

interface Rotr25ComponentProps {
  onBack: () => void;
}

const Rotr25Component = ({ onBack }: Rotr25ComponentProps) => {
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

        // Generate random positions and sizes once - ensure they fit within viewport
        const positions = data.images.map(() => {
          const maxWidth = 120; // Further reduced max width
          const maxHeight = 120; // Further reduced max height
          const width = 60 + Math.random() * (maxWidth - 60); // Smaller base width
          const height = 60 + Math.random() * (maxHeight - 60); // Smaller base height
          
          return {
            top: Math.random() * 70, // Reduced range for vertical positioning
            left: 15 + (Math.random() * 50), // Reduced range for horizontal positioning, shifted right
            rotation: (Math.random() - 0.5) * 15, // Even more reduced rotation
            width,
            height,
          };
        });
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
            if (index >= 0) {
              setLoadedImages((prev) => new Set([...prev, index]));
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    const imageElements = document.querySelectorAll('.image-container');
    imageElements.forEach((el) => observer.observe(el));

    return () => {
      imageElements.forEach((el) => observer.unobserve(el));
    };
  }, [imageFilenames]);

  // Cleanup effect to restore body overflow when component unmounts
  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

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
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="absolute top-4 left-4 z-50 text-white text-sm px-4 py-2 bg-gray-800 hover:bg-gray-700 transition-colors"
      >
        &larr; Back to Archive
      </button>
      <div className={`rotr25-container relative w-full h-[100vh] p-4 ${isGridLayout ? 'grid grid-cols-2 md:grid-cols-4 gap-2 overflow-auto' : 'overflow-hidden'}`}>
        {imageFilenames.map((filename, index) => {
          const isLoaded = loadedImages.has(index);
          const { top, left, rotation, width, height } = imagePositions[index] || {};

          return (
            <div
              key={index}
              data-index={index}
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
                  e.stopPropagation();
                  openModal(index);
                }}
              />
            </div>
          );
        })}
      </div>

      {/* Arrange Photos button */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-50">
        <button
          onClick={() => setIsGridLayout(!isGridLayout)}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          {isGridLayout ? 'Scatter Photos' : 'Arrange Photos'}
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

export default Rotr25Component;
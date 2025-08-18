'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface ImageModalProps {
  src: string;
  alt: string;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}

const ImageModal: React.FC<ImageModalProps> = ({
  src,
  alt,
  onClose,
  onNext,
  onPrev,
  hasPrev,
  hasNext,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
    return () => setIsOpen(false);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'ArrowRight') {
        onNext();
      } else if (event.key === 'ArrowLeft') {
        onPrev();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, onNext, onPrev]);

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
      onClick={handleOverlayClick}
    >
      <div ref={modalRef} className={`relative max-w-4xl max-h-full p-4 transition-transform duration-300 ${isOpen ? 'scale-100' : 'scale-95'}`}>
        <button
          className="absolute top-2 right-2 text-white text-3xl font-bold z-10"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="relative w-[80vw] h-[80vh]">
          <Image
            src={src}
            alt={alt}
            fill
            style={{ objectFit: 'contain' }}
            className="rounded-lg shadow-lg"
          />
        </div>
        <button
          className={`absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-5xl font-bold ${!hasPrev ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={onPrev}
          disabled={!hasPrev}
        >
          &lsaquo;
        </button>
        <button
          className={`absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-5xl font-bold ${!hasNext ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={onNext}
          disabled={!hasNext}
        >
          &rsaquo;
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
'use client';

import { useState, useEffect } from 'react';
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) { // Adjust this value as needed
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header className={`fixed top-0 w-full flex items-center justify-between px-6 py-4 z-50 pointer-events-none select-none transition-all duration-300 ${scrolled ? 'border-b border-gray-800 bg-black bg-opacity-20' : ''}`}>
      {/* Left section */}
      <div className="flex flex-col items-start w-1/3">
        <Link href="/" className="text-lg md:text-xl font-bold font-headline tracking-wider uppercase drop-shadow pointer-events-auto">
          FAULTAINMENT*
        </Link>
      </div>
      <nav className="flex flex-row justify-center space-x-8 w-1/3 pointer-events-auto">
        <Link href="/shop" className="text-sm text-white/60 hover:text-white transition-colors">Shop</Link>
        <Link href="/discography" className="text-sm text-white/60 hover:text-white transition-colors">Discography</Link>
        <Link href="/presskit" className="text-sm text-white/60 hover:text-white transition-colors">Presskit</Link>
        <Link href="/archive" className="text-sm text-white/60 hover:text-white transition-colors">Archive</Link>
      </nav>
      <div className="w-1/3 flex justify-end">
        <a href="#" className="text-sm text-white/60 hover:text-white transition-colors pointer-events-auto">
          Have a key?
        </a>
      </div>
    </header>
  );
}
'use client';

import { useState, useEffect } from 'react';
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) { // Adjust this value as needed
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header
      className={`fixed top-0 z-50 w-full flex items-center justify-between px-6 py-4 transition-all duration-300 ease-in-out ${isScrolled ? "bg-black shadow-lg" : "bg-transparent"}`}
    >
      {/* Left section */}
      <div className="flex flex-col items-start w-1/3">
        <Link href="/" className="text-lg md:text-xl font-bold font-headline tracking-wider uppercase drop-shadow pointer-events-auto">
          FAULTAINMENT*
        </Link>
      </div>
      <nav className="hidden md:flex flex-row justify-center space-x-8 w-1/3 pointer-events-auto">
        <Link href="/shop" className="text-sm text-white/60 hover:text-white transition-colors">Shop</Link>
        <Link href="/discography" className="text-sm text-white/60 hover:text-white transition-colors">Discography</Link>
        <Link href="/presskit" className="text-sm text-white/60 hover:text-white transition-colors">Presskit</Link>
        <Link href="/archive" className="text-sm text-white/60 hover:text-white transition-colors">Archive</Link>
      </nav>
      <div className="hidden md:flex w-1/3 justify-end">
        <a href="#" className="text-sm text-white/60 hover:text-white transition-colors pointer-events-auto">
          Have a key?
        </a>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden flex items-center w-1/3 justify-end">
        <button onClick={toggleMobileMenu} className="text-white focus:outline-none pointer-events-auto">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black bg-opacity-90 border-b border-gray-800 py-4 flex flex-col items-center space-y-4 pointer-events-auto">
          <Link href="/shop" className="text-white hover:text-white/80 transition-colors" onClick={toggleMobileMenu}>Shop</Link>
          <Link href="/discography" className="text-white hover:text-white/80 transition-colors" onClick={toggleMobileMenu}>Discography</Link>
          <Link href="/presskit" className="text-white hover:text-white/80 transition-colors" onClick={toggleMobileMenu}>Presskit</Link>
          <Link href="/archive" className="text-white hover:text-white/80 transition-colors" onClick={toggleMobileMenu}>Archive</Link>
          <a href="#" className="text-white hover:text-white/80 transition-colors" onClick={toggleMobileMenu}>
            Have a key?
          </a>
        </div>
      )}

    </header>
  );
}
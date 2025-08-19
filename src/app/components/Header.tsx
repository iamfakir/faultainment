'use client';

import { useState, useEffect, useRef } from 'react';
import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  // Navigation links
  const navLinks = [
    { href: '/shop', label: 'Shop' },
    { href: '/discography', label: 'Discography' },
    { href: '/presskit', label: 'Presskit' },
    { href: '/rotr25', label: 'Archive' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ease-out ${
          isScrolled 
            ? 'bg-black/95 backdrop-blur-md shadow-xl py-3' 
            : 'bg-transparent py-4'
        }`}
        style={{
          transitionProperty: 'background-color, transform, box-shadow, padding',
          willChange: 'transform'
        }}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="text-xl font-bold font-headline tracking-wider uppercase hover:text-primary transition-colors"
              aria-label="Faultainment Home"
            >
              FAULTAINMENT*
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors relative group ${
                  pathname === link.href 
                    ? 'text-white' 
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {link.label}
                <span 
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${
                    pathname === link.href ? 'w-full' : ''
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Auth/Language/Theme Toggles */}
          <div className="hidden md:flex items-center space-x-6">
            <a 
              href="#" 
              className="text-sm font-medium text-white/60 hover:text-white transition-colors"
              aria-label="Access key login"
            >
              Have a key?
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="p-2 -mr-2 text-white hover:text-primary transition-colors focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div 
        ref={mobileMenuRef}
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-md transform transition-all duration-300 ease-in-out overflow-y-auto ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden`}
        style={{
          paddingTop: '5rem',
          willChange: 'transform'
        }}
      >
        <div className="container mx-auto px-4 py-8">
          <nav className="flex flex-col space-y-6" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-2xl font-medium transition-colors ${
                  pathname === link.href 
                    ? 'text-primary' 
                    : 'text-white/80 hover:text-white'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a 
              href="#" 
              className="text-2xl font-medium text-white/80 hover:text-white transition-colors mt-8 inline-flex items-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Have a key?
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
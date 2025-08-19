'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Rotr25Component from '../components/Rotr25Component';

export default function Archive() {
  const [isLoading, setIsLoading] = useState(true);
  const [showRotr25, setShowRotr25] = useState(false);
  
  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const archiveItems = [
    { id: 6, title: 'ROTR FALL 2025', date: 'FALL 2025', link: '/rotr25' },
  ];

  const handleRotr25Click = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowRotr25(true);
  };

  const handleBackToArchive = () => {
    setShowRotr25(false);
  };
  
  if (showRotr25) {
    return <Rotr25Component onBack={handleBackToArchive} />;
  }

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <header className="p-4 text-center border-b border-gray-800">
        <Link href="/" className="inline-block mb-4">
          <img src="/images/logo.svg" alt="FAULTAINMENT*" className="h-12" />
        </Link>
      </header>
      
      <main className="flex-grow p-4 md:p-8 max-w-4xl mx-auto w-full">
        <h2 className="text-4xl md:text-6xl font-headline mb-8 glitch" data-text="ARCHIVE">ARCHIVE</h2>
        
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-pulse text-brand-red text-xl">LOADING ARCHIVES...</div>
          </div>
        ) : (
          <div className="space-y-6">
            {archiveItems.map((item) => (
              <div 
                key={item.id} 
                className="border border-gray-800 p-4 hover:border-brand-red transition-colors group"
              >
                <Link href={item.link} className="block" onClick={item.id === 6 ? handleRotr25Click : undefined}>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <h3 className="text-xl md:text-2xl font-bold group-hover:text-brand-red transition-colors">
                      {item.title}
                    </h3>
                    <span className="text-gray-400 text-sm md:text-base">{item.date}</span>
                  </div>
                  <div className="mt-2 flex justify-between items-center">
                    <span className="text-sm text-gray-500">VIEW DETAILS</span>
                    <span className="text-brand-red group-hover:translate-x-2 transition-transform">→</span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </main>
      
      <footer className="p-4 text-center border-t border-gray-800">
        <p>&copy; {new Date().getFullYear()} FAULTAINMENT*. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
}
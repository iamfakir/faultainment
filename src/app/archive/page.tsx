'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Archive() {
  const [isLoading, setIsLoading] = useState(true);
  
  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const archiveItems = [
    { id: 1, title: 'OPIUM COLLECTION', date: 'FALL 2023', link: '/shop' },
    { id: 2, title: 'FAULT KAI EXCLUSIVE', date: 'SUMMER 2023', link: '#' },
    { id: 3, title: 'VOID SERIES', date: 'SPRING 2023', link: '#' },
    { id: 4, title: 'RED ROOM SHOW', date: 'WINTER 2022', link: '/show' },
    { id: 5, title: 'GENESIS DROP', date: 'FALL 2022', link: '#' },
  ];
  
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <header className="p-4 text-center border-b border-gray-800">
        <Link href="/" className="inline-block mb-4">
          <h1 className="text-2xl font-headline tracking-widest">FAULTAINMENT</h1>
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
                <Link href={item.link} className="block">
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
        <p>&copy; {new Date().getFullYear()} FAULTAINMENT. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
}
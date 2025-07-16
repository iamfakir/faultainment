"use client"
import Link from 'next/link';

const ShowPage = () => {
  return (
    <div className="bg-black text-white min-h-screen font-mono">
      <header className="fixed top-0 left-0 w-full p-4 flex justify-between items-center z-10">
        <Link href="/" className="text-2xl font-bold">FAULTAINMENT</Link>
        <nav className="flex space-x-4">
          <Link href="/shop" className="hover:text-brand-red transition-colors">SHOP</Link>
          <Link href="/show" className="hover:text-brand-red transition-colors">SHOW</Link>
          <Link href="/archive" className="hover:text-brand-red transition-colors">ARCHIVE</Link>
        </nav>
      </header>

      <main className="pt-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center glitch" data-text="THE RED ROOM" style={{ color: '#ff0000', background: 'black', letterSpacing: '0.1em', textShadow: '0 0 20px #ff0000, 0 0 40px #ff0000' }}>
          THE RED ROOM
        </h1>
        <RailwayTimer />
        <p className="mt-4 text-lg animate-pulse">UPCOMING SHOW // 9.8.2024 // EXCLUSIVE PERFORMANCE BY FAULT KAI</p>

        <div className="mt-8">
          <button 
            className="px-12 py-6 bg-black border-2 border-red-500 text-red-500 font-bold text-3xl md:text-4xl cursor-not-allowed opacity-60 relative group transition-all"
            disabled
            title="Tickets will opening soon"
          >
            GET TICKETS
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-red-500 text-black text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-mono">
              Tickets will opening soon
            </span>
          </button>
        </div>

        <div className="mt-12 border-t-2 border-red-500 pt-8">
          <h2 className="text-4xl font-bold">LINEUP</h2>
          <ul className="mt-4 text-xl space-y-2">
            <li className="animate-fade-in delay-400 font-bold text-red-500">EXCLUSIVE: FAULT KAI</li>
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="text-4xl font-bold">LOCATION</h2>
          <p className="mt-4 text-xl"><a href="https://maps.app.goo.gl/pujhytLFB2jwe5797" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-red transition-colors">Room On The Roof, Anna Nagar, Chennai</a></p>
        </div>
      </main>

      <footer className="fixed bottom-0 w-full p-4 text-center text-xs">
        <p>&copy; 2025 FAULTAINMENT. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
};

// Digital Railway Station Timer Component
import { useEffect, useState } from 'react';

function RailwayTimer() {
  // Set target date to August 9 (current year)
  const now = new Date();
  const target = new Date(now.getFullYear(), 7, 9, 0, 0, 0, 0); // August is month 7 (0-indexed)
  if (now > target) target.setFullYear(now.getFullYear() + 1);

  const [timeLeft, setTimeLeft] = useState<number>(target.getTime() - now.getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(target.getTime() - new Date().getTime());
    }, 1000);
    return () => clearInterval(interval);
  }, [target]);

  if (timeLeft <= 0) {
    return <div className="mt-8 text-3xl font-mono text-brand-red">ARRIVED</div>;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  // Digital railway station style
  return (
    <div className="mt-8 flex justify-center space-x-4 text-3xl font-mono">
      <div className="bg-black border-2 border-brand-red px-4 py-2 rounded shadow-lg">
        {String(days).padStart(2, '0')}<span className="text-sm ml-1">D</span>
      </div>
      <div className="bg-black border-2 border-brand-red px-4 py-2 rounded shadow-lg">
        {String(hours).padStart(2, '0')}<span className="text-sm ml-1">H</span>
      </div>
      <div className="bg-black border-2 border-brand-red px-4 py-2 rounded shadow-lg">
        {String(minutes).padStart(2, '0')}<span className="text-sm ml-1">M</span>
      </div>
      <div className="bg-black border-2 border-brand-red px-4 py-2 rounded shadow-lg">
        {String(seconds).padStart(2, '0')}<span className="text-sm ml-1">S</span>
      </div>
    </div>
  );
}

export default ShowPage;
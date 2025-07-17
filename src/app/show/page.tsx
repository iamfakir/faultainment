"use client"
import Link from 'next/link';
import Reveal from '../components/Reveal';

const ShowPage = () => {
  return (
    <div className="bg-black text-white min-h-screen font-mono flex flex-col">
      <header className="fixed top-0 left-0 w-full p-4 md:p-6 flex justify-between items-center z-50 bg-black/90 backdrop-blur-sm border-b border-red-500/20">
        <Link href="/" className="text-xl md:text-2xl font-bold font-headline tracking-wider">FAULTAINMENT*</Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/shop" className="hover:text-brand-red transition-colors text-sm tracking-wider">SHOP</Link>
          <Link href="/show" className="text-brand-red text-sm tracking-wider">SHOW</Link>
          <Link href="/archive" className="hover:text-brand-red transition-colors text-sm tracking-wider">ARCHIVE</Link>
        </nav>
        <button className="md:hidden text-brand-red">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      <main className="flex-1 pt-20 md:pt-24 px-4 md:px-8 pb-8">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-headline font-bold mb-6 text-center glitch tracking-wider" 
                data-text="THE RED ROOM" 
                style={{ color: '#ffffff', letterSpacing: '0.1em', textShadow: '0 0 5px #ffffff' }}>
              THE RED ROOM
            </h1>
          </Reveal>
          
          <Reveal>
            <RailwayTimer />
          </Reveal>
          
          <Reveal>
            <p className="mt-6 text-sm md:text-lg text-center animate-pulse tracking-wider">
              UPCOMING SHOW <span className="text-brand-red">•</span> 9.8.2024 <span className="text-brand-red">•</span> EXCLUSIVE PERFORMANCE BY FAULT KAI
            </p>
          </Reveal>

          <Reveal>
            <div className="mt-12 flex justify-center">
              <button 
                className="px-8 md:px-16 py-4 md:py-6 bg-black border-2 border-red-500 text-red-500 font-bold text-xl md:text-3xl cursor-not-allowed opacity-60 relative group transition-all hover:bg-red-500/10 tracking-wider"
                disabled
                title="Tickets opening soon"
              >
                GET TICKETS
                <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-red-500 text-black text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-mono">
                  Tickets opening soon
                </span>
              </button>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <Reveal>
              <div className="border border-red-500/30 p-6 md:p-8 bg-red-500/5">
                <h2 className="text-2xl md:text-4xl font-headline font-bold mb-6 text-center tracking-wider">LINEUP</h2>
                <div className="space-y-4">
                  <div className="text-center p-4 border border-red-500/50 bg-black">
                    <span className="text-lg md:text-xl font-bold text-red-500 tracking-wider">EXCLUSIVE: FAULT KAI</span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="border border-red-500/30 p-6 md:p-8 bg-red-500/5">
                <h2 className="text-2xl md:text-4xl font-headline font-bold mb-6 text-center tracking-wider">VENUE</h2>
                <div className="text-center space-y-4">
                  <div className="p-4 border border-red-500/50 bg-black">
                    <a href="https://maps.app.goo.gl/pujhytLFB2jwe5797" 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       className="text-sm md:text-lg hover:text-brand-red transition-colors tracking-wider block">
                      Room On The Roof<br/>
                      <span className="text-xs md:text-sm text-gray-400">Anna Nagar, Chennai</span>
                    </a>
                  </div>
                  <div className="text-xs md:text-sm text-gray-400 space-y-1">
                    <p>Doors: 7:00 PM</p>
                    <p>Show: 8:00 PM</p>
                    <p>Age: 18+</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="mt-16 text-center border-t border-red-500/30 pt-8">
              <h3 className="text-xl md:text-2xl font-headline mb-4 tracking-wider">STAY UPDATED</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="px-4 py-2 bg-black border border-red-500/50 text-white placeholder-gray-500 focus:border-red-500 focus:outline-none w-full sm:w-auto"
                />
                <button className="px-6 py-2 bg-red-500 text-black font-bold hover:bg-red-600 transition-colors tracking-wider w-full sm:w-auto">
                  NOTIFY ME
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </main>

      <footer className="border-t border-red-500/30 p-6 md:p-8 text-center bg-black/50">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-xs md:text-sm text-gray-400">
              <p>&copy; 2025 FAULTAINMENT*. ALL RIGHTS RESERVED.</p>
            </div>
            <div className="flex space-x-6 text-xs md:text-sm">
              <Link href="/" className="hover:text-brand-red transition-colors">HOME</Link>
              <Link href="/shop" className="hover:text-brand-red transition-colors">SHOP</Link>
              <Link href="/archive" className="hover:text-brand-red transition-colors">ARCHIVE</Link>
            </div>
          </div>
        </div>
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
    <div className="mt-8 flex justify-center">
      <div className="grid grid-cols-4 gap-2 md:gap-4 text-lg md:text-3xl font-mono">
        <div className="bg-black border-2 border-brand-red px-2 md:px-4 py-2 md:py-3 text-center shadow-lg hover:bg-red-500/10 transition-colors">
          <div className="text-brand-red font-bold">{String(days).padStart(2, '0')}</div>
          <div className="text-xs md:text-sm text-gray-400 mt-1">DAYS</div>
        </div>
        <div className="bg-black border-2 border-brand-red px-2 md:px-4 py-2 md:py-3 text-center shadow-lg hover:bg-red-500/10 transition-colors">
          <div className="text-brand-red font-bold">{String(hours).padStart(2, '0')}</div>
          <div className="text-xs md:text-sm text-gray-400 mt-1">HOURS</div>
        </div>
        <div className="bg-black border-2 border-brand-red px-2 md:px-4 py-2 md:py-3 text-center shadow-lg hover:bg-red-500/10 transition-colors">
          <div className="text-brand-red font-bold">{String(minutes).padStart(2, '0')}</div>
          <div className="text-xs md:text-sm text-gray-400 mt-1">MINS</div>
        </div>
        <div className="bg-black border-2 border-brand-red px-2 md:px-4 py-2 md:py-3 text-center shadow-lg hover:bg-red-500/10 transition-colors">
          <div className="text-brand-red font-bold">{String(seconds).padStart(2, '0')}</div>
          <div className="text-xs md:text-sm text-gray-400 mt-1">SECS</div>
        </div>
      </div>
    </div>
  );
}

export default ShowPage;
'use client';
import { useState, useEffect } from 'react';

export default function OpiumShowcase() {
  const [glitchText, setGlitchText] = useState('THE RED ROOM');
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="p-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold" 
              style={{ 
                color: '#ffffff', 
                textShadow: '0 0 10px #ffffff',
                fontWeight: 'bold'
              }}>
            FAULTAINMENT*
          </h1>
          <nav className="space-x-8">
            <a href="/shop" className="hover:text-gray-300 transition-colors">SHOP</a>
            <a href="/show" className="hover:text-gray-300 transition-colors">SHOW</a>
            <a href="/archive" className="hover:text-gray-300 transition-colors">ARCHIVE</a>
          </nav>
        </div>
      </header>

      {/* Red Banner */}
      <div className="bg-red-600 text-white text-center py-3 px-4">
        <p className="font-bold text-sm md:text-base">
          TICKETS FOR THE RED ROOM SHOW NOW AVAILABLE! SECURE YOURS
        </p>
      </div>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center min-h-[70vh] px-8">
        <div className="text-center space-y-8">
          {/* Glitch Title */}
          <h1 
            className="text-4xl md:text-6xl lg:text-8xl font-bold glitch" 
            data-text="THE RED ROOM"
            style={{ 
              color: '#ffffff', 
              textShadow: '0 0 10px #ffffff, 2px 2px 0px #ff0000, -2px -2px 0px #00ff00',
              fontWeight: 'bold',
              animation: 'glitch 2s infinite'
            }}
          >
            THE RED ROOM
          </h1>

          {/* Description */}
          <div className="space-y-4 max-w-2xl mx-auto text-center">
            <p className="text-lg md:text-xl font-medium">
              EXCLUSIVE PERFORMANCE BY FAULT KAI
            </p>
            <p className="text-base md:text-lg">
              AUGUST 9TH. LIMITED TICKETS AVAILABLE.
            </p>
          </div>

          {/* CTA Button */}
          <a href="/show" className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 text-lg transition-colors duration-300 transform hover:scale-105">
            ENTER THE RED ROOM
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-500">
        <p>Copyright FAULTAINMENT*</p>
      </footer>

      {/* Back Button */}
      <div className="fixed bottom-8 left-8">
        <a href="/" className="inline-block px-4 py-2 bg-white/10 text-white border border-white/30 hover:bg-white/20 transition-colors">
          ← BACK
        </a>
      </div>

      <style jsx>{`
        @keyframes glitch {
          0% {
            text-shadow: 0 0 10px #ffffff, 2px 2px 0px #ff0000, -2px -2px 0px #00ff00;
          }
          25% {
            text-shadow: 0 0 10px #ffffff, -2px 2px 0px #ff0000, 2px -2px 0px #00ff00;
          }
          50% {
            text-shadow: 0 0 10px #ffffff, 2px -2px 0px #ff0000, -2px 2px 0px #00ff00;
          }
          75% {
            text-shadow: 0 0 10px #ffffff, -2px -2px 0px #ff0000, 2px 2px 0px #00ff00;
          }
          100% {
            text-shadow: 0 0 10px #ffffff, 2px 2px 0px #ff0000, -2px -2px 0px #00ff00;
          }
        }
        
        .glitch {
          position: relative;
        }
        
        .glitch::before,
        .glitch::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        
        .glitch::before {
          animation: glitch-1 0.5s infinite;
          color: #ff0000;
          z-index: -1;
        }
        
        .glitch::after {
          animation: glitch-2 0.5s infinite;
          color: #00ff00;
          z-index: -2;
        }
        
        @keyframes glitch-1 {
          0%, 100% {
            transform: translate(0);
          }
          20% {
            transform: translate(-2px, 2px);
          }
          40% {
            transform: translate(-2px, -2px);
          }
          60% {
            transform: translate(2px, 2px);
          }
          80% {
            transform: translate(2px, -2px);
          }
        }
        
        @keyframes glitch-2 {
          0%, 100% {
            transform: translate(0);
          }
          20% {
            transform: translate(2px, 2px);
          }
          40% {
            transform: translate(2px, -2px);
          }
          60% {
            transform: translate(-2px, 2px);
          }
          80% {
            transform: translate(-2px, -2px);
          }
        }
      `}</style>
    </div>
  );
}
'use client';
import { useEffect, useState } from 'react';

export default function Home() {
  const [glitchText, setGlitchText] = useState('A NEW SHOW IS COMING');
  const [showCursor, setShowCursor] = useState(true);
  const [location, setLocation] = useState('LOCATION: [REDACTED]');
  const [dotCount, setDotCount] = useState(0);
  
  const crypticMessages = [
    'SIGNAL DETECTED',
    'FREQUENCY LOCKED',
    'TRANSMISSION INCOMING',
    'COORDINATES CONFIRMED',
    'STANDBY FOR CONTACT'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchText(crypticMessages[Math.floor(Math.random() * crypticMessages.length)]);
    }, 3000);
    
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    const dotInterval = setInterval(() => {
      setDotCount(prev => (prev + 1) % 4);
    }, 500);

    return () => {
      clearInterval(interval);
      clearInterval(cursorInterval);
      clearInterval(dotInterval);
    };
  }, []);

  useEffect(() => {
    // --- Location Reveal Logic ---
    const revealStartDate = new Date(); // Reveals first part today
    const today = new Date();
    const timeDiff = today.getTime() - revealStartDate.getTime();
    const daysPassed = Math.max(0, Math.floor(timeDiff / (1000 * 3600 * 24)));

    const latParts = ["13.0878°", "N"];
    const lonParts = ["80.2785°", "E"];
    
    let revealedString = "LOCATION: ";
    
    if (daysPassed >= 0) {
        revealedString += latParts[0];
    }
    if (daysPassed >= 1) {
        revealedString += ` ${latParts[1]}`;
    }
    if (daysPassed >= 2) {
        revealedString += `, ${lonParts[0]}`;
    }
    if (daysPassed >= 3) {
        revealedString += ` ${lonParts[1]}`;
    }

    if (daysPassed < 4 && daysPassed >= 0) {
        const dots = '.'.repeat(dotCount);
        revealedString += dots;
    }
    
    if (daysPassed < 0) {
        revealedString = 'LOCATION: [REDACTED]';
    }

    setLocation(revealedString);
    // --- End Location Reveal Logic ---
  }, [dotCount]);

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center text-center p-8 relative overflow-hidden">
       {/* Subtle background noise */}
       <div className="absolute inset-0 opacity-5 bg-noise animate-pulse"></div>
       
       {/* Minimal header */}
       <header className="absolute top-8 left-8 z-50">
         <div className="text-lg md:text-xl font-mono tracking-wider opacity-80 font-bold" style={{
           textShadow: '0 0 3px #ffffff'
         }}>
           FAULTAINMENT
         </div>
       </header>
       
       {/* Main cryptic content */}
       <main className="flex flex-col items-center justify-center min-h-screen relative z-10 max-w-4xl mx-auto">
         <div className="space-y-12">
           <div className="text-xs font-mono tracking-widest opacity-40">
             [SHOW ANNOUNCEMENT IMMINENT]
           </div>
           
           <h1 className="text-2xl md:text-4xl lg:text-5xl font-headline tracking-wider glitch whitespace-nowrap" 
               data-text={glitchText}
               style={{ 
                 color: '#ffffff', 
                 textShadow: '0 0 3px #ffffff',
                 fontWeight: 'bold',
                 lineHeight: '1.2'
               }}>
             {glitchText}
           </h1>
           
           <div className="text-sm font-mono tracking-wider opacity-60 space-y-3">
             <div>{location}</div>
             <div>DATE: [TO BE ANNOUNCED]</div>
             <div>TICKETS: [COMING SOON]</div>
           </div>
           
           <div className="text-xs font-mono tracking-widest opacity-30">
             <span>PREPARE FOR THE UNFORGETTABLE</span>
             <span className={`ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>█</span>
           </div>
           
           <div className="text-xs font-mono opacity-20 tracking-wider mt-16">
             A FAULTAINMENT PRODUCTION
           </div>
         </div>
       </main>

       {/* Minimal footer */}
       <footer className="absolute bottom-4 right-4 text-xs font-mono opacity-30">
         2025
       </footer>
    </div>
  );
}

'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [showCursor, setShowCursor] = useState(true);
  const [location, setLocation] = useState('LOCATION: [REDACTED]');
  const [dotCount, setDotCount] = useState(0);
  const [password, setPassword] = useState('');
  const [showPasswordField, setShowPasswordField] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    const dotInterval = setInterval(() => {
      setDotCount(prev => (prev + 1) % 4);
    }, 500);

    return () => {
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
        <div className="text-lg md:text-xl font-mono tracking-tight opacity-80 font-bold" style={{
          textShadow: '0 0 3px #ffffff'
        }}>
          FAULTAINMENT*
        </div>
      </header>
      
      {/* Main cryptic content */}
      <main className="flex flex-col items-center justify-center min-h-screen relative z-10 max-w-4xl mx-auto">
        <div className="space-y-12">
          <div className="text-xs font-mono tracking-widest opacity-40">
            [SHOW ANNOUNCEMENT IMMINENT]
          </div>
          
          <h1 
            className="text-2xl md:text-4xl lg:text-5xl font-headline tracking-wider glitch whitespace-nowrap" 
            data-text="FAULTAINMENT* INCOMING"
            style={{ 
              color: '#ffffff', 
              textShadow: '0 0 3px #ffffff',
              fontWeight: 'bold',
              lineHeight: '1.2'
            }}
          >
            FAULTAINMENT* INCOMING
          </h1>
           
           <div className="text-sm font-mono tracking-wider opacity-60 space-y-3">
             <div>{location}</div>
             <div>DATE: [TO BE ANNOUNCED]</div>
             <div>TICKETS: [COMING SOON]</div>
             <div className="mt-6 pt-4 border-t border-white/10">
               <div className="text-xs opacity-40 mb-2">SITE CONSTRUCTION</div>
               <div className="w-full bg-white/10 h-1 rounded">
                 <div className="bg-white h-1 rounded" style={{width: '85%'}}></div>
               </div>
               <div className="text-xs opacity-40 mt-1 text-right">85% COMPLETE</div>
             </div>
             
             <div className="mt-8">
               <button 
                 onClick={() => setShowPasswordField(!showPasswordField)}
                 className="text-xs opacity-30 hover:opacity-60 transition-opacity"
               >
                 ACCESS PORTAL
               </button>
               
               {showPasswordField && (
                 <div className="mt-4 space-y-2">
                   <input
                     type="password"
                     value={password}
                     onChange={(e) => {
                       setPassword(e.target.value);
                       if (e.target.value.toLowerCase() === 'vibgyor') {
                         router.push('/opium');
                       }
                     }}
                     placeholder="Enter access code"
                     className="bg-transparent border border-gray-600 text-white text-xs px-3 py-2 rounded focus:border-white focus:outline-none"
                     style={{ fontFamily: 'monospace' }}
                   />
                   <div className="text-xs opacity-30">
                     For authorized personnel only
                   </div>
                 </div>
               )}
             </div>
           </div>
           
           <div className="text-xs font-mono tracking-widest opacity-30">
             <span>PREPARE FOR THE UNFORGETTABLE</span>
             <span className={`ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>█</span>
           </div>
           
           <div className="text-xs font-mono opacity-20 tracking-wider mt-16">
             A FAULTAINMENT* PRODUCTION
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

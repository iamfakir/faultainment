export default function Home() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="text-center z-10 space-y-8 px-8">
        <div className="space-y-2">
          <div className="text-xs font-mono tracking-[0.3em] text-white/40 uppercase">
            [SYSTEM ANOMALY DETECTED]
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline tracking-wider uppercase text-white relative drop-shadow">
            <span className="absolute inset-0 text-cyan-400/50 animate-pulse blur-sm" style={{transform: 'translate(-2px, 2px)'}}>FAULTAINMENT*</span>
            <span className="absolute inset-0 text-purple-400/50 animate-pulse blur-sm" style={{transform: 'translate(2px, -2px)', animationDelay: '0.5s'}}>FAULTAINMENT*</span>
            <span className="relative">FAULTAINMENT*</span>
          </h1>
        </div>
        
        <div className="space-y-4">
          <div className="text-sm md:text-base font-mono text-white/60 tracking-wider">
            <div className="overflow-hidden h-6">
              <div className="animate-pulse">
                <span className="inline-block">_awaiting_transmission</span>
                <span className="inline-block w-2 h-4 bg-white/60 ml-1 animate-pulse"></span>
              </div>
            </div>
          </div>
          
          <div className="text-xs md:text-sm font-mono text-white/30 tracking-[0.2em] space-y-1">
            <div>// quantum fabric synthesis available</div>
            <div>// neural-linked apparel: [CLASSIFIED]</div>
            <div>// bio-adaptive clothing matrix: [ACTIVE]</div>
          </div>
        </div>
        
        <div className="pt-8 space-y-4">
          <div className="inline-block">
            <div className="border border-white/10 px-6 py-3 rounded-sm backdrop-blur-sm bg-white/5">
              <div className="text-xs font-mono text-white/50 tracking-widest">
                SIGNAL STRENGTH
              </div>
              <div className="flex space-x-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className={`w-1 h-4 bg-white/20 ${i < 3 ? 'bg-white/60' : ''} transition-all duration-300`}></div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="text-xs font-mono text-white/20 tracking-widest">
            [RECONCILIATION IN PROGRESS]
          </div>
          <div className="text-xs font-mono text-white/20 tracking-widest">
            a
          </div>
          <a
            href="#waitlist"
            className="inline-block mt-4 text-xs font-mono tracking-widest bg-white/10 border border-white/20 hover:bg-white/20 transition-colors px-3 py-1 rounded-sm text-white pointer-events-auto"
          >
            Join Waitlist
          </a>
        </div>
        
        <a href="#" className="text-xs font-mono text-white/20 tracking-widest mt-8 inline-block pointer-events-auto">
          ACCESS PORTAL
        </a>
      </div>
    </div>
  );
}

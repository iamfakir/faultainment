import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center text-center p-4">
      <header className="absolute top-0 w-full p-4 text-center z-50" style={{ pointerEvents: 'auto' }}>
        <div className="flex flex-col items-center mb-2">
          <h1 className="text-2xl font-headline tracking-widest mb-4">FAULTAINMENT</h1>
          <nav className="flex space-x-4" style={{ pointerEvents: 'auto' }}>
            <Link href="/shop" className="hover:text-brand-red transition-colors">SHOP</Link>
            <Link href="/show" className="hover:text-brand-red transition-colors">SHOW</Link>
            <Link href="/archive" className="hover:text-brand-red transition-colors">ARCHIVE</Link>
          </nav>
        </div>
        <div className="bg-brand-red text-black text-center py-2 px-4 font-bold animate-pulse">
          TICKETS FOR THE RED ROOM SHOW NOW AVAILABLE! <Link href="/show" className="underline ml-2">GET YOURS</Link>
        </div>
      </header>

      <main className="flex flex-col items-center justify-center flex-grow relative" style={{ zIndex: 1 }}>
        <div className="relative">
          <h2 className="text-7xl md:text-9xl font-headline glitch" data-text="THE RED ROOM">THE RED ROOM</h2>
        </div>
        <p className="mt-4 text-lg max-w-md">
          EXCLUSIVE PERFORMANCE BY FAULT KAI. AUGUST 9TH. LIMITED TICKETS AVAILABLE.
        </p>
        <Link href="/show" className="mt-8 bg-brand-red text-black font-bold py-3 px-8 border-2 border-brand-red hover:bg-black hover:text-brand-red transition-all duration-300 inline-block">
          GET TICKETS NOW
        </Link>
      </main>

      <footer className="w-full p-4 text-center" style={{ zIndex: 1 }}>
        <p>&copy; {new Date().getFullYear()} FAULTAINMENT. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
}

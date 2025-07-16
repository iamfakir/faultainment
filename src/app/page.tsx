export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center text-center p-4">
      <header className="absolute top-0 w-full p-4 flex justify-between items-center">
        <h1 className="text-2xl font-headline tracking-widest">FAULTAINMENT</h1>
        <nav>
  <a href="/shop" className="mx-2 hover:text-brand-red transition-colors">SHOP</a>
  <a href="#" className="mx-2 hover:text-brand-red transition-colors">ARCHIVE</a>
  <a href="#" className="mx-2 hover:text-brand-red transition-colors">CONTACT</a>
</nav>
      </header>

      <main className="flex flex-col items-center justify-center flex-grow">
        <div className="relative">
          <h2 className="text-7xl md:text-9xl font-headline glitch" data-text="OPIUM">OPIUM</h2>
        </div>
        <p className="mt-4 text-lg max-w-md">
          THE LATEST COLLECTION. A DESCENT INTO THE ABYSS OF STYLE. LIMITED PIECES AVAILABLE.
        </p>
        <a href="/shop" className="mt-8 bg-white text-black font-bold py-3 px-8 border-2 border-white hover:bg-black hover:text-white transition-all duration-300 inline-block">
  ENTER THE VOID
</a>
      </main>

      <footer className="w-full p-4 text-center">
        <p>&copy; {new Date().getFullYear()} FAULTAINMENT. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
}

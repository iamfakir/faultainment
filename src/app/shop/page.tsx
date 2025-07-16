export default function Shop() {
  return (
    <div className="bg-black text-white min-h-screen p-4">
      <header className="w-full p-4 sm:p-6 md:p-8 flex justify-between items-center">
        <h1 className="text-2xl font-headline tracking-widest">FAULTAINMENT</h1>
        <nav>
          <a href="/" className="mx-2 hover:text-brand-red transition-colors">HOME</a>
          <a href="#" className="mx-2 hover:text-brand-red transition-colors">ARCHIVE</a>
          <a href="#" className="mx-2 hover:text-brand-red transition-colors">CONTACT</a>
        </nav>
      </header>

      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-10 sm:mt-16 md:mt-20">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="relative group">
            <img
              src={`https://placehold.co/400x600?text=Item ${item}`}
              alt={`Clothing Item ${item}`}
              className="w-full h-auto"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 p-4 text-center opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-lg font-bold">OPIUM COLLECTION ITEM {item}</p>
              <p className="text-sm">$150</p>
              <button className="mt-2 bg-white text-black px-4 py-2 hover:bg-brand-red hover:text-white transition-colors">
                ADD TO CART
              </button>
            </div>
          </div>
        ))}
      </main>

      <footer className="w-full p-4 sm:p-6 md:p-8 text-center mt-8 sm:mt-12 md:mt-16">
        <p>&copy; {new Date().getFullYear()} FAULTAINMENT. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
}
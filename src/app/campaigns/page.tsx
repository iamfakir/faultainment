import React from 'react';

export default function Campaigns() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center text-center p-4">
      <header className="absolute top-0 w-full p-4 flex justify-between items-center">
        <h1 className="text-2xl font-headline tracking-widest">FAULTAINMENT*</h1>
        <nav className="flex space-x-4">
          <a href="/shop" className="hover:text-brand-red transition-colors">SHOP</a>
          <a href="/campaigns" className="hover:text-brand-red transition-colors">CAMPAIGNS</a>
          <a href="#" className="hover:text-brand-red transition-colors">ARCHIVE</a>
          <a href="#" className="hover:text-brand-red transition-colors">CONTACT</a>
        </nav>
      </header>

      <main className="flex flex-col items-center justify-center flex-grow max-w-4xl">
        <h2 className="text-5xl md:text-7xl font-headline glitch mb-8" data-text="GLITCH THE NORM">GLITCH THE NORM</h2>
        <p className="text-lg mb-6">
          At Faultainment*, we celebrate diversity and body positivity through our inclusive sizing and storytelling campaigns. Our collections are designed for every body, glitching societal norms and empowering you to express your unique self.
        </p>
        <section className="mb-8">
          <h3 className="text-3xl font-bold mb-4">Our Stories</h3>
          <p>
            Discover behind-the-scenes content and real stories from our diverse models. Follow us on social media for inspiring tales of breaking boundaries with glitch art fashion.
          </p>
        </section>
        <section className="mb-8">
          <h3 className="text-3xl font-bold mb-4">Inclusive Sizing</h3>
          <p>
            From XS to 5XL, our pieces are crafted to fit and flatter all shapes. Join the movement to redefine fashion standards.
          </p>
        </section>
        <a href="/shop" className="mt-8 bg-white text-black font-bold py-3 px-8 border-2 border-white hover:bg-black hover:text-white transition-all duration-300 inline-block">
          SHOP NOW
        </a>
      </main>

      <footer className="w-full p-4 text-center">
        <p>&copy; {new Date().getFullYear()} FAULTAINMENT*. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
}
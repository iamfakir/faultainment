export default function Void() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center pt-20">
      <h1 className="text-5xl md:text-7xl font-bold mb-8 text-brand-red">ENTER THE VOID</h1>
      <p className="mb-10 text-xl md:text-2xl text-gray-300 max-w-xl text-center">You have entered the void. There is nothing here... yet. Return to <a href="/" className="underline hover:text-brand-red transition-colors">Home</a> or <a href="/shop" className="underline hover:text-brand-red transition-colors">Shop</a>.</p>
    </div>
  );
}
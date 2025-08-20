'use client';

import { useEffect } from 'react';

export default function ShippingReturns() {
  useEffect(() => {
    // Any client-side logic for shipping and returns page can go here
  }, []);

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-8">Shipping & Returns</h1>
      <div className="max-w-3xl text-lg leading-relaxed space-y-6">
        <h2 className="text-2xl font-semibold">Shipping Policy</h2>
        <p>
          We offer flat rate shipping for all domestic orders. International shipping rates are calculated at checkout based on destination and package weight/size. Most orders are processed within 1-3 business days and shipped via our logistics partners.
        </p>
        
        <h2 className="text-2xl font-semibold">Delivery Times</h2>
        <p>
          Domestic: 3-7 business days
          International: 7-21 business days (varies by destination)
        </p>
        
        <h2 className="text-2xl font-semibold">Returns & Exchanges</h2>
        <p>
          We accept returns within 30 days of purchase. Items must be unused, in original packaging with tags attached. Customers are responsible for return shipping costs unless the return is due to our error.
        </p>
        
        <h2 className="text-2xl font-semibold">Damaged or Defective Items</h2>
        <p>
          Please contact us within 7 days of receiving your order if any items arrive damaged or defective. We will arrange for a replacement or refund at no additional cost to you.
        </p>
      </div>
    </div>
  );
}
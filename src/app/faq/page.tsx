'use client';

import { useEffect } from 'react';

export default function FAQ() {
  useEffect(() => {
    // Any client-side logic for FAQ page can go here
  }, []);

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>
      <div className="max-w-3xl text-lg leading-relaxed space-y-6">
        
        <h2 className="text-2xl font-semibold">Order & Shipping</h2>
        
        <h3 className="text-xl font-medium">How long does shipping take?</h3>
        <p>
          Domestic orders typically arrive within 3-7 business days. International orders may take 7-21 business days depending on destination.
        </p>
        
        <h3 className="text-xl font-medium">Do you offer international shipping?</h3>
        <p>
          Yes, we ship worldwide. International shipping rates are calculated at checkout based on destination and package weight/size.
        </p>
        
        <h2 className="text-2xl font-semibold">Payments</h2>
        
        <h3 className="text-xl font-medium">What payment methods do you accept?</h3>
        <p>
          We accept all major credit cards, PayPal, and cryptocurrency payments through our secure checkout system.
        </p>
        
        <h3 className="text-xl font-medium">Is my payment information secure?</h3>
        <p>
          Yes, we use industry-standard encryption and never store your full payment details on our servers.
        </p>
        
        <h2 className="text-2xl font-semibold">Returns & Exchanges</h2>
        
        <h3 className="text-xl font-medium">What is your return policy?</h3>
        <p>
          We accept returns within 30 days of purchase for most items. Please see our full Returns Policy for details.
        </p>
        
        <h3 className="text-xl font-medium">How do I initiate a return?</h3>
        <p>
          Contact our support team with your order number and reason for return. We'll provide return instructions and a return authorization number.
        </p>
      </div>
    </div>
  );
}
'use client';

import { useEffect } from 'react';

export default function ContactFAQ() {
  useEffect(() => {
    // Any client-side logic for contact page can go here
  }, []);

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-8">Contact & FAQ</h1>
      <div className="max-w-3xl text-lg leading-relaxed space-y-6">
        <h2 className="text-2xl font-semibold">Contact Information</h2>
        <p>
          Email: support@faultainment.com<br />
          Phone: +1 (555) 123-4567<br />
          Business Hours: Monday-Friday, 9AM-5PM EST
        </p>
        
        <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
        
        <h3 className="text-xl font-medium">How long does shipping take?</h3>
        <p>
          Domestic orders typically arrive within 3-7 business days. International orders may take 7-21 business days depending on destination.
        </p>
        
        <h3 className="text-xl font-medium">What payment methods do you accept?</h3>
        <p>
          We accept all major credit cards, PayPal, and cryptocurrency payments through our secure checkout system.
        </p>
        
        <h3 className="text-xl font-medium">Can I change or cancel my order?</h3>
        <p>
          Orders can be modified or cancelled within 24 hours of placement. After this window, please contact our support team for assistance.
        </p>
        
        <h3 className="text-xl font-medium">Do you offer wholesale pricing?</h3>
        <p>
          Yes! Please contact our sales team at wholesale@faultainment.com for bulk order inquiries and pricing.
        </p>
      </div>
    </div>
  );
}
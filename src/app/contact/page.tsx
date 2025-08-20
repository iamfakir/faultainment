'use client';

import { useEffect } from 'react';

export default function RefundPolicy() {
  useEffect(() => {
    // Any client-side logic for refund policy page can go here
  }, []);

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-8">Cancellation & Refund Policy</h1>
      <div className="max-w-3xl text-lg leading-relaxed space-y-6">
        <h2 className="text-2xl font-semibold">Cancellation Policy</h2>
        <p>
          Orders can be cancelled within 24 hours of placement without penalty. After 24 hours, cancellations may be subject to a processing fee. Once an order has shipped, it cannot be cancelled.
        </p>
        
        <h2 className="text-2xl font-semibold">Refund Eligibility</h2>
        <p>
          Refunds are available for:
          - Defective or damaged products
          - Items not as described
          - Undelivered packages
          Refunds will be processed within 7-10 business days after we receive the returned item.
        </p>
        
        <h2 className="text-2xl font-semibold">Non-Refundable Items</h2>
        <p>
          The following are not eligible for refund:
          - Digital products
          - Perishable goods
          - Items marked as "final sale"
          - Products damaged due to misuse
        </p>
        
        <h2 className="text-2xl font-semibold">Return Process</h2>
        <p>
          To initiate a return, please contact our customer service within 7 days of receiving your order. Include your order number and reason for return. You will receive return instructions and a return authorization number.
        </p>
        
        <h2 className="text-2xl font-semibold">Refund Methods</h2>
        <p>
          Refunds will be issued to the original payment method. For credit/debit card payments, please allow 5-7 business days for the refund to appear on your statement.
        </p>
      </div>
    </div>
  );
}
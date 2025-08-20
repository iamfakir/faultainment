'use client';

import { useEffect } from 'react';

export default function TermsOfService() {
  useEffect(() => {
    // Any client-side logic for terms of service page can go here
  }, []);

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      <div className="max-w-3xl text-lg leading-relaxed space-y-6">
        <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
        <p>
          By accessing or using our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
        </p>
        
        <h2 className="text-2xl font-semibold">2. Description of Service</h2>
        <p>
          We provide an online platform for purchasing merchandise. We reserve the right to modify or discontinue the Service at any time without notice.
        </p>
        
        <h2 className="text-2xl font-semibold">3. User Conduct</h2>
        <p>
          You agree not to use the Service to: (a) upload or transmit any content that is unlawful, harmful, or infringing; (b) interfere with or disrupt the Service; (c) impersonate any person or entity.
        </p>
        
        <h2 className="text-2xl font-semibold">4. Intellectual Property</h2>
        <p>
          All content included on this site, such as text, graphics, logos, is the property of the company and protected by intellectual property laws.
        </p>
        
        <h2 className="text-2xl font-semibold">5. Limitation of Liability</h2>
        <p>
          We shall not be liable for any indirect, incidental, special or consequential damages resulting from the use or inability to use the service.
        </p>
        
        <h2 className="text-2xl font-semibold">6. Governing Law</h2>
        <p>
          These terms shall be governed by and construed in accordance with the laws of the jurisdiction where our company is registered.
        </p>
      </div>
    </div>
  );
}
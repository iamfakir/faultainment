'use client';

import Link from 'next/link';
import { FaInstagram, FaTwitter, FaYoutube, FaSpotify, FaBandcamp } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { 
      name: 'Instagram', 
      url: 'https://instagram.com/faultainment', 
      icon: <FaInstagram className="w-5 h-5" /> 
    },
    { 
      name: 'Twitter', 
      url: 'https://twitter.com/faultainment', 
      icon: <FaTwitter className="w-5 h-5" /> 
    },
    { 
      name: 'YouTube', 
      url: 'https://youtube.com/faultainment', 
      icon: <FaYoutube className="w-5 h-5" /> 
    },
    { 
      name: 'Spotify', 
      url: 'https://open.spotify.com/artist/faultainment', 
      icon: <FaSpotify className="w-5 h-5" /> 
    },
    { 
      name: 'Bandcamp', 
      url: 'https://faultainment.bandcamp.com', 
      icon: <FaBandcamp className="w-5 h-5" /> 
    },
  ];

  const footerLinks = [
    {
      title: 'Explore',
      links: [
        { name: 'Shop', href: '/shop' },
        { name: 'Discography', href: '/discography' },
        { name: 'Archive', href: '/rotr25' },
        { name: 'Press Kit', href: '/presskit' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Cookie Policy', href: '/cookies' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Contact', href: '/contact' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Shipping & Returns', href: '/shipping' },
      ],
    },
  ];

  return (
    <footer className="bg-black/50 backdrop-blur-md border-t border-white/10 mt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Branding */}
          <div className="space-y-6">
            <Link href="/" className="text-2xl font-bold font-headline tracking-wider uppercase">
              FAULTAINMENT*
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              Pushing the boundaries of sound and style. Limited edition drops, exclusive content, and underground culture.
            </p>
            
            {/* Newsletter Signup */}
            <div className="mt-6">
              <h3 className="text-sm font-medium text-white mb-3">Join our newsletter</h3>
              <form className="flex flex-col space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-white/5 border border-white/10 rounded px-4 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  aria-label="Email address for newsletter"
                />
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary/90 text-black font-medium py-2 px-4 rounded text-sm transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-white text-sm transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/40 text-sm">
            &copy; {currentYear} FAULTAINMENT*. All rights reserved.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white transition-colors"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

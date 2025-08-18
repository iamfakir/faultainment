'use client';

import React, { useEffect } from 'react';

const PressKitPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  
  const pressImages = [
    '/rotr25/images/IMG_2152.jpg',
    '/rotr25/images/IMG_2153.jpg',
    '/rotr25/images/IMG_2163.jpg',
    '/rotr25/images/IMG_2182.jpg',
    '/rotr25/images/IMG_2238.jpg',
    '/rotr25/images/IMG_2271.jpg'
  ];

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % pressImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + pressImages.length) % pressImages.length);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!isModalOpen) return;
    
    switch (e.key) {
      case 'Escape':
        closeModal();
        break;
      case 'ArrowLeft':
        prevImage();
        break;
      case 'ArrowRight':
        nextImage();
        break;
    }
  };

  useEffect(() => {
    const navMenu = document.querySelector('.nav-menu') as HTMLElement;

    const handleScroll = () => {
      if (window.scrollY > 50) { // Adjust scroll threshold as needed
        navMenu.classList.add('nav-menu-scrolled');
      } else {
        navMenu.classList.remove('nav-menu-scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Set initial state based on scroll position
    handleScroll();
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('section').forEach(sec => obs.observe(sec));

    // Smooth scrolling for anchor links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
          });
        }
      }
    };

    // Add smooth scroll to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    // Scroll-to-top functionality
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '↑';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.setAttribute('aria-label', 'Scroll to top');
    document.body.appendChild(scrollToTopBtn);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

    const toggleScrollToTop = () => {
      if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('visible');
      } else {
        scrollToTopBtn.classList.remove('visible');
      }
    };

    scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    window.addEventListener('scroll', toggleScrollToTop);
    toggleScrollToTop(); // Initial check

    // Active navigation highlighting
    const updateActiveNavLink = () => {
      const sections = document.querySelectorAll('section[id], footer[id]');
      const navLinks = document.querySelectorAll('.nav-link');
      
      let currentSection = '';
      const scrollPosition = window.scrollY + 100; // Offset for fixed nav
      
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          currentSection = section.id;
        }
      });
      
      navLinks.forEach(link => {
        const href = (link as HTMLAnchorElement).getAttribute('href');
        if (href === `#${currentSection}`) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    };
    
    window.addEventListener('scroll', updateActiveNavLink);
    updateActiveNavLink(); // Initial check

    // Enhanced carousel scrolling
    document.querySelectorAll('.carousel').forEach(carousel => {
      let isScrolling = false;
      
      carousel.addEventListener('wheel', (e) => {
        const wheelEvent = e as WheelEvent;
        if (Math.abs(wheelEvent.deltaX) > Math.abs(wheelEvent.deltaY)) return;
        
        wheelEvent.preventDefault();
        const scrollAmount = wheelEvent.deltaY > 0 ? 200 : -200;
        
        if (!isScrolling) {
          isScrolling = true;
          carousel.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
          });
          
          setTimeout(() => {
            isScrolling = false;
          }, 100);
        }
      });
    });

    // Add keyboard navigation for modal
    window.addEventListener('keydown', handleKeyDown);

    // Clean up on component unmount
    return () => {
      obs.disconnect();
      document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
      window.removeEventListener('scroll', toggleScrollToTop);
      window.removeEventListener('scroll', updateActiveNavLink);
      window.removeEventListener('keydown', handleKeyDown);
      if (scrollToTopBtn.parentNode) {
        scrollToTopBtn.parentNode.removeChild(scrollToTopBtn);
      }
    };
  }, []);

  return (
    <div className="press-kit-container">
      <style jsx global>{`
        /* CSS VARIABLES - Dark Theme */
        :root {
          --accent: #F04B4B;
          --bg: #1a1a1a; /* Dark background */
          --text: #f0f0f0; /* Light text */
          --font-head: 'Arial Black', sans-serif;
          --font-body: 'Helvetica Neue', Arial, sans-serif;
          --space: 2rem;
        }

        /* GLOBAL SMOOTH SCROLLING */
        html {
          scroll-behavior: smooth;
          scroll-padding-top: 2rem;
        }
        
        /* CUSTOM SCROLLBAR */
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: var(--bg);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: var(--accent);
          border-radius: 4px;
          transition: background 0.3s ease;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #e03e3e;
        }
        
        /* SCROLL-TO-TOP BUTTON */
        .scroll-to-top {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          width: 50px;
          height: 50px;
          background: var(--accent);
          color: white;
          border: none;
          border-radius: 50%;
          font-size: 1.5rem;
          font-weight: bold;
          cursor: pointer;
          opacity: 0;
          visibility: hidden;
          transform: translateY(20px);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 1000;
          box-shadow: 0 4px 12px rgba(240, 75, 75, 0.3);
        }
        
        .scroll-to-top.visible {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }
        
        .scroll-to-top:hover {
          background: #e03e3e;
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(240, 75, 75, 0.4);
        }
        
        .scroll-to-top:active {
          transform: translateY(0);
          box-shadow: 0 2px 8px rgba(240, 75, 75, 0.3);
        }

        /* NAVIGATION MENU */
        .nav-menu {
          position: fixed;
          top: 50%;
          left: 1rem;
          transform: translateY(-50%);
          background: transparent;
          z-index: 1000;
          border: 1px solid rgba(240, 75, 75, 0.2);
          border-radius: 8px;
          padding: 0.5rem;
          width: 40px;
          height: 40px;
          overflow: hidden;
          transition: all 0.3s ease, opacity 0.3s ease;
          cursor: pointer;
        }
        
        .nav-menu.nav-menu-scrolled {
          opacity: 0.1;
        }

        .nav-menu::before {
          content: '→';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 1.2rem;
          color: var(--text);
          transition: opacity 0.3s ease;
        }
        
        .nav-menu:hover {
          width: auto;
          height: auto;
          padding: 1rem;
          background: rgba(26, 26, 26, 0.1);
          backdrop-filter: blur(10px);
        }
        
        .nav-menu:hover::before {
          opacity: 0;
        }
        
        .nav-container {
          max-width: 1200px;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          align-items: flex-start;
          justify-content: center;
          margin-left: 0;
          background: transparent;
          padding: 0;
          border-radius: 8px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .nav-menu:hover .nav-container {
          opacity: 1;
        }
        
        .nav-link {
          color: var(--text);
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          transition: all 0.3s ease;
          position: relative;
        }
        
        .nav-link:hover {
          color: var(--accent);
          background: rgba(240, 75, 75, 0.1);
        }
        
        .nav-link.active {
          color: var(--accent);
          background: rgba(240, 75, 75, 0.15);
        }
        
        /* Mobile navigation */
        @media (max-width: 768px) {
          .nav-menu {
            top: auto;
            bottom: 1rem;
            left: 50%;
            right: auto;
            transform: translateX(-50%);
            border-radius: 8px;
            width: 40px;
            height: 40px;
            padding: 0.5rem;
          }
          
          .nav-menu:hover {
            width: auto;
            height: auto;
            padding: 0.75rem 1rem;
          }
          
          .nav-container {
            flex-direction: row;
            gap: 0.5rem;
            align-items: center;
            margin-left: 0;
            padding: 0;
            overflow-x: auto;
            justify-content: flex-start;
            -webkit-overflow-scrolling: touch;
          }
          
          .nav-link {
            font-size: 0.8rem;
            padding: 0.4rem 0.8rem;
            white-space: nowrap;
          }
        }
        
        @media (max-width: 480px) {
          .nav-menu {
            width: 35px;
            height: 35px;
            padding: 0.4rem;
          }
          
          .nav-menu:hover {
            padding: 0.5rem;
          }
          
          .nav-container {
            gap: 0.5rem;
            padding: 0;
          }
          
          .nav-link {
            font-size: 0.75rem;
            padding: 0.3rem 0.6rem;
          }
        }

        /* RESET & BASE */
        .press-kit-container * { margin: 0; padding: 0; box-sizing: border-box; }
        .press-kit-container body { background: var(--bg); color: var(--text); font-family: var(--font-body); line-height: 1.6; }
        .press-kit-container h1, .press-kit-container h2, .press-kit-container h3 { font-family: var(--font-head); letter-spacing: 0.03em; color: var(--text); }
        .press-kit-container img { max-width: 100%; height: auto; display: block; }
        .press-kit-container section { padding: calc(var(--space) + 4rem) calc(var(--space) * .5) var(--space); max-width: 1200px; margin: 0 auto; opacity: 0; transform: translateY(30px); transition: all .6s ease-out; }
        .press-kit-container section.visible { opacity: 1; transform: translateY(0); }
        .press-kit-container .tag { color: var(--accent); font-size: .9rem; margin-bottom: .75rem; font-weight: bold; }

        /* HERO */
        .press-kit-container .hero { padding: 0; position: relative; text-align: center; }
        .press-kit-container .hero-banner { width: 100%; height: 60vh; background: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0) 50%), url('/rotr25/images/IMG_2285.jpg') center/cover no-repeat; }
        .press-kit-container .hero-text { position: absolute; bottom: 10%; left: 50%; transform: translateX(-50%); color: #fff; text-shadow: 0 2px 8px rgba(0,0,0,.6); }
        .press-kit-container .hero-text h1 { font-size: clamp(2rem, 6vw, 4rem); margin-bottom: .5rem; }

        /* QUICK STATS */
        .press-kit-container .stats { display: flex; flex-wrap: wrap; gap: 1rem; justify-content: space-between; text-align: center; background: #2a2a2a; /* Darker background for stats */ border-top: 1px solid #333; border-bottom: 1px solid #333; }
        .press-kit-container .stat { flex: 1 1 120px; padding: 1.5rem .5rem; }
        .press-kit-container .stat h3 { font-size: 2rem; color: var(--accent); }

        /* ABOUT */
        .press-kit-container .about { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space); align-items: center; }
        .press-kit-container .about img { border-radius: 6px; }

        /* ACHIEVEMENTS GRID */
        .press-kit-container .achievements { display: grid; gap: 1.5rem; grid-template-columns: repeat(auto-fit,minmax(200px,1fr)); }
        .press-kit-container .card { border: 1px solid #333; padding: 1.25rem; border-radius: 4px; text-align: center; background: #222; /* Darker card background */ }
        .press-kit-container .card-icon { font-size: 2rem; color: var(--accent); margin-bottom: .5rem; }

        /* CAROUSEL - Enhanced for Mobile */
        .press-kit-container .carousel {
          display: flex;
          overflow-x: hidden;
          gap: 1rem;
          scroll-snap-type: none;
          padding-bottom: .5rem;
          -webkit-overflow-scrolling: auto;
          scrollbar-width: none;
        }
        .press-kit-container .carousel::-webkit-scrollbar { height: 6px; }
        .press-kit-container .carousel::-webkit-scrollbar-thumb { background: var(--accent); border-radius: 3px; }
        .press-kit-container .tile { 
          scroll-snap-align: start; 
          flex: 0 0 300px; 
          position: relative; 
          cursor: pointer;
          transition: transform 0.2s ease, opacity 0.2s ease;
        }
        .press-kit-container .tile:hover { transform: translateY(-2px); }
        .press-kit-container .tile img { 
          width: 100%; 
          border-radius: 4px;
          object-fit: cover;
          aspect-ratio: 1;
        }
        .press-kit-container .tile span { 
          position: absolute; 
          bottom: 4px; 
          left: 4px; 
          background: rgba(0,0,0,.7); 
          color:#fff; 
          font-size:.8rem; 
          padding:2px 6px; 
          border-radius:3px;
        }

        /* MASONRY */
        .press-kit-container .masonry { column-count: 3; column-gap: 1rem; }
        .press-kit-container .masonry img { break-inside: avoid; margin-bottom: 1rem; border-radius:4px; }

        /* VIDEO */
        .press-kit-container .video-wrapper { position: relative; padding-top: 56.25%; }
        .press-kit-container .video-wrapper iframe { position:absolute; top:0; left:0; width:100%; height:100%; }

        /* TOUR TABLE */
        .press-kit-container table { width: 100%; border-collapse: collapse; }
        .press-kit-container th, .press-kit-container td { padding: .75rem; border-bottom: 1px solid #333; text-align: left; }
        .press-kit-container th { background: #2a2a2a; /* Darker background for table header */ }

        /* FOOTER */
        .press-kit-container footer { text-align: center; padding: 2rem .5rem; font-size: .9rem; border-top: 1px solid #333; }
        .press-kit-container .socials { display: flex; justify-content: center; gap: 1rem; margin-bottom: 1rem; }
        .press-kit-container .socials i { font-size: 1.5rem; color: var(--accent); }
        .press-kit-container footer a { color: var(--accent); text-decoration: none; }

        /* RESPONSIVE - Enhanced Mobile Optimization */
        @media (max-width: 1024px) {
          .press-kit-container section { padding: 1.5rem 1rem; }
          .press-kit-container .achievements { grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); }
          .press-kit-container .tile { flex: 0 0 250px; }
        }
        
        @media (max-width: 768px) {
          .press-kit-container section { padding: 1.25rem 0.75rem; }
          .press-kit-container .about { grid-template-columns: 1fr; gap: 1.5rem; text-align: center; }
          .press-kit-container .hero-banner { height: 50vh; }
          .press-kit-container .hero-text h1 { font-size: clamp(1.8rem, 8vw, 3rem); }
          .press-kit-container .masonry { column-count: 2; column-gap: 0.75rem; }
          .press-kit-container .stats { flex-direction: column; gap: 0; }
          .press-kit-container .stat { padding: 1rem 0.5rem; border-bottom: 1px solid #333; }
          .press-kit-container .stat:last-child { border-bottom: none; }
          .press-kit-container .achievements { grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1rem; }
          .press-kit-container .card { padding: 1rem; }
          .press-kit-container .tile { flex: 0 0 200px; }
          .press-kit-container table { font-size: 0.9rem; }
          .press-kit-container th, .press-kit-container td { padding: 0.5rem 0.25rem; }
        }
        
        @media (max-width: 480px) {
          .press-kit-container section { padding: 1rem 0.5rem; }
          .press-kit-container .hero-banner { height: 40vh; }
          .press-kit-container .hero-text { bottom: 5%; }
          .press-kit-container .hero-text h1 { font-size: clamp(1.5rem, 10vw, 2.5rem); }
          .press-kit-container .hero-text p { font-size: 0.9rem; }
          .press-kit-container .masonry { column-count: 1; }
          .press-kit-container .achievements { grid-template-columns: 1fr; }
          .press-kit-container .tile { flex: 0 0 180px; }
          .press-kit-container .carousel { gap: 0.75rem; }
          .press-kit-container .socials { flex-wrap: wrap; gap: 0.75rem; }
          .press-kit-container .socials i { font-size: 1.25rem; }
          .press-kit-container table { font-size: 0.8rem; }
          .press-kit-container th, .press-kit-container td { padding: 0.4rem 0.2rem; }
          .press-kit-container footer { padding: 1.5rem 0.5rem; }
          .press-kit-container footer a { display: block; margin: 0.5rem 0; }
        }
        
        /* MODAL/LIGHTBOX STYLES */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
        }

        .modal-overlay.active {
          opacity: 1;
          visibility: visible;
        }

        .modal-content {
          position: relative;
          max-width: 90%;
          max-height: 90%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-image {
          max-width: 100%;
          max-height: 90vh;
          border-radius: 8px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
          transition: transform 0.3s ease;
        }

        .modal-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0, 0, 0, 0.7);
          color: white;
          border: none;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          font-size: 1.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-nav:hover {
          background: rgba(240, 75, 75, 0.9);
          transform: translateY(-50%) scale(1.1);
        }

        .modal-nav.prev {
          left: 20px;
        }

        .modal-nav.next {
          right: 20px;
        }

        .modal-close {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(0, 0, 0, 0.7);
          color: white;
          border: none;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          font-size: 1.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-close:hover {
          background: rgba(240, 75, 75, 0.9);
          transform: scale(1.1);
        }

        /* Press photos hover effects */
        .press-photo {
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .press-photo:hover {
          transform: scale(1.02);
          box-shadow: 0 8px 25px rgba(240, 75, 75, 0.3);
        }

        /* Touch-friendly interactions */
        @media (hover: none) and (pointer: coarse) {
          .press-kit-container .tile { transform: none; transition: opacity 0.2s ease; }
          .press-kit-container .tile:active { opacity: 0.7; }
          .press-kit-container .card:active { transform: scale(0.98); }
          .press-kit-container .socials i:active { transform: scale(1.1); }
          .press-kit-container footer a:active { opacity: 0.7; }
          .modal-nav { width: 44px; height: 44px; font-size: 1.2rem; }
          .modal-close { width: 44px; height: 44px; font-size: 1.2rem; }
        }
        
        /* Improved scrolling for mobile */
        .press-kit-container .carousel {
          -webkit-overflow-scrolling: touch;
          scrollbar-width: thin;
        }
        
        /* Better tap targets for mobile */
        @media (max-width: 768px) {
          .press-kit-container .socials i {
            padding: 0.5rem;
            min-width: 44px;
            min-height: 44px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background: rgba(240, 75, 75, 0.1);
          }
          .press-kit-container footer a {
            padding: 0.5rem;
            min-height: 44px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
          }
        }
      `}</style>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />

      {/* NAVIGATION */}
      <nav className="nav-menu">
        <div className="nav-container">
          <a href="#hero" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#achievements" className="nav-link">Achievements</a>
          <a href="#music" className="nav-link">Music</a>
          <a href="#photos" className="nav-link">Photos</a>
          <a href="#video" className="nav-link">Video</a>
          <a href="#tour" className="nav-link">Tour</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" id="hero">
        <div className="hero-banner"></div>
        <div className="hero-text">
          <h1>FAULTAINMENT</h1>
          <p>Chennai-based independent hip-hop artist blending hard-hitting Tamil lyricism with contemporary beats.</p>
        </div>
      </section>

      {/* QUICK STATS */}
      <section className="stats" id="stats">
        <div className="stat"><h3>5,388</h3><p>Monthly Listeners</p></div>
<div className="stat"><h3>10M</h3><p>Total Streams</p></div>
<div className="stat"><h3>7K</h3><p>Followers</p></div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about">
          <img src="/rotr25/images/IMG_2154.jpg" alt="Portrait" width="400" height="500" loading="lazy" />
          <div>
            <span className="tag">ABOUT</span>
            <p>Fault Kai is a Chennai-based independent hip-hop artist blending hard-hitting Tamil lyricism with contemporary beats. His music moves between street-level storytelling and quiet introspection, tackling identity, ambition, and the grind with a direct, uncompromising voice. Fueled by a DIY ethic and frequent collaborations, his releases and live shows are a staple of the South Indian underground scene, pushing the sound of Tamil rap forward.</p>
          </div>
        </section>

      {/* ACHIEVEMENTS */}
      <section id="achievements">
        <span className="tag">NOTABLE ACHIEVEMENTS</span>
        <div className="achievements">
          <div className="card"><div className="card-icon"><i className="fas fa-trophy"></i></div><h3>Headline ROTR</h3><p>ROTR</p></div>
           <div className="card"><div className="card-icon"><i className="fas fa-music"></i></div><h3>Performance Act in Multiculture</h3><p>Performance Act in Multiculture</p></div>
        </div>
      </section>

      {/* MUSIC RELEASES */}
      <section id="music">
        <span className="tag">MUSIC RELEASES</span>
        <div className="carousel" id="carousel">
          <a className="tile" href="https://open.spotify.com/album/71jDa7zMjH8VzHZzalBJsw?si=pT_yI8ThSt6APqATDwyTgA"><img src="/tracks/album/neruppu.png" alt="Neruppu" loading="lazy" /><span>Neruppu</span></a>
          <a className="tile" href="https://open.spotify.com/album/6Avtjei5Zymj7G7I1sbawk?si=p3Xh1vcRSfqxr7XWqThm2g"><img src="/tracks/album/neruppu2.png" alt="Neruppu 2" loading="lazy" /><span>Neruppu 2</span></a>

        </div>
      </section>

      {/* PRESS PHOTOS */}
      <section id="photos">
        <span className="tag">PRESS PHOTOS</span>
        <div className="masonry">
          <img src="/rotr25/images/IMG_2152.jpg" alt="press1" loading="lazy" className="press-photo" onClick={() => openModal(0)} />
          <img src="/rotr25/images/IMG_2153.jpg" alt="press2" loading="lazy" className="press-photo" onClick={() => openModal(1)} />
          <img src="/rotr25/images/IMG_2163.jpg" alt="press3" loading="lazy" className="press-photo" onClick={() => openModal(2)} />
          <img src="/rotr25/images/IMG_2182.jpg" alt="press4" loading="lazy" className="press-photo" onClick={() => openModal(3)} />
          <img src="/rotr25/images/IMG_2238.jpg" alt="press5" loading="lazy" className="press-photo" onClick={() => openModal(4)} />
          <img src="/rotr25/images/IMG_2271.jpg" alt="press6" loading="lazy" className="press-photo" onClick={() => openModal(5)} />
        </div>
      </section>

      {/* VIDEO SPOTLIGHT */}
      <section id="video">
        <span className="tag">VIDEO SPOTLIGHT</span>
        <div className="video-wrapper">
          <iframe src="https://www.youtube.com/embed/yvkvxwmHUzU?feature=share" title="Video placeholder" frameBorder="0" allowFullScreen></iframe>
        </div>
      </section>

      {/* TOUR DATES */}
      <section id="tour">
        <span className="tag">UPCOMING TOUR DATES</span>
        <table>
          <thead><tr><th>Date</th><th>City</th><th>Venue</th></tr></thead>
          <tbody>
            <tr><td>01 Jan 2026</td><td>Chennai</td><td>Batcave Fragment</td></tr>
            <tr><td>05 Jan 2026</td><td>Bangalore</td><td>Tipsy Bull</td></tr>
            <tr><td>10 Jan 2026</td><td>Mumbai</td><td>Bandra Social</td></tr>
          </tbody>
        </table>
      </section>

      {/* CONTACT / FOOTER */}
      <footer id="contact">
        <div className="socials">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-youtube"></i>
        </div>
        <p>Manager: <a href="mailto:manager@example.com">manager@example.com</a> | PR: <a href="mailto:pr@example.com">pr@example.com</a></p>
        <a href="mailto:faultainment@gmail.com" className="text-lg">faultainment@gmail.com</a>
        <p style={{ marginTop: '.5rem' }}>© 2025 Artist Name</p>
      </footer>

      {/* MODAL/LIGHTBOX */}
      <div className={`modal-overlay ${isModalOpen ? 'active' : ''}`} onClick={closeModal}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <img 
            src={pressImages[currentImageIndex]} 
            alt={`Press photo ${currentImageIndex + 1}`} 
            className="modal-image"
          />
          <button className="modal-nav prev" onClick={prevImage} aria-label="Previous image">
            ‹
          </button>
          <button className="modal-nav next" onClick={nextImage} aria-label="Next image">
            ›
          </button>
          <button className="modal-close" onClick={closeModal} aria-label="Close modal">
            ×
          </button>
        </div>
      </div>
    </div>
  );
};

export default PressKitPage;
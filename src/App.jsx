import React, { useState, useRef, useEffect, useMemo } from 'react';
// Import icons from react-icons
import { FaFilm, FaCamera, FaVideo, FaInstagram, FaTiktok, FaPhone, FaWhatsapp, FaExternalLinkAlt, FaBars, FaTimes } from 'react-icons/fa';
import { MdOutlineEdit } from 'react-icons/md';

// --- Main App Component ---
function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu
  const contactRef = useRef(null);

  // Function to handle smooth scrolling when navigating
  const scrollToSection = (sectionId) => {
    setCurrentSection(sectionId);
    setIsMobileMenuOpen(false); // Close mobile menu on navigation
    setTimeout(() => {
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  // Function to handle smooth scrolling to Contact
  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
      setCurrentSection('contact');
      setIsMobileMenuOpen(false); // Close mobile menu
    }
  };

  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return <Home key="home" />;
      case 'about':
        return <About key="about" />;
      case 'services':
        return <Services key="services" />;
      case 'portfolio':
        return <Portfolio key="portfolio" onContactClick={scrollToContact} />;
      case 'contact':
        return <Contact key="contact" ref={contactRef} />;
      default:
        return <Home key="home-default" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#16151A] text-[#FFE4D0] font-sans antialiased scroll-smooth pt-28 md:pt-32">
      {/* Navigation Bar */}
      <nav className="bg-[#16151A] bg-opacity-90 backdrop-filter backdrop-blur-lg shadow-xl py-4 px-4 fixed w-full top-0 z-20 border-b border-[#F67011]">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#F67011] to-[#873800] cursor-pointer hover:opacity-90 transition duration-300"
            onClick={() => scrollToSection('home')}
          >
            Bradley Magomere <span className="font-light text-[#878787] text-lg tracking-wide"></span>
          </h1>

          {/* Mobile Menu Button (Hamburger/Close Icon) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#FFE4D0] hover:text-[#F67011] focus:outline-none focus:ring-2 focus:ring-[#F67011] p-2 rounded-md"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Navigation Links */}
          {/* Hidden on small screens by default, shown when isMobileMenuOpen is true OR on medium and larger screens */}
          <ul
            className={`w-full md:w-auto md:flex md:flex-row md:items-center md:gap-x-6 gap-y-2 text-lg mt-4 md:mt-0 ${isMobileMenuOpen ? 'flex flex-col items-center space-y-4 py-4' : 'hidden'}`}
            aria-label="Main navigation"
          >
            <li>
              <button
                className={`text-[#878787] hover:text-[#F67011] transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#F67011] focus:ring-opacity-50 px-3 py-2 rounded-md w-full text-center ${currentSection === 'home' ? 'font-semibold text-[#F67011] border-b-2 border-[#F67011]' : ''}`}
                onClick={() => scrollToSection('home')}
                aria-current={currentSection === 'home' ? 'page' : undefined}
              >
                Home
              </button>
            </li>
            <li>
              <button
                className={`text-[#878787] hover:text-[#F67011] transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#F67011] focus:ring-opacity-50 px-3 py-2 rounded-md w-full text-center ${currentSection === 'about' ? 'font-semibold text-[#F67011] border-b-2 border-[#F67011]' : ''}`}
                onClick={() => scrollToSection('about')}
                aria-current={currentSection === 'about' ? 'page' : undefined}
              >
                About
              </button>
            </li>
            <li>
              <button
                className={`text-[#878787] hover:text-[#F67011] transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#F67011] focus:ring-opacity-50 px-3 py-2 rounded-md w-full text-center ${currentSection === 'services' ? 'font-semibold text-[#F67011] border-b-2 border-[#F67011]' : ''}`}
                onClick={() => scrollToSection('services')}
                aria-current={currentSection === 'services' ? 'page' : undefined}
              >
                Services
              </button>
            </li>
            <li>
              <button
                className={`text-[#878787] hover:text-[#F67011] transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#F67011] focus:ring-opacity-50 px-3 py-2 rounded-md w-full text-center ${currentSection === 'portfolio' ? 'font-semibold text-[#F67011] border-b-2 border-[#F67011]' : ''}`}
                onClick={() => scrollToSection('portfolio')}
                aria-current={currentSection === 'portfolio' ? 'page' : undefined}
              >
                Portfolio
              </button>
            </li>
            <li>
              <button
                className={`text-[#878787] hover:text-[#F67011] transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#F67011] focus:ring-opacity-50 px-3 py-2 rounded-md w-full text-center ${currentSection === 'contact' ? 'font-semibold text-[#F67011] border-b-2 border-[#F67011]' : ''}`}
                onClick={() => scrollToSection('contact')}
                aria-current={currentSection === 'contact' ? 'page' : undefined}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8 md:py-12">
        {renderSection()}
      </main>

      <footer className="bg-[#16151A] text-[#878787] text-center p-6 mt-12 border-t border-[#262626]">
        <p>© {new Date().getFullYear()} Bradley Magomere. All rights reserved.</p>
      </footer>
    </div>
  );
}

// --- Home Section Component ---
function Home() {
  return (
    <section id="home" className="bg-gradient-to-br from-[#16151A] via-[#262626] to-[#873800] p-8 md:p-16 rounded-xl shadow-2xl text-center min-h-[calc(100vh-18rem)] flex flex-col justify-center items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-[#16151A] via-transparent to-[#F67011] opacity-30"></div>
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#FFE4D0] mb-4 md:mb-6 leading-tight animate-fade-in-down z-10 tracking-tight">
        Crafting Visual Stories
      </h2>
      <p className="text-[#878787] text-lg sm:text-xl mb-8 md:mb-10 animate-fade-in-up z-10 tracking-wide">
        Expertise in Directing, Photography, Videography, and Editing.
      </p>
      <img
        src="\12.jpg" // IMPORTANT: Assumes '12.jpg' is in 'public/assets/'
        alt="Creative visual work showcase by Director Brad"
        className="mx-auto rounded-lg shadow-2xl max-w-full h-auto animate-fade-in transform hover:scale-105 transition duration-500 z-10 border-2 border-[#F67011]"
        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/1200x600/16151A/FFE4D0?text=Visual+Load+Failed'; }}
      />
    </section>
  );
}

// --- About Section Component ---
function About() {
  return (
    <section id="about" className="bg-[#262626] p-8 md:p-12 rounded-xl shadow-2xl flex flex-col md:flex-row items-center gap-8 md:gap-12 border-2 border-[#F67011]">
      <img
        src="\13.jpg" // IMPORTANT: Assumes '13.jpg' is in 'public/assets/'
        alt="Headshot of Bradley Magomere (Director Brad)"
        className="rounded-full w-40 h-40 sm:w-48 sm:h-48 object-cover shadow-xl animate-fade-in-left flex-shrink-0 border-4 border-[#F67011] mx-auto md:mx-0"
        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/350x350/262626/FFE4D0?text=Image+Load+Failed'; }}
      />
      <div className="flex-1 animate-fade-in-right text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#FFE4D0] mb-4 md:mb-6">About Director Brad</h2>
        <p className="text-[#878787] text-base sm:text-lg leading-relaxed">
          Bradley Magomere, also known as Director Brad, is a passionate visual storyteller with a background in journalism and mass communication. His diverse skill set in directing, photography, videography, and editing allows him to approach each project with a unique perspective and a commitment to bringing narratives to life. With a keen eye for detail and a dedication to creative excellence, Director Brad transforms ideas into compelling visual experiences.
        </p>
      </div>
    </section>
  );
}

// --- Services Section Component ---
function Services() {
  return (
    <section id="services" className="bg-[#262626] p-8 md:p-12 rounded-xl shadow-2xl text-center border-2 border-[#F67011]">
      <h2 className="text-3xl sm:text-4xl font-bold text-[#FFE4D0] mb-8 md:mb-10 text-center">Services Offered & Rate Card</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 text-[#878787]">
        {/* Service Card 1: Directing */}
        <div className="bg-[#16151A] p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2 border border-[#F67011] hover:border-[#FFE4D0] animate-fade-in-up flex flex-col">
          <div className="text-[#F67011] text-4xl mb-4 text-center">
            <FaFilm className="inline-block" aria-hidden="true" />
          </div>
          <h3 className="text-xl font-semibold text-[#FFE4D0] mb-3 text-center">Directing</h3>
          <p className="text-sm text-[#878787] mb-4 leading-relaxed text-center flex-grow">
            Bringing your creative vision to the screen. Specializing in leading projects from concept to completion.
          </p>
          <div className="mt-4 pt-4 border-t border-[#F67011] text-sm text-[#878787] text-center">
            <h4 className="text-[#FFE4D0] font-semibold mb-2 text-center">Rates:</h4>
            <ul className="list-disc list-inside space-y-1 text-left sm:text-center text-xs sm:text-sm">
              <li>Short Film/Music Video: KES 30,000+ <span className="block text-xs text-[#6b6b6b]">(Consult for quote)</span></li>
              <li>TV Segment/Episode: KES 25,000+ <span className="block text-xs text-[#6b6b6b]">(Per segment)</span></li>
              <li>Commercial/Ad Spot: KES 40,000+ <span className="block text-xs text-[#6b6b6b]">(Concept to basic prod.)</span></li>
              <li>Day Rate (Production): KES 20,000+ <span className="block text-xs text-[#6b6b6b]">(Director's fee, up to 8 hrs)</span></li>
            </ul>
          </div>
        </div>

        {/* Service Card 2: Photography */}
        <div className="bg-[#16151A] p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2 border border-[#F67011] hover:border-[#FFE4D0] animate-fade-in-up delay-100 flex flex-col">
          <div className="text-[#F67011] text-4xl mb-4 text-center">
            <FaCamera className="inline-block" aria-hidden="true" />
          </div>
          <h3 className="text-xl font-semibold text-[#FFE4D0] mb-3 text-center">Photography</h3>
          <p className="text-sm text-[#878787] mb-4 leading-relaxed text-center flex-grow">
            Capturing moments and stories through compelling still images for portraits, events, and commercial needs.
          </p>
          <div className="mt-4 pt-4 border-t border-[#F67011] text-sm text-[#878787] text-center">
            <h4 className="text-[#FFE4D0] font-semibold mb-2 text-center">Rates:</h4>
            <ul className="list-disc list-inside space-y-1 text-left sm:text-center text-xs sm:text-sm">
              <li>Portrait Session: KES 7,000+ <span className="block text-xs text-[#6b6b6b]">(1hr, 10 edited photos)</span></li>
              <li>Event Hourly: KES 3,500/hr+ <span className="block text-xs text-[#6b6b6b]">(Min. 2 hrs)</span></li>
              <li>Event Half-Day (4hrs): KES 13,000+</li>
              <li>Event Full-Day (8hrs): KES 25,000+</li>
              <li>Commercial Shoot: KES 15,000+ <span className="block text-xs text-[#6b6b6b]">(Consult for specifics)</span></li>
              <li>Additional Edited Photo: KES 300</li>
            </ul>
          </div>
        </div>

        {/* Service Card 3: Videography */}
        <div className="bg-[#16151A] p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2 border border-[#F67011] hover:border-[#FFE4D0] animate-fade-in-up delay-200 flex flex-col">
          <div className="text-[#F67011] text-4xl mb-4 text-center">
            <FaVideo className="inline-block" aria-hidden="true" />
          </div>
          <h3 className="text-xl font-semibold text-[#FFE4D0] mb-3 text-center">Videography</h3>
          <p className="text-sm text-[#878787] mb-4 leading-relaxed text-center flex-grow">
            Producing high-quality video content for events, corporate needs, documentaries, and more.
          </p>
          <div className="mt-4 pt-4 border-t border-[#F67011] text-sm text-[#878787] text-center">
            <h4 className="text-[#FFE4D0] font-semibold mb-2 text-center">Rates:</h4>
            <ul className="list-disc list-inside space-y-1 text-left sm:text-center text-xs sm:text-sm">
              <li>Event Hourly: KES 7,000/hr+ <span className="block text-xs text-[#6b6b6b]">(Min. 2 hrs, basic edit)</span></li>
              <li>Event Half-Day (4hrs): KES 20,000+ <span className="block text-xs text-[#6b6b6b]">(Edited highlight)</span></li>
              <li>Event Full-Day (8hrs): KES 45,000+ <span className="block text-xs text-[#6b6b6b]">(Comprehensive edit)</span></li>
              <li>Corporate Video: KES 40,000+ <span className="block text-xs text-[#6b6b6b]">(Short promo, consult)</span></li>
              <li>Basic Package: KES 25,000+ <span className="block text-xs text-[#6b6b6b]">(e.g. Simple promo, ~2min)</span></li>
              <li>Standard Package: KES 40,000+ <span className="block text-xs text-[#6b6b6b]">(e.g. Event highlight, ~5min)</span></li>
            </ul>
          </div>
        </div>

        {/* Service Card 4: Video & Photo Editing */}
        <div className="bg-[#16151A] p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2 border border-[#F67011] hover:border-[#FFE4D0] animate-fade-in-up delay-300 flex flex-col">
          <div className="text-[#F67011] text-4xl mb-4 text-center">
            <MdOutlineEdit className="inline-block" aria-hidden="true" />
          </div>
          <h3 className="text-xl font-semibold text-[#FFE4D0] mb-3 text-center">Video & Photo Editing</h3>
          <p className="text-sm text-[#878787] mb-4 leading-relaxed text-center flex-grow">
            Transforming raw footage and images into polished, professional content. Comprehensive post-production.
          </p>
          <div className="mt-4 pt-4 border-t border-[#F67011] text-sm text-[#878787] text-center">
            <h4 className="text-[#FFE4D0] font-semibold mb-2 text-center">Rates:</h4>
            <ul className="list-disc list-inside space-y-1 text-left sm:text-center text-xs sm:text-sm">
              <li>Video Editing Project: KES 8,000+ <span className="block text-xs text-[#6b6b6b]">(Basic, complexity dependent)</span></li>
              <li>Photo Retouching: KES 300-500/photo <span className="block text-xs text-[#6b6b6b]">(Complexity based)</span></li>
              <li>Hourly Editing Rate: KES 3,500/hr+</li>
              <li>Basic Editing Package: KES 15,000+ <span className="block text-xs text-[#6b6b6b]">(Approx. 5-6 hrs work)</span></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-10 text-center">
        <p className="text-[#878787] text-base md:text-lg text-center">
          Please note: Rates are indicative starting points. Prices may vary based on project scope, complexity, specific requirements, and travel. <strong className="text-[#FFE4D0]">Contact for a detailed quote.</strong>
        </p>
      </div>
    </section>
  );
}

// --- Portfolio Section Component ---
function Portfolio({ onContactClick }) {
  const portfolioItems = useMemo(() => [
    {
      id: 17,
      type: 'google_photo_link',
      title: 'Event Photography Gallery',
      thumbnailUrl: 'https://placehold.co/600x400/16151A/FFE4D0?text=Event+Highlights', // Placeholder, replace with actual if available or keep as is
      actualLink: 'https://photos.app.goo.gl/BEFedPutYQqzpasaA',
      description: 'A curated collection of event photography. Click image to view gallery.',
    },
    {
      id: 18,
      type: 'google_photo_link',
      title: 'Creative Projects Showcase',
      thumbnailUrl: 'https://placehold.co/600x400/16151A/FFE4D0?text=Creative+Work', // Placeholder
      actualLink: 'https://photos.app.goo.gl/FL23nB3p2NbMERbS8',
      description: 'Diverse visual projects and creative captures. Click image to explore.',
    },
    {
      id: 7,
      type: 'tiktok',
      title: 'TikTok: Directing 4pm News',
      mediaUrl: 'https://www.tiktok.com/@director_brad/video/7275999622982651142?is_from_webapp=1&sender_device=pc&web_id=7499888608444335633',
      description: 'Behind the scenes glimpse of directing the 4pm news segment.',
    },
    {
      id: 8,
      type: 'tiktok',
      title: 'TikTok: Coca-Cola Event',
      mediaUrl: 'https://www.tiktok.com/@director_brad/video/7489848557676088582?is_from_webapp=1&sender_device=pc&web_id=7499888608444335633',
      description: 'Capturing the vibrant energy and key moments of a special Coca-Cola event.',
    },
    {
      id: 9,
      type: 'tiktok',
      title: 'TikTok: Ramogi TV Feature',
      mediaUrl: 'https://www.tiktok.com/@director_brad/video/7266059382725692677?is_from_webapp=1&sender_device=pc&web_id=7499888608444335633',
      description: 'Showcasing work featured on Ramogi TV.',
    },
    {
      id: 10,
      type: 'instagram',
      title: 'Instagram Reel Showcase',
      mediaUrl: 'https://www.instagram.com/reel/DJXN7eBoNEP/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
      description: 'A dynamic reel highlighting various projects and visual styles on Instagram.',
    },
    {
      id: 11,
      type: 'instagram',
      title: 'Instagram Post: Visual Story',
      mediaUrl: 'https://www.instagram.com/p/C35hFIONQEC/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
      description: 'Engaging visual content shared on Instagram, telling a unique story.',
    },
    {
      id: 12,
      type: 'instagram',
      title: 'Instagram: Light & Shadow',
      mediaUrl: 'https://www.instagram.com/p/CpGVWi6N2EE/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
      description: 'Artistic capture focusing on the interplay of light and shadow.',
    },
    {
      id: 13,
      type: 'instagram',
      title: 'Instagram: Event Capture',
      mediaUrl: 'https://www.instagram.com/p/CmQ2hgvtZf3/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
      description: 'Highlights from a recent event, captured and shared on Instagram.',
    },
    {
      id: 14,
      type: 'instagram',
      title: 'Instagram: Creative Portrait',
      mediaUrl: 'https://www.instagram.com/p/ClUMCAxNmNA/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
      description: 'A creative portrait session showcased on Instagram.',
    },
    {
      id: 15,
      type: 'instagram',
      title: 'Instagram: Behind the Scenes',
      mediaUrl: 'https://www.instagram.com/p/CkOcn1CN9wC/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
      description: 'A sneak peek behind the scenes of a recent project.',
    },
    {
      id: 16,
      type: 'instagram',
      title: 'Instagram: Event Moments',
      mediaUrl: 'https://www.instagram.com/p/Cjcaw5nMoXe/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
      description: 'Capturing the energy and key moments of a special event.',
    }
  ], []);

  useEffect(() => {
    const loadScript = (src, id, callback) => {
      const existingScript = document.getElementById(id);
      if (!existingScript) {
        const script = document.createElement('script');
        script.src = src;
        script.id = id;
        script.async = true;
        script.defer = true; // Ensure scripts load in order if dependent, though these are independent
        document.body.appendChild(script);
        script.onload = () => {
          if (callback) callback();
        };
        script.onerror = () => {
            console.error(`Failed to load script: ${src}`);
        };
      } else if (callback) {
        // If script already exists, try to run callback, especially for re-processing embeds
        if (id === 'instagram-embed-script' && window.instgrm && typeof window.instgrm.Embeds.process === 'function') {
            window.instgrm.Embeds.process();
        } else if (id === 'tiktok-embed-script') { // TikTok might not need explicit reprocessing this way
            callback(); // Or specific TikTok reprocessing if available
        } else {
            callback();
        }
      }
    };

    const hasTikTok = portfolioItems.some(item => item.type === 'tiktok');
    const hasInstagram = portfolioItems.some(item => item.type === 'instagram');

    if (hasTikTok) {
      loadScript('https://www.tiktok.com/embed.js', 'tiktok-embed-script', () => {
        // TikTok usually auto-processes, but a check or manual trigger could be added if needed
        // e.g. if (typeof window.tiktok?.embed?.process === 'function') window.tiktok.embed.process();
      });
    }

    if (hasInstagram) {
      loadScript('https://www.instagram.com/embed.js', 'instagram-embed-script', () => {
        if (window.instgrm && typeof window.instgrm.Embeds.process === 'function') {
          window.instgrm.Embeds.process();
        }
      });
    }
    // Clean up scripts if component unmounts (optional, but good practice for SPAs if scripts cause issues on re-renders)
    // return () => {
    //   const tiktokScript = document.getElementById('tiktok-embed-script');
    //   if (tiktokScript) tiktokScript.remove();
    //   const instagramScript = document.getElementById('instagram-embed-script');
    //   if (instagramScript) instagramScript.remove();
    // };
  }, [portfolioItems]); // Rerun if portfolioItems change (though they are memoized)


  return (
    <section id="portfolio" className="bg-[#262626] p-6 sm:p-8 md:p-12 rounded-xl shadow-2xl text-center border-2 border-[#F67011]">
      <h2 className="text-3xl sm:text-4xl font-bold text-[#FFE4D0] mb-8 md:mb-10 text-center">Featured Work</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {portfolioItems.map(item => (
          <div key={item.id} className="bg-[#16151A] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 animate-fade-in border border-[#F67011] flex flex-col">
            {/* Media container */}
            <div className="flex-shrink-0">
              {item.type === 'photo' && ( // This type is not used in your current portfolioItems, but kept for future
                <img
                  src={item.mediaUrl}
                  alt={item.title}
                  className="w-full h-60 object-cover transition duration-300 hover:opacity-80"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://placehold.co/600x400/16151A/FFE4D0?text=Image+Load+Failed';
                  }}
                />
              )}
              {item.type === 'google_photo_link' && (
                 <a href={item.actualLink} target="_blank" rel="noopener noreferrer" className="block w-full h-60 group relative bg-black">
                    <img
                        src={item.thumbnailUrl} // Using thumbnailUrl for display
                        alt={item.title}
                        className="w-full h-full object-cover transition duration-300 group-hover:opacity-60"
                        onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://placehold.co/600x400/16151A/FFE4D0?text=Gallery+Failed';
                        }}
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
                        <FaExternalLinkAlt className="text-white text-3xl mb-2" />
                        <span className="text-white text-center text-sm font-semibold p-2 rounded">View Gallery</span>
                    </div>
                </a>
              )}
              {item.type === 'video' && ( // This type is not used in your current portfolioItems
                <div className="relative w-full aspect-video">
                  <iframe
                    src={item.mediaUrl}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                    title={item.title}
                  ></iframe>
                </div>
              )}
              {item.type === 'tiktok' && (
                <div className="relative w-full flex justify-center bg-black min-h-[500px] sm:min-h-[550px] md:min-h-[600px]"> {/* Added min-height for better embed loading */}
                  <blockquote
                    className="tiktok-embed"
                    cite={item.mediaUrl}
                    data-video-id={item.mediaUrl.split('/').pop().split('?')[0]} // Extracts video ID
                    style={{ maxWidth: '100%', minWidth: '300px', margin: '0 auto', height: '100%' }} // Adjusted style for responsiveness
                  >
                    <section className="p-2 text-xs text-gray-400"> {/* Fallback content style */}
                       <a target="_blank" rel="noopener noreferrer" title={`TikTok by @${item.mediaUrl.split('@')[1]?.split('/')[0] || 'director_brad'}`} href={item.mediaUrl}>
                         View TikTok by @{item.mediaUrl.split('@')[1]?.split('/')[0] || 'director_brad'} - {item.title}
                       </a>
                       <p>{item.description}</p>
                    </section>
                  </blockquote>
                </div>
              )}
              {item.type === 'instagram' && (
                <div className="relative w-full flex justify-center bg-white min-h-[500px] sm:min-h-[580px]"> {/* Added min-height for better embed loading */}
                  <blockquote
                    className="instagram-media"
                    data-instgrm-captioned
                    data-instgrm-permalink={item.mediaUrl}
                    data-instgrm-version="14"
                    style={{
                      background: '#FFF', border: '0', borderRadius: '3px',
                      boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                      margin: '1px auto', maxWidth: 'calc(100% - 2px)', minWidth: '300px', // Adjusted for responsiveness
                      padding: '0', width: 'calc(100% - 2px)',
                    }}
                  >
                    {/* Fallback content while Instagram embed loads */}
                    <div style={{ padding: '16px' }}>
                      <a
                        href={item.mediaUrl}
                        style={{ background: '#FFFFFF', lineHeight: 0, padding: '0 0', textAlign: 'center', textDecoration: 'none', width: '100%' }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                          <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', flexGrow: 0, height: '40px', marginRight: '14px', width: '40px' }}></div>
                          <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center' }}>
                            <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', marginBottom: '6px', width: '100px' }}></div>
                            <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', width: '60px' }}></div>
                          </div>
                        </div>
                        <div style={{ padding: '19% 0' }}></div>
                        <div style={{ display: 'block', height: '50px', margin: '0 auto 12px', width: '50px' }}>
                          {/* Basic SVG Placeholder for Instagram Icon */}
                          <svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="http://www.w3.org/2000/svg"><g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg>
                        </div>
                        <div style={{ paddingTop: '8px' }}>
                          <div style={{ color: '#3897f0', fontFamily: 'Arial,sans-serif', fontSize: '14px', fontStyle: 'normal', fontWeight: '550', lineHeight: '18px' }}>View this post on Instagram</div>
                        </div>
                      </a>
                      <p style={{ color: '#c9c8cd', fontFamily: 'Arial,sans-serif', fontSize: '14px', lineHeight: '17px', marginBottom: 0, marginTop: '8px', overflow: 'hidden', padding: '8px 0 7px', textAlign: 'center', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        <a href={item.mediaUrl.split("?")[0]} style={{ color: '#c9c8cd', fontFamily: 'Arial,sans-serif', fontSize: '14px', fontStyle: 'normal', fontWeight: 'normal', lineHeight: '17px', textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
                          A post shared by Urban Brad Pictures (@urban_brad_finesse)
                        </a>
                      </p>
                    </div>
                  </blockquote>
                </div>
              )}
            </div>
            {/* Text content container */}
            <div className="p-4 md:p-6 text-center flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-[#FFE4D0] mb-2">{item.title}</h3>
                <p className="text-[#878787] text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <button onClick={onContactClick} className="bg-gradient-to-r from-[#F67011] to-[#873800] text-[#FFE4D0] font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#F67011] focus:ring-opacity-50 text-lg border border-[#FFE4D0]">
          Explore More & Connect
        </button>
      </div>
    </section>
  );
}


// --- Contact Section Component (using React.forwardRef) ---
const Contact = React.forwardRef((props, ref) => {
  const phoneNumber = '254746480706';
  const formattedPhoneNumber = '+254 746 480706';
  const whatsappMessage = encodeURIComponent("Hello Director Brad, I saw your portfolio website and would like to discuss a project.");
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
  const callLink = `tel:${formattedPhoneNumber.replace(/\s/g, '')}`;
  const emailAddress = 'magomerebrad018@gmail.com';
  const socialLinks = {
    instagram: "https://www.instagram.com/Urban_brad_finesse",
    tiktok: "https://www.tiktok.com/@director_brad",
  };

  return (
    <section id="contact" ref={ref} className="bg-[#262626] p-8 md:p-12 rounded-xl shadow-2xl text-center border-2 border-[#F67011]">
      <h2 className="text-3xl sm:text-4xl font-bold text-[#FFE4D0] mb-6 md:mb-8">Let's Collaborate</h2>
      <p className="text-[#878787] text-base md:text-lg mb-8 md:mb-10">
        Ready to bring your vision to life? Get in touch to discuss your project or explore more of my work.
      </p>
      <div className="flex flex-col items-center space-y-6 text-[#878787]">
        <div className="flex flex-col md:flex-row items-center md:space-x-8 space-y-4 md:space-y-0 text-base md:text-xl">
          <p className="flex items-center">
            <FaPhone className="inline-block mr-2 text-[#F67011] text-xl md:text-2xl" aria-hidden="true" />
            Phone: <a href={callLink} className="text-[#FFE4D0] hover:underline ml-2">{formattedPhoneNumber}</a>
          </p>
          <p className="flex items-center">
            {/* Using a simple SVG for email icon as an example if react-icons doesn't have a specific one you prefer */}
            <svg className="w-5 h-5 md:w-6 md:h-6 inline-block mr-2 text-[#F67011]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-12-8.713v16h24v-16h-24zm1.942 2l10.058 8.156 10.058-8.156h-20.116z" /></svg>
            Email: <a href={`mailto:${emailAddress}`} className="text-[#FFE4D0] hover:underline ml-2">{emailAddress}</a>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 mt-6">
          <a
            href={callLink}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-[#16151A] bg-[#F67011] hover:bg-[#873800] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F67011] transition duration-300 transform hover:-translate-y-1 hover:shadow-xl"
          >
            <FaPhone className="w-5 h-5 mr-2" aria-hidden="true" />
            Call Now
          </a>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-[#16151A] bg-[#FFE4D0] hover:bg-[#878787] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FFE4D0] transition duration-300 transform hover:-translate-y-1 hover:shadow-xl"
          >
            <FaWhatsapp className="w-5 h-5 mr-2" aria-hidden="true" />
            Message on WhatsApp
          </a>
        </div>

        <div className="flex space-x-5 sm:space-x-6 mt-8">
          {socialLinks.instagram && (
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[#878787] hover:text-[#F67011] transition duration-300 transform hover:scale-110">
              <FaInstagram className="w-7 h-7 sm:w-8 sm:h-8" aria-hidden="true" />
            </a>
          )}

          {socialLinks.tiktok && (
            <a href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-[#878787] hover:text-[#F67011] transition duration-300 transform hover:scale-110">
              <FaTiktok className="w-7 h-7 sm:w-8 sm:h-8" aria-hidden="true" />
            </a>
          )}
        </div>
        <p className="text-[#878787] text-xs sm:text-sm mt-4 text-center">
          Connect with me on social media or reach out directly for collaborations.
        </p>
      </div>
    </section>
  );
});
Contact.displayName = 'Contact';

export default App;

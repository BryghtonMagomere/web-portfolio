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
              <li>Short Film/Music Video: KES 15,000+ <span className="block text-xs text-[#6b6b6b]">(Consult for quote)</span></li>
              <li>TV Segment/Episode: KES 10,000+ <span className="block text-xs text-[#6b6b6b]">(Per segment)</span></li>
              <li>Commercial/Ad Spot: KES 20,000+ <span className="block text-xs text-[#6b6b6b]">(Concept to basic prod.)</span></li>
              <li>Day Rate (Production): KES 8,000+ <span className="block text-xs text-[#6b6b6b]">(Director's fee, up to 8 hrs)</span></li>
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
              <li>Portrait Session: KES 4,000+ <span className="block text-xs text-[#6b6b6b]">(1hr, 10 edited photos)</span></li>
              <li>Event Hourly: KES 2,000/hr+ <span className="block text-xs text-[#6b6b6b]">(Min. 2 hrs)</span></li>
              <li>Event Half-Day (4hrs): KES 7,000+</li>
              <li>Event Full-Day (8hrs): KES 12,000+</li>
              <li>Commercial Shoot: KES 10,000+ <span className="block text-xs text-[#6b6b6b]">(Consult for specifics)</span></li>
              <li>Additional Edited Photo: KES 200</li>
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
              <li>Event Hourly: KES 4,000/hr+ <span className="block text-xs text-[#6b6b6b]">(Min. 2 hrs, basic edit)</span></li>
              <li>Event Half-Day (4hrs): KES 12,000+ <span className="block text-xs text-[#6b6b6b]">(Edited highlight)</span></li>
              <li>Event Full-Day (8hrs): KES 25,000+ <span className="block text-xs text-[#6b6b6b]">(Comprehensive edit)</span></li>
              <li>Corporate Video: KES 20,000+ <span className="block text-xs text-[#6b6b6b]">(Short promo, consult)</span></li>
              <li>Basic Package: KES 12,000+ <span className="block text-xs text-[#6b6b6b]">(e.g. Simple promo, ~2min)</span></li>
              <li>Standard Package: KES 25,000+ <span className="block text-xs text-[#6b6b6b]">(e.g. Event highlight, ~5min)</span></li>
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
              <li>Video Editing Project: KES 5,000+ <span className="block text-xs text-[#6b6b6b]">(Basic, complexity dependent)</span></li>
              <li>Photo Retouching: KES 200-400/photo <span className="block text-xs text-[#6b6b6b]">(Complexity based)</span></li>
              <li>Hourly Editing Rate: KES 2,000/hr+</li>
              <li>Basic Editing Package: KES 8,000+ <span className="block text-xs text-[#6b6b6b]">(Approx. 5-6 hrs work)</span></li>
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
      thumbnailUrl: 'https://placehold.co/600x400/16151A/FFE4D0?text=Event+Highlights',
      actualLink: 'https://photos.app.goo.gl/BEFedPutYQqzpasaA',
      description: 'A curated collection of event photography. Click image to view gallery.',
      category: 'photography'
    },
    {
      id: 18,
      type: 'google_photo_link',
      title: 'Creative Projects Showcase',
      thumbnailUrl: 'https://placehold.co/600x400/16151A/FFE4D0?text=Creative+Work',
      actualLink: 'https://photos.app.goo.gl/FL23nB3p2NbMERbS8',
      description: 'Diverse visual projects and creative captures. Click image to explore.',
      category: 'photography'
    },
    {
      id: 7,
      type: 'tiktok',
      title: 'Directing 4pm News',
      mediaUrl: 'https://www.tiktok.com/@director_brad/video/7275999622982651142?is_from_webapp=1&sender_device=pc&web_id=7499888608444335633',
      description: 'Behind the scenes glimpse of directing the 4pm news segment.',
      category: 'videography'
    },
    {
      id: 8,
      type: 'tiktok',
      title: 'Coca-Cola Event Coverage',
      mediaUrl: 'https://www.tiktok.com/@director_brad/video/7489848557676088582?is_from_webapp=1&sender_device=pc&web_id=7499888608444335633',
      description: 'Capturing the vibrant energy and key moments of a special Coca-Cola event.',
      category: 'videography'
    },
    {
      id: 9,
      type: 'tiktok',
      title: 'Ramogi TV Feature',
      mediaUrl: 'https://www.tiktok.com/@director_brad/video/7266059382725692677?is_from_webapp=1&sender_device=pc&web_id=7499888608444335633',
      description: 'Showcasing work featured on Ramogi TV.',
      category: 'videography'
    },
    {
      id: 10,
      type: 'instagram',
      title: 'Instagram Reel Showcase',
      mediaUrl: 'https://www.instagram.com/reel/DJXN7eBoNEP/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
      description: 'A dynamic reel highlighting various projects and visual styles on Instagram.',
      category: 'social'
    },
    {
      id: 11,
      type: 'instagram',
      title: 'Visual Story',
      mediaUrl: 'https://www.instagram.com/p/C35hFIONQEC/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
      description: 'Engaging visual content shared on Instagram, telling a unique story.',
      category: 'photography'
    },
    {
      id: 12,
      type: 'instagram',
      title: 'Light & Shadow',
      mediaUrl: 'https://www.instagram.com/p/CpGVWi6N2EE/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
      description: 'Artistic capture focusing on the interplay of light and shadow.',
      category: 'photography'
    },
    {
      id: 13,
      type: 'instagram',
      title: 'Event Capture',
      mediaUrl: 'https://www.instagram.com/p/CmQ2hgvtZf3/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
      description: 'Highlights from a recent event, captured and shared on Instagram.',
      category: 'photography'
    }
  ], []);

  const [activeFilter, setActiveFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  // Filter items based on active filter
  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  // Categorize items for the filter buttons
  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'photography', name: 'Photography' },
    { id: 'videography', name: 'Videography' },
    { id: 'social', name: 'Social Media' }
  ];

  useEffect(() => {
    const loadScript = (src, id, callback) => {
      const existingScript = document.getElementById(id);
      if (!existingScript) {
        const script = document.createElement('script');
        script.src = src;
        script.id = id;
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
        script.onload = () => {
          if (callback) callback();
        };
        script.onerror = () => {
          console.error(`Failed to load script: ${src}`);
        };
      } else if (callback) {
        if (id === 'instagram-embed-script' && window.instgrm && typeof window.instgrm.Embeds.process === 'function') {
          window.instgrm.Embeds.process();
        } else if (id === 'tiktok-embed-script') {
          callback();
        }
      }
    };

    const hasTikTok = portfolioItems.some(item => item.type === 'tiktok');
    const hasInstagram = portfolioItems.some(item => item.type === 'instagram');

    if (hasTikTok) {
      loadScript('https://www.tiktok.com/embed.js', 'tiktok-embed-script');
    }

    if (hasInstagram) {
      loadScript('https://www.instagram.com/embed.js', 'instagram-embed-script', () => {
        if (window.instgrm && typeof window.instgrm.Embeds.process === 'function') {
          window.instgrm.Embeds.process();
        }
      });
    }

    // Simulate loading for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [portfolioItems]);

  return (
    <section id="portfolio" className="bg-[#262626] p-6 sm:p-8 md:p-12 rounded-xl shadow-2xl text-center border-2 border-[#F67011]">
      <h2 className="text-3xl sm:text-4xl font-bold text-[#FFE4D0] mb-6 md:mb-8">Portfolio</h2>
      <p className="text-[#878787] text-lg mb-8 max-w-3xl mx-auto">
        Explore my diverse range of visual storytelling projects across photography, videography, and social media content.
      </p>
      
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setActiveFilter(category.id)}
            className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
              activeFilter === category.id 
                ? 'bg-[#F67011] text-[#FFE4D0] shadow-md'
                : 'bg-[#16151A] text-[#878787] hover:bg-[#1e1e1e] hover:text-[#FFE4D0]'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#F67011]"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredItems.map(item => (
            <div 
              key={item.id} 
              className="bg-[#16151A] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 border border-[#262626] hover:border-[#F67011] flex flex-col group"
            >
              {/* Media container */}
              <div className="relative overflow-hidden h-60">
                {item.type === 'google_photo_link' && (
                  <a 
                    href={item.actualLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block w-full h-full group-hover:opacity-90 transition-opacity duration-300"
                  >
                    <img
                      src={item.thumbnailUrl}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://placehold.co/600x400/16151A/FFE4D0?text=Gallery+Failed';
                      }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-[#F67011] text-white px-4 py-2 rounded-full flex items-center">
                        <FaExternalLinkAlt className="mr-2" />
                        <span>View Gallery</span>
                      </div>
                    </div>
                  </a>
                )}
                
                {item.type === 'tiktok' && (
                  <div className="w-full h-full bg-black flex items-center justify-center">
                    <blockquote
                      className="tiktok-embed w-full"
                      cite={item.mediaUrl}
                      data-video-id={item.mediaUrl.split('/').pop().split('?')[0]}
                    >
                      <div className="p-4 text-center">
                        <p className="text-white mb-2">Loading TikTok...</p>
                        <a 
                          href={item.mediaUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-[#F67011] hover:underline"
                        >
                          View on TikTok
                        </a>
                      </div>
                    </blockquote>
                  </div>
                )}
                
                {item.type === 'instagram' && (
                  <div className="w-full h-full bg-white flex items-center justify-center">
                    <blockquote
                      className="instagram-media w-full h-full"
                      data-instgrm-captioned
                      data-instgrm-permalink={item.mediaUrl}
                      data-instgrm-version="14"
                    >
                      <div className="p-4 text-center">
                        <p className="text-[#16151A] mb-2">Loading Instagram post...</p>
                        <a 
                          href={item.mediaUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-[#F67011] hover:underline"
                        >
                          View on Instagram
                        </a>
                      </div>
                    </blockquote>
                  </div>
                )}
              </div>
              
              {/* Text content container */}
              <div className="p-5 flex-grow flex flex-col">
                <div className="mb-3">
                  <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${
                    item.category === 'photography' ? 'bg-blue-900 text-blue-100' :
                    item.category === 'videography' ? 'bg-purple-900 text-purple-100' :
                    'bg-orange-900 text-orange-100'
                  }`}>
                    {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-[#FFE4D0] mb-2">{item.title}</h3>
                <p className="text-[#878787] text-sm mb-4 flex-grow">{item.description}</p>
                <div className="mt-auto pt-3 border-t border-[#262626]">
                  {item.type === 'google_photo_link' ? (
                    <a
                      href={item.actualLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[#F67011] hover:text-[#FFE4D0] text-sm transition-colors"
                    >
                      <FaExternalLinkAlt className="mr-1" />
                      View Gallery
                    </a>
                  ) : (
                    <a
                      href={item.mediaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[#F67011] hover:text-[#FFE4D0] text-sm transition-colors"
                    >
                      <FaExternalLinkAlt className="mr-1" />
                      View on {item.type === 'tiktok' ? 'TikTok' : 'Instagram'}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <p className="text-[#878787] text-lg">No projects found in this category.</p>
        </div>
      )}

      <div className="mt-12 text-center">
        <button 
          onClick={onContactClick} 
          className="bg-gradient-to-r from-[#F67011] to-[#873800] text-[#FFE4D0] font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#F67011] focus:ring-opacity-50 text-lg border border-[#FFE4D0]"
        >
          Ready to Create Something Amazing?
        </button>
        <p className="text-[#878787] text-sm mt-4">
          Have a project in mind? Let's discuss how we can bring your vision to life.
        </p>
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

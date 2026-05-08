import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['Home', 'Service', 'About', 'Pricing', 'Support'];
      let current = 'Home';

      sections.forEach((section) => {
        const element = document.getElementById(section.toLowerCase());
        if (element) {
          const top = element.getBoundingClientRect().top;
          if (top < window.innerHeight / 2) {
            current = section;
          }
        }
      });

      setActiveLink(current);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (

    <nav className="sticky top-0 z-50 bg-white">
      <div className="max-w-[1300px] mx-auto px-6 py-4 md:py-10 flex items-center justify-between">

        <a href="#home" className="ml-0 md:-ml-4 text-[37px] md:text-4xl font-bold tracking-tight leading-none">
          <span style={{ color: '#756aa5ff' }}>Bu</span>
          <span className="text-primary">cheen</span>
        </a>

        <ul className="hidden md:flex items-center gap-10 text-[17px] text-gray-400 ml-12">
          {['Home', 'Service', 'About', 'Pricing', 'Support'].map((item) => (
            <li key={item}>
             
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => setActiveLink(item)}
                className={`transition-colors duration-200 font-medium ${activeLink === item ? 'text-primary' : 'hover:text-primary'
                  }`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden md:flex items-center gap-4">
          <button className="w-[120px] py-3 text-[16px] font-medium text-primary border-2 border-primary rounded-2xl hover:bg-primary hover:text-white transition-all duration-200 flex justify-center items-center">
            Sign In
          </button>
          <button className="w-[120px] py-3 text-[16px] font-medium text-white bg-primary border-2 border-transparent rounded-2xl hover:bg-orange-500 transition-all duration-200 shadow-md flex justify-center items-center">
            Sign Up
          </button>
        </div>
        <button
          className="md:hidden flex flex-col gap-[5px] p-3 rounded-lg"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={`w-7 h-[3px] bg-gray-900 rounded-full transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[8px]' : ''}`} />
          <span className={`w-4 h-[3px] bg-gray-900 rounded-full transition-all duration-300 self-end ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`w-7 h-[3px] bg-gray-900 rounded-full transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`} />
        </button>
      </div>

      <div className={`md:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-80' : 'max-h-0'}`}>
        <ul className="px-6 py-4 flex flex-col gap-4 text-sm text-gray-400">
          {['Home', 'Service', 'About', 'Pricing', 'Support'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => {
                  setActiveLink(item);
                  setMenuOpen(false);
                }}
                className={`transition-colors font-medium ${activeLink === item ? 'text-primary' : 'hover:text-primary'
                  }`}
              >
                {item}
              </a>
            </li>
          ))}
          <li className="flex gap-3 pt-2">
            <button className="flex-1 py-3 text-[16px] font-medium text-primary border-2 border-primary rounded-2xl">Sign In</button>
            <button className="flex-1 py-3 text-[16px] font-medium text-white bg-primary rounded-2xl">Sign Up</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useEffect, useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold text-[#1E88E5] font-[Poppins]">
            Ceylon<span className="text-[#4CAF50]">Future</span>
          </a>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['Home', 'Services', 'About', 'Portfolio', 'Contact'].map(item => <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-700 hover:text-[#1E88E5] transition-colors font-medium">
              {item}
            </a>)}
          <a href="#contact" className="bg-[#1E88E5] hover:bg-[#1976D2] text-white px-6 py-2 rounded-md transition-colors font-medium">
            Get Started
          </a>
        </nav>
        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 py-4 px-4 animate-fadeIn">
          <nav className="flex flex-col space-y-4">
            {['Home', 'Services', 'About', 'Portfolio', 'Contact'].map(item => <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-700 hover:text-[#1E88E5] transition-colors font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                  {item}
                </a>)}
            <a href="#contact" className="bg-[#1E88E5] hover:bg-[#1976D2] text-white px-6 py-2 rounded-md transition-colors font-medium text-center" onClick={() => setIsMenuOpen(false)}>
              Get Started
            </a>
          </nav>
        </div>}
    </header>;
};
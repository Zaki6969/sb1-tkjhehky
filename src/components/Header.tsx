import React, { useState, useEffect } from 'react';
import { Truck, Menu, X } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 text-blue-900 font-bold text-xl">
          <Truck className="h-8 w-8" />
          <span>TransportPro</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition duration-150 ease-in-out hover:text-blue-600 ${
                isScrolled ? 'text-gray-800' : 'text-gray-900'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition duration-150 ease-in-out"
          >
            Get Started
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-gray-800 font-medium py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium text-center hover:bg-blue-700 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};
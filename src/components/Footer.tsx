import React from 'react';
import { Truck, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Truck className="h-8 w-8 text-blue-400" />
              <span className="font-bold text-xl">TransportPro</span>
            </div>
            <p className="text-gray-400 mb-6">
              Professional transport management and permit application services for trucking and courier businesses.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition">Home</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition">Services</a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-white transition">Pricing</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-white transition">Testimonials</a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-white transition">FAQ</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition">Permit Applications</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition">Fleet Management</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition">Business Operations</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition">Compliance Monitoring</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition">Risk Management</a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <address className="not-italic text-gray-400 space-y-2">
              <p>Logistik Straße 42</p>
              <p>10115 Berlin, Germany</p>
              <p className="mt-4">
                <a href="mailto:info@transportpro.com" className="hover:text-white transition">info@transportpro.com</a>
              </p>
              <p>
                <a href="tel:+4912345678" className="hover:text-white transition">+49 123 456 789</a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {currentYear} TransportPro. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-gray-300 transition">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
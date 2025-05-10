import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="pt-28 md:pt-32 pb-16 md:pb-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Professional Transport Management Services
          </h1>
          <p className="text-lg md:text-xl mb-8 text-blue-100">
            Expert assistance with day-to-day operations and transport permit applications 
            for trucking and courier service companies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#services" 
              className="bg-white text-blue-800 px-6 py-3 rounded-md font-semibold transition hover:bg-blue-50 flex items-center justify-center gap-2 group"
            >
              Explore Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-semibold transition hover:bg-white/10"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none transform">
        <svg 
          className="relative block w-full h-16 md:h-24" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path 
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
            className="fill-gray-50"
          ></path>
        </svg>
      </div>
    </section>
  );
};
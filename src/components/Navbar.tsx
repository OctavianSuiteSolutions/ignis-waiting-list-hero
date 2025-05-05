import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={cn(
      "fixed w-full z-50 transition-all duration-300", 
      scrolled ? "bg-white/95 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
    )}>
      <nav className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="flex items-center group">
            <div className="relative">
              <div className={cn(
                "absolute inset-0 rounded-full bg-ignis-red/20 filter blur-md transition-all duration-300",
                scrolled ? "opacity-0" : "opacity-100 group-hover:bg-ignis-red/30"
              )}></div>
              <img 
                src="https://imgur.com/ecIRDPD.png" 
                alt="IGNIS Formación" 
                className="h-10 relative z-10 transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </a>
        </div>
        
        <div className="flex items-center space-x-2 md:space-x-6">
          <a 
            href="#features" 
            className="text-secondary/80 hover:text-ignis-red font-medium text-sm md:text-base transition-colors duration-300 hidden md:block"
          >
            Características
          </a>
          <a 
            href="#waitlist" 
            className="bg-gradient-to-r from-ignis-red to-ignis-gold text-white px-4 py-2 rounded-md font-medium transition-all duration-300 hover:shadow-lg relative overflow-hidden group"
          >
            <span className="relative z-10">Únete ahora</span>
            <span className="absolute inset-0 bg-ignis-red opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

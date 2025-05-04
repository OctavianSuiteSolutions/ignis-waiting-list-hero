
import React from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <nav className="container mx-auto py-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="flex items-center space-x-2">
            <img 
              src="https://imgur.com/ecIRDPD.png" 
              alt="IGNIS Formación" 
              className="h-10"
            />
            <img 
              src="https://imgur.com/rLTob9P.png" 
              alt="IGNIS Formación" 
              className="h-8 hidden md:block"
            />
          </a>
        </div>
        
        <div className="flex items-center space-x-4">
          <a 
            href="#waitlist" 
            className="bg-ignis-red hover:bg-opacity-90 text-white px-4 py-2 rounded font-medium transition-all duration-300"
          >
            Únete a la lista de espera
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

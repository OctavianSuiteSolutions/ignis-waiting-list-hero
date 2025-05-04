
import React from 'react';
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-secondary to-secondary/95">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-secondary/70"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-secondary to-transparent"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="fade-in order-2 md:order-1">
            <h1 className="text-white mb-4 leading-tight">
              Formamos <span className="text-ignis-red">héroes cotidianos</span>, no sólo funcionarios
            </h1>
            <p className="text-white/90 text-xl mb-8 max-w-lg">
              IGNIS Formación es la academia premium que transforma tu preparación 
              para oposiciones de bomberos en la Comunidad Valenciana.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#waitlist" 
                className="btn-primary text-center"
              >
                Únete a la lista de espera
              </a>
              <a 
                href="#features" 
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-6 py-3 rounded-md font-semibold transition-all duration-300 text-center border border-white/20"
              >
                Descubre más
              </a>
            </div>
          </div>
          
          <div className="relative order-1 md:order-2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-ignis-red/20 rounded-lg filter blur-xl transform -rotate-6"></div>
              <img 
                src="/lovable-uploads/4fb12d0a-5d59-4d04-ae31-6cfaa0cf9de4.png"
                alt="Bombero IGNIS" 
                className="relative w-full h-auto max-h-[500px] object-contain z-10 animate-pulse-slow"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <a 
          href="#features" 
          className="text-white/50 hover:text-white transition-colors duration-300"
          aria-label="Scroll down"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="36" 
            height="36" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="animate-bounce"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;

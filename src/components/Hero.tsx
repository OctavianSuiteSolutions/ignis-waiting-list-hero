
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Establecer la fecha objetivo al 1 de septiembre
  const getTargetDate = () => {
    const now = new Date();
    const currentYear = now.getFullYear();
    const nextYear = currentYear + 1;
    
    // Comprobar si el 1 de septiembre de este año ya pasó
    const targetThisYear = new Date(currentYear, 8, 1); // 8 = septiembre (0-indexed)
    
    // Si la fecha ya pasó, usar el próximo año; si no, usar este año
    return now > targetThisYear ? new Date(nextYear, 8, 1) : targetThisYear;
  };
  
  const targetDate = getTargetDate();
  const launchYear = targetDate.getFullYear();
  
  // Contador
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(timer);
  }, [targetDate]);

  const parallaxOffset = scrollY * 0.5;

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-secondary via-secondary to-black">
      {/* Partículas de fondo */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-black opacity-90"
          style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        ></div>
        
        {/* Puntos de luz que flotan */}
        <div className="absolute w-full h-full">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-ignis-red/30 blur-sm"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 20 - 10],
                x: [0, Math.random() * 20 - 10],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
        
        {/* Elementos heroicos de fondo */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-black to-transparent z-10"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        ></div>
        
        <div 
          className="absolute -bottom-20 -right-20 w-[600px] h-[600px] bg-ignis-red/20 rounded-full blur-3xl"
          style={{ transform: `translate(${parallaxOffset * 0.2}px, ${-parallaxOffset * 0.1}px)` }}
        ></div>
        
        <div 
          className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-ignis-gold/10 rounded-full blur-3xl"
          style={{ transform: `translate(${-parallaxOffset * 0.1}px, ${parallaxOffset * 0.2}px)` }}
        ></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 md:order-1 space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-2 animate-pulse-slow">
              <span className="mr-2 text-ignis-gold">🔥</span>
              Próximo lanzamiento
            </div>
            
            <h1 className="text-white mb-6 leading-tight font-extrabold">
              Ignis Formación, <span className="text-transparent bg-clip-text bg-gradient-to-r from-ignis-red to-ignis-gold">formando Héroes</span> 
              <br/>que salvan vidas
            </h1>
            
            <p className="text-white/80 text-xl mb-8 max-w-lg">
              IGNIS Formación es la academia premium que transforma tu preparación 
              para oposiciones de bomberos en la Comunidad Valenciana.
            </p>
            
            {/* Gran contador de lanzamiento */}
            <div className="bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-white/10 mb-8">
              <div className="text-center mb-4">
                <h3 className="text-white text-xl font-bold mb-1">
                  Lanzamiento: <span className="text-ignis-gold">1 de Septiembre {launchYear}</span>
                </h3>
                <p className="text-ignis-gold mb-1">
                  Regístrate ahora y obtén un <span className="font-bold text-white bg-ignis-red px-2 py-1 rounded-md">30% DE DESCUENTO</span>
                </p>
                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent my-3"></div>
              </div>
              
              <div className="grid grid-cols-4 gap-2 text-center text-white">
                <div className="bg-white/5 p-3 rounded-lg backdrop-blur-md">
                  <div className="text-3xl md:text-5xl font-bold text-ignis-gold">{timeLeft.days}</div>
                  <div className="text-xs md:text-sm mt-1 text-white/70">DÍAS</div>
                </div>
                <div className="bg-white/5 p-3 rounded-lg backdrop-blur-md">
                  <div className="text-3xl md:text-5xl font-bold text-ignis-gold">{timeLeft.hours}</div>
                  <div className="text-xs md:text-sm mt-1 text-white/70">HORAS</div>
                </div>
                <div className="bg-white/5 p-3 rounded-lg backdrop-blur-md">
                  <div className="text-3xl md:text-5xl font-bold text-ignis-gold">{timeLeft.minutes}</div>
                  <div className="text-xs md:text-sm mt-1 text-white/70">MINS</div>
                </div>
                <div className="bg-white/5 p-3 rounded-lg backdrop-blur-md">
                  <div className="text-3xl md:text-5xl font-bold text-ignis-gold">{timeLeft.seconds}</div>
                  <div className="text-xs md:text-sm mt-1 text-white/70">SEGS</div>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <motion.a 
                  href="#waitlist" 
                  className="btn-primary inline-block text-center relative overflow-hidden group px-10"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">Únete a la lista de espera</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-ignis-red to-ignis-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </motion.a>
              </div>
            </div>
            
            <div className="text-center sm:text-right">
              <motion.a 
                href="#test-demo" 
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-6 py-3 rounded-md font-semibold transition-all duration-300 inline-block border border-white/20 shadow-sm hover:shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Prueba nuestro test
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative order-1 md:order-2 flex justify-center md:py-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full max-w-xl transform transition-all duration-700 hover:scale-105">
              {/* Efectos decorativos alrededor de la imagen */}
              <div className="absolute -inset-6 bg-gradient-to-br from-ignis-red to-ignis-gold opacity-30 rounded-2xl blur-xl transform rotate-6"></div>
              <div className="absolute -inset-3 bg-black/70 rounded-xl backdrop-blur-sm"></div>
              
              {/* Imagen principal con sombra y bordes redondeados */}
              <img 
                src="/public/lovable-uploads/c7efbfc0-1d97-41cf-b185-7ba078aa763b.png"
                alt="Bombero IGNIS" 
                className="relative w-full h-auto max-h-[650px] object-contain z-10 drop-shadow-2xl"
              />
              
              {/* Badge de 30% descuento */}
              <div className="absolute -top-8 -right-8 w-32 h-32 flex items-center justify-center">
                <div className="absolute inset-0 bg-ignis-red rounded-full animate-pulse-slow blur-md"></div>
                <div className="absolute inset-0 bg-ignis-red rounded-full transform rotate-12"></div>
                <div className="relative z-10 text-white font-black flex flex-col items-center justify-center text-center transform -rotate-12">
                  <span className="text-3xl leading-none">30%</span>
                  <span className="text-xs font-bold mt-1">DESCUENTO</span>
                  <span className="text-xs mt-1 font-medium">PREVENTA</span>
                </div>
              </div>
              
              {/* Elementos de decoración flotantes */}
              <motion.div 
                className="absolute -top-6 -right-6 bg-white p-3 rounded-lg shadow-lg transform rotate-6"
                animate={{
                  y: [0, -10, 0],
                  rotate: [6, 12, 6]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#AB2328" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-4 -left-4 bg-white p-3 rounded-lg shadow-lg transform -rotate-6"
                animate={{
                  y: [0, 10, 0],
                  rotate: [-6, -12, -6]
                }}
                transition={{
                  duration: 5,
                  delay: 0.5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D83C46" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.5 18.5a2 2 0 1 0 4 0 2 2 0 0 0-4 0z"></path>
                  <path d="M7.5 10.5a2 2 0 1 0 4 0 2 2 0 0 0-4 0z"></path>
                  <path d="M5.5 18.5a2 2 0 1 0 4 0 2 2 0 0 0-4 0z"></path>
                  <path d="M7.5 14.5V13a2 2 0 0 1 2-2"></path>
                  <path d="M11.5 10.5V9a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v7"></path>
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <motion.a 
          href="#features" 
          className="text-white/50 hover:text-white transition-colors duration-300 bg-white/10 backdrop-blur-md p-3 rounded-full shadow-md hover:shadow-lg"
          aria-label="Scroll down"
          animate={{
            y: [0, 10, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity
          }}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;

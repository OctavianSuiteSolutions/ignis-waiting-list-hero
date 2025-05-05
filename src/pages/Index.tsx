import React from 'react';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import FeatureCard from '@/components/FeatureCard';
import WaitlistForm from '@/components/WaitlistForm';
import TestDemo from '@/components/TestDemo';
import LevelSystem from '@/components/LevelSystem';
import Footer from '@/components/Footer';
import { cn } from '@/lib/utils';
import Lottie from "lottie-react";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import animationData from '/public/Animation - 1746464286628.json';

// Componente de tarjeta para la sección de plataforma
const PlatformFeature = ({
  icon,
  title,
  description,
  delay = 0
}) => {
  return <motion.div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden" initial={{
    opacity: 0,
    y: 30
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true
  }} transition={{
    duration: 0.6,
    delay: delay
  }} whileHover={{
    y: -5,
    transition: {
      duration: 0.2
    }
  }}>
      <div className="p-6 h-full flex flex-col">
        <div className="h-12 w-12 rounded-lg bg-ignis-red/10 flex items-center justify-center text-ignis-gold mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-2">
          {title}
        </h3>
        <p className="text-white/70 text-sm flex-grow">
          {description}
        </p>
        <div className="mt-4 pt-2 border-t border-white/10">
          <div className="flex items-center text-ignis-gold/80 text-sm font-medium">
            <span className="mr-1">Saber más</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>;
};
const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Iconos para las características
  const IntegralIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1-1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" />
      <path d="M19 17v4" />
      <path d="M3 5h4" />
      <path d="M17 19h4" />
    </svg>;
  const MentorsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 1 0 7.75" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>;
  const TechIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>;
  const BrandIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 8.32a7.43 7.43 0 0 1 0 7.36" />
      <path d="M9.13 5a11.9 11.9 0 0 1 0 14" />
      <path d="M12.19 2.5a16.78 16.78 0 0 1 0 19" />
      <path d="M15.25 5a11.9 11.9 0 0 0 0 14" />
      <path d="M18.38 8.32a7.43 7.43 0 0 0 0 7.36" />
    </svg>;
  const fadeInUpVariants = {
    hidden: {
      opacity: 0,
      y: 50
    },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.7,
        ease: "easeOut"
      }
    })
  };

  // Componente FeatureBox para la sección de Plataforma
  const FeatureBox = ({
    icon,
    title,
    description,
    delay = 0
  }) => {
    return <motion.div className="relative group" whileHover={{
      y: -10
    }}>
        {/* Tarjeta con efecto de borde brillante */}
        <div className="relative z-10">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-ignis-red via-ignis-gold to-ignis-red opacity-0 group-hover:opacity-70 blur-xl transition-all duration-500"></div>
          <div className="relative flex flex-col items-center max-w-xs p-8 rounded-2xl backdrop-blur-sm bg-gradient-to-br from-white/10 to-transparent border border-white/10 overflow-hidden">
            {/* Brillo interior en hover */}
            <motion.div className="absolute inset-0 bg-gradient-to-br from-ignis-red/20 via-ignis-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Icono con fondo brillante */}
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-gradient-to-br from-ignis-gold/40 to-ignis-red/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative h-16 w-16 flex items-center justify-center text-white bg-gradient-to-br from-white/10 to-white/5 rounded-full z-10 group-hover:text-ignis-gold transition-colors duration-300">
                {icon}
              </div>
            </div>
            
            {/* Texto con efecto de brillo en hover */}
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-ignis-gold transition-colors duration-300">
              {title}
            </h3>
            
            <p className="text-white/80 text-center mb-6 group-hover:text-white transition-colors duration-300">
              {description}
            </p>
            
            {/* Botón "descubrir" con animación */}
            <div className="mt-auto">
              <span className="inline-flex items-center text-sm text-white/70 group-hover:text-ignis-gold transition-all duration-300">
                <span className="mr-2">Descubrir</span>
                <motion.span animate={{
                x: [0, 3, 0]
              }} transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 0.5
              }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </motion.span>
              </span>
            </div>
          </div>
        </div>
      </motion.div>;
  };
  return <div className="min-h-screen relative">
      {/* Fondo con partículas o efectos globales */}
      <div className="fixed inset-0 z-[-1] bg-black pointer-events-none opacity-0"></div>
      
      <Navbar />
      <Hero />
      
      {/* Separador con onda */}
      <div className="bg-secondary relative h-24">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0 left-0 w-full">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,154.7C384,149,480,107,576,90.7C672,75,768,85,864,117.3C960,149,1056,203,1152,208C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      
      {/* Sección Propuesta de Valor */}
      <section id="features" className="section-padding relative overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-ignis-red/5 to-ignis-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-ignis-gold/5 to-ignis-red/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto relative z-10">
          <motion.div className="text-center max-w-3xl mx-auto mb-16" initial="hidden" whileInView="visible" viewport={{
          once: true,
          amount: 0.3
        }} variants={fadeInUpVariants} custom={0}>
            <div className="inline-block bg-gradient-to-r from-ignis-red/10 to-ignis-gold/10 text-ignis-red px-4 py-1 rounded-full text-sm font-semibold mb-4">
              Nuestra propuesta
            </div>
            <h2 className="mb-6 text-secondary font-bold bg-clip-text bg-gradient-to-r from-secondary to-secondary/80 text-transparent">
              Propuesta de Valor
            </h2>
            <p className="text-gray-600 text-lg">
              IGNIS no es solo otra academia. Somos una experiencia transformadora 
              para opositores a bombero que buscan convertirse en algo más que funcionarios.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{
            once: true,
            amount: 0.3
          }} variants={fadeInUpVariants} custom={1}>
              <FeatureCard title="Formación Integral" description="No solo contenidos y tests. IGNIS trabaja cuerpo, mente, disciplina y mentalidad ganadora." icon={<IntegralIcon />} />
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{
            once: true,
            amount: 0.3
          }} variants={fadeInUpVariants} custom={2}>
              <FeatureCard title="Mentores Reales" description="Profesionales activos (bomberos, psicólogos, entrenadores) acompañando cada paso." icon={<MentorsIcon />} />
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{
            once: true,
            amount: 0.3
          }} variants={fadeInUpVariants} custom={3}>
              <FeatureCard title="Tecnología + Método" description="Plataforma intuitiva, entrenamientos medibles, contenido modular y adaptable." icon={<TechIcon />} />
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{
            once: true,
            amount: 0.3
          }} variants={fadeInUpVariants} custom={4}>
              <FeatureCard title="Clases uno a uno" description="Sesiones personalizadas con bomberos profesionales para resolver tus dudas." icon={<BrandIcon />} />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Simulador de Test */}
      <TestDemo />
      
      {/* Transición visual entre secciones */}
      <div className="relative overflow-hidden">
        {/* Fondo con degradado */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white"></div>
        
        {/* Elementos decorativos */}
        
      </div>
      
      {/* Sección Plataforma */}
      <section className="section-padding py-16 relative overflow-hidden bg-secondary">
        {/* Onda superior decorativa */}
        <div className="absolute top-0 left-0 right-0 h-24 overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute -top-1 left-0 w-full transform rotate-180">
            <path fill="#ffffff" fillOpacity="1" d="M0,96L48,106.7C96,117,192,139,288,138.7C384,139,480,117,576,112C672,107,768,117,864,144C960,171,1056,213,1152,218.7C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
        
        {/* Efecto de luces y partículas */}
        <div className="absolute inset-0 overflow-hidden bg-slate-950">
          {/* Efecto de luz central */}
          <motion.div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-[700px] h-[700px] rounded-full opacity-20" style={{
          background: 'radial-gradient(circle, rgba(255,159,63,0.3) 0%, rgba(231,76,60,0.1) 50%, rgba(0,0,0,0) 70%)',
          filter: 'blur(60px)'
        }} animate={{
          scale: [1, 1.05, 1]
        }} transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }} />
          
          {/* Partículas flotantes */}
          {Array.from({
          length: 10
        }).map((_, i) => <motion.div key={i} className="absolute rounded-full bg-ignis-gold/20" style={{
          width: Math.random() * 6 + 3 + 'px',
          height: Math.random() * 6 + 3 + 'px',
          left: Math.random() * 100 + '%',
          top: Math.random() * 100 + '%',
          filter: 'blur(1px)'
        }} animate={{
          y: [0, -100],
          opacity: [0, 0.7, 0]
        }} transition={{
          duration: Math.random() * 10 + 15,
          repeat: Infinity,
          delay: Math.random() * 20
        }} />)}
        </div>
        
        <div className="container mx-auto relative z-10">
          {/* Encabezado con animación */}
          <div className="text-center mb-16 mt-6">
            <motion.h2 className="mb-6 text-white font-bold text-4xl md:text-5xl" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.1
          }}>
              Una Plataforma <span className="text-ignis-gold">Completa</span>
            </motion.h2>
            
            <motion.p className="text-white/80 text-lg max-w-3xl mx-auto" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }}>
              IGNIS Formación ha sido diseñada por bomberos para convertirte en bombero,
              proporcionándote todas las herramientas y recursos que necesitas.
            </motion.p>
          </div>
          
          {/* Grid de funcionalidades */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Funcionalidad 1 */}
            <PlatformFeature icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>} title="Temarios Digitales" description="Contenido actualizado y adaptado para las oposiciones. Accede desde cualquier dispositivo, en cualquier momento." delay={0} />
            
            {/* Funcionalidad 2 */}
            <PlatformFeature icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 2v5h5" />
                  <path d="M7 18v-5H2" />
                  <path d="M8 2h8l4 4v8l-4 4H8l-4-4V6z" />
                </svg>} title="Tests Dinámicos" description="Evalúa tu progreso con tests adaptativos que identifican tus puntos débiles y mejoran tu rendimiento." delay={0.1} />
            
            {/* Funcionalidad 3 */}
            <PlatformFeature icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>} title="Clases Online" description="Sesiones en directo y grabadas impartidas por bomberos profesionales y expertos en cada materia." delay={0.2} />
            
            {/* Funcionalidad 4 */}
            <PlatformFeature icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M9 8h7" />
                  <path d="M8 12h6" />
                  <path d="M11 16h4" />
                </svg>} title="Calendario Inteligente" description="Organiza tu estudio de forma eficiente con un calendario que se adapta a tus horarios y necesidades." delay={0.3} />
            
            {/* Funcionalidad 5 */}
            <PlatformFeature icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 7h-9" />
                  <path d="M14 17H5" />
                  <circle cx="17" cy="17" r="3" />
                  <circle cx="7" cy="7" r="3" />
                </svg>} title="Sistema de Puntuación" description="Visualiza tu progreso y compara tu rendimiento con estadísticas detalladas de cada área de estudio." delay={0.4} />
            
            {/* Funcionalidad 6 */}
            <PlatformFeature icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>} title="Mentorías One-to-One" description="Sesiones personalizadas con bomberos profesionales para resolver tus dudas y guiarte en tu preparación." delay={0.5} />
          </div>
          
          {/* Botón CTA */}
          <motion.div className="text-center mt-16" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.6
        }}>
            <a href="#waitlist" className="inline-flex items-center px-8 py-3 rounded-lg bg-ignis-red hover:bg-ignis-red/90 text-white font-medium transition-all duration-300 group">
              <span>Descubre más</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>
      
      {/* Sistema de Niveles IGNIS */}
      <LevelSystem />
      
      {/* Separador con onda */}
      <div className="h-24 bg-secondary relative">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0 left-0 w-full">
          <path fill="#AB2328" fillOpacity="0.8" d="M0,256L48,240C96,224,192,192,288,192C384,192,480,224,576,240C672,256,768,256,864,256C960,256,1056,224,1152,218.7C1248,213,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      
      {/* Sección Call to Action */}
      <section id="waitlist" className="section-padding pt-32 bg-gradient-to-br from-ignis-red via-secondary to-secondary relative overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/lovable-uploads/c172593a-c84f-43d9-be5d-cc49b69e0015.png')] bg-center bg-no-repeat bg-contain opacity-5"></div>
          
          {/* Partículas decorativas */}
          <div className="absolute top-20 left-20 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-40 w-16 h-16 bg-ignis-gold/20 rounded-full blur-xl animate-pulse-slow"></div>
          <div className="absolute top-40 right-20 w-10 h-10 bg-ignis-red/20 rounded-full blur-lg animate-pulse-slow"></div>
          <div className="absolute bottom-60 left-40 w-12 h-12 bg-white/10 rounded-full blur-lg animate-pulse-slow"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <motion.div className="text-center max-w-3xl mx-auto mb-10 relative" initial="hidden" whileInView="visible" viewport={{
          once: true,
          amount: 0.3
        }} variants={fadeInUpVariants} custom={0}>
            <div className="inline-block bg-white/10 text-white px-4 py-1 rounded-full text-sm font-semibold mb-5 backdrop-blur-sm relative">
              {/* Animación de fuego encima del texto "No te lo pierdas" */}
              <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-28 h-28 md:w-36 md:h-36 z-20">
                <Lottie animationData={animationData} loop={true} />
              </div>
              No te lo pierdas
            </div>
            <h2 className="mb-6 text-white font-bold text-4xl md:text-5xl">
              Forma parte de <span className="text-ignis-gold">IGNIS</span>
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Únete a la lista de espera y sé de los primeros en acceder a nuestra 
              plataforma de formación premium para oposiciones a bombero.
            </p>
          </motion.div>
          
          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true,
          amount: 0.2
        }} variants={fadeInUpVariants} custom={1}>
            <WaitlistForm />
          </motion.div>
        </div>
      </section>
      
      <Footer />
      
      {/* Scroll to top button */}
      <motion.button className={cn("fixed bottom-8 right-8 bg-ignis-red text-white p-3 rounded-full shadow-lg z-50 transition-opacity duration-300", scrollY > 300 ? "opacity-100" : "opacity-0 pointer-events-none")} onClick={() => window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })} whileHover={{
      scale: 1.1
    }} whileTap={{
      scale: 0.9
    }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m18 15-6-6-6 6" />
        </svg>
      </motion.button>
    </div>;
};
export default Index;
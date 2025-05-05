import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface LevelProps {
  name: string;
  color: string;
  description: string;
  index: number;
  isActive: boolean;
  onClick: () => void;
}

const Level: React.FC<LevelProps> = ({ name, color, description, index, isActive, onClick }) => {
  const colors = {
    red: "from-ignis-red to-ignis-red/90 border-ignis-red/30",
    gold: "from-ignis-gold to-ignis-gold/90 border-ignis-gold/30",
    green: "from-emerald-800 to-emerald-900 border-emerald-700/30",
    dark: "from-secondary to-secondary/90 border-gray-700/30",
  };

  return (
    <motion.div
      className={cn(
        "relative select-none",
        isActive ? "z-20" : "z-10"
      )}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div 
        className={cn(
          "relative bg-gradient-to-br rounded-xl shadow-lg border-2 p-6 cursor-pointer transition-all duration-300",
          colors[color],
          isActive ? "scale-110 border-opacity-100" : "opacity-80 hover:opacity-100 border-opacity-50"
        )}
        whileHover={{
          scale: isActive ? 1.1 : 1.05,
          y: -5
        }}
        onClick={onClick}
        layout
      >
        <div className="absolute right-3 top-3">
          {isActive && (
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-6 h-6 bg-white rounded-full flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6 9 17l-5-5"/>
              </svg>
            </motion.div>
          )}
        </div>

        <h3 className="text-2xl md:text-3xl font-black text-white mb-2">{name}</h3>
        <p className="text-white/90 text-lg">{description}</p>
        
        {index < 4 && (
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-ignis-gold to-amber-500 rounded-full flex items-center justify-center text-white shadow-lg z-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m5 12 7 7 7-7"/>
            </svg>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

interface RewardItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const RewardItem: React.FC<RewardItemProps> = ({ icon, title, description, delay }) => {
  return (
    <motion.div 
      className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-ignis-gold/30 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      <div className="w-12 h-12 mb-4 text-ignis-gold">
        {icon}
      </div>
      <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
      <p className="text-white/70">{description}</p>
    </motion.div>
  );
};

const LevelSystem = () => {
  const [activeLevel, setActiveLevel] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Simular progreso a través de los niveles
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const levels = [
    { name: "RECLUTA", color: "red", description: "Inicio del camino" },
    { name: "CADETE", color: "red", description: "Completa tus primeras rutinas" },
    { name: "AVANZADO", color: "green", description: "Mejora tus marcas personales" },
    { name: "ÉLITE", color: "gold", description: "Cumple marcas de convocatoria" },
    { name: "IGNIS", color: "red", description: "Supera marcas oficiales" },
  ];

  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-br from-black via-secondary to-secondary">
      {/* Elementos decorativos */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern-grid.svg')] opacity-5"></div>
        <div className="absolute -top-64 -right-64 w-[40rem] h-[40rem] bg-ignis-red/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-64 -left-64 w-[40rem] h-[40rem] bg-ignis-gold/5 rounded-full blur-3xl"></div>
        
        {/* Partículas de luz */}
        <div className="absolute w-full h-full">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-ignis-gold/30 blur-sm"
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
      </div>
      
      <div className="container mx-auto relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-semibold mb-4 text-ignis-gold">
            Sistema Gamificado
          </div>
          <h2 className="mb-4 text-white font-bold text-4xl md:text-5xl">
            IGNIS <span className="text-ignis-gold">LEVEL</span>
          </h2>
          <p className="text-white/80 text-xl">
            Fortalece tu cuerpo. Enciende tu progreso.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
          <div className="order-2 md:order-1">
            <motion.div 
              className="bg-black/30 backdrop-blur-sm p-6 rounded-2xl border border-white/10"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">Sistema de Entrenamiento Físico Gamificado</h3>
              <p className="text-white/80 mb-6">
                IGNIS LEVEL transforma tu preparación física en una experiencia motivadora y adictiva. Supera desafíos, 
                consigue insignias y compite en rankings mientras te preparas para ser bombero.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 text-ignis-gold">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Progreso Medible</h4>
                    <p className="text-white/70">Visualiza tu evolución y marca objetivos claros para cada nivel.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 text-ignis-gold">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Motivación Constante</h4>
                    <p className="text-white/70">Desbloquea logros y recompensas que mantienen tu motivación al máximo.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 text-ignis-gold">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="8" r="6"/>
                      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Competencia Saludable</h4>
                    <p className="text-white/70">Compite con otros aspirantes en rankings semanales y mensuales.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative p-4">
              {/* Escudo IGNIS en el fondo */}
              <motion.div 
                className="absolute inset-0 flex items-center justify-center opacity-10 z-0"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <img 
                  src="https://imgur.com/ecIRDPD.png" 
                  alt="IGNIS Shield" 
                  className="w-3/4 max-w-[300px]"
                />
              </motion.div>
              
              {/* Niveles */}
              <div className="relative z-10 space-y-5">
                <AnimatePresence>
                  {isVisible && levels.map((level, index) => (
                    <Level
                      key={index}
                      name={level.name}
                      color={level.color as "red" | "gold" | "green" | "dark"}
                      description={level.description}
                      index={levels.length - 1 - index}
                      isActive={activeLevel === index}
                      onClick={() => setActiveLevel(index)}
                    />
                  )).reverse()}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
        
        {/* Recompensas */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6">Beneficios por Nivel</h3>
          <p className="text-white/80 mb-10">
            Cuanto más entrenes, más puntos acumularás y mayores beneficios desbloquearás en tu camino para convertirte en bombero.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <RewardItem 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"/>
                <path d="M12 5v14"/>
              </svg>
            }
            title="Puntos Diarios"
            description="Acumula puntos diarios completando tus entrenamientos y rutinas programadas."
            delay={0.1}
          />
          
          <RewardItem 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="6"/>
                <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
              </svg>
            }
            title="Insignias"
            description="Desbloquea insignias exclusivas que demuestran tu dedicación y progreso en el sistema."
            delay={0.2}
          />
          
          <RewardItem 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20V10"/>
                <path d="M18 20V4"/>
                <path d="M6 20v-4"/>
              </svg>
            }
            title="Rankings"
            description="Compite en clasificaciones semanales y mensuales para demostrar tu valía y consistencia."
            delay={0.3}
          />
        </div>
        
        {/* Call to Action */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <a 
            href="#waitlist" 
            className="bg-gradient-to-r from-ignis-red to-ignis-gold text-white px-8 py-4 rounded-lg font-bold text-lg inline-block hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            Únete a IGNIS y comienza tu progreso
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default LevelSystem; 
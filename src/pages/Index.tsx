
import React from 'react';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import FeatureCard from '@/components/FeatureCard';
import WaitlistForm from '@/components/WaitlistForm';
import Footer from '@/components/Footer';
import { cn } from '@/lib/utils';

const Index = () => {
  // Iconos para las características
  const IntegralIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" />
      <path d="M19 17v4" />
      <path d="M3 5h4" />
      <path d="M17 19h4" />
    </svg>
  );

  const MentorsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );

  const TechIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  );

  const BrandIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 8.32a7.43 7.43 0 0 1 0 7.36" />
      <path d="M9.13 5a11.9 11.9 0 0 1 0 14" />
      <path d="M12.19 2.5a16.78 16.78 0 0 1 0 19" />
      <path d="M15.25 5a11.9 11.9 0 0 0 0 14" />
      <path d="M18.38 8.32a7.43 7.43 0 0 0 0 7.36" />
    </svg>
  );

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      
      {/* Sección Propuesta de Valor */}
      <section id="features" className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-4 text-secondary">Propuesta de Valor</h2>
            <p className="text-gray-600 text-lg">
              IGNIS no es solo otra academia. Somos una experiencia transformadora 
              para opositores a bombero que buscan convertirse en algo más que funcionarios.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              title="Formación Integral"
              description="No solo contenidos y tests. IGNIS trabaja cuerpo, mente, disciplina y mentalidad ganadora."
              icon={<IntegralIcon />}
            />
            <FeatureCard
              title="Mentores Reales"
              description="Profesionales activos (bomberos, psicólogos, entrenadores) acompañando cada paso."
              icon={<MentorsIcon />}
            />
            <FeatureCard
              title="Tecnología + Método"
              description="Plataforma intuitiva, entrenamientos medibles, contenido modular y adaptable."
              icon={<TechIcon />}
            />
            <FeatureCard
              title="Marca con Alma"
              description="Branding potente, con narrativa emocional, aspiracional y visualmente impecable."
              icon={<BrandIcon />}
            />
          </div>
        </div>
      </section>
      
      {/* Sección Plataforma */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-4 text-secondary">Una Plataforma Completa</h2>
            <p className="text-gray-600 text-lg">
              IGNIS Formación te proporciona todas las herramientas que necesitas 
              para superar con éxito las oposiciones a bombero.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-lg bg-gradient-to-br from-ignis-red to-ignis-red/80 p-6 text-white">
              <div className="h-12 w-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Temarios Digitales</h3>
              <p className="text-white/80">
                Contenido actualizado y adaptado específicamente para las oposiciones 
                de bomberos en la Comunidad Valenciana.
              </p>
            </div>
            
            <div className="rounded-lg bg-gradient-to-br from-secondary to-secondary/90 p-6 text-white">
              <div className="h-12 w-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 2v5h5" />
                  <path d="M7 18v-5H2" />
                  <path d="M8 2h8l4 4v8l-4 4H8l-4-4V6z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Tests Dinámicos</h3>
              <p className="text-white/80">
                Evalúa tu progreso con tests adaptativos que identifican tus puntos débiles 
                y te ayudan a mejorar tu rendimiento.
              </p>
            </div>
            
            <div className="rounded-lg bg-gradient-to-br from-ignis-gold to-ignis-gold/80 p-6 text-white">
              <div className="h-12 w-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Clases Online</h3>
              <p className="text-white/80">
                Accede a sesiones en directo y grabadas impartidas por bomberos 
                profesionales y expertos en cada materia.
              </p>
            </div>
            
            <div className="rounded-lg bg-gray-100 p-6">
              <div className="h-12 w-12 bg-ignis-red/10 rounded-lg flex items-center justify-center mb-4 text-ignis-red">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M9 8h7" />
                  <path d="M8 12h6" />
                  <path d="M11 16h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-secondary">Calendario Inteligente</h3>
              <p className="text-gray-600">
                Organiza tu estudio de forma eficiente con un calendario que se adapta 
                a tus horarios y necesidades específicas.
              </p>
            </div>
            
            <div className="rounded-lg bg-gray-100 p-6">
              <div className="h-12 w-12 bg-ignis-red/10 rounded-lg flex items-center justify-center mb-4 text-ignis-red">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 7h-9" />
                  <path d="M14 17H5" />
                  <circle cx="17" cy="17" r="3" />
                  <circle cx="7" cy="7" r="3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-secondary">Sistema de Puntuación</h3>
              <p className="text-gray-600">
                Visualiza tu progreso y compara tu rendimiento con estadísticas detalladas 
                de cada área de estudio.
              </p>
            </div>
            
            <div className="rounded-lg bg-gray-100 p-6">
              <div className="h-12 w-12 bg-ignis-red/10 rounded-lg flex items-center justify-center mb-4 text-ignis-red">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-secondary">Mentorías One-to-One</h3>
              <p className="text-gray-600">
                Sesiones personalizadas con profesionales que te guiarán y resolverán 
                todas tus dudas específicas.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Sección Call to Action */}
      <section 
        id="waitlist" 
        className="section-padding bg-gradient-to-br from-secondary via-secondary to-black relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/lovable-uploads/c172593a-c84f-43d9-be5d-cc49b69e0015.png')] bg-center bg-no-repeat bg-contain"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="mb-4 text-white">Forma parte de IGNIS</h2>
            <p className="text-white/80 text-lg">
              Únete a la lista de espera y sé de los primeros en acceder a nuestra 
              plataforma de formación premium para oposiciones a bombero.
            </p>
          </div>
          
          <WaitlistForm />
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;

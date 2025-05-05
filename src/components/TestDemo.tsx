import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lottie from "lottie-react";
import { Button } from "@/components/ui/button";
import animationData from '/public/Animation - 1746464286628.json';

interface Option {
  id: number;
  text: string;
  isCorrect: boolean;
}

const TestDemo = () => {
  const [step, setStep] = useState<'intro' | 'question' | 'result'>('intro');
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  
  const options: Option[] = [
    { id: 1, text: "Estudiando por mi cuenta con libros", isCorrect: false },
    { id: 2, text: "Asistiendo a una academia tradicional", isCorrect: false },
    { id: 3, text: "Formándome con IGNIS", isCorrect: true },
    { id: 4, text: "Memorizando tests sin entender el contenido", isCorrect: false }
  ];

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option.id);
    setTimeout(() => {
      setStep('result');
    }, 700);
  };

  const resetTest = () => {
    setSelectedOption(null);
    setStep('intro');
  };

  const startTest = () => {
    setStep('question');
  };

  return (
    <section id="test-demo" className="section-padding py-24 relative overflow-hidden bg-white">
      {/* Elementos decorativos */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-64 right-0 w-[40rem] h-[40rem] bg-ignis-red/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-64 -left-64 w-[40rem] h-[40rem] bg-ignis-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern-grid.svg')] opacity-5"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-gradient-to-r from-ignis-red/10 to-ignis-gold/10 text-ignis-red px-4 py-1 rounded-full text-sm font-semibold mb-4">
            Prueba de concepto
          </div>
          <h2 className="mb-6 text-secondary font-bold">Experimenta Nuestro Test Interactivo</h2>
          <p className="text-gray-600 text-lg">
            Descubre cómo será prepararte con IGNIS con esta simulación de nuestros tests interactivos.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-10 border border-gray-100 relative overflow-visible">
            {/* Decoraciones de fondo */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-ignis-red/5 to-ignis-gold/5 rounded-full"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-ignis-gold/5 to-ignis-red/5 rounded-full"></div>

            <AnimatePresence mode="wait">
              {step === 'intro' && (
                <motion.div 
                  key="intro"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="text-center"
                >
                  <div className="mb-8">
                    <div className="w-20 h-20 bg-ignis-red/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#AB2328" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h1" />
                        <path d="M17 3h1a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-1" />
                        <path d="M12 12v9" />
                        <path d="M8 21h8" />
                        <path d="M4 8h2" />
                        <path d="M18 8h2" />
                        <path d="M12 3v9" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-secondary mb-2">¿Listo para poner a prueba tus conocimientos?</h3>
                    <p className="text-gray-600 mb-6">
                      Nuestros tests están diseñados para ayudarte a comprender y retener mejor la información, 
                      no solo para memorizar respuestas.
                    </p>
                  </div>
                  
                  <Button 
                    onClick={startTest}
                    className="bg-gradient-to-r from-ignis-red to-ignis-gold hover:from-ignis-red/90 hover:to-ignis-gold/90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Comenzar Test
                  </Button>
                </motion.div>
              )}

              {step === 'question' && (
                <motion.div 
                  key="question"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className="bg-ignis-red/10 text-ignis-red px-3 py-1 rounded-md text-sm font-medium">
                        Pregunta 1/1
                      </div>
                      <div className="text-gray-500 text-sm">
                        Tiempo restante: <span className="font-semibold">60s</span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-secondary mb-6">
                      ¿Cómo me voy a convertir en Bombero más rápido?
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {options.map((option) => (
                      <motion.div 
                        key={option.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: option.id * 0.1
                        }}
                      >
                        <button
                          onClick={() => handleOptionClick(option)}
                          className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-300 flex items-center
                            ${selectedOption === option.id 
                              ? option.isCorrect 
                                ? 'border-green-500 bg-green-50 text-green-800'
                                : 'border-red-500 bg-red-50 text-red-800'
                              : 'border-gray-200 hover:border-ignis-red/30 hover:bg-ignis-red/5'
                            }
                          `}
                          disabled={selectedOption !== null}
                        >
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-medium
                            ${selectedOption === option.id 
                              ? option.isCorrect
                                ? 'bg-green-500 text-white'
                                : 'bg-red-500 text-white'
                              : 'bg-gray-100 text-gray-700'
                            }
                          `}>
                            {option.id}
                          </div>
                          <span className="flex-grow">{option.text}</span>
                          {selectedOption === option.id && option.isCorrect && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 6 9 17l-5-5"/>
                              </svg>
                            </motion.div>
                          )}
                          {selectedOption === option.id && !option.isCorrect && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 6 6 18"/>
                                <path d="m6 6 12 12"/>
                              </svg>
                            </motion.div>
                          )}
                        </button>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 'result' && (
                <motion.div 
                  key="result"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-center"
                >
                  {/* Resultado basado en la respuesta */}
                  {options.find(o => o.id === selectedOption)?.isCorrect ? (
                    <div className="relative pt-20 mt-20">
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full -mt-2 z-20">
                        <div className="w-48 h-48">
                          <Lottie animationData={animationData} loop={true} />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-green-600 mb-2">¡Respuesta Correcta!</h3>
                      <p className="text-gray-600 mb-6">
                        ¡Excelente! IGNIS Formación ofrece el método más efectivo y completo para convertirte en bombero.
                        Nuestro enfoque integral combina preparación física, mental y técnica para un éxito garantizado.
                      </p>
                    </div>
                  ) : (
                    <div>
                      <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 6 6 18"/>
                          <path d="m6 6 12 12"/>
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-red-600 mb-2">Respuesta Incorrecta</h3>
                      <p className="text-gray-600 mb-6">
                        La respuesta correcta es "Formándome con IGNIS". 
                        Nuestro método integral, mentores profesionales y plataforma tecnológica 
                        aceleran significativamente tu camino para convertirte en bombero.
                      </p>
                    </div>
                  )}

                  {/* Explicación detallada */}
                  <div className="bg-gray-50 p-6 rounded-xl mb-8 text-left">
                    <h4 className="font-bold text-secondary mb-2">Explicación</h4>
                    <p className="text-gray-700">
                      IGNIS proporciona una formación integral que combina preparación física, contenido teórico actualizado, 
                      pruebas prácticas y apoyo psicológico. Nuestros estudiantes avanzan más rápido gracias a:
                    </p>
                    <ul className="mt-3 space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-ignis-red mr-2">•</span>
                        Mentores que son bomberos profesionales activos
                      </li>
                      <li className="flex items-start">
                        <span className="text-ignis-red mr-2">•</span>
                        Plataforma tecnológica adaptada a tu ritmo de aprendizaje
                      </li>
                      <li className="flex items-start">
                        <span className="text-ignis-red mr-2">•</span>
                        Entrenamientos físicos específicos para las pruebas
                      </li>
                      <li className="flex items-start">
                        <span className="text-ignis-red mr-2">•</span>
                        Sistema de seguimiento personalizado de tu evolución
                      </li>
                    </ul>
                  </div>

                  {/* Botón que cambia según respuesta */}
                  {options.find(o => o.id === selectedOption)?.isCorrect ? (
                    <a 
                      href="#waitlist"
                      className="bg-gradient-to-r from-ignis-red to-ignis-gold hover:from-ignis-red/90 hover:to-ignis-gold/90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 inline-block"
                    >
                      Únete ahora
                    </a>
                  ) : (
                    <Button 
                      onClick={resetTest}
                      className="bg-ignis-red hover:bg-ignis-red/90 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300"
                    >
                      Volver a intentar
                    </Button>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestDemo;

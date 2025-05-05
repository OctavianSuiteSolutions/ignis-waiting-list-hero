import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const WaitlistForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simular envío del formulario
    setTimeout(() => {
      toast({
        title: "¡Registro exitoso!",
        description: "Te hemos añadido a la lista de espera. Te notificaremos cuando IGNIS esté disponible.",
      });
      setEmail('');
      setName('');
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100 max-w-2xl mx-auto transform transition-all duration-500 hover:shadow-xl relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-ignis-red/10 to-ignis-gold/10 rounded-full"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-ignis-gold/10 to-ignis-red/10 rounded-full"></div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-center mb-6">
          <div className="bg-ignis-red/10 p-3 rounded-xl">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#AB2328" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 7.2A2.2 2.2 0 0 1 7.2 5h9.6A2.2 2.2 0 0 1 19 7.2v9.6a2.2 2.2 0 0 1-2.2 2.2H7.2A2.2 2.2 0 0 1 5 16.8z"></path>
              <path d="m5 8 6.8 5.8a2 2 0 0 0 2.4 0L19 8"></path>
            </svg>
          </div>
        </div>
        
        <h3 className="text-2xl font-bold text-center mb-2 text-secondary">Únete a la lista de espera</h3>
        <p className="text-center text-gray-600 mb-8">
          Sé el primero en acceder cuando lancemos IGNIS Formación
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="group">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 transition-colors group-focus-within:text-ignis-red">
              Nombre completo
            </label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <Input
                id="name"
                type="text"
                placeholder="Tu nombre completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full rounded-lg pl-10 border-gray-200 focus:border-ignis-red focus:ring-ignis-red/20 transition-all duration-300 bg-gray-50 focus:bg-white"
              />
            </div>
          </div>
          
          <div className="group">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 transition-colors group-focus-within:text-ignis-red">
              Correo electrónico
            </label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </div>
              <Input
                id="email"
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-lg pl-10 border-gray-200 focus:border-ignis-red focus:ring-ignis-red/20 transition-all duration-300 bg-gray-50 focus:bg-white"
              />
            </div>
          </div>
          
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-ignis-red to-ignis-gold hover:from-ignis-red/90 hover:to-ignis-gold/90 text-white font-semibold py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg relative overflow-hidden"
            disabled={loading}
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Procesando...
              </div>
            ) : 'Reservar mi plaza'}
          </Button>
          
          <div className="text-xs text-gray-500 text-center mt-4 flex items-center justify-center space-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ignis-red">
              <path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z"></path>
              <polyline points="15,9 18,9 18,11"></polyline>
              <path d="M6 10V5.5C6 3.5 7.5 2 9.5 2h5C16.5 2 18 3.5 18 5.5V9"></path>
            </svg>
            <p>Al unirte, aceptas recibir correos electrónicos de IGNIS Formación. 
            Respetamos tu privacidad y no compartiremos tu información.</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WaitlistForm; 
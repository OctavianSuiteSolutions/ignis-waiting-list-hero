
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
    <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-100 max-w-2xl mx-auto">
      <h3 className="text-2xl font-bold text-center mb-2 text-secondary">Únete a la lista de espera</h3>
      <p className="text-center text-gray-600 mb-6">
        Sé el primero en acceder cuando lancemos IGNIS Formación
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Nombre completo
          </label>
          <Input
            id="name"
            type="text"
            placeholder="Tu nombre completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full border-gray-300 focus:border-ignis-red focus:ring-ignis-red"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Correo electrónico
          </label>
          <Input
            id="email"
            type="email"
            placeholder="tu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border-gray-300 focus:border-ignis-red focus:ring-ignis-red"
          />
        </div>
        
        <Button
          type="submit"
          className="w-full bg-ignis-red hover:bg-ignis-red/90 text-white font-semibold py-3 rounded-md transition-colors duration-300"
          disabled={loading}
        >
          {loading ? 'Procesando...' : 'Reservar mi plaza'}
        </Button>
        
        <p className="text-xs text-gray-500 text-center mt-4">
          Al unirte, aceptas recibir correos electrónicos de IGNIS Formación. 
          Respetamos tu privacidad y no compartiremos tu información.
        </p>
      </form>
    </div>
  );
};

export default WaitlistForm;

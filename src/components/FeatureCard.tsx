import React from 'react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  className,
}) => {
  return (
    <div 
      className={cn(
        "bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 transition-all duration-500 group hover:shadow-xl hover:border-ignis-red/20 hover:-translate-y-1",
        className
      )}
    >
      <div className="p-6 relative">
        {/* Decorative gradient background that appears on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-ignis-red/5 to-ignis-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="relative z-10">
          <div className="mb-5">
            <div className="inline-flex items-center justify-center w-12 h-12 text-ignis-red bg-ignis-red/10 rounded-lg transform transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-ignis-red/15">
              {icon}
            </div>
          </div>
          <h3 className="text-xl font-bold mb-3 text-secondary group-hover:text-ignis-red transition-colors duration-300">{title}</h3>
          <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{description}</p>
        </div>
        
        {/* Decorative corner element */}
        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-ignis-red/0 rounded-tl-xl group-hover:bg-ignis-red/10 transition-all duration-500 transform rotate-45 group-hover:scale-150"></div>
      </div>
    </div>
  );
};

export default FeatureCard;

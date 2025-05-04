
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
        "bg-white rounded-lg shadow-lg p-6 border border-gray-100 transition-all duration-300 hover:shadow-xl",
        className
      )}
    >
      <div className="flex items-center mb-4">
        <div className="mr-4 text-ignis-red p-3 bg-ignis-red/10 rounded-full">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-3 text-secondary">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;

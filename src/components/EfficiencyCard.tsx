import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronRight, Star } from 'lucide-react';

interface EfficiencyCardProps {
  title: string;
  description: string;
  image: string;
  efficiency: number;
  icon: React.ReactNode;
  onInteract?: () => void;
  interactive?: boolean;
}

export const EfficiencyCard = ({ 
  title, 
  description, 
  image, 
  efficiency, 
  icon, 
  onInteract,
  interactive = false 
}: EfficiencyCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    if (interactive) {
      setIsActive(!isActive);
      onInteract?.();
    }
  };

  return (
    <Card 
      className={`group relative overflow-hidden bg-surface shadow-elevation-1 hover:shadow-elevation-3 transition-all duration-300 hover:-translate-y-2 cursor-pointer rounded-3xl ${
        isActive ? 'shadow-elevation-4' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <div className="aspect-video relative overflow-hidden rounded-t-3xl">
        <img 
          src={image} 
          alt={title}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface/90 to-transparent" />
        
        {/* Floating efficiency badge */}
        <div className="absolute top-6 right-6">
          <div className="bg-surface shadow-elevation-2 rounded-full px-4 py-2 flex items-center">
            <Star className="w-4 h-4 mr-2 text-primary" />
            <span className="text-primary font-semibold">+{efficiency}% efficiency</span>
          </div>
        </div>

        {/* Icon overlay */}
        <div className="absolute bottom-6 left-6 p-4 bg-surface/90 backdrop-blur-sm rounded-full shadow-elevation-2">
          <div className={`transition-all duration-300 ${isActive ? 'text-primary scale-110' : 'text-foreground'}`}>
            {icon}
          </div>
        </div>
      </div>

      <div className="p-8">
        <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>

      {/* Subtle state indicator */}
      {isActive && (
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary rounded-t-3xl" />
      )}
    </Card>
  );
};
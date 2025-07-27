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
      className={`group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-glow-primary cursor-pointer ${
        isActive ? 'shadow-glow-primary' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
        
        {/* Floating efficiency badge */}
        <div className="absolute top-4 right-4">
          <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30 animate-float">
            <Star className="w-3 h-3 mr-1" />
            +{efficiency}% efficiency
          </Badge>
        </div>

        {/* Icon overlay */}
        <div className="absolute bottom-4 left-4 p-3 bg-secondary/20 backdrop-blur-sm rounded-full border border-border/30">
          <div className={`transition-all duration-300 ${isActive ? 'text-primary animate-glow-pulse' : 'text-foreground'}`}>
            {icon}
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4">
          {description}
        </p>
        
        {interactive && (
          <Button 
            variant="ghost" 
            size="sm" 
            className={`group/btn transition-all duration-300 ${
              isActive ? 'text-primary bg-primary/10' : ''
            }`}
          >
            {isActive ? 'View Details' : 'Try Feature'}
            <ChevronRight className={`w-4 h-4 ml-1 transition-transform duration-300 ${
              isActive ? 'translate-x-1' : 'group-hover/btn:translate-x-1'
            }`} />
          </Button>
        )}
      </div>

      {/* Animated border */}
      <div className={`absolute inset-0 rounded-lg border-2 border-transparent bg-gradient-primary opacity-0 transition-opacity duration-300 ${
        isHovered ? 'opacity-100' : ''
      }`} style={{ mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'xor' }} />
    </Card>
  );
};
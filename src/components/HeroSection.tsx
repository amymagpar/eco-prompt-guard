import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { EnergyMeter } from './EnergyMeter';
import { Sparkles, Zap, Droplets, Leaf, Play } from 'lucide-react';

export const HeroSection = () => {
  const [isSimulating, setIsSimulating] = useState(false);
  const [energyValue, setEnergyValue] = useState(85);
  const [waterValue, setWaterValue] = useState(72);

  useEffect(() => {
    if (isSimulating) {
      const interval = setInterval(() => {
        setEnergyValue(prev => Math.max(20, prev - Math.random() * 5));
        setWaterValue(prev => Math.max(15, prev - Math.random() * 3));
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isSimulating]);

  const handleSimulate = () => {
    setIsSimulating(!isSimulating);
    if (!isSimulating) {
      setEnergyValue(85);
      setWaterValue(72);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-bg">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-energy/20 rounded-full blur-2xl animate-glow-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Product badge */}
          <Badge variant="secondary" className="mb-6 bg-primary/20 text-primary border-primary/30 animate-float">
            <Sparkles className="w-4 h-4 mr-2" />
            EcoAI Pro - Sustainable Intelligence
          </Badge>

          {/* Main heading */}
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight">
            AI That Cares
            <br />
            <span className="text-4xl md:text-5xl">About Tomorrow</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            The world's first energy-conscious AI that trains you to be more efficient while delivering exceptional results.
          </p>

          {/* Key metrics */}
          <div className="flex flex-wrap justify-center gap-8 mb-10">
            <div className="text-center">
              <div className="text-3xl font-bold text-energy flex items-center justify-center gap-2">
                <Zap className="w-8 h-8" />
                60%
              </div>
              <div className="text-sm text-muted-foreground">Less Energy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-water flex items-center justify-center gap-2">
                <Droplets className="w-8 h-8" />
                45%
              </div>
              <div className="text-sm text-muted-foreground">Less Water</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary flex items-center justify-center gap-2">
                <Leaf className="w-8 h-8" />
                100%
              </div>
              <div className="text-sm text-muted-foreground">Better Results</div>
            </div>
          </div>

          {/* Live demo meter */}
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 mb-8 max-w-md mx-auto">
            <div className="text-sm text-muted-foreground mb-4">Live Resource Monitor</div>
            <EnergyMeter 
              energyValue={energyValue} 
              waterValue={waterValue} 
              isActive={isSimulating}
            />
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 hover:scale-105"
              onClick={handleSimulate}
            >
              <Play className="w-5 h-5 mr-2" />
              {isSimulating ? 'Stop' : 'Start'} Live Demo
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/30 hover:bg-primary/10 hover:border-primary transition-all duration-300"
            >
              Watch Full Demo
            </Button>
          </div>

          {/* Video placeholder */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="aspect-video bg-card/30 border border-border/50 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Play className="w-8 h-8 text-primary" />
                </div>
                <p className="text-muted-foreground">Demo video will be added here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
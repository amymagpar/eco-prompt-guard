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
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-energy/10 rounded-full blur-2xl animate-glow-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Product badge */}
          <div className="bg-surface shadow-elevation-1 rounded-full px-8 py-4 inline-flex items-center mb-8 animate-float">
            <Sparkles className="w-5 h-5 mr-3 text-primary" />
            <span className="text-primary font-semibold text-lg">Commons - Sustainable Intelligence</span>
          </div>

          {/* Main heading */}
          <h1 className="text-6xl md:text-8xl font-bold mb-10 bg-gradient-primary bg-clip-text text-transparent leading-tight">
            AI That Cares
            <br />
            <span className="text-4xl md:text-6xl">About Tomorrow</span>
          </h1>

          {/* Subheading */}
          <p className="text-2xl md:text-3xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            The world's first energy-conscious AI that trains you to be more efficient while delivering exceptional results.
          </p>

          {/* Key metrics */}
          <div className="flex flex-wrap justify-center gap-12 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-energy flex items-center justify-center gap-3 mb-2">
                <Zap className="w-12 h-12" />
                60%
              </div>
              <div className="text-lg text-muted-foreground">Less Energy</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-water flex items-center justify-center gap-3 mb-2">
                <Droplets className="w-12 h-12" />
                45%
              </div>
              <div className="text-lg text-muted-foreground">Less Water</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary flex items-center justify-center gap-3 mb-2">
                <Leaf className="w-12 h-12" />
                100%
              </div>
              <div className="text-lg text-muted-foreground">Better Results</div>
            </div>
          </div>

          {/* Live demo meter */}
          <div className="bg-surface shadow-elevation-2 rounded-3xl p-8 mb-12 max-w-lg mx-auto">
            <div className="text-lg text-muted-foreground mb-6">Live Resource Monitor</div>
            <EnergyMeter 
              energyValue={energyValue} 
              waterValue={waterValue} 
              isActive={isSimulating}
            />
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <Button 
              size="lg" 
              className="bg-gradient-primary shadow-elevation-3 px-10 py-5 text-xl font-semibold rounded-full transition-all duration-300 hover:shadow-elevation-4 hover:scale-105"
            >
              Use Commons
            </Button>
          </div>

          {/* Video placeholder */}
          <div className="max-w-6xl mx-auto">
            <div className="aspect-video bg-surface shadow-elevation-2 rounded-3xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Play className="w-10 h-10 text-primary" />
                </div>
                <p className="text-xl text-muted-foreground">Demo video will be added here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
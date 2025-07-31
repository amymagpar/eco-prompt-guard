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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-cyan-500/30 rounded-full blur-2xl animate-glow-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Product badge */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-8 py-4 inline-flex items-center mb-8 animate-float">
            <Sparkles className="w-5 h-5 mr-3 text-white" />
            <span className="text-white font-semibold text-lg">Commons - Sustainable Intelligence</span>
          </div>

          {/* Main heading */}
          <h1 className="text-6xl md:text-8xl font-bold mb-10 text-white leading-tight">
            AI That Cares
            <br />
            <span className="text-4xl md:text-6xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">About Tomorrow</span>
          </h1>

          {/* Subheading */}
          <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
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

          {/* Live demo meter with two-column layout */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="text-lg text-muted-foreground mb-6 text-center">Live Resource Monitor</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-surface shadow-elevation-2 rounded-3xl p-8">
                <div className="flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-energy mr-3" />
                  <h3 className="text-xl font-semibold">Energy Usage</h3>
                </div>
                <EnergyMeter 
                  energyValue={energyValue} 
                  waterValue={0} 
                  isActive={isSimulating}
                />
              </div>
              <div className="bg-surface shadow-elevation-2 rounded-3xl p-8">
                <div className="flex items-center justify-center mb-6">
                  <Droplets className="w-8 h-8 text-water mr-3" />
                  <h3 className="text-xl font-semibold">Water Usage</h3>
                </div>
                <EnergyMeter 
                  energyValue={0} 
                  waterValue={waterValue} 
                  isActive={isSimulating}
                />
              </div>
            </div>
          </div>

          {/* CTA button */}
          <div className="flex justify-center items-center mb-20">
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
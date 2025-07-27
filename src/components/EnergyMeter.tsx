import { useState, useEffect } from 'react';
import { Zap, Droplets } from 'lucide-react';

interface EnergyMeterProps {
  energyValue: number;
  waterValue: number;
  isActive?: boolean;
}

export const EnergyMeter = ({ energyValue, waterValue, isActive = false }: EnergyMeterProps) => {
  const [animatedEnergy, setAnimatedEnergy] = useState(0);
  const [animatedWater, setAnimatedWater] = useState(0);

  useEffect(() => {
    const energyTimer = setTimeout(() => setAnimatedEnergy(energyValue), 500);
    const waterTimer = setTimeout(() => setAnimatedWater(waterValue), 700);
    
    return () => {
      clearTimeout(energyTimer);
      clearTimeout(waterTimer);
    };
  }, [energyValue, waterValue]);

  return (
    <div className={`flex gap-6 items-center ${isActive ? 'animate-pulse-glow' : ''}`}>
      {/* Energy Meter */}
      <div className="flex items-center gap-2">
        <div className="relative">
          <Zap className={`w-6 h-6 ${isActive ? 'animate-glow-pulse text-energy' : 'text-energy/70'}`} />
          <div className="absolute inset-0 animate-glow-pulse">
            <Zap className="w-6 h-6 text-energy/30" />
          </div>
        </div>
        <div className="min-w-[80px]">
          <div className="text-sm text-muted-foreground">Energy</div>
          <div className="bg-secondary rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-energy transition-all duration-1000 ease-out relative"
              style={{ width: `${animatedEnergy}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 animate-energy-flow"></div>
            </div>
          </div>
          <div className="text-xs text-energy font-mono">{animatedEnergy.toFixed(1)}%</div>
        </div>
      </div>

      {/* Water Meter */}
      <div className="flex items-center gap-2">
        <div className="relative">
          <Droplets className={`w-6 h-6 ${isActive ? 'animate-glow-pulse text-water' : 'text-water/70'}`} />
          {isActive && (
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
              <div className="w-2 h-2 bg-water rounded-full animate-water-drop"></div>
            </div>
          )}
        </div>
        <div className="min-w-[80px]">
          <div className="text-sm text-muted-foreground">Water</div>
          <div className="bg-secondary rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-water transition-all duration-1000 ease-out"
              style={{ width: `${animatedWater}%` }}
            ></div>
          </div>
          <div className="text-xs text-water font-mono">{animatedWater.toFixed(1)}%</div>
        </div>
      </div>
    </div>
  );
};
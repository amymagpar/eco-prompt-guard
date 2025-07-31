import { HeroSection } from '@/components/HeroSection';
import { EfficiencyCard } from '@/components/EfficiencyCard';
import { EnergyMeter } from '@/components/EnergyMeter';
import { BatchProcessor } from '@/components/BatchProcessor';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Brain, 
  Zap, 
  Droplets, 
  Target, 
  Clock, 
  BarChart3,
  Award,
  Users,
  Lightbulb,
  Timer,
  TrendingUp
} from 'lucide-react';

// Import feature images
import promptCoachingImg from '/lovable-uploads/4608aa34-eb07-4244-a0cf-6fd0d0de133b.png';
import progressiveResponsesImg from '/lovable-uploads/093a0c12-bab7-4129-b3f9-5ff7202f068a.png';
import liveImpactMeterImg from '/lovable-uploads/cf4f02dd-8085-4ccf-a701-47e446340b16.png';
import batchModeImg from '@/assets/batch-mode.jpg';
import offPeakIncentivesImg from '/lovable-uploads/37c2aad2-1df8-483c-bc5d-512bd29299c7.png';

const Index = () => {
  const alternatingFeatures = [
    {
      title: "Prompt Coaching",
      description: "AI analyzes your prompts before processing and suggests more efficient alternatives that deliver better results.",
      image: promptCoachingImg,
      efficiency: 40,
      icon: <Lightbulb className="w-6 h-6" />,
      interactive: true
    },
    {
      title: "Progressive Responses",
      description: "Start with concise answers, then expand on demand. No more overwhelming responses when a simple answer suffices.",
      image: progressiveResponsesImg,
      efficiency: 55,
      icon: <BarChart3 className="w-6 h-6" />,
      interactive: true
    },
    {
      title: "Batch Processing",
      description: "Group related questions together to share context and dramatically reduce computational overhead.",
      image: batchModeImg,
      efficiency: 75,
      icon: <Target className="w-6 h-6" />,
      interactive: true
    },
    {
      title: "Off-Peak Incentives",
      description: "Earn bonus credits during renewable energy peaks. Perfect your timing for maximum environmental impact.",
      image: offPeakIncentivesImg,
      efficiency: 65,
      icon: <Timer className="w-6 h-6" />,
      interactive: true
    }
  ];

  const liveImpactFeature = {
    title: "Live Impact Meter",
    description: "Real-time visualization of energy and water consumption with tangible comparisons to everyday activities.",
    image: liveImpactMeterImg,
    efficiency: 30,
    icon: <TrendingUp className="w-6 h-6" />,
    interactive: true
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section with vibrant gradient background */}
      <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-br from-yellow-400 via-green-400 to-blue-500">
        {/* Dynamic background elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-400 rounded-full opacity-60 -translate-x-32 -translate-y-32 blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-400 rounded-full opacity-50 translate-x-24 translate-y-24 blur-2xl" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-pink-400 rounded-full opacity-40 blur-xl animate-pulse" />
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3 inline-flex items-center mb-6">
              <Brain className="w-5 h-5 mr-3 text-gray-800" />
              <span className="text-gray-800 font-medium">Smart Efficiency Features</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-gray-900">
              Get Started with
              <br />
              <span className="text-gray-800">
                Commons
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Discover intelligent features designed to maximize productivity while minimizing environmental impact through sustainable AI practices.
            </p>
          </div>

          {/* Alternating Features Layout */}
          <div className="space-y-16 max-w-7xl mx-auto">
            {alternatingFeatures.map((feature, index) => (
              <div 
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
              >
                <div className="lg:w-1/2">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 hover:bg-white transition-all duration-300 hover:shadow-xl border border-white/50">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white mr-4">
                        {feature.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                      {feature.description}
                    </p>
                    <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200 text-base px-4 py-2">
                      {feature.efficiency}% efficient
                    </Badge>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  {feature.title === "Batch Processing" ? (
                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 border border-white/50">
                      <BatchProcessor data-id={`batch-${index}`} />
                    </div>
                  ) : (
                    <div className="rounded-2xl overflow-hidden shadow-xl">
                      <img 
                        src={feature.image} 
                        alt={feature.title}
                        className="w-full h-80 object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Live Impact Meter - Full Width Section */}
          <div className="mt-24 max-w-7xl mx-auto">
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-12 border border-white/50 text-center">
              <div className="flex items-center justify-center mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white mr-6">
                  {liveImpactFeature.icon}
                </div>
                <h3 className="text-4xl font-bold text-gray-900">{liveImpactFeature.title}</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-8 text-xl max-w-3xl mx-auto">
                {liveImpactFeature.description}
              </p>
              <div className="rounded-2xl overflow-hidden shadow-2xl mb-8">
                <img 
                  src={liveImpactFeature.image} 
                  alt={liveImpactFeature.title}
                  className="w-full h-96 object-cover"
                />
              </div>
              <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200 text-lg px-6 py-3">
                {liveImpactFeature.efficiency}% efficient
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Limits Section */}
      <section className="py-24 px-6 bg-surface-variant">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-12">
              Your Personal
              <span className="bg-gradient-energy bg-clip-text text-transparent"> Energy Budget</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-surface shadow-elevation-2 rounded-3xl p-8 hover:shadow-elevation-3 transition-all duration-300">
                <div className="w-20 h-20 bg-energy/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Zap className="w-10 h-10 text-energy" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">Energy Credits</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Computational load converted to tangible kWh measurements
                </p>
                <EnergyMeter energyValue={65} waterValue={0} />
              </div>

              <div className="bg-surface shadow-elevation-2 rounded-3xl p-8 hover:shadow-elevation-3 transition-all duration-300">
                <div className="w-20 h-20 bg-water/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Droplets className="w-10 h-10 text-water" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">Water Drops</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Cooling and processing water consumption tracking
                </p>
                <EnergyMeter energyValue={0} waterValue={45} />
              </div>

              <div className="bg-surface shadow-elevation-2 rounded-3xl p-8 hover:shadow-elevation-3 transition-all duration-300">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Award className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">Efficiency Multiplier</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Earn bonus credits through sustainable usage patterns
                </p>
                <div className="text-4xl font-bold text-primary">2.4x</div>
              </div>
            </div>

            <div className="bg-surface shadow-elevation-2 rounded-3xl p-10">
              <h3 className="text-3xl font-semibold mb-8">Community Impact</h3>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="text-center">
                  <div className="text-5xl font-bold text-energy mb-3">2.3 MWh</div>
                  <p className="text-muted-foreground text-lg">Energy saved by our community this month</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-water mb-3">847K</div>
                  <p className="text-muted-foreground text-lg">Gallons of water conserved</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Behavioral Nudges Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-8">
              <span className="bg-gradient-primary bg-clip-text text-transparent">Gentle Guidance</span>
              <br />
              Towards Better Habits
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Subtle nudges that help you develop more sustainable AI usage patterns without compromising your workflow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-surface shadow-elevation-1 rounded-2xl p-8 hover:shadow-elevation-3 transition-all duration-300 hover:-translate-y-1">
              <Target className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold mb-3">Query Quality Scoring</h3>
              <p className="text-muted-foreground leading-relaxed">Rate prompts before processing with improvement tips</p>
            </div>

            <div className="bg-surface shadow-elevation-1 rounded-2xl p-8 hover:shadow-elevation-3 transition-all duration-300 hover:-translate-y-1">
              <Clock className="w-12 h-12 text-accent mb-6" />
              <h3 className="text-xl font-semibold mb-3">Mindful Pausing</h3>
              <p className="text-muted-foreground leading-relaxed">Brief delay with impact preview for expensive operations</p>
            </div>

            <div className="bg-surface shadow-elevation-1 rounded-2xl p-8 hover:shadow-elevation-3 transition-all duration-300 hover:-translate-y-1">
              <BarChart3 className="w-12 h-12 text-energy mb-6" />
              <h3 className="text-xl font-semibold mb-3">Usage Trends</h3>
              <p className="text-muted-foreground leading-relaxed">Weekly reports on efficiency improvements and impact</p>
            </div>

            <div className="bg-surface shadow-elevation-1 rounded-2xl p-8 hover:shadow-elevation-3 transition-all duration-300 hover:-translate-y-1">
              <Users className="w-12 h-12 text-water mb-6" />
              <h3 className="text-xl font-semibold mb-3">Community Challenges</h3>
              <p className="text-muted-foreground leading-relaxed">Collective goals for environmental impact reduction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-surface/5" />
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-primary-foreground">
              Ready to Transform
              <br />
              How You Use AI?
            </h2>
            <p className="text-2xl text-primary-foreground/90 mb-12 leading-relaxed">
              Join thousands of conscious AI users who are reducing their environmental footprint while achieving better results.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="bg-surface hover:bg-surface/90 text-foreground shadow-elevation-3 px-8 py-4 text-lg font-semibold rounded-full"
              >
                Start Free Trial
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-4 text-lg font-semibold rounded-full"
              >
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
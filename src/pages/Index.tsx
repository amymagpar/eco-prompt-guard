import { HeroSection } from '@/components/HeroSection';
import { EfficiencyCard } from '@/components/EfficiencyCard';
import { EnergyMeter } from '@/components/EnergyMeter';
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
import promptCoachingImg from '@/assets/prompt-coaching.jpg';
import progressiveResponsesImg from '@/assets/progressive-responses.jpg';
import liveImpactMeterImg from '@/assets/live-impact-meter.jpg';
import batchModeImg from '@/assets/batch-mode.jpg';
import offPeakIncentivesImg from '@/assets/off-peak-incentives.jpg';

const Index = () => {
  const features = [
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
      title: "Live Impact Meter",
      description: "Real-time visualization of energy and water consumption with tangible comparisons to everyday activities.",
      image: liveImpactMeterImg,
      efficiency: 30,
      icon: <TrendingUp className="w-6 h-6" />,
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

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <div className="bg-surface shadow-elevation-1 rounded-full px-6 py-3 inline-flex items-center mb-6">
              <Brain className="w-5 h-5 mr-3 text-primary" />
              <span className="text-primary font-medium">Smart Efficiency Features</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-foreground">
              Intelligent by Design,
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Sustainable by Nature
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Every feature is designed to maximize your productivity while minimizing environmental impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <EfficiencyCard
                key={index}
                {...feature}
                onInteract={() => console.log(`Interacting with ${feature.title}`)}
              />
            ))}
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
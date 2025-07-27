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
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-accent/20 text-accent border-accent/30">
              <Brain className="w-4 h-4 mr-2" />
              Smart Efficiency Features
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Intelligent by Design,
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Sustainable by Nature
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
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
      <section className="py-20 px-6 bg-gradient-to-br from-card/30 to-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">
              Your Personal
              <span className="bg-gradient-energy bg-clip-text text-transparent"> Energy Budget</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
                <div className="w-16 h-16 bg-energy/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Zap className="w-8 h-8 text-energy" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Energy Credits</h3>
                <p className="text-muted-foreground mb-4">
                  Computational load converted to tangible kWh measurements
                </p>
                <EnergyMeter energyValue={65} waterValue={0} />
              </div>

              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
                <div className="w-16 h-16 bg-water/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Droplets className="w-8 h-8 text-water" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Water Drops</h3>
                <p className="text-muted-foreground mb-4">
                  Cooling and processing water consumption tracking
                </p>
                <EnergyMeter energyValue={0} waterValue={45} />
              </div>

              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Efficiency Multiplier</h3>
                <p className="text-muted-foreground mb-4">
                  Earn bonus credits through sustainable usage patterns
                </p>
                <div className="text-3xl font-bold text-primary">2.4x</div>
              </div>
            </div>

            <div className="bg-card/30 border border-border/50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Community Impact</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-energy mb-2">2.3 MWh</div>
                  <p className="text-muted-foreground">Energy saved by our community this month</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-water mb-2">847K</div>
                  <p className="text-muted-foreground">Gallons of water conserved</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Behavioral Nudges Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">Gentle Guidance</span>
              <br />
              Towards Better Habits
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Subtle nudges that help you develop more sustainable AI usage patterns without compromising your workflow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:shadow-glow-primary transition-all duration-300 hover:scale-105">
              <Target className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Query Quality Scoring</h3>
              <p className="text-sm text-muted-foreground">Rate prompts before processing with improvement tips</p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:shadow-glow-primary transition-all duration-300 hover:scale-105">
              <Clock className="w-8 h-8 text-accent mb-4" />
              <h3 className="font-semibold mb-2">Mindful Pausing</h3>
              <p className="text-sm text-muted-foreground">Brief delay with impact preview for expensive operations</p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:shadow-glow-primary transition-all duration-300 hover:scale-105">
              <BarChart3 className="w-8 h-8 text-energy mb-4" />
              <h3 className="font-semibold mb-2">Usage Trends</h3>
              <p className="text-sm text-muted-foreground">Weekly reports on efficiency improvements and impact</p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:shadow-glow-primary transition-all duration-300 hover:scale-105">
              <Users className="w-8 h-8 text-water mb-4" />
              <h3 className="font-semibold mb-2">Community Challenges</h3>
              <p className="text-sm text-muted-foreground">Collective goals for environmental impact reduction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-background/10" />
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
              Ready to Transform
              <br />
              How You Use AI?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Join thousands of conscious AI users who are reducing their environmental footprint while achieving better results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-background hover:bg-background/90 text-foreground shadow-glow-primary"
              >
                Start Free Trial
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
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
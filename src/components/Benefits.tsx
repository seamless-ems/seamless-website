import { Zap, Clock, Shield, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    stat: "80%",
    label: "Time Saved",
    description: "Reclaim hours every week from manual coordination and asset wrangling",
  },
  {
    icon: Zap,
    stat: "Zero",
    label: "Manual Entry",
    description: "Data flows automatically between forms, sheets, and your public pages",
  },
  {
    icon: Shield,
    stat: "100%",
    label: "Brand Control",
    description: "Consistent, on-brand assets with built-in approval workflows",
  },
  {
    icon: Sparkles,
    stat: "Real-time",
    label: "Updates",
    description: "Changes publish instantly—speakers, schedules, everything stays current",
  },
];

const Benefits = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-secondary/50 via-background to-background">
      <div className="container px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-up">
            <h2 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl tracking-tight leading-tight">
              Less chaos.{" "}
              <span className="block text-primary">More magic.</span>
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Event management shouldn't feel like herding cats. Seamless automates the tedious stuff 
              so you can focus on creating memorable experiences—not chasing down speaker headshots 
              at 11pm the night before.
            </p>
            
            <div className="pt-4">
              <a 
                href="https://calendly.com/james-ruleyproductions" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-lg font-medium text-primary hover:text-primary/80 transition-colors group"
              >
                See Seamless in action
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={benefit.label}
                  className="space-y-4 p-6 rounded-2xl bg-card border-2 border-border hover:border-primary/30 transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  
                  <div>
                    <div className="font-display font-bold text-4xl tracking-tight mb-1">
                      {benefit.stat}
                    </div>
                    <div className="font-medium text-foreground mb-2">
                      {benefit.label}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;

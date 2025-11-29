import { Users, Calendar, FolderSync } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Users,
    title: "Speaker Management",
    description: "Automated intake forms collect speaker assets, headshots, and bios. Approval workflows with branded promo card generation. Everything syncs to Google Sheets and Drive—no manual data entry.",
    benefits: ["Automated asset collection", "One-click approval workflows", "Branded promo cards", "Google integration"],
  },
  {
    icon: Calendar,
    title: "Schedule Management",
    description: "Your Google Sheet becomes a live, publishable schedule. Make changes once, publish everywhere. Speaker details automatically populate from your approved assets—always accurate, always current.",
    benefits: ["Google Sheets sync", "Live updates", "Embedded schedules", "Zero duplicate work"],
  },
  {
    icon: FolderSync,
    title: "Content Management",
    description: "Centralized hub for presentations, videos, and files. Speakers and admins upload, replace, and manage content with automatic Google Drive sync. Lock changes when ready to go live.",
    benefits: ["Centralized file storage", "Automatic cloud sync", "Granular permissions", "Version control"],
  },
];

const Features = () => {
  return (
    <section id="features" className="py-32 bg-gradient-to-b from-background to-secondary/30">
      <div className="container px-6">
        <div className="text-center mb-20 space-y-4 animate-fade-up">
          <h2 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl tracking-tight">
            Everything you need,{" "}
            <span className="text-primary">nothing you don't</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three powerful modules that work together to eliminate chaos and give you time back
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={feature.title}
                className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(56,189,248,0.1)] bg-card/50 backdrop-blur animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
                    <Icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="font-display font-bold text-2xl tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  
                  <ul className="space-y-2 pt-4 border-t border-border">
                    {feature.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mr-3"></div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;

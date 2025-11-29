import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-illustration.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-secondary">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iaHNsKDE4NSA2NSUgNDUlIC8gMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9nPjwvc3ZnPg==')] opacity-40"></div>
      
      <div className="container relative z-10 px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-up">
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Event Management Reimagined
              </span>
            </div>
            
            <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight">
              Events run{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                seamlessly
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-xl">
              Stop wrestling with spreadsheets and endless emails. Automate speaker management, 
              publish live schedules, and collaborate effortlessly—all in one platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                asChild 
                size="lg" 
                className="text-lg px-8 py-6 rounded-2xl bg-gradient-to-r from-primary to-primary/90 hover:shadow-[0_0_40px_rgba(56,189,248,0.3)] transition-all duration-300 group"
              >
                <a 
                  href="https://calendly.com/james-ruleyproductions" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Book a Demo
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 rounded-2xl border-2 hover:bg-secondary/50"
              >
                <a href="#features">
                  See How It Works
                </a>
              </Button>
            </div>
          </div>
          
          <div className="relative animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl"></div>
            <img 
              src={heroImage} 
              alt="Seamless event management platform illustration" 
              className="relative rounded-3xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;

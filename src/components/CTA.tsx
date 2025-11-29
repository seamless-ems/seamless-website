import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-primary via-primary to-primary/90 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMTAwIDAgTCAwIDAgMCAxMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIgb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
      
      <div className="container relative z-10 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm mb-6 animate-scale-in">
            <Calendar className="h-10 w-10 text-primary-foreground" />
          </div>
          
          <h2 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-primary-foreground tracking-tight animate-fade-up">
            Ready to run events that actually run themselves?
          </h2>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Book a 15-minute demo and see how Seamless transforms your event workflow. 
            No pressure, no sales pitch—just a genuine look at how we can help.
          </p>
          
          <div className="pt-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <Button 
              asChild 
              size="lg" 
              className="text-xl px-12 py-8 rounded-2xl bg-white text-primary hover:bg-white/90 hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] transition-all duration-300 group"
            >
              <a 
                href="https://calendly.com/james-ruleyproductions" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Book Your Demo Now
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </a>
            </Button>
            
            <p className="text-primary-foreground/70 text-sm mt-6">
              Free consultation • No credit card required • 15 minutes to transform your workflow
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

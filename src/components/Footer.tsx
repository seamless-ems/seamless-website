const Footer = () => {
  return (
    <footer className="py-16 bg-secondary border-t border-border">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <div className="font-display font-bold text-3xl mb-2">Seamless</div>
            <p className="text-sm text-muted-foreground">Event management made simple</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-4">
            <a 
              href="https://calendly.com/james-ruleyproductions" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors font-medium"
            >
              Book a Demo
            </a>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Seamless. Built for event professionals who deserve better tools.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

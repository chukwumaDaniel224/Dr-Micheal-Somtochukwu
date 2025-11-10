const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container-custom section-padding">
        <div className="text-center space-y-4">
          <div className="text-2xl font-bold gradient-text">Dr. Alexandra Mitchell</div>
          <p className="text-muted-foreground max-w-md mx-auto">
            Providing compassionate, evidence-based healthcare for over 15 years.
          </p>
          <div className="flex justify-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors">
              Accessibility
            </a>
          </div>
          <div className="text-sm text-muted-foreground pt-4">
            © {new Date().getFullYear()} Dr. Alexandra Mitchell. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

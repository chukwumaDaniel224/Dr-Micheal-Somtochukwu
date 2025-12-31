import { Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: "https://wa.me/2347018052936",
    },
    {
      icon: Facebook,
      label: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61551646423658",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://instagram.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com",
    },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container-custom section-padding">
        <div className="text-center space-y-6">
          <div className="text-2xl font-bold gradient-text">Dr. Micheal Somtochukwu</div>
          <p className="text-muted-foreground max-w-md mx-auto">
            Providing compassionate, evidence-based healthcare for over 5 years.
          </p>
          
          {/* Social Media Icons */}
          <div className="flex justify-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-card-hover hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>

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
            © {new Date().getFullYear()} Built By Daniel Software's. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/doctor-hero.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center section-padding pt-32">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-card-hover text-primary text-sm font-medium">
                Board Certified Lab Scientist
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Dr. MICHEAL SOMTOCHUKWU
            </h1>
            <p className="text-xl text-muted-foreground">
              Committed to providing compassionate, evidence-based healthcare with over 5 years of experience in internal medicine.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="#consultation">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#credentials">View Credentials</a>
              </Button>
            </div>
          </div>

          <div className="relative animate-fade-in flex justify-center md:justify-end" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-2xl overflow-hidden shadow-lg w-full max-w-sm md:max-w-md">
              <img
                src={heroImage}
                alt="Dr. Micheal Somtochukwu"
                className="w-full h-auto object-cover aspect-square"
              />
            </div>
            <div className="absolute -bottom-4 left-4 md:-bottom-6 md:-left-6 bg-card p-4 md:p-6 rounded-xl shadow-lg">
              <div className="text-3xl md:text-4xl font-bold gradient-text">5+</div>
              <div className="text-xs md:text-sm text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

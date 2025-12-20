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
              <Button variant="hero" size="lg">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                View Credentials
              </Button>
            </div>
          </div>

          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src={heroImage}
                alt="Dr. Micheal Somtochukwu"
                className="w-96 h-96 object-contain mx-20"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-lg">
              <div className="text-4xl font-bold gradient-text">5+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, Video, Stethoscope } from "lucide-react";

const Consultation = () => {
  const consultationTypes = [
    {
      icon: Stethoscope,
      title: "In-Person Consultation",
      description: "Visit our clinic for a comprehensive physical examination and personalized care.",
      duration: "45-60 minutes",
    },
    {
      icon: Video,
      title: "Virtual Consultation",
      description: "Connect with Dr. Micheal from the comfort of your home via secure video call.",
      duration: "30-45 minutes",
    },
    {
      icon: Calendar,
      title: "Follow-Up Visit",
      description: "Schedule a follow-up appointment to monitor your progress and adjust treatment plans.",
      duration: "20-30 minutes",
    },
  ];

  return (
    <section id="consultation" className="section-padding bg-card/50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Schedule a Consultation</h2>
          <p className="text-lg text-muted-foreground">
            Choose the consultation type that best suits your needs. All appointments include a thorough review of your medical history.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {consultationTypes.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="interactive-card">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-card-hover mb-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <div className="flex items-center justify-center gap-2 text-sm text-primary mb-6">
                    <Clock className="w-4 h-4" />
                    <span>{item.duration}</span>
                  </div>
                  <Button variant="hero" className="w-full" asChild>
                    <a href="#contact">Book Now</a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Consultation;

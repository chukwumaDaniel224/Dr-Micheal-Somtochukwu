import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Stethoscope, Activity, Shield, Calendar } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "Primary Care",
      description: "Comprehensive medical care for adults including annual physicals, health screenings, and acute illness treatment.",
    },
    {
      icon: Activity,
      title: "Diagnostic Laboratory Testing",
      description: "Provision of accurate, timely, and clinically relevant laboratory test results to support patient diagnosis, treatment, and monitoring, in strict accordance with laboratory protocols, quality standards, and regulatory requirements.",
    },
    {
      icon: Shield,
      title: "Preventive Medicine",
      description: <div>● Performance of serological and immunological assays for the screening, diagnosis, and monitoring of infectious and immune-related conditions, in compliance with laboratory quality standards. <br></br>
      ● Performance of routine hematological investigations, including complete blood counts (CBC), peripheral blood smear examination, and basic coagulation tests, in accordance with approved standard operating procedures.
      </div>
    },
    {
      icon: Calendar,
      title: "Wellness Programs",
      description: "Customized health optimization programs focusing on nutrition, exercise, stress management, and longevity.",
    },
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Medical Services</h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive healthcare services tailored to your unique needs and health goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="card-interactive">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-card-hover mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

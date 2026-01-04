import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, FileCheck, Shield } from "lucide-react";

const Credentials = () => {
  const credentials = [
    {
      icon: GraduationCap,
      title: "Medical Education",
      items: [
        "Bachelor of Medical Laboratory Science (BMLS)",
        "David Umahi Federal University of Health Sciences",
        "Graduated with Honours - 2028",
      ],
    },
    {
      icon: Award,
      title: "Certifications",
      items: [
        "Board Certified Medical Laboratory Scientist",
        "Clinical Chemistry Specialist",
        "Hematology & Blood Banking Certified",
      ],
    },
    {
      icon: FileCheck,
      title: "Licenses",
      items: [
        "Medical Laboratory Science Council of Nigeria (MLSCN)",
        "Licensed to Practice - Active Status",
        "CPD Certified Professional",
      ],
    },
    {
      icon: Shield,
      title: "Professional Memberships",
      items: [
        "Association of Medical Laboratory Scientists of Nigeria (AMLSN)",
        "Nigerian Medical Association (NMA)",
        "International Federation of Clinical Chemistry (IFCC)",
      ],
    },
  ];

  return (
    <section id="credentials" className="section-padding">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Professional Credentials</h2>
          <p className="text-lg text-muted-foreground">
            Verified qualifications and certifications ensuring the highest standards of medical practice.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {credentials.map((credential, index) => {
            const Icon = credential.icon;
            return (
              <Card key={index} className="interactive-card">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-card-hover">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">{credential.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {credential.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
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

export default Credentials;

import { Card, CardContent } from "@/components/ui/card";
import { Award, Heart, Users, TrendingUp } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, value: "5000+", label: "Patients Treated" },
    { icon: Award, value: "20+", label: "Medical Awards" },
    { icon: Heart, value: "98%", label: "Patient Satisfaction" },
    { icon: TrendingUp, value: "15+", label: "Years Practice" },
  ];

  return (
    <section id="about" className="section-padding bg-section-bg">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Dr. Mitchell</h2>
          <p className="text-lg text-muted-foreground">
            Dedicated to advancing patient care through expertise, compassion, and continuous innovation in medicine.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="card-interactive">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-card-hover mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-8 md:p-12">
              <div className="space-y-6 text-foreground">
                <p className="text-lg leading-relaxed">
                  Dr. Alexandra Mitchell is a board-certified internal medicine physician with over 15 years of clinical experience. She earned her medical degree from Johns Hopkins University School of Medicine and completed her residency at Massachusetts General Hospital.
                </p>
                <p className="text-lg leading-relaxed">
                  Her approach combines cutting-edge medical knowledge with personalized, patient-centered care. Dr. Mitchell specializes in preventive medicine, chronic disease management, and comprehensive health optimization.
                </p>
                <p className="text-lg leading-relaxed">
                  Beyond clinical practice, Dr. Mitchell is actively involved in medical research and education. She has published numerous peer-reviewed articles and regularly presents at national medical conferences.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;

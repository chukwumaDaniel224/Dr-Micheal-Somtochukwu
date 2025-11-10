import { Card, CardContent } from "@/components/ui/card";

const Experience = () => {
  const timeline = [
    {
      year: "2023 - Present",
      title: "Chief of Internal Medicine",
      institution: "Metropolitan Medical Center",
      description: "Leading a team of 25 physicians providing comprehensive internal medicine care.",
    },
    {
      year: "2015 - 2023",
      title: "Attending Physician",
      institution: "Boston General Hospital",
      description: "Specialized in preventive medicine and chronic disease management.",
    },
    {
      year: "2012 - 2015",
      title: "Internal Medicine Residency",
      institution: "Massachusetts General Hospital",
      description: "Completed three-year residency program with distinction in patient care.",
    },
    {
      year: "2008 - 2012",
      title: "Doctor of Medicine",
      institution: "Johns Hopkins University School of Medicine",
      description: "Graduated magna cum laude with focus on primary care and public health.",
    },
  ];

  return (
    <section id="experience" className="section-padding bg-section-bg">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Education & Experience</h2>
          <p className="text-lg text-muted-foreground">
            A proven track record of excellence in medical education and clinical practice.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <Card key={index} className="card-interactive md:ml-20">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-start gap-4">
                      <div className="hidden md:block absolute left-6 w-5 h-5 rounded-full bg-primary -ml-14 mt-1" />
                      <div className="flex-1">
                        <div className="text-sm font-medium text-primary mb-2">{item.year}</div>
                        <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                        <div className="text-muted-foreground font-medium mb-3">{item.institution}</div>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

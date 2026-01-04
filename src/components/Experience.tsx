import { Card, CardContent } from "@/components/ui/card";

const Experience = () => {
  const timeline = [
    {
      year: "2023 - Present",
      title: "PROFESSIONAL EXPERIENCE",
      institution: "Michael Foundation Hospital Canada",
      description: <div>● Perform routine and specialized laboratory investigations in Hematology, Clinical Chemistry, Microbiology, and Blood Banking.<br></br>
      ● Ensure accurate sample collection, analysis, and result reporting in accordance with laboratory standards. <br></br>● Maintain strict compliance with quality control and safety protocols.<br></br>
      ● Collaborate with physicians and other healthcare professionals to support accurate diagnosis and patient management.<br></br>
      ● Contribute to continuous improvement of laboratory services through compliance monitoring and best laboratory practices. </div>
    },
    {
      year: "2024 - Present",
      title: "Medical Laboratory Science Intern / Student",
      institution: "Michael Foundation Hospital Canada",
      description: <div>● Gained hands-on experience in diagnostic laboratory procedures across major laboratory departments, including Hematology, Chemical Pathology, Medical Microbiology, and Blood Banking.<br></br>

      ● Assisted in specimen collection, processing, and analysis, including microscopy, culture techniques, and routine laboratory investigations.<br></br>

      ● Supported laboratory operations through instrument calibration, quality control checks, and equipment maintenance.<br></br>

      ● Developed strong competencies in laboratory ethics, accurate documentation, quality assurance, and infection prevention and control practices.<br></br></div>
    },
    {
      year: "Focus",
      title: "Bachelor of Medical Laboratory Science (BMLS)",
      institution: "David Umahi Federal University Nigeria",
      description: <div>● Specialized training in Hematology, Chemical Pathology, Medical Microbiology, Histopathology, and Immunology.<br></br> 
      ● Strong foundation in laboratory diagnostics, biomedical sciences, and research methodologies.
      </div>
    },
    {
      year: "2023 - Present",
      title: "PROFESSIONAL SKILLS",
      institution: "Massachusetts General Hospital",
      description: <div>● Diagnostic Laboratory Testing<br></br>

      ● Quality Control & Quality Assurance<br></br>

      ● Laboratory Equipment Handling & Maintenance<br></br>

      ● Result Interpretation & Reporting<br></br>

      ● Infection Prevention & Laboratory Safety<br></br>

      ● Team Collaboration & Effective Communication</div>
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

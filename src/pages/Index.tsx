import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Consultation from "@/components/Consultation";
import Credentials from "@/components/Credentials";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Consultation />
      <Credentials />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

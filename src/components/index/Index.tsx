import HeroSection from "./HeroSection";
import MedicalServicesSection from "./MedicalServicesSection";
import NonMedicalServicesSection from "./NonMedicalServicesSection";
import QualityCareSection from "./QualityCareSection";

const Index = () => {
  return (
    <>
      <HeroSection />
      <QualityCareSection />
      <MedicalServicesSection />
      <NonMedicalServicesSection />
      {/* <ContactFormSection /> */}
    </>
  );
};

export default Index;

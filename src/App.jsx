import EducationAndExperience from "./components/EducationAndExperience";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import NumbersSection from "./components/NumbersSection";
import ServicesSection from "./components/ServicesSection";
import SkillsSection from "./components/SkillsSection";
import ThreeBackground from "./components/ThreeBackground";

function App() {
  return (
    <>
      <ThreeBackground />
      <NavBar />
      <HeroSection />
      <NumbersSection />
      <ServicesSection />
      <SkillsSection />
      <EducationAndExperience />
    </>
  );
}

export default App;

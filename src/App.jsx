import Nav from './components/Nav';
import HeroSection from './components/HeroSection';
import WhatWeDo from './components/WhatWeDo';
import ProductsSection from './components/ProductsSection';
import ToolsSection from './components/ToolsSection';
import StudentProjects from './components/StudentProjects';
import ProjectsSection from './components/ProjectsSection';
import WhyChooseUs from './components/WhyChooseUs';
import AboutCompany from './components/AboutCompany';
import ImpactSection from './components/ImpactSection';
import InnovationSection from './components/InnovationSection';
import CreativeContact from './components/CreativeContact';
import Footer from './components/Footer';
import { useGlobalStyles } from './styles/globalStyles';

export default function App() {
  useGlobalStyles();

  return (
    <div style={{
      fontFamily: "'Inter', 'Poppins', 'Segoe UI', sans-serif",
      background: "linear-gradient(135deg, #f0f9ff 0%, #e0e7ff 50%, #fae8ff 100%)",
      minHeight: "100vh", color: "#1e293b", overflowX: "hidden"
    }}>
      <Nav />
      <HeroSection />
      <WhatWeDo />
      <ProductsSection />
      <ToolsSection />
      <StudentProjects />
      <ProjectsSection />
      <WhyChooseUs />
      <AboutCompany />
      <ImpactSection />
      <InnovationSection />
      <CreativeContact />
      <Footer />
    </div>
  );
}
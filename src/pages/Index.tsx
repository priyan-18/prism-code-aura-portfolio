
import { Navigation } from '@/components/Navigation';
import { EnhancedHeroSection } from '@/components/sections/EnhancedHeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { EnhancedProjectsSection } from '@/components/sections/EnhancedProjectsSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <EnhancedHeroSection />
        <AboutSection />
        <EnhancedProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

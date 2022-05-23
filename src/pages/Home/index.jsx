import React from 'react';
import { HeroSection } from '../../components/HeroSection';
import { CasesSection } from '../../components/CasesSection';
import { Menu } from '../../components/Menu';
import { VideoSection } from '../../components/VideoSection';
import { ContactSection } from '../../components/ContactSection';
import { Footer } from '../../components/Footer';

export function Home() {
  return (
    <div>
      <Menu />
      <HeroSection />
      <CasesSection />
      <VideoSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

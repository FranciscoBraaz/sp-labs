import React from 'react';
import { HeroSection } from '../../components/HeroSection';
import { CasesSection } from '../../components/CasesSection';
import { Menu } from '../../components/Menu';
import { VideoSection } from '../../components/VideoSection';

export function Home() {
  return (
    <div>
      <Menu />
      <HeroSection />
      <CasesSection />
      <VideoSection />
    </div>
  );
}

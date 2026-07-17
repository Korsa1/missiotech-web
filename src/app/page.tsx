import React from 'react';
import HeaderV2 from '@/components/v2/HeaderV2';
import HeroV2 from '@/components/v2/HeroV2';
import ServicesV2 from '@/components/v2/ServicesV2';
import TestimonialsV2 from '@/components/v2/TestimonialsV2';
import CallToActionV2 from '@/components/v2/CallToActionV2';
import FooterV2 from '@/components/v2/FooterV2';

export default function Home() {
  return (
    <main className="font-sans antialiased text-[#1A2A33] bg-white selection:bg-[#00B8D4] selection:text-white">
      <HeaderV2 />
      <HeroV2 />
      <ServicesV2 />
      <TestimonialsV2 />
      <CallToActionV2 />
      <FooterV2 />
    </main>
  );
}

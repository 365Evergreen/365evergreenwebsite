import { useState } from "react";
import HeroSection from "../../sections/HeroSection/HeroSection";
import Drawer from "../../components/Drawer";
import FeaturesSection from "../../sections/FeaturesSection/FeaturesSection";
import GetInTouchSection from "../../sections/GetInTouchSection/GetInTouchSection";

export default function HomePage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
<HeroSection
       title="We are Microsoft 365 and Power Platform specialists"
      subtitle="We partner with organisations to help build a modern workplace"
  imageSrc="https://cdn.365evergreen.com/media/plant-cover-1440-900.webp"
  imageAlt="Plant background"
  ctaLabel="Start your journey"
  ctaLink="/updates"
  onCtaClick={() => setIsDrawerOpen(true)}
/>

      <FeaturesSection />
      <FeaturesSection />
      <GetInTouchSection />

      <Drawer
        title=""
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}

      />

    </>
  );
}
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
        onBrowseUpdates={() => setIsDrawerOpen(true)}
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
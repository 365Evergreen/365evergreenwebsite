

import Hero from '../../components/Hero/Hero';

type HeroSectionProps = {
  onBrowseUpdates: () => void;
};

export default function HeroSection({
  onBrowseUpdates,
}: HeroSectionProps) {
  return (
    <Hero
      title="We are Microsoft 365 and Power Platform specialists"
      subtitle="We partner with organisations to help build a modern workplace"
      ctaLabel="Start your journey"
      onCtaClick={onBrowseUpdates}
      imageAlt="Plant background"
      imageSrc="https://cdn.365evergreen.com/media/plant-cover-1440-900.webp"
    />
  );
}

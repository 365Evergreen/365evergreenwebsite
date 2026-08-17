

import Hero from '../../components/Hero/Hero';

type HeroSectionProps = {
  onBrowseUpdates: () => void;
};

export default function HeroSection({
  onBrowseUpdates,
}: HeroSectionProps) {
  return (
    <Hero
      title="We are Microsoft 365 and Azure specialists"
      subtitle="Helping organisations stay current with Microsoft 365 changes."
      ctaLabel="Browse Updates"
      onCtaClick={onBrowseUpdates}
      imageAlt="Plant background"
      imageSrc="https://cdn.365evergreen.com/media/plant-cover-1440-900.webp"
    />
  );
}

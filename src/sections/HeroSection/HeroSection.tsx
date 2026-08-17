import Hero from '../../components/Hero/Hero';

export interface HeroSectionProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  ctaLabel: string;
  ctaLink: string;
  onCtaClick?:() => void;
}

export default function HeroSection({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  ctaLabel,
  ctaLink,
  onCtaClick
}: HeroSectionProps) {
  return (
    <Hero
      title={title}
      subtitle={subtitle}
      imageSrc={imageSrc}
      imageAlt={imageAlt}
      ctaLabel={ctaLabel}
      ctaLink={ctaLink}
      onCtaClick={onCtaClick}    />
  );
}
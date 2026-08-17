// sections/SectionRenderer/SectionRenderer.tsx

import HeroSection from '../HeroSection/HeroSection';
import RichTextSection from '../RichTextSection/RichTextSection';
import CardGridSection from '../CardGridSection/CardGridSection';
import GetInTouchSection from '../GetInTouchSection/GetInTouchSection';

import type { PageSection } from '../../types/ContentPage.types';

interface SectionRendererProps {
  section: PageSection;
}

export default function SectionRenderer({
  section,
}: SectionRendererProps) {
  switch (section.type) {
    case 'hero':
      return (
        <HeroSection
          title={section.title}
          subtitle={section.subtitle}
          imageSrc={section.imageSrc}
        />
      );

    case 'richText':
      return (
        <RichTextSection
          heading={section.heading}
          content={section.content}
        />
      );

    case 'cardGrid':
      return (
        <CardGridSection
          heading={section.heading}
          cards={section.cards}
        />
      );

    case 'contact':
      return <GetInTouchSection />;

    default:
      return null;
  }
}
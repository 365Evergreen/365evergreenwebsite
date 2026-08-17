export type PageSection =
  | HeroSection
  | RichTextSection
  | CardGridSection
  | ContactSection;

interface HeroSection {
  imageAlt: string;
  ctaLink: string;
  ctaLabel: string;
  type: 'hero';
  title: string;
  subtitle: string;
  imageSrc: string;
}

interface RichTextSection {
  type: 'richText';
  heading: string;
  content: string[];
}

interface CardGridSection {
  type: 'cardGrid';
  heading: string;
  cards: {
    id: string;
    title: string;
    description: string;
    imageSrc?: string;
  }[];
}

interface ContactSection {
  type: 'contact';
}

export interface ContentPage {
  slug: string;
  title: string;
  sections: PageSection[];
}
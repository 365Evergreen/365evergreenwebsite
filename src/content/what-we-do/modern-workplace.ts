import type { ContentPage } from '../../types/ContentPage.types';

export const modernWorkplace: ContentPage = {
  slug: 'modern-workplace',

  title: 'Modern Workplace',

  sections: [
    {
      type: 'hero',
      title: 'Modern Workplace',
      subtitle:
        'Empower staff with secure collaboration and modern productivity tools.',
      imageSrc:
        '/images/modern-workplace-hero.jpg',
      imageAlt:'Automation',
      ctaLabel:"Let's go",
      ctaLink: ''
    },

    {
      type: 'richText',
      heading: 'Why Modern Workplace?',
      content: [
        'Employees expect flexible working experiences.',
        'Microsoft 365 provides the foundation for secure collaboration and productivity.',
      ],
    },

    {
      type: 'cardGrid',
      heading: 'Our Capabilities',
      cards: [
        {
          id: '1',
          title: 'Microsoft Teams',
          description:
            'Collaboration, meetings and communications.',
        },
        {
          id: '2',
          title: 'SharePoint Online',
          description:
            'Modern intranet and document management.',
        },
        {
          id: '3',
          title: 'End User Adoption',
          description:
            'Drive successful organisational change.',
        },
      ],
    },

    {
      type: 'contact',
    },
  ],
};
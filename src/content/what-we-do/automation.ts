import type { ContentPage } from '../../types/ContentPage.types';

export const automation: ContentPage = {
  slug: 'automation',

  title: 'Business Automation',

  sections: [
    {
      type: 'hero',
      title: 'Business Automation',
      subtitle:
        'Reduce manual effort and increase operational efficiency.',
      imageSrc:
        '/images/automation-hero.jpg',
    },

    {
      type: 'richText',
      heading: 'Automate Repetitive Processes',
      content: [
        'Manual processes slow teams down.',
        'Power Platform enables rapid automation without complex development.',
      ],
    },

    {
      type: 'cardGrid',
      heading: 'Automation Services',
      cards: [
        {
          id: '1',
          title: 'Power Automate',
          description:
            'Workflow automation across Microsoft 365.',
        },
        {
          id: '2',
          title: 'Power Apps',
          description:
            'Build internal business applications quickly.',
        },
        {
          id: '3',
          title: 'AI Builder',
          description:
            'Add AI-powered automation to business processes.',
        },
      ],
    },

    {
      type: 'contact',
    },
  ],
};
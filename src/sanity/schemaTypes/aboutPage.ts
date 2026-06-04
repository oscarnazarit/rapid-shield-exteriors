// Retired — About page bio fields have moved into siteSettings.
// This file is kept for reference but is not registered in the schema index.
const aboutPage = {
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: 'bio1',
      title: 'Bio — Paragraph 1',
      description: 'How you got into the business / your background in the trade.',
      type: 'text',
      rows: 4,
    },
    {
      name: 'bio2',
      title: 'Bio — Paragraph 2',
      description: 'Why you started Rapid Shield Exteriors and what sets you apart.',
      type: 'text',
      rows: 4,
    },
    {
      name: 'bio3',
      title: 'Bio — Paragraph 3',
      description: 'Personal details: family, community ties, what you do outside of work.',
      type: 'text',
      rows: 4,
    },
  ],
};

export default aboutPage;

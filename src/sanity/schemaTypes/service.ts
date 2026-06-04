import type { Rule } from 'sanity';

// Retired — services are now managed via hardcoded data + siteSettings overrides.
// This file is kept for reference but is not registered in the schema index.
const service = {
  name: 'service',
  title: 'Services',
  type: 'document',
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  fields: [
    {
      name: 'title',
      title: 'Service Name',
      description: 'e.g. "Roofing", "Siding", "Gutters"',
      type: 'string',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      description: 'Used for the #anchor link in the URL. Auto-generated from the title.',
      type: 'slug',
      options: { source: 'title' },
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'icon',
      title: 'Icon',
      description: 'Icon shown next to the service name.',
      type: 'string',
      options: {
        list: [
          { value: 'home', title: 'House — Roofing' },
          { value: 'layers', title: 'Layers — Siding' },
          { value: 'droplets', title: 'Droplets — Gutters' },
          { value: 'wrench', title: 'Wrench — Repairs' },
          { value: 'shield', title: 'Shield — Protection' },
        ],
      },
    },
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 5,
    },
    {
      name: 'offerings',
      title: "What's Included",
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'subServices',
      title: 'Sub-services',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (rule: Rule) => rule.required(),
            },
            {
              name: 'desc',
              title: 'Short Description',
              type: 'string',
            },
          ],
          preview: { select: { title: 'label', subtitle: 'desc' } },
        },
      ],
      validation: (rule: Rule) => rule.max(3),
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
    },
  ],
  preview: {
    select: { title: 'title', subtitle: 'tagline' },
  },
};

export default service;

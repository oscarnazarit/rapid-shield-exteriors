import type { Rule } from 'sanity';

// Global site settings — one document, multiple tabs in the Studio
const siteSettings = {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  groups: [
    { name: 'contact', title: 'Contact & Info' },
    { name: 'homepage', title: 'Home Page' },
    { name: 'testimonials', title: 'Testimonials' },
    { name: 'stats', title: 'Stats' },
    { name: 'servicesPage', title: 'Services Page' },
    { name: 'workPage', title: 'Our Work Page' },
    { name: 'aboutHeader', title: 'About Page' },
    { name: 'contactPage', title: 'Contact Page' },
    { name: 'roofing', title: 'Service — Roofing' },
    { name: 'siding', title: 'Service — Siding' },
    { name: 'gutters', title: 'Service — Gutters' },
  ],
  fields: [
    // ── Contact & Info ──────────────────────────────────────────────
    { name: 'businessName', title: 'Business Name', type: 'string', group: 'contact' },
    { name: 'phone', title: 'Phone Number', type: 'string', group: 'contact' },
    { name: 'email', title: 'Email Address', type: 'string', group: 'contact' },
    { name: 'address', title: 'Address', type: 'string', group: 'contact' },

    // ── Home Page ────────────────────────────────────────────────────
    {
      name: 'heroHeadline',
      title: 'Hero Headline',
      description: 'First line of the large homepage headline. e.g. "Protect Your Home."',
      type: 'string',
      group: 'homepage',
    },
    {
      name: 'heroHeadlineAccent',
      title: 'Hero Headline Accent (gold, line 2)',
      description: 'Second line shown in gold. e.g. "Trust the Shield."',
      type: 'string',
      group: 'homepage',
    },
    {
      name: 'heroSubtext',
      title: 'Hero Sub-text',
      description: 'The paragraph below the headline.',
      type: 'text',
      rows: 3,
      group: 'homepage',
    },
    {
      name: 'homeServicesDescription',
      title: 'Our Services — Description',
      description:
        'The text shown under the "Our Services" heading. Default: "From roof to foundation, we keep the exterior of your home in peak condition year-round."',
      type: 'text',
      rows: 2,
      group: 'homepage',
    },
    {
      name: 'homeRoofingDescription',
      title: 'Our Services — Roofing Card Description',
      description:
        'Default: "Full roof replacements, repairs, and inspections using premium materials built to last through any weather."',
      type: 'text',
      rows: 3,
      group: 'homepage',
    },
    {
      name: 'homeSidingDescription',
      title: 'Our Services — Siding Card Description',
      description:
        'Default: "Enhance your home\'s curb appeal and insulation with durable vinyl, fiber cement, or wood siding."',
      type: 'text',
      rows: 3,
      group: 'homepage',
    },
    {
      name: 'homeGuttersDescription',
      title: 'Our Services — Gutters Card Description',
      description:
        'Default: "Seamless gutter installation, cleaning, and repairs to protect your foundation from water damage."',
      type: 'text',
      rows: 3,
      group: 'homepage',
    },
    {
      name: 'whyHeading',
      title: 'Why Rapid Shield — Heading',
      description: 'Default: "The standard for exterior work in the area"',
      type: 'string',
      group: 'homepage',
    },
    {
      name: 'whyDescription',
      title: 'Why Rapid Shield — Description',
      description:
        'Default: "We\'ve built our reputation one rooftop at a time. Every project gets the same focus, care, and expertise — whether it\'s a small repair or a full exterior renovation."',
      type: 'text',
      rows: 3,
      group: 'homepage',
    },
    {
      name: 'whyReasons',
      title: 'Why Rapid Shield — Reasons',
      description:
        'Comma-separated list shown as a checklist. Avoid commas inside an item. Default: "Free no-obligation estimates, Licensed and fully insured crew, Premium materials with manufacturer warranties, Transparent pricing — no hidden fees, On-time project completion guarantee, Local company with a community reputation"',
      type: 'text',
      rows: 4,
      group: 'homepage',
    },

    // ── Testimonials ─────────────────────────────────────────────────
    {
      name: 'testimonials',
      title: 'Testimonials',
      description: 'Customer reviews shown on the Home page.',
      type: 'array',
      group: 'testimonials',
      of: [
        {
          type: 'object',
          name: 'testimonial',
          fields: [
            {
              name: 'name',
              title: 'Customer Name',
              type: 'string',
              validation: (rule: Rule) => rule.required(),
            },
            {
              name: 'location',
              title: 'Location / Role',
              description: 'e.g. "Homeowner" or "Property Manager"',
              type: 'string',
            },
            {
              name: 'text',
              title: 'Review',
              type: 'text',
              rows: 3,
              validation: (rule: Rule) => rule.required(),
            },
            {
              name: 'rating',
              title: 'Rating (1–5)',
              type: 'number',
              validation: (rule: Rule) => rule.required().min(1).max(5).integer(),
            },
          ],
          preview: {
            select: { title: 'name', subtitle: 'text' },
          },
        },
      ],
    },

    // ── Stats (shared: Home + About) ─────────────────────────────────
    {
      name: 'stats',
      title: 'Stats',
      description: 'Displayed on both the Home and About pages. Maximum 4.',
      type: 'array',
      group: 'stats',
      of: [
        {
          type: 'object',
          name: 'stat',
          fields: [
            {
              name: 'value',
              title: 'Value',
              description: 'e.g. "500+" or "15+"',
              type: 'string',
              validation: (rule: Rule) => rule.required(),
            },
            {
              name: 'label',
              title: 'Label',
              description: 'e.g. "Projects Completed"',
              type: 'string',
              validation: (rule: Rule) => rule.required(),
            },
          ],
          preview: { select: { title: 'value', subtitle: 'label' } },
        },
      ],
      validation: (rule: Rule) => rule.max(4).error('You can only have 4 stats.'),
    },

    // ── Services Page ─────────────────────────────────────────────────
    {
      name: 'servicesHeading',
      title: 'Heading',
      description: 'Default: "What We Do"',
      type: 'string',
      group: 'servicesPage',
    },
    {
      name: 'servicesDescription',
      title: 'Description',
      description:
        'Default: "Comprehensive exterior services performed by experienced, licensed professionals."',
      type: 'text',
      rows: 2,
      group: 'servicesPage',
    },

    // ── Our Work Page ─────────────────────────────────────────────────
    {
      name: 'workHeading',
      title: 'Heading',
      description: 'Default: "See It for Yourself"',
      type: 'string',
      group: 'workPage',
    },
    {
      name: 'workDescription',
      title: 'Description',
      description:
        'Default: "Real projects, real results. Browse our latest work from the field or follow us on Facebook."',
      type: 'text',
      rows: 2,
      group: 'workPage',
    },

    // ── About Page ────────────────────────────────────────────────────
    {
      name: 'aboutHeading',
      title: 'Heading (line 1)',
      description: 'Default: "Built on Reputation."',
      type: 'string',
      group: 'aboutHeader',
    },
    {
      name: 'aboutHeadingAccent',
      title: 'Heading Accent (gold, line 2)',
      description: 'Default: "Driven by Craft."',
      type: 'string',
      group: 'aboutHeader',
    },
    {
      name: 'aboutDescription',
      title: 'Description',
      description:
        'Default: "Rapid Shield Exteriors is a family-owned exterior contracting company…"',
      type: 'text',
      rows: 2,
      group: 'aboutHeader',
    },
    {
      name: 'bio1',
      title: 'Bio — Paragraph 1',
      description: 'How you got into the business / your background in the trade.',
      type: 'text',
      rows: 4,
      group: 'aboutHeader',
    },
    {
      name: 'bio2',
      title: 'Bio — Paragraph 2',
      description: 'Why you started Rapid Shield Exteriors and what sets you apart.',
      type: 'text',
      rows: 4,
      group: 'aboutHeader',
    },
    {
      name: 'bio3',
      title: 'Bio — Paragraph 3',
      description: 'Personal details: family, community ties, what you do outside of work.',
      type: 'text',
      rows: 4,
      group: 'aboutHeader',
    },
    {
      name: 'aboutBullets',
      title: 'Credential Bullets',
      description:
        'Comma-separated list shown below the bio. e.g. "Licensed & fully insured in Iowa, 10+ years in the industry, Based in Des Moines"',
      type: 'text',
      rows: 3,
      group: 'aboutHeader',
    },

    // ── Contact Page ──────────────────────────────────────────────────
    {
      name: 'contactHeading',
      title: 'Heading',
      description: 'Default: "Get a Free Quote"',
      type: 'string',
      group: 'contactPage',
    },
    {
      name: 'contactDescription',
      title: 'Description',
      description:
        'Default: "Fill out the form and we\'ll get back to you within one business day."',
      type: 'text',
      rows: 2,
      group: 'contactPage',
    },

    // ── Service — Roofing ─────────────────────────────────────────────
    {
      name: 'roofingTagline',
      title: 'Tagline',
      description:
        'Gold accent line under the heading. Default: "Built to withstand anything the sky throws at you."',
      type: 'string',
      group: 'roofing',
    },
    {
      name: 'roofingDescription',
      title: 'Description',
      description: 'Paragraph below the tagline.',
      type: 'text',
      rows: 4,
      group: 'roofing',
    },
    {
      name: 'roofingOfferings',
      title: "What's Included",
      description:
        'Comma-separated list of checklist items. e.g. "Full roof replacement, Storm & hail damage repair, Free roof inspections"',
      type: 'text',
      rows: 4,
      group: 'roofing',
    },

    // ── Service — Siding ──────────────────────────────────────────────
    {
      name: 'sidingTagline',
      title: 'Tagline',
      description:
        'Gold accent line under the heading. Default: "Protect your home. Elevate its appearance."',
      type: 'string',
      group: 'siding',
    },
    {
      name: 'sidingDescription',
      title: 'Description',
      description: 'Paragraph below the tagline.',
      type: 'text',
      rows: 4,
      group: 'siding',
    },
    {
      name: 'sidingOfferings',
      title: "What's Included",
      description:
        'Comma-separated list of checklist items. e.g. "Vinyl siding installation, Fiber cement siding, Trim and soffit work"',
      type: 'text',
      rows: 4,
      group: 'siding',
    },

    // ── Service — Gutters ─────────────────────────────────────────────
    {
      name: 'guttersTagline',
      title: 'Tagline',
      description:
        'Gold accent line under the heading. Default: "Keep water where it belongs — away from your home."',
      type: 'string',
      group: 'gutters',
    },
    {
      name: 'guttersDescription',
      title: 'Description',
      description: 'Paragraph below the tagline.',
      type: 'text',
      rows: 4,
      group: 'gutters',
    },
    {
      name: 'guttersOfferings',
      title: "What's Included",
      description:
        'Comma-separated list of checklist items. e.g. "Seamless aluminum gutter installation, Gutter guard installation, Gutter cleaning"',
      type: 'text',
      rows: 4,
      group: 'gutters',
    },
  ],
};

export default siteSettings;

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
    { name: 'seasonalPage', title: 'Seasonal Page' },
    { name: 'seasonalSnow', title: 'Seasonal — Snow Removal' },
    { name: 'seasonalLighting', title: 'Seasonal — Holiday Lighting' },
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
      name: 'homeSeasonalDescription',
      title: 'Our Services — Seasonal Card Description',
      description:
        'Default: "Seasonal support including snow removal for driveways, sidewalks, and parking lots, plus festive holiday lighting installation."',
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
    {
      name: 'homeCtaHeading',
      title: 'CTA Heading',
      description: 'Default: "Ready to get started?"',
      type: 'string',
      group: 'homepage',
    },
    {
      name: 'homeCtaDescription',
      title: 'CTA Description',
      description:
        'Default: "Contact us today for a free, no-obligation quote. We\'ll come to you and walk through every detail."',
      type: 'text',
      rows: 2,
      group: 'homepage',
    },
    {
      name: 'homeCtaButton',
      title: 'CTA Button Label',
      description: 'Default: "Request a Free Quote"',
      type: 'string',
      group: 'homepage',
    },
    {
      name: 'showHomeCta',
      title: 'Show "Ready to get started?" CTA',
      description: 'Uncheck to hide the call-to-action banner at the bottom of the Home page.',
      type: 'boolean',
      options: { layout: 'checkbox' },
      initialValue: true,
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
    {
      name: 'servicesCtaHeading',
      title: 'CTA Heading',
      description: 'Default: "Not sure what you need?"',
      type: 'string',
      group: 'servicesPage',
    },
    {
      name: 'servicesCtaDescription',
      title: 'CTA Description',
      description:
        'Default: "We\'ll assess your home and recommend the best solution — at no cost and with zero pressure."',
      type: 'text',
      rows: 2,
      group: 'servicesPage',
    },
    {
      name: 'servicesCtaButton',
      title: 'CTA Button Label',
      description: 'Default: "Schedule a Free Inspection"',
      type: 'string',
      group: 'servicesPage',
    },
    {
      name: 'showServicesCta',
      title: 'Show "Not sure what you need?" CTA',
      description: 'Uncheck to hide the call-to-action banner at the bottom of the Services page.',
      type: 'boolean',
      options: { layout: 'checkbox' },
      initialValue: true,
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
    {
      name: 'workCtaHeading',
      title: 'CTA Heading',
      description: 'Default: "Like what you see?"',
      type: 'string',
      group: 'workPage',
    },
    {
      name: 'workCtaDescription',
      title: 'CTA Description',
      description: 'Default: "Get in touch today for a free estimate on your project."',
      type: 'text',
      rows: 2,
      group: 'workPage',
    },
    {
      name: 'workCtaButton',
      title: 'CTA Button Label',
      description: 'Default: "Request a Free Quote"',
      type: 'string',
      group: 'workPage',
    },
    {
      name: 'showWorkCta',
      title: 'Show "Like what you see?" CTA',
      description: 'Uncheck to hide the call-to-action banner at the bottom of the Our Work page.',
      type: 'boolean',
      options: { layout: 'checkbox' },
      initialValue: true,
      group: 'workPage',
    },

    // ── Seasonal Page ────────────────────────────────────────────────
    {
      name: 'seasonalBadge',
      title: 'Badge Label',
      description: 'Default: "Seasonal Services"',
      type: 'string',
      group: 'seasonalPage',
    },
    {
      name: 'seasonalHeading',
      title: 'Heading',
      description: 'Default: "Seasonal Services"',
      type: 'string',
      group: 'seasonalPage',
    },
    {
      name: 'seasonalDescription',
      title: 'Description',
      description:
        'Default: "From winter snow removal to festive holiday lighting, we keep your property ready for every season."',
      type: 'text',
      rows: 2,
      group: 'seasonalPage',
    },

    // ── Seasonal — Snow Removal ─────────────────────────────────────
    {
      name: 'seasonalSnowTitle',
      title: 'Title',
      description: 'Default: "Snow Removal"',
      type: 'string',
      group: 'seasonalSnow',
    },
    {
      name: 'seasonalSnowTagline',
      title: 'Tagline',
      description: 'Default: "Fast, reliable clearing so your property stays safe and accessible."',
      type: 'string',
      group: 'seasonalSnow',
    },
    {
      name: 'seasonalSnowDescription',
      title: 'Description',
      description: 'Main paragraph for the Snow Removal section.',
      type: 'text',
      rows: 4,
      group: 'seasonalSnow',
    },
    {
      name: 'seasonalSnowOfferings',
      title: "What's Included",
      description: 'Comma-separated list for Snow Removal checklist items.',
      type: 'text',
      rows: 4,
      group: 'seasonalSnow',
    },
    {
      name: 'seasonalSnowDrivewaysDesc',
      title: 'Driveways Card — Description',
      type: 'string',
      group: 'seasonalSnow',
    },
    {
      name: 'seasonalSnowSidewalksDesc',
      title: 'Sidewalks Card — Description',
      type: 'string',
      group: 'seasonalSnow',
    },
    {
      name: 'seasonalSnowParkingLotsDesc',
      title: 'Parking Lots Card — Description',
      type: 'string',
      group: 'seasonalSnow',
    },

    // ── Seasonal — Holiday Lighting ─────────────────────────────────
    {
      name: 'seasonalLightingTitle',
      title: 'Title',
      description: 'Default: "Festive Holiday Lighting"',
      type: 'string',
      group: 'seasonalLighting',
    },
    {
      name: 'seasonalLightingTagline',
      title: 'Tagline',
      description: 'Default: "Custom holiday displays without the hassle."',
      type: 'string',
      group: 'seasonalLighting',
    },
    {
      name: 'seasonalLightingDescription',
      title: 'Description',
      description: 'Main paragraph for the Holiday Lighting section.',
      type: 'text',
      rows: 4,
      group: 'seasonalLighting',
    },
    {
      name: 'seasonalLightingOfferings',
      title: "What's Included",
      description: 'Comma-separated list for Holiday Lighting checklist items.',
      type: 'text',
      rows: 4,
      group: 'seasonalLighting',
    },
    {
      name: 'seasonalLightingDesignDesc',
      title: 'Design Card — Description',
      type: 'string',
      group: 'seasonalLighting',
    },
    {
      name: 'seasonalLightingInstallDesc',
      title: 'Install Card — Description',
      type: 'string',
      group: 'seasonalLighting',
    },
    {
      name: 'seasonalLightingTakedownDesc',
      title: 'Takedown Card — Description',
      type: 'string',
      group: 'seasonalLighting',
    },

    // ── Seasonal — CTA & Labels (shown under Seasonal Page) ─────────
    {
      name: 'seasonalIncludedHeading',
      title: 'Included Checklist Heading',
      description: 'Default: "What\'s included"',
      type: 'string',
      group: 'seasonalPage',
    },
    {
      name: 'seasonalCtaHeading',
      title: 'CTA Heading',
      description: 'Default: "Need seasonal help this year?"',
      type: 'string',
      group: 'seasonalPage',
    },
    {
      name: 'seasonalCtaDescription',
      title: 'CTA Description',
      description:
        'Default: "Tell us what you need and we\'ll build a plan that fits your property and timeline."',
      type: 'text',
      rows: 2,
      group: 'seasonalPage',
    },
    {
      name: 'seasonalCtaButton',
      title: 'CTA Button Label',
      description: 'Default: "Request a Seasonal Quote"',
      type: 'string',
      group: 'seasonalPage',
    },
    {
      name: 'showSeasonalCta',
      title: 'Show "Need seasonal help this year?" CTA',
      description: 'Uncheck to hide the call-to-action banner at the bottom of the Seasonal page.',
      type: 'boolean',
      options: { layout: 'checkbox' },
      initialValue: true,
      group: 'seasonalPage',
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
      name: 'aboutOwnerName',
      title: 'Owner Name',
      description: 'Default: "Alexis Landeros"',
      type: 'string',
      group: 'aboutHeader',
    },
    {
      name: 'aboutOwnerTitle',
      title: 'Owner Title',
      description: 'Default: "Owner & Lead Contractor"',
      type: 'string',
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
    {
      name: 'aboutValuesHeading',
      title: '"The way we work" — Heading',
      description: 'Default: "The way we work"',
      type: 'string',
      group: 'aboutHeader',
    },
    {
      name: 'aboutValue1Title',
      title: 'Way We Work — Card 1 Title',
      description: 'Default: "Quality First"',
      type: 'string',
      group: 'aboutHeader',
    },
    {
      name: 'aboutValue1Desc',
      title: 'Way We Work — Card 1 Description',
      description:
        'Default: "We use premium materials and proven techniques on every job, no matter the size."',
      type: 'text',
      rows: 2,
      group: 'aboutHeader',
    },
    {
      name: 'aboutValue2Title',
      title: 'Way We Work — Card 2 Title',
      description: 'Default: "Local & Trusted"',
      type: 'string',
      group: 'aboutHeader',
    },
    {
      name: 'aboutValue2Desc',
      title: 'Way We Work — Card 2 Description',
      description:
        'Default: "We live and work in this community. Our reputation is built one neighbor at a time."',
      type: 'text',
      rows: 2,
      group: 'aboutHeader',
    },
    {
      name: 'aboutValue3Title',
      title: 'Way We Work — Card 3 Title',
      description: 'Default: "On Time, Every Time"',
      type: 'string',
      group: 'aboutHeader',
    },
    {
      name: 'aboutValue3Desc',
      title: 'Way We Work — Card 3 Description',
      description:
        'Default: "We respect your schedule. Jobs start when we say they will and finish when we commit."',
      type: 'text',
      rows: 2,
      group: 'aboutHeader',
    },
    {
      name: 'aboutValue4Title',
      title: 'Way We Work — Card 4 Title',
      description: 'Default: "Honest Pricing"',
      type: 'string',
      group: 'aboutHeader',
    },
    {
      name: 'aboutValue4Desc',
      title: 'Way We Work — Card 4 Description',
      description: 'Default: "No surprises on your bill. We quote accurately and stick to it."',
      type: 'text',
      rows: 2,
      group: 'aboutHeader',
    },
    {
      name: 'aboutCtaHeading',
      title: 'CTA Heading',
      description: 'Default: "Ready to work together?"',
      type: 'string',
      group: 'aboutHeader',
    },
    {
      name: 'aboutCtaDescription',
      title: 'CTA Description',
      description:
        'Default: "Reach out today for a free, no-pressure estimate. We\'d love to earn your trust."',
      type: 'text',
      rows: 2,
      group: 'aboutHeader',
    },
    {
      name: 'aboutCtaButton',
      title: 'CTA Button Label',
      description: 'Default: "Request a Free Quote"',
      type: 'string',
      group: 'aboutHeader',
    },
    {
      name: 'showAboutCta',
      title: 'Show "Ready to work together?" CTA',
      description: 'Uncheck to hide the call-to-action banner at the bottom of the About page.',
      type: 'boolean',
      options: { layout: 'checkbox' },
      initialValue: true,
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
    {
      name: 'roofingReplacementDesc',
      title: 'Replacement Card — Description',
      description: 'Default: "Tear-off and full new roof installation"',
      type: 'string',
      group: 'roofing',
    },
    {
      name: 'roofingRepairDesc',
      title: 'Repair Card — Description',
      description: 'Default: "Targeted fixes for any damage"',
      type: 'string',
      group: 'roofing',
    },
    {
      name: 'roofingInspectionDesc',
      title: 'Inspection Card — Description',
      description: 'Default: "Detailed assessment and report"',
      type: 'string',
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
    {
      name: 'sidingReplacementDesc',
      title: 'Replacement Card — Description',
      description: 'Default: "Full exterior re-siding"',
      type: 'string',
      group: 'siding',
    },
    {
      name: 'sidingRepairDesc',
      title: 'Repair Card — Description',
      description: 'Default: "Panel replacement and patching"',
      type: 'string',
      group: 'siding',
    },
    {
      name: 'sidingTrimDesc',
      title: 'Trim & Detail Card — Description',
      description: 'Default: "Soffit, fascia, and corner work"',
      type: 'string',
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
    {
      name: 'guttersInstallationDesc',
      title: 'Installation Card — Description',
      description: 'Default: "Custom seamless systems"',
      type: 'string',
      group: 'gutters',
    },
    {
      name: 'guttersRepairDesc',
      title: 'Repair Card — Description',
      description: 'Default: "Sealing, re-hanging, and realigning"',
      type: 'string',
      group: 'gutters',
    },
    {
      name: 'guttersCleaningDesc',
      title: 'Cleaning Card — Description',
      description: 'Default: "Full flush and debris removal"',
      type: 'string',
      group: 'gutters',
    },
  ],
};

export default siteSettings;

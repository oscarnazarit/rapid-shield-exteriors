import { type SchemaTypeDefinition } from 'sanity';
import siteSettings from './siteSettings';
// testimonials.ts retired — testimonials are now an array inside siteSettings
// aboutPage.ts retired  — bio fields are now inside siteSettings
// stat.ts retired       — stats are now an array inside siteSettings

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [siteSettings],
};

import { type SchemaTypeDefinition } from 'sanity';
import siteSettings from './siteSettings';
import testimonials from './testimonials';
import stat from './stat';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [siteSettings, testimonials, stat],
};

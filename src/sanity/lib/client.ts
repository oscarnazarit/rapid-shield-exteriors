import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: 'oeoc4y69',
  dataset: 'production',
  apiVersion: '2026-05-15',
  useCdn: false,
});

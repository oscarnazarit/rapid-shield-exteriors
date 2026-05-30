'use client';

import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

import { apiVersion, dataset, projectId, token } from './src/sanity/env';
import { schema } from './src/sanity/schemaTypes';
import { structure } from './src/sanity/structure';

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  schema,
  ...(token && { token }),
  plugins: [structureTool({ structure }), visionTool({ defaultApiVersion: apiVersion })],
});

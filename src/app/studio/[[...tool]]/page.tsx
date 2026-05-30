/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * Learn more about the next-sanity package here:
 * https://github.com/sanity-io/next-sanity
 * https://nextjs.org/docs/app/building-your-application/routing/route-handlers
 */

import { NextStudio } from 'next-sanity/studio';
import config from '../../../../sanity.config';

export const dynamic = 'force-static';

export { metadata, viewport } from 'next-sanity/studio';

export default function StudioPage() {
  return <NextStudio config={config} />;
}

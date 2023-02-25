import { createClient } from '@sanity/client';
import { env } from '~/env.mjs';

export const sanityClient = createClient({
  projectId: env.SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2022-01-12',
  useCdn: true,
  token: env.SANITY_TOKEN,
});

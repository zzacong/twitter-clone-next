import { createClient } from '@sanity/client';
import { env } from '~/env.mjs';

export const sanityClient = createClient({
  projectId: env.SANITY_PROJECT_ID,
  dataset: env.SANITY_DATASET || 'production',
  apiVersion: '2022-01-12',
  useCdn: env.NODE_ENV === 'production',
  token: env.SANITY_TOKEN,
});

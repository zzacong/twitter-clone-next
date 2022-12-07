import { Directus, type ID } from '@directus/sdk';

import { env } from '../../env/server.mjs';

declare global {
  // eslint-disable-next-line no-var
  var directus: Directus<MyCollections> | undefined;
}

export type Tweet = {
  id: ID;
  text: string;
  username: string;
  profile_image: string;
  image_url: string;
  block_tweet: boolean;
};

export type Comment = {
  id: ID;
  comment: string;
  username: string;
  profile_image: string;
};

type MyCollections = {
  tweets: Tweet;
  comments: Comment;
};

export const directus =
  global.directus ||
  new Directus<MyCollections>(env.DIRECTUS_URL, {
    auth: {
      staticToken: env.DIRECTUS_STATIC_TOKEN,
    },
  });

if (env.NODE_ENV !== 'production') {
  global.directus = directus;
}

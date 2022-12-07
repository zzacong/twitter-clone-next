import { directus } from '$server/db/directus';

export const getTweets = async () => {
  return directus.items('tweets').readByQuery({
    filter: {
      block_tweet: false,
    },
  });
};

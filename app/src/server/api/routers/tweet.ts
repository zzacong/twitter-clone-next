import { createTRPCRouter, publicProcedure } from '~/server/api/trpc';

export const tweetRouter = createTRPCRouter({
  getAll: publicProcedure.query(() => {
    const tweets = [] as Tweet[];
    return tweets;
  }),
});

export type Tweet = {
  id: string;
  text: string;
  username: string;
  profile_image: string;
  image_url: string;
  block_tweet: boolean;
};

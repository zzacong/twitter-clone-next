import { createTRPCRouter, publicProcedure } from '~/server/api/trpc';

const query = `//groq
  *[_type == "tweet" && !blockTweet] {
    ...  
  } | order(_createdAt desc)
`;

export const tweetRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const tweets = await ctx.sanity.fetch<Tweet[]>(query);
    return tweets;
  }),
});

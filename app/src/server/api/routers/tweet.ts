import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '~/server/api/trpc';

export const tweetRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const tweets = await ctx.sanity.fetch<TweetT[]>(`//groq
      *[_type == "tweet" && !blockTweet] {
        ...  
      } | order(_createdAt desc)
    `);
    return tweets;
  }),

  getComment: publicProcedure
    .input(z.object({ tweetId: z.string() }))
    .query(async ({ ctx, input }) => {
      const comments = await ctx.sanity.fetch<CommentT[]>(
        `//groq
      *[
        _type == "comment" &&
        tweet._ref == $tweetId
      ] {
        ...,
      } | order(_createdAt desc)
    `,
        { tweetId: input.tweetId }
      );
      return comments;
    }),
});

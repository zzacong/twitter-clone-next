import { z } from 'zod';
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from '~/server/api/trpc';

export const tweetRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const tweets = await ctx.sanity.fetch<TweetT[]>(`//groq
      *[_type == "tweet" && !blockTweet] {
        ...  
      } | order(_createdAt desc)
    `);
    return tweets;
  }),

  create: protectedProcedure
    .input(
      z.object({
        text: z.string(),
        image: z.string().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const newTweet = await ctx.sanity.create<TweetBodyT>({
        _type: 'tweet',
        text: input.text,
        image: input.image,
        username: ctx.session.user.username,
        profileImage: ctx.session.user.image ?? undefined,
        blockTweet: false,
      });
      return newTweet;
    }),
});

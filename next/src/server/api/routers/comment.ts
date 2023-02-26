import { z } from 'zod';
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from '~/server/api/trpc';

export const commentRouter = createTRPCRouter({
  getByTweetId: publicProcedure
    .input(z.object({ tweetId: z.string() }))
    .query(async ({ ctx, input }) => {
      const comments = await ctx.sanity.fetch<CommentT[]>(
        `//groq
      *[
        _type == "comment" &&
        tweet._ref == $tweetId
      ] {
        ...,
      } | order(_createdAt asc)
    `,
        { tweetId: input.tweetId }
      );
      return comments;
    }),

  create: protectedProcedure
    .input(
      z.object({
        comment: z.string(),
        tweetId: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const newComment = await ctx.sanity.create<CommentBodyT>({
        _type: 'comment',
        comment: input.comment,
        username: ctx.session.user.username,
        profileImage: ctx.session.user.image ?? undefined,
        tweet: {
          _ref: input.tweetId,
          _type: 'reference',
        },
      });
      return newComment;
    }),
});

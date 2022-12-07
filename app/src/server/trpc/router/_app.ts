import { router } from '../trpc';
import { authRouter } from './auth';
import { exampleRouter } from './example';
import { tweetRouter } from './tweet';

export const appRouter = router({
  example: exampleRouter,
  tweet: tweetRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

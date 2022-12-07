import { z } from 'zod';
import { getTweets } from '$server/common/get-tweets';

import { router, publicProcedure } from '../trpc';

export const tweetRouter = router({
  getAll: publicProcedure.query(async ({}) => {
    const tweets = await getTweets();
    return tweets;
  }),
});

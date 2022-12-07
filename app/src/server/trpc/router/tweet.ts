import { z } from 'zod';

import { router, publicProcedure } from '../trpc';

export const tweetRouter = router({
  getAll: publicProcedure.query(({ ctx }) => {
    return [];
  }),
});

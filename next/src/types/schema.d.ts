import type { SanityDocument } from '@sanity/client';

declare global {
  interface TweetBodyT {
    text: string;
    username: string;
    profileImage?: string;
    image?: string;
    blockTweet: boolean;
  }

  type TweetT = SanityDocument<TweetBodyT>;

  interface CommentBodyT {
    comment: string;
    username: string;
    profileImage?: string;
    tweet: {
      _ref: string;
      _type: 'reference';
    };
  }

  interface CommentT extends SanityDocument<CommentBodyT> {
    tweet: {
      _ref: string;
      _type: 'reference';
    };
  }
}

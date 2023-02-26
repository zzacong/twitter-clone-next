declare global {
  interface TweetBodyT {
    text: string;
    username: string;
    profileImage?: string;
    image?: string;
  }

  interface TweetT extends TweetBodyT {
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
  }

  interface CommentBodyT {
    comment: string;
    tweetId: string;
    username: string;
    profileImage: string;
  }

  interface CommentT extends CommentBodyT {
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
    tweet: {
      _ref: string;
      _type: 'reference';
    };
  }
}

export {};
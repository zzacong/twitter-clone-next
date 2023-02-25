declare global {
  interface TweetBody {
    text: string;
    username: string;
    profileImg: string | undefined;
    image: string | undefined;
  }

  interface Tweet extends TweetBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
  }
}

export {};

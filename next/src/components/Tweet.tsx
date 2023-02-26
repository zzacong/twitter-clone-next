import { api, type RouterOutputs } from '~/lib/api';
import Image from 'next/image';
import TimeAgo from 'timeago-react';
import {
  ChatBubbleLeftIcon,
  ArrowsRightLeftIcon,
  HeartIcon,
  ArrowUpTrayIcon,
} from '@heroicons/react/24/outline';
import { create } from 'zustand';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { toast } from 'react-hot-toast';

type TweetProps = {
  tweet: RouterOutputs['tweet']['getAll'][number];
};

const useCommentStore = create<{
  comment: string;
  setComment: (v: string) => void;
  reset: () => void;
}>(set => ({
  comment: '',
  setComment: (v: string) => set({ comment: v }),
  reset: () => set({ comment: '' }),
}));

const defaultProfileUrl = (seed: string) =>
  `https://api.dicebear.com/5.x/shapes/png?seed=${seed}`;

export default function Tweet({ tweet }: TweetProps) {
  const { data: comments } = api.comment.getByTweetId.useQuery({
    tweetId: tweet._id,
  });

  const apiUtils = api.useContext();
  const newCommentMutation = api.comment.create.useMutation({
    onSuccess() {
      toast('Comment added', { icon: '💬' });
      commentStore.reset();
      void apiUtils.comment.getByTweetId.invalidate({ tweetId: tweet._id });
    },
  });

  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const commentStore = useCommentStore();

  const onCreateComment: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    void (async () => {
      await newCommentMutation.mutateAsync({
        comment: commentStore.comment,
        tweetId: tweet._id,
      });
    })();
  };

  return (
    <div className="flex flex-col gap-x-3 border-b border-gray-200 p-5 first:border-t last:border-b-0">
      <div className="flex items-start gap-x-3">
        <Image
          src={tweet.profileImage ?? defaultProfileUrl(tweet.username)}
          alt={`${tweet.username} profile image`}
          width={40}
          height={40}
          className="shrink-0 rounded-full"
        />

        <div>
          <div className="flex items-center gap-x-1">
            <p className="mr-1 font-bold">{tweet.username}</p>
            <p className="sr-only text-sm text-gray-500 sm:not-sr-only">
              @{tweet.username.replace(/\s+/g, '').toLowerCase()} •
            </p>

            <TimeAgo
              datetime={tweet._createdAt}
              className="text-sm text-gray-500"
            />
          </div>

          <p className="pt-1">{tweet.text}</p>

          {tweet.image && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={tweet.image}
              alt="Tweet image"
              loading="lazy"
              className="m-5 ml-0 mb-1 max-h-60 rounded-lg object-cover shadow"
            />
          )}
        </div>
      </div>
      <div className="mt-5 flex justify-between">
        <button
          onClick={() => setIsOpen(p => !p)}
          disabled={!session}
          className="flex items-center gap-x-3 text-gray-400 hover:text-gray-700"
        >
          <ChatBubbleLeftIcon className="h-5 w-5" />
          <p>{comments?.length}</p>
        </button>
        <button className="flex items-center gap-x-3 text-gray-400 hover:text-gray-700">
          <ArrowsRightLeftIcon className="h-5 w-5" />
        </button>
        <button className="flex items-center gap-x-3 text-gray-400 hover:text-gray-700">
          <HeartIcon className="h-5 w-5" />
        </button>
        <button className="flex items-center gap-x-3 text-gray-400 hover:text-gray-700">
          <ArrowUpTrayIcon className="h-5 w-5" />
        </button>
      </div>

      {isOpen && (
        <form
          onSubmit={onCreateComment}
          className="mt-3 flex items-center gap-x-3"
        >
          <label htmlFor="comment" className="sr-only">
            Comment
          </label>
          <input
            type="text"
            name="comment"
            id="comment"
            value={commentStore.comment}
            onChange={e => commentStore.setComment(e.target.value)}
            placeholder="Write a comment"
            className="flex-1 rounded-lg bg-gray-100 p-2 px-4 placeholder:text-gray-400"
          />
          <button
            type="submit"
            disabled={
              !commentStore.comment || !session || newCommentMutation.isLoading
            }
            className="font-semibold text-twitter disabled:text-gray-200"
          >
            Comment
          </button>
        </form>
      )}

      {!!comments?.length && (
        <div className="my-2 mt-5 max-h-52 space-y-2 overflow-y-auto border-t border-gray-200 px-5 pt-5">
          {comments.map(c => (
            <div key={c._id} className="relative flex items-stretch gap-x-2">
              <div className="flex shrink-0 flex-col items-center gap-y-1">
                <Image
                  src={c.profileImage ?? defaultProfileUrl(c.username)}
                  alt="Profile image"
                  width={28}
                  height={28}
                  className="shrink-0 rounded-full"
                />
                <hr className="w-[1px] flex-grow bg-twitter/50" />
              </div>
              <div className="">
                <div className="flex items-center gap-x-1">
                  <p className="mr-1 font-bold">{c.username}</p>
                  <p className="sr-only text-sm text-gray-500 lg:not-sr-only">
                    @{c.username.replace(/\s+/g, '')} •
                  </p>
                  <TimeAgo datetime={c._createdAt} className="text-gray-500" />
                </div>
                <p>{c.comment}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

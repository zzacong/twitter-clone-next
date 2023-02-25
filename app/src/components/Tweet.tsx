import { type RouterOutputs } from '~/lib/api';
import Image from 'next/image';
import TimeAgo from 'timeago-react';
import {
  ChatBubbleLeftIcon,
  ArrowsRightLeftIcon,
  HeartIcon,
  ArrowUpTrayIcon,
} from '@heroicons/react/24/outline';

type TweetProps = {
  tweet: RouterOutputs['tweet']['getAll'][number];
};

export default function Tweet({ tweet }: TweetProps) {
  return (
    <div className="flex flex-col gap-x-3 border-y border-gray-100 p-5">
      <div className="flex items-start gap-x-3">
        <Image
          src={
            tweet.profileImage ??
            `https://api.dicebear.com/5.x/shapes/png?seed=${tweet.username}`
          }
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
        <button className="flex items-center gap-x-3 text-gray-400 hover:text-gray-700">
          <ChatBubbleLeftIcon className="h-5 w-5" />
          <p>5</p>
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
    </div>
  );
}

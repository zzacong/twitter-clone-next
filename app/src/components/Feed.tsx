import { ArrowPathIcon } from '@heroicons/react/24/outline';

import { api } from '~/lib/api';
import TweetBox from '~/components/TweetBox';
import Tweet from '~/components/Tweet';

export default function Feed() {
  const { data: tweets } = api.tweet.getAll.useQuery();

  return (
    <div className="col-span-10 max-h-screen overflow-auto border-x border-x-gray-200 pt-5 md:col-span-9 lg:col-span-6">
      <div className="flex items-center justify-between px-5">
        <h1 className="text-xl font-bold">Home</h1>
        <ArrowPathIcon className="h-8 w-8 cursor-pointer text-twitter transition duration-500 ease-out hover:rotate-180 active:scale-125" />
      </div>

      <TweetBox />

      <div>
        {tweets?.map(tw => (
          <Tweet key={tw._id} tweet={tw} />
        ))}
      </div>
    </div>
  );
}

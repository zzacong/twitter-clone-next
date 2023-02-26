import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

export default function Widgets() {
  return (
    <div className="col-span-3 hidden space-y-6 pt-3 lg:block">
      {/* Search */}
      <div className="flex items-center gap-x-2 rounded-full bg-gray-100 px-3">
        <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
        <input
          type="text"
          placeholder="Search Twitter"
          className="flex-1 rounded-full bg-transparent p-3 outline-none"
        />
      </div>

      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="vercel"
        autoHeight
        noScrollbar
      />
    </div>
  );
}

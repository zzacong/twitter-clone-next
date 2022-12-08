import Image from 'next/image';
import { useState } from 'react';

import {
  CalendarIcon,
  FaceSmileIcon,
  MapPinIcon,
  PhotoIcon,
  MagnifyingGlassCircleIcon,
} from '@heroicons/react/24/outline';

export default function TweetBox() {
  const [input, setInput] = useState('');

  return (
    <div className="flex gap-x-4">
      <div className="flex-shrink-0">
        <Image
          src="https://avatars.dicebear.com/api/adventurer/jnadi13h.svg"
          alt="Profile picture"
          width={48}
          height={48}
          className="mt-2 rounded-full object-cover"
        />
      </div>

      <form className="flex-1">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="What's happening?"
          className="mb-2 h-14 w-full py-2 text-xl outline-none placeholder:text-xl placeholder:text-gray-500"
        />

        <div className="flex items-center gap-x-4">
          <div className="flex flex-1 items-center gap-x-2 text-twitter md:gap-x-4">
            <PhotoIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
            <MagnifyingGlassCircleIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
            <FaceSmileIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
            <CalendarIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
            <MapPinIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
          </div>

          <button
            type="submit"
            disabled={!input}
            className="rounded-full bg-twitter px-5 py-2 font-bold text-white disabled:opacity-50"
          >
            Tweet
          </button>
        </div>
      </form>
    </div>
  );
}

import Image from 'next/image';
import { useCallback, useState } from 'react';
import { useSession } from 'next-auth/react';
import { toast } from 'react-hot-toast';
import { create } from 'zustand';
import { z } from 'zod';

import {
  CalendarIcon,
  FaceSmileIcon,
  MapPinIcon,
  PhotoIcon,
  MagnifyingGlassCircleIcon,
} from '@heroicons/react/24/outline';

const useTweetStore = create<{
  text: string;
  imageUrl?: string;
  setImage: (v: string) => void;
  setText: (v: string) => void;
}>(set => ({
  text: '',
  imageUrl: undefined,
  setImage: (v: string) => set({ imageUrl: v }),
  setText: (v: string) => set({ text: v }),
}));

export default function TweetBox() {
  const { data: session } = useSession();
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const tweetStore = useTweetStore();

  const onAddImage: React.FormEventHandler<HTMLFormElement> = useCallback(
    e => {
      e.preventDefault();
      const form = new FormData(e.currentTarget);
      try {
        const imageUrl = z
          .string()
          .url({ message: 'Invalid image URL' })
          .parse(form.get('imageUrl'));
        tweetStore.setImage(imageUrl);
      } catch (error) {
        console.error(error);
        if (error instanceof z.ZodError)
          toast.error(error.issues.at(0)?.message ?? 'Invalid url');
      }
    },
    [tweetStore]
  );

  return (
    <div className="flex gap-x-4 px-5 pb-5">
      <div className="flex-shrink-0">
        <Image
          src={
            session?.user.image ??
            `https://api.dicebear.com/5.x/shapes/png?seed=${
              session?.user.name ?? 'anonymous'
            }`
          }
          alt="Profile picture"
          width={48}
          height={48}
          className="mt-2 rounded-full object-cover"
        />
      </div>

      <div className="flex-1">
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
              <button type="button" onClick={() => setIsOpen(p => !p)}>
                <PhotoIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
              </button>
              <MagnifyingGlassCircleIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
              <FaceSmileIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
              <CalendarIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
              <MapPinIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
            </div>

            <button
              type="submit"
              disabled={!input || !session}
              className="rounded-full bg-twitter px-5 py-2 font-bold text-white disabled:opacity-50"
            >
              Tweet
            </button>
          </div>
        </form>

        {isOpen && (
          <form
            onSubmit={onAddImage}
            className="mt-5 flex gap-x-2 rounded-lg bg-twitter/80 py-2 px-4"
          >
            <label htmlFor="imageUrl" className="sr-only">
              Image URL
            </label>
            <input
              type="text"
              name="imageUrl"
              id="imageUrl"
              placeholder="Enter image URL..."
              className="flex-1 bg-transparent p-2 text-white placeholder:text-white"
            />
            <button type="submit" className="font-bold text-white">
              Add image
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

import {
  BellIcon,
  HashtagIcon,
  BookmarkIcon,
  RectangleStackIcon,
  EllipsisHorizontalCircleIcon,
  EnvelopeIcon,
  UserIcon,
  HomeIcon,
} from '@heroicons/react/24/outline';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';

export default function Sidebar() {
  const { data: session } = useSession();

  return (
    <aside className="col-span-2 flex flex-col items-center pt-2 md:col-span-3 md:items-stretch lg:col-span-3">
      <Image
        src="/logo.svg"
        alt="Twitter logo"
        width={36}
        height={36}
        className="m-3"
      />

      <SidebarRow icon={HomeIcon} title="Home" />
      <SidebarRow icon={HashtagIcon} title="Explorer" />
      <SidebarRow icon={BellIcon} title="Notifications" />
      <SidebarRow icon={EnvelopeIcon} title="Messages" />
      <SidebarRow icon={BookmarkIcon} title="Bookmarks" />
      <SidebarRow icon={RectangleStackIcon} title="Lists" />
      <SidebarRow
        icon={UserIcon}
        title={session ? 'Sign out' : 'Sign in'}
        onClick={session ? () => void signOut() : () => void signIn()}
      />
      <SidebarRow icon={EllipsisHorizontalCircleIcon} title="More" />
    </aside>
  );
}

const SidebarRow = ({ icon: Icon, title, onClick }: SidebarRowProps) => {
  return (
    <button onClick={onClick} className="group">
      <div className="flex max-w-fit items-center gap-x-2 rounded-full px-4 py-3 transition duration-200 group-hover:bg-gray-100">
        <Icon className="h-6 w-6 flex-shrink-0" />
        <p className="sr-only text-base font-light group-hover:text-twitter md:not-sr-only lg:text-xl">
          {title}
        </p>
      </div>
    </button>
  );
};

type SidebarRowProps = {
  icon: React.FC<React.ComponentProps<'svg'>>;
  title: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

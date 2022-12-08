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
import Image from 'next/image';
import SidebarRow from './SidebarRow';

export default function Sidebar() {
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
      <SidebarRow icon={UserIcon} title="Sign in" />
      <SidebarRow icon={EllipsisHorizontalCircleIcon} title="More" />
    </aside>
  );
}

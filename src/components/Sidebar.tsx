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
    <aside className="flex flex-col">
      <Image
        src="/logo.svg"
        alt="Twitter logo"
        width={40}
        height={40}
        className="h-10"
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

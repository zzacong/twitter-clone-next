type SidebarRowProps = {
  icon: React.FC<React.ComponentProps<'svg'>>;
  title: string;
};

export default function SidebarRow({ icon: Icon, title }: SidebarRowProps) {
  return (
    <button className="group">
      <div className="flex max-w-fit items-center gap-x-2 rounded-full px-4 py-3 transition duration-200 group-hover:bg-gray-100">
        <Icon className="h-6 w-6 flex-shrink-0" />
        <p className="sr-only text-base font-light group-hover:text-twitter md:not-sr-only lg:text-xl">
          {title}
        </p>
      </div>
    </button>
  );
}

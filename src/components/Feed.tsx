import { ArrowPathIcon } from '@heroicons/react/24/outline';

export default function Feed() {
  return (
    <div className="col-span-9 lg:col-span-6">
      <div className="flex items-center justify-between">
        <h1 className="p-5 pb-0 text-xl font-bold">Home</h1>
        <ArrowPathIcon className="mr-5 mt-5 h-8 w-8 cursor-pointer text-twitter transition duration-500 ease-out hover:rotate-180 active:scale-125" />
      </div>
    </div>
  );
}

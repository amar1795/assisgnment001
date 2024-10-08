import HeaderOption from './HeaderOption';
import { DotsVerticalIcon, MapIcon, NewspaperIcon, PhotographIcon, PlayIcon, SearchIcon } from '@heroicons/react/outline';

function HeaderOptions() {
  return (
    <div className="flex  below-380:flex-col below-380:items-center below-380:pb-4   w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b">
      <div className="flex space-x-6">
        <HeaderOption Icon={SearchIcon} title="Weather" selected/>
        <HeaderOption Icon={PhotographIcon} title="Images" />
        <HeaderOption Icon={PlayIcon} title="Videos" />
        <HeaderOption Icon={NewspaperIcon} title="News" />
        <HeaderOption Icon={MapIcon} title="Maps" />
        <HeaderOption Icon={DotsVerticalIcon} title="More" />
      </div>
      <div className="flex space-x-4 ">
        <p className="link below-380:text-[0.6rem]"> Settings </p>
        <p className="link below-380:text-[0.6rem]"> Tools </p>
      </div>
    </div>
  )
}

export default HeaderOptions

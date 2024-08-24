import { GlobeIcon } from "@heroicons/react/solid";

function Footer() {
  return (
    <footer className="grid w-full divide-y-[1px] divide-gray-300 bg-gray-100 text-sm text-gray-500">
      <div className="px-8 py-3">
        <p className="below-380:text-[0.6rem] below-430:text-[0.8rem]"> India </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-y-4 grid-flow-row-dense px-8 py-3">
     
        <div className="flex justify-center space-x-8 whitespace-nowrap md:justify-self-start">
          <p className="below-380:text-[0.6rem] below-430:text-[0.8rem]">Advertising</p>
          <p className="below-380:text-[0.6rem] below-430:text-[0.8rem]">Business</p>
          <p className="below-380:text-[0.6rem] below-430:text-[0.8rem]">How Search works</p>
        </div>
        <div className="flex justify-center space-x-8 md:ml-auto">
          <p className="below-380:text-[0.6rem] below-430:text-[0.8rem]">Privacy</p>
          <p className="below-380:text-[0.6rem] below-430:text-[0.8rem]">Terms</p>
          <p className="below-380:text-[0.6rem] below-430:text-[0.8rem]">Settings</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

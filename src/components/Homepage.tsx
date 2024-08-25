"use client";


import Head from "next/head";
import Avatar from "../components/Avatar";
import Footer from "../components/Footer";
import Image from "next/image";
import SearchInput from "./searchInput";


export default function HomePage() {
  


  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title> Google </title>
        <link
          rel="icon"
          href="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png"
        />
      </Head>

      {/* Header */}
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        {/* Left */}
        <div className="flex space-x-4 items-center">
          <p className="link  below-380:text-[0.6rem] below-430:text-[0.8rem] ">About</p>
          <p className="link   below-380:text-[0.6rem] below-430:text-[0.8rem] ">Store</p>
        </div>

        {/* Right */}
        <div className="flex space-x-4 items-center below-380:ml-4">
          <p className="link hover:underline cursor-pointer below-380:text-[0.6rem] below-430:text-[0.8rem]">Gmail</p>
          <p className="link hover:underline cursor-pointer below-380:text-[0.6rem] below-430:text-[0.8rem]">Images</p>

          {/* Icon */}
          <div className=" below-380:hidden cursor-pointer rounded-full hover:bg-gray-100 h-10 w-10 flex self-center items-center justify-center ">
            <img
              src="https://storage.googleapis.com/support-kms-prod/cGGjo9CcfMkEzQALYQ9oADD7XkRTe98JzRCD"
              alt=""
              className="h-11 w-11  p-2    "
            />
          </div>
          <div className="cursor-pointer rounded-full hover:bg-gray-100 h-10 w-10 flex self-center items-center justify-center">
            <img src="../../dots.png" className="h-9 w-9  p-2    " />
          </div>

          {/* Avatar */}
          <Avatar
            className=""
            url="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAPFBMVEXk5ueutLepsLPo6uursbXJzc/p6+zj5ea2u76orrKvtbi0ubzZ3N3O0dPAxcfg4uPMz9HU19i8wcPDx8qKXtGiAAAFTElEQVR4nO2d3XqzIAyAhUD916L3f6+f1m7tVvtNINFg8x5tZ32fQAIoMcsEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQTghAJD1jWtnXJPP/54IgNzZQulSmxvTH6oYXX4WS+ivhTbqBa1r26cvCdCu6i0YXbdZ0o4A1rzV+5IcE3YE+z58T45lqo7g1Aa/JY5tgoqQF3qb382x7lNzBLcxft+O17QUYfQI4IIeklKsPSN4i6LKj/7Zm8n99RbHJpEw9gEBXNBpKIYLJqKYRwjOikf//r+J8ZsVuacbqCMNleI9TqGLGqMzhnVdBOdd6F/RlrFijiCoVMk320CBIahUxTWI0KKEcJqKbMdpdJb5QvdHq6wCI5qhKlgGMS/RBHkubWDAE+QZxB4xhCyDiDkLZxgGEVdQldzSKbTIhmZkFkSEPcVvmBn2SMuZB9od7fQDsMiDdKJjFUSCQarM5WirZ3C2TT/htYnyPcPfgrFHWz0BI74gr6J/IZiGUxAZGQLqmvQLTrtE/Go4YxhVRIpEw+sww1IIcqr5NKmUUzLF3d4/qPkYIp2T/obPuemlojFUR4t9Q2Vojhb7BmgElWHzLPH8hucfpefPNFTVgs9h1AdU/Pin96vwWbWdf+X9Absn3OdO34aMdsDnP8WgKYisTqI6CkNGqZQo1XA6Ef6AU32SJzOcBukHPF07/xNSgmHKa5BOhtezv6mA/rYJpwXNAnbRZ1XuF3BzDcO3vpA3+ny2909gbqE4hhD3LIPhLLyBNhPZvbZ3B+3tPYa18A7auSlXQayKwTPNLKDcuOB0xPYKDPFTkWsevQPRZ1J8Hji9I1KQ34r7hZhrwNwOZ97QxNx0drwn4QI0wQk1DcEsfKCWKdxVvxPSNUIp/knmAXT+nT+Ko3+0H96rcNb3m1fx7MBTJdeBJ7uFcWsc0wvgAsC4pROW0l2inbAmIBv/7GZmuhQH6API2rr8T0e6yuZJ+80A9LZeG62T3tik31XwxtwZcizKuTHkMjB1WdZde4Kmic/A5ZI3rr1ae21d08PlVHYfAaxw9G9CYRbJ+8ZdbTcMRV1XM3VdF0M32vtoTdZ0+u29s0OttJ5bz64UwinjaFMVY9vkqc3KKSxN21Xl+0L4Q3Vuv1tYl0pqnX6ms4XetFz7gdZVAgUEoJntfOUe4ZwsHd9FzqQ3Vv6xe41l0XJcqcKl6TZvlv7ClAW3BsqQW4X7ypApB8dmTgK4IX5wvqIVj33HtD2qSG4BqznxdIefL27Y4sahi0MdIdvUsDva8agGGbCtITmCY31MHD2O0uIdh/0rJDQ1VX5Zdxz3rR2QDbv6qXl9vudzqQtGm1Jv9LDXOsfvvB7VcZ8PDKD0mQ1VHPYQ9O+Yj4hR1IUD8rBnn3ho2m8oQMxbCFiKlL2ioSW5heeJqegED52CzxCtcGD3Kv8Wms9EYLyUhwaFIhSMBClevWEmiK/Iaogu4H7sg6ppQhQG8RUqivuTGOAJOg6FfgW0q0M0PQMRMEgXaeNf3SYDZ8PIMI0+wHgr/MgN7wYwpiLjCCqM6ydUDZLQiB6nDdNC8SDyig3jPPpFXGcC9O8BUBDVmgBY59E7Md/35Loe/UVEECEJwYggJjELZ4J71SaQSBeC02n4Da29CayJNA28SAhd2CQyC1Xw6pSmGSINQVuMhAZp4DClan9MgmkDDNmezqwS8sgtlXK/EPBhoaSmYVC/F7IO1jQEdHOlabpKh3+jzLQSTUiq4X2I+Ip/zU8rlaqAvkS21ElR+gqu3zbjjL+hIAiCIAiCIAiCIAiCsCf/AKrfVhSbvA+DAAAAAElFTkSuQmCC"
          />
        </div>
      </header>

      {/* Body */}
      <form className=" relative flex flex-col items-center mt-12 flex-grow w-4/5">
        <Image
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          height={100}
          width={300}
        />

      
        <div className=" w-full flex items-center justify-center    ">
        <SearchInput searchPage={false}/>
        </div>

        {/* Buttons */}
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button
            // onClick={(event) => search(event)}
            onClick={(event) => event.preventDefault()}
            className=" text-sm bg-slate-100  py-2 px-4  rounded-md  hover:bg-slate-200  below-430:text-[0.8rem]
             below-380:text-[0.6rem] "
          >
            {" "}
            Google Search{" "}
          </button>
          <button
            // onClick={(event) => search(event)}
            className=" text-sm bg-slate-100  py-2 px-4  rounded-md  hover:bg-slate-200  below-380:text-[0.6rem]   below-430:text-[0.8rem]"
          >
            {" "}
            I'm Feeling Lucky{" "}
          </button>
        </div>
        <div className="  w-[36rem] mt-8 flex flex-wrap  below-430:hidden ">
          <p className=" text-sm"> Google Offered in:</p>
          <div className=" text-sm ">
            <span className=" hover:underline cursor-pointer px-1 text-blue-800">
              हिन्दी
            </span>
            <span className=" hover:underline cursor-pointer px-1 text-blue-800">
              
              বাংলা
            </span>
            <span className=" hover:underline cursor-pointer px-1 text-blue-800">
              తెలుగు
            </span>
            <span className=" hover:underline cursor-pointer px-1 text-blue-800">
              मराठी
            </span>
            <span className=" hover:underline cursor-pointer px-1 text-blue-800">
              தமிழ்
            </span>
            <span className=" hover:underline cursor-pointer px-1 text-blue-800">
              ગુજરાતી
            </span>
            <span className=" hover:underline cursor-pointer px-1 text-blue-800">
              ಕನ್ನಡ
            </span>
            <span className=" hover:underline cursor-pointer px-1 text-blue-800">
              മലയാളം
            </span>
            <span className=" hover:underline cursor-pointer px-1 text-blue-800">
              ਪੰਜਾਬੀ
            </span>
          </div>
          <div></div>
        </div>
      </form>

      {/* Footer */}
      <Footer />
    </div>
  );
}

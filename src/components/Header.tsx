import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";
import SearchInput from "./searchInput";
import { useAppSelector, useAppStore } from "@/lib/hook";
import { fetchWeatherDataByLocalityId } from "@/actions/getWeatherDataByLocalityID";
// {
//   "status": "200",
//   "message": "",
//   "device_type": 1,
//   "locality_weather_data": {
//       "temperature": 32.35,
//       "humidity": 78.74,
//       "wind_speed": null,
//       "wind_direction": 0,
//       "rain_intensity": 0.4,
//       "rain_accumulation": 2.6
//   }
// }

function Header() {
  const router = useRouter();
  const searchInputRef = useRef(null);
  const [localityData, setLocalityData] = useState("");
  const [searchedPlaceName, setSearchedPlaceName] = useState("");
  const [temperature, setTemperature] = useState("");
  const [humidity, setHumidity] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  const [windDirection, setWindDirection] = useState("");
  const [rainIntensity, setRainIntensity] = useState("");
  const [rainAccumulation, setRainAccumulation] = useState("");
  const [weatherCondtion, setWeatherCondition] = useState("");
  console.log("this is the localityData", localityData);

  const search = (event) => {
    event.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) {
      return;
    }

    router.push(`/search?value=${term}`);

    searchInputRef.current.value = term;
  };

  // Initialize the store with the product information
  const store = useAppStore();
  const initialized = useRef(false);
  if (!initialized.current) {
    // store.dispatch(initializeProduct(product))
    initialized.current = true;
  }
  const SearchedValue = useAppSelector(
    (state) => state.searchedValue.searchValue
  );
  const searchedLocalityID = useAppSelector(
    (state) => state.searchedValue.localityID
  );


  function determineWeatherCondition(data) {
    // Convert rain intensity from mm/h to mm/day for easier classification
    const dailyRainIntensity = data.locality_weather_data.rain_intensity * 24;
  
    if (data.locality_weather_data.rain_accumulation > 0 || data.locality_weather_data.rain_intensity > 0) {
      if (dailyRainIntensity < 2.5) {
        return "Light Rain";
      } else if (dailyRainIntensity < 10) {
        return "Moderate Rain";
      } else if (dailyRainIntensity < 50) {
        return "Heavy Rain";
      } else {
        return "Extreme Rain";
      }
    } else if (data.locality_weather_data.humidity > 90) {
      return "Foggy";
    } else if (data.locality_weather_data.humidity > 80) {
      return "Cloudy";
    } else {
      return "Sunny";
    }
  }

  useEffect(() => {
    const getData = async () => {
      setSearchedPlaceName(SearchedValue);

      if (!searchedLocalityID) {
        return;
      }

      const data = await fetchWeatherDataByLocalityId(searchedLocalityID);
      setLocalityData(data);
      setTemperature(data.locality_weather_data.temperature || 0);
      setHumidity(data.locality_weather_data.humidity || 0);
      setWindSpeed(data.locality_weather_data.wind_speed || 0);
      setWindDirection(data.locality_weather_data.wind_direction || 0);
      setRainIntensity(data.locality_weather_data.rain_intensity || 0);
      setRainAccumulation(data.locality_weather_data.rain_accumulation || 0);

      const todaysWeather = determineWeatherCondition(data);
      setWeatherCondition(todaysWeather);
    
    };
    getData();
  }, [searchedLocalityID]);

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <div className=" flex items-center  mt-5">
          <Image
            loading="lazy"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            width={120}
            height={40}
            onClick={() => router.push("/")}
            className="cursor-pointer"
          />
        </div>
        {/* <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
          <input className="flex-grow w-full focus:outline-none" ref={searchInputRef} type="text" />
          <XIcon 
          className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
          onClick={() => searchInputRef.current.value=""}
          />
          <MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300 cursor-pointer"/>
          <SearchIcon onClick={(event)=>{search(event)}} className="h-6 text-blue-500 hidden sm:inline-flex cursor-pointer"/>
          <button hidden type="submit" onClick={(event)=>{search(event)}}/>
        </form> */}
        <div className="  w-full flex items-center align-middle pl-[2rem] ">
          <SearchInput />
        </div>
        <Avatar
          className="ml-auto"
          url="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAPFBMVEXk5ueutLepsLPo6uursbXJzc/p6+zj5ea2u76orrKvtbi0ubzZ3N3O0dPAxcfg4uPMz9HU19i8wcPDx8qKXtGiAAAFTElEQVR4nO2d3XqzIAyAhUD916L3f6+f1m7tVvtNINFg8x5tZ32fQAIoMcsEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQTghAJD1jWtnXJPP/54IgNzZQulSmxvTH6oYXX4WS+ivhTbqBa1r26cvCdCu6i0YXbdZ0o4A1rzV+5IcE3YE+z58T45lqo7g1Aa/JY5tgoqQF3qb382x7lNzBLcxft+O17QUYfQI4IIeklKsPSN4i6LKj/7Zm8n99RbHJpEw9gEBXNBpKIYLJqKYRwjOikf//r+J8ZsVuacbqCMNleI9TqGLGqMzhnVdBOdd6F/RlrFijiCoVMk320CBIahUxTWI0KKEcJqKbMdpdJb5QvdHq6wCI5qhKlgGMS/RBHkubWDAE+QZxB4xhCyDiDkLZxgGEVdQldzSKbTIhmZkFkSEPcVvmBn2SMuZB9od7fQDsMiDdKJjFUSCQarM5WirZ3C2TT/htYnyPcPfgrFHWz0BI74gr6J/IZiGUxAZGQLqmvQLTrtE/Go4YxhVRIpEw+sww1IIcqr5NKmUUzLF3d4/qPkYIp2T/obPuemlojFUR4t9Q2Vojhb7BmgElWHzLPH8hucfpefPNFTVgs9h1AdU/Pin96vwWbWdf+X9Absn3OdO34aMdsDnP8WgKYisTqI6CkNGqZQo1XA6Ef6AU32SJzOcBukHPF07/xNSgmHKa5BOhtezv6mA/rYJpwXNAnbRZ1XuF3BzDcO3vpA3+ny2909gbqE4hhD3LIPhLLyBNhPZvbZ3B+3tPYa18A7auSlXQayKwTPNLKDcuOB0xPYKDPFTkWsevQPRZ1J8Hji9I1KQ34r7hZhrwNwOZ97QxNx0drwn4QI0wQk1DcEsfKCWKdxVvxPSNUIp/knmAXT+nT+Ko3+0H96rcNb3m1fx7MBTJdeBJ7uFcWsc0wvgAsC4pROW0l2inbAmIBv/7GZmuhQH6API2rr8T0e6yuZJ+80A9LZeG62T3tik31XwxtwZcizKuTHkMjB1WdZde4Kmic/A5ZI3rr1ae21d08PlVHYfAaxw9G9CYRbJ+8ZdbTcMRV1XM3VdF0M32vtoTdZ0+u29s0OttJ5bz64UwinjaFMVY9vkqc3KKSxN21Xl+0L4Q3Vuv1tYl0pqnX6ms4XetFz7gdZVAgUEoJntfOUe4ZwsHd9FzqQ3Vv6xe41l0XJcqcKl6TZvlv7ClAW3BsqQW4X7ypApB8dmTgK4IX5wvqIVj33HtD2qSG4BqznxdIefL27Y4sahi0MdIdvUsDva8agGGbCtITmCY31MHD2O0uIdh/0rJDQ1VX5Zdxz3rR2QDbv6qXl9vudzqQtGm1Jv9LDXOsfvvB7VcZ8PDKD0mQ1VHPYQ9O+Yj4hR1IUD8rBnn3ho2m8oQMxbCFiKlL2ioSW5heeJqegED52CzxCtcGD3Kv8Wms9EYLyUhwaFIhSMBClevWEmiK/Iaogu4H7sg6ppQhQG8RUqivuTGOAJOg6FfgW0q0M0PQMRMEgXaeNf3SYDZ8PIMI0+wHgr/MgN7wYwpiLjCCqM6ydUDZLQiB6nDdNC8SDyig3jPPpFXGcC9O8BUBDVmgBY59E7Md/35Loe/UVEECEJwYggJjELZ4J71SaQSBeC02n4Da29CayJNA28SAhd2CQyC1Xw6pSmGSINQVuMhAZp4DClan9MgmkDDNmezqwS8sgtlXK/EPBhoaSmYVC/F7IO1jQEdHOlabpKh3+jzLQSTUiq4X2I+Ip/zU8rlaqAvkS21ElR+gqu3zbjjL+hIAiCIAiCIAiCIAiCsCf/AKrfVhSbvA+DAAAAAElFTkSuQmCC"
        />
      </div>

      {/* Options */}
      <HeaderOptions />
      <div className="  h-[100vh] w-full">
        <h1 className=" text-[5rem]">{searchedLocalityID}</h1>
        <h1 className=" text-[2rem]">
          This is the locality Data for city {searchedPlaceName}
        </h1>
        <h1>{JSON.stringify(localityData)}</h1>
        <h1>Temperature:{temperature}</h1>
        <h1> humidity:{humidity}</h1>
        <h1> windSpeed:{windSpeed}</h1>
        <h1> windDirection:{windDirection}</h1>
        <h1> rainIntensity:{rainIntensity}</h1>
        <h1> rainAccumulation:{rainAccumulation}</h1>
        <h1> Todays Weather:{weatherCondtion}</h1>
      </div>
    </header>
  );
}

export default Header;

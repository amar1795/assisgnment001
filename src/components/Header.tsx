import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";
import SearchInput from "./searchInput";
import { useAppDispatch, useAppSelector, useAppStore } from "@/lib/hook";
import { fetchWeatherDataByLocalityId } from "@/actions/getWeatherDataByLocalityID";
import WeatherCard from "./weatherCard";
import { setSearchValue } from "@/lib/features/product/SearchedValueSlice";
import Spinner from "./loader/spinner";
import { setHumidity, setRainAccumulation, setRainIntensity, setTemperature, setWeatherCondition, setWindDirection, setWindSpeed } from "@/lib/features/weather/WeatherDataSlice";
import { setBackgroundVideo, setDateTime, setLoading, setLocalityData, setSearchedPlaceName, setWeatherConditionPicSource } from "@/lib/features/weatherDetail/WeatherDetailSlice";


const getFormattedDateTime = () => {
  // Get current date and time
  const now = new Date();

  // Convert to IST (GMT+5:30)
  const istTime = now.toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    weekday: 'long',   // Day of the week
    year: 'numeric',   // Year
    month: 'long',     // Month
    day: 'numeric',    // Day
    hour: '2-digit',   // Hours
    minute: '2-digit', // Minutes
  });

  return istTime;
};

function Header() {
  const router = useRouter();
  const searchInputRef = useRef(null);


  const [searchTerm, setSearchTerm] = useState("");

const dispatch = useAppDispatch();

  // console.log("this is the localityData", localityData);
  // console.log("this is the background video", backgroundVideo);

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

  const localityData = useAppSelector((state) => state.WeatherDetailData.localityData);
  const searchedPlaceName = useAppSelector((state) => state.WeatherDetailData.searchedPlaceName);
  const backgroundVideo = useAppSelector((state) => state.WeatherDetailData.backgroundVideo);
  const dateTime = useAppSelector((state) => state.WeatherDetailData.dateTime);
  const weatherConditionPicSource = useAppSelector((state) => state.WeatherDetailData.weatherConditionPicSource);
  // const searchTerm = useAppSelector((state) => state.WeatherDetailData.searchTerm);   
  const loading = useAppSelector((state) => state.WeatherDetailData.loading);

  const temperature = useAppSelector((state) => state.WeatherData.temperature);
  const humidity = useAppSelector((state) => state.WeatherData.humidity);
  const windSpeed = useAppSelector((state) => state.WeatherData.windSpeed);
  const windDirection = useAppSelector((state) => state.WeatherData.windDirection);
  const rainIntensity = useAppSelector((state) => state.WeatherData.rainIntensity);
  const rainAccumulation = useAppSelector((state) => state.WeatherData.rainAccumulation);
  const weatherCondtion = useAppSelector((state) => state.WeatherData.weatherCondition);

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
      dispatch(setLoading(true)); // Start loading

      dispatch(setSearchedPlaceName(SearchedValue));

      if (!searchedLocalityID) {
        return;
      }

      const data = await fetchWeatherDataByLocalityId(searchedLocalityID);
      dispatch(setLocalityData(data));
      dispatch(setTemperature(data.locality_weather_data.temperature || 0));
      dispatch(setHumidity(data.locality_weather_data.humidity || 0));
      dispatch(setWindSpeed(data.locality_weather_data.wind_speed || 0));
      dispatch(setWindDirection(data.locality_weather_data.wind_direction || 0));
      dispatch(setRainIntensity(data.locality_weather_data.rain_intensity || 0));
      dispatch(setRainAccumulation(data.locality_weather_data.rain_accumulation || 0));
      dispatch(setWeatherCondition(determineWeatherCondition(data)));
      // setTemperature(data.locality_weather_data.temperature || 0);
      // setHumidity(data.locality_weather_data.humidity || 0);
      // setWindSpeed(data.locality_weather_data.wind_speed || 0);
      // setWindDirection(data.locality_weather_data.wind_direction || 0);
      // setRainIntensity(data.locality_weather_data.rain_intensity || 0);
      // setRainAccumulation(data.locality_weather_data.rain_accumulation || 0);

      const todaysWeather = determineWeatherCondition(data);
      setWeatherCondition(todaysWeather);
      if(todaysWeather==="Sunny"){
        dispatch(setBackgroundVideo("../../../sunny.mp4"))
        dispatch(setWeatherConditionPicSource("../../../weather/SunnyPic.png"))
      }
      else if(todaysWeather==="Light Rain"){
        dispatch(setBackgroundVideo("../../../rain.mp4"))
    dispatch(setWeatherConditionPicSource("../../../weather/mrainPic.png"))
      }
      else if(todaysWeather==="Moderate Rain"){
        dispatch(setBackgroundVideo("../../../rain.mp4"))
        dispatch(setWeatherConditionPicSource("../../../weather/mrainPic.png"))

      }
      else if(todaysWeather==="Heavy Rain"){
        dispatch(setBackgroundVideo("../../../heavy_rain.mp4"))
        dispatch(setWeatherConditionPicSource("../../../weather/mrainPic.png"))

      }
      else if(todaysWeather==="Extreme Rain"){
        dispatch(setBackgroundVideo("../../../heavy_rain.mp4"))
        dispatch(setWeatherConditionPicSource("../../../weather/erainPic.png"))

      }
      else if(todaysWeather==="Foggy"){
        dispatch(setBackgroundVideo("../../../foggy.mp4"))
        dispatch(setWeatherConditionPicSource("../../../weather/foggyPic.png"))

      }
      else if(todaysWeather==="Cloudy"){
        dispatch(setBackgroundVideo("../../../cloudy.mp4"))
        dispatch(setWeatherConditionPicSource("../../../weather/cloudyPic.png"))

      }
      dispatch(setLoading(false)); // Stop loading when data is fully set

    };
    getData();
  }, [searchedLocalityID]);

  useEffect(() => {
    // Update the date and time every second
    const intervalId = setInterval(() => {
      dispatch(setDateTime(getFormattedDateTime()));
    }, 60000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const handleClick = async() => {
    setSearchTerm("");
    dispatch(setSearchValue("")); // Dispatch an action to update the Redux state
    router.push("/");
  }

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center below-380:px-2">
        <div className=" flex items-center  mt-5  below-770:hidden">
          <Image
            loading="lazy"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            width={120}
            height={40}
            onClick={handleClick}
            className="cursor-pointer"
          />
        </div>
       
        <div className=" below-770:flex below-770:flex-col    w-full">

        
        <div className="hidden  below-770:flex  below-770:justify-between  below-770:px-9 below-430:px-0 ">
        <div className="  items-center  mt-5 ">
          <Image
            loading="lazy"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            width={120}
            height={40}
            onClick={() => router.push("/")}
            className="cursor-pointer"
          />
        </div>
        <div className="  w-[4rem] ml-5 mt-4  below-770:mr-[5rem] below-430:mr-0 ">
        <Avatar
          className="ml-auto"
          url="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAPFBMVEXk5ueutLepsLPo6uursbXJzc/p6+zj5ea2u76orrKvtbi0ubzZ3N3O0dPAxcfg4uPMz9HU19i8wcPDx8qKXtGiAAAFTElEQVR4nO2d3XqzIAyAhUD916L3f6+f1m7tVvtNINFg8x5tZ32fQAIoMcsEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQTghAJD1jWtnXJPP/54IgNzZQulSmxvTH6oYXX4WS+ivhTbqBa1r26cvCdCu6i0YXbdZ0o4A1rzV+5IcE3YE+z58T45lqo7g1Aa/JY5tgoqQF3qb382x7lNzBLcxft+O17QUYfQI4IIeklKsPSN4i6LKj/7Zm8n99RbHJpEw9gEBXNBpKIYLJqKYRwjOikf//r+J8ZsVuacbqCMNleI9TqGLGqMzhnVdBOdd6F/RlrFijiCoVMk320CBIahUxTWI0KKEcJqKbMdpdJb5QvdHq6wCI5qhKlgGMS/RBHkubWDAE+QZxB4xhCyDiDkLZxgGEVdQldzSKbTIhmZkFkSEPcVvmBn2SMuZB9od7fQDsMiDdKJjFUSCQarM5WirZ3C2TT/htYnyPcPfgrFHWz0BI74gr6J/IZiGUxAZGQLqmvQLTrtE/Go4YxhVRIpEw+sww1IIcqr5NKmUUzLF3d4/qPkYIp2T/obPuemlojFUR4t9Q2Vojhb7BmgElWHzLPH8hucfpefPNFTVgs9h1AdU/Pin96vwWbWdf+X9Absn3OdO34aMdsDnP8WgKYisTqI6CkNGqZQo1XA6Ef6AU32SJzOcBukHPF07/xNSgmHKa5BOhtezv6mA/rYJpwXNAnbRZ1XuF3BzDcO3vpA3+ny2909gbqE4hhD3LIPhLLyBNhPZvbZ3B+3tPYa18A7auSlXQayKwTPNLKDcuOB0xPYKDPFTkWsevQPRZ1J8Hji9I1KQ34r7hZhrwNwOZ97QxNx0drwn4QI0wQk1DcEsfKCWKdxVvxPSNUIp/knmAXT+nT+Ko3+0H96rcNb3m1fx7MBTJdeBJ7uFcWsc0wvgAsC4pROW0l2inbAmIBv/7GZmuhQH6API2rr8T0e6yuZJ+80A9LZeG62T3tik31XwxtwZcizKuTHkMjB1WdZde4Kmic/A5ZI3rr1ae21d08PlVHYfAaxw9G9CYRbJ+8ZdbTcMRV1XM3VdF0M32vtoTdZ0+u29s0OttJ5bz64UwinjaFMVY9vkqc3KKSxN21Xl+0L4Q3Vuv1tYl0pqnX6ms4XetFz7gdZVAgUEoJntfOUe4ZwsHd9FzqQ3Vv6xe41l0XJcqcKl6TZvlv7ClAW3BsqQW4X7ypApB8dmTgK4IX5wvqIVj33HtD2qSG4BqznxdIefL27Y4sahi0MdIdvUsDva8agGGbCtITmCY31MHD2O0uIdh/0rJDQ1VX5Zdxz3rR2QDbv6qXl9vudzqQtGm1Jv9LDXOsfvvB7VcZ8PDKD0mQ1VHPYQ9O+Yj4hR1IUD8rBnn3ho2m8oQMxbCFiKlL2ioSW5heeJqegED52CzxCtcGD3Kv8Wms9EYLyUhwaFIhSMBClevWEmiK/Iaogu4H7sg6ppQhQG8RUqivuTGOAJOg6FfgW0q0M0PQMRMEgXaeNf3SYDZ8PIMI0+wHgr/MgN7wYwpiLjCCqM6ydUDZLQiB6nDdNC8SDyig3jPPpFXGcC9O8BUBDVmgBY59E7Md/35Loe/UVEECEJwYggJjELZ4J71SaQSBeC02n4Da29CayJNA28SAhd2CQyC1Xw6pSmGSINQVuMhAZp4DClan9MgmkDDNmezqwS8sgtlXK/EPBhoaSmYVC/F7IO1jQEdHOlabpKh3+jzLQSTUiq4X2I+Ip/zU8rlaqAvkS21ElR+gqu3zbjjL+hIAiCIAiCIAiCIAiCsCf/AKrfVhSbvA+DAAAAAElFTkSuQmCC"
        />
        </div>
        </div>
        <div className="   flex items-center align-middle pl-[2rem] below-430:pl-0 ">
          <SearchInput searchPage={true} />
        </div>
        </div>
        <div className="  w-[4rem] ml-5 mt-4  below-770:hidden">
        <Avatar
          className="ml-auto"
          url="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAPFBMVEXk5ueutLepsLPo6uursbXJzc/p6+zj5ea2u76orrKvtbi0ubzZ3N3O0dPAxcfg4uPMz9HU19i8wcPDx8qKXtGiAAAFTElEQVR4nO2d3XqzIAyAhUD916L3f6+f1m7tVvtNINFg8x5tZ32fQAIoMcsEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQTghAJD1jWtnXJPP/54IgNzZQulSmxvTH6oYXX4WS+ivhTbqBa1r26cvCdCu6i0YXbdZ0o4A1rzV+5IcE3YE+z58T45lqo7g1Aa/JY5tgoqQF3qb382x7lNzBLcxft+O17QUYfQI4IIeklKsPSN4i6LKj/7Zm8n99RbHJpEw9gEBXNBpKIYLJqKYRwjOikf//r+J8ZsVuacbqCMNleI9TqGLGqMzhnVdBOdd6F/RlrFijiCoVMk320CBIahUxTWI0KKEcJqKbMdpdJb5QvdHq6wCI5qhKlgGMS/RBHkubWDAE+QZxB4xhCyDiDkLZxgGEVdQldzSKbTIhmZkFkSEPcVvmBn2SMuZB9od7fQDsMiDdKJjFUSCQarM5WirZ3C2TT/htYnyPcPfgrFHWz0BI74gr6J/IZiGUxAZGQLqmvQLTrtE/Go4YxhVRIpEw+sww1IIcqr5NKmUUzLF3d4/qPkYIp2T/obPuemlojFUR4t9Q2Vojhb7BmgElWHzLPH8hucfpefPNFTVgs9h1AdU/Pin96vwWbWdf+X9Absn3OdO34aMdsDnP8WgKYisTqI6CkNGqZQo1XA6Ef6AU32SJzOcBukHPF07/xNSgmHKa5BOhtezv6mA/rYJpwXNAnbRZ1XuF3BzDcO3vpA3+ny2909gbqE4hhD3LIPhLLyBNhPZvbZ3B+3tPYa18A7auSlXQayKwTPNLKDcuOB0xPYKDPFTkWsevQPRZ1J8Hji9I1KQ34r7hZhrwNwOZ97QxNx0drwn4QI0wQk1DcEsfKCWKdxVvxPSNUIp/knmAXT+nT+Ko3+0H96rcNb3m1fx7MBTJdeBJ7uFcWsc0wvgAsC4pROW0l2inbAmIBv/7GZmuhQH6API2rr8T0e6yuZJ+80A9LZeG62T3tik31XwxtwZcizKuTHkMjB1WdZde4Kmic/A5ZI3rr1ae21d08PlVHYfAaxw9G9CYRbJ+8ZdbTcMRV1XM3VdF0M32vtoTdZ0+u29s0OttJ5bz64UwinjaFMVY9vkqc3KKSxN21Xl+0L4Q3Vuv1tYl0pqnX6ms4XetFz7gdZVAgUEoJntfOUe4ZwsHd9FzqQ3Vv6xe41l0XJcqcKl6TZvlv7ClAW3BsqQW4X7ypApB8dmTgK4IX5wvqIVj33HtD2qSG4BqznxdIefL27Y4sahi0MdIdvUsDva8agGGbCtITmCY31MHD2O0uIdh/0rJDQ1VX5Zdxz3rR2QDbv6qXl9vudzqQtGm1Jv9LDXOsfvvB7VcZ8PDKD0mQ1VHPYQ9O+Yj4hR1IUD8rBnn3ho2m8oQMxbCFiKlL2ioSW5heeJqegED52CzxCtcGD3Kv8Wms9EYLyUhwaFIhSMBClevWEmiK/Iaogu4H7sg6ppQhQG8RUqivuTGOAJOg6FfgW0q0M0PQMRMEgXaeNf3SYDZ8PIMI0+wHgr/MgN7wYwpiLjCCqM6ydUDZLQiB6nDdNC8SDyig3jPPpFXGcC9O8BUBDVmgBY59E7Md/35Loe/UVEECEJwYggJjELZ4J71SaQSBeC02n4Da29CayJNA28SAhd2CQyC1Xw6pSmGSINQVuMhAZp4DClan9MgmkDDNmezqwS8sgtlXK/EPBhoaSmYVC/F7IO1jQEdHOlabpKh3+jzLQSTUiq4X2I+Ip/zU8rlaqAvkS21ElR+gqu3zbjjL+hIAiCIAiCIAiCIAiCsCf/AKrfVhSbvA+DAAAAAElFTkSuQmCC"
        />
        </div>
      </div>

      <HeaderOptions />
      {loading ? (
        <div className=" flex items-center justify-center h-[50vh] w-full">
          <Spinner/>
        </div> // Your loading indicator
      ) : (
        <> {/* Options */}
      <div className=" relative   w-full text-white ">     
      <video  key={backgroundVideo}  className="absolute top-0 left-0 w-full h-full object-cover -z-10"
    autoPlay
    loop
    muted
    preload="none">
      <source src={backgroundVideo} type="video/mp4" />
      <track
        src="/path/to/captions.vtt"
        kind="subtitles"
        srcLang="en"
        label="English"
      />
    </video>
    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 -z-10"></div>

       <div className=" px-[3rem] below-430:px-0 ">
      <div className=" top below-430:px-5">
      <h1 className=" pt-[2rem] text-[3rem] font-bold below-430:text-[1.2rem]">Today's Weather Forecast</h1>
        <div className=" flex items-center below-430:my-8">
        <h1 className=" text-[5rem]  below-430:text-[3rem]">{weatherCondtion} </h1>
        <img src={weatherConditionPicSource} alt="" className=" h-[15rem] ml-9  below-430:h-[5rem]" />
        </div>

        <h1 className=" text-[2rem] below-430:text-[1rem] below-430:my-8 ">{searchedPlaceName},<span className=" text-[1.2rem] ml-2 font-bold below-430:text-[0.8rem]">
        {dateTime}</span></h1>

      </div>

      <div className=" bottom min-h-[60vh] below-430:min-h-[60vh]  flex  pt-12 gap-8 below-430:gap-1   p-4 flex-wrap  below-770:justify-around  ">
{/* sfdghldkk */}

{/* title,detail,source */}
  <WeatherCard title={"Temperature"} detail={temperature} metric={"C"} source={"../../../weather details/temperature.png"} />
  <WeatherCard title={"Humidity"} detail={humidity} metric={"%"} source={"../../../weather details/humidity.png"} />
  <WeatherCard title={"Wind Speed"} detail={windSpeed} metric={"m/s"} source={"../../../weather details/windspeed.png"} />
  <WeatherCard title={"Wind Direction"} detail={windDirection} metric={"N"} source={"../../../weather details/winddirection.png"} />
  <WeatherCard title={"Rain Intensity"} detail={rainIntensity} metric={"mm/h"} source={"../../../weather details/rainintensity.png"} />
  <WeatherCard title={"Rain Accumulation"} detail={rainAccumulation} metric={"mm"} source={"../../../weather details/rainaccum.png"} />

      </div>
      
       </div>
      </div>
      </>
      )}
    </header>
  );
}

export default Header;

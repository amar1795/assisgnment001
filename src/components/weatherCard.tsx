import React from 'react'

const WeatherCard = ({title,detail,source,metric}:{title:string,detail:string,source:string,metric:string}) => {
  return (
    <div>
      <div className="bg-white/10 text-white backdrop-blur-md h-[15rem] w-[20rem] below-1150:w-[17rem] below-1150:h-[13rem] rounded-[10%] flex shadow-lg border border-white/10 below-430:h-[8rem] below-430:w-[10rem] below-380:w-[8rem] below-380:h-[7rem]">
  <div className="left w-[60%] flex flex-col items-center justify-center">
    <h1 className="text-[1.5rem]  text-center justify-center below-1150:text-[1.2rem] below-430:text-[0.8rem] below-380:text-[0.6rem] ">{title}</h1>
    <h1 className="font-bold below-1150:text-[0.8rem] below-430:text-[0.5rem] below-380:text-[0.4rem]">{detail} {metric}</h1>
  </div>
  <div className="right w-[40%] flex items-center justify-center">
    <img src={source} alt="" className="h-[5rem] w-[5rem] below-430:h-[2.5rem] below-430:w-[2.5rem]  below-380:h-[2rem]
    below-380:w-[2rem]" />
  </div>
</div>
    </div>
  )
}

export default WeatherCard

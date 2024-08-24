import React from 'react'

const WeatherCard = ({title,detail,source}) => {
  return (
    <div>
      <div className="bg-white/10 text-white backdrop-blur-md h-[15rem] w-[20rem] rounded-[10%] flex shadow-lg border border-white/10">
  <div className="left w-[60%] flex flex-col items-center justify-center">
    <h1 className="text-[1.5rem]  text-center justify-center ">{title}</h1>
    <h1 className="font-bold">{detail}</h1>
  </div>
  <div className="right w-[40%] flex items-center justify-center">
    <img src={source} alt="" className="h-[5rem] w-[5rem]" />
  </div>
</div>
    </div>
  )
}

export default WeatherCard

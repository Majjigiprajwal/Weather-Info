import React from 'react'

const WeatherCard = ({parameter,value}) => {
  return (
    <div className="w-2/12 h-32 p-1 bg-slate-800  border-white rounded-lg  text-white flex flex-col justify-center items-center mb-10">
       <p className="font-serif font-medium text-xl mb-5 ">{parameter}</p>
       <p className="text-4xl font-medium ">{value}</p>
    </div>
  )
}

export default WeatherCard

import React from 'react'
import WeatherCard from '../WeatherCard/WeatherCard'
import { useWeatherData } from '../../context/WeatherDataContext'
import { useNavigate } from 'react-router-dom';

const RealtimeWeather = () => {
       
      const navigate = useNavigate();
      const {realtimeWeatherData} = useWeatherData()
         
  return (
    <div className="w-full h-full p-10 ">
       <div className="w-full flex justify-between items-end mb-20">
       <h1 className="text-white text-4xl font-serif font-extrabold">Real-Time Weather</h1>
       <button className="text-2xl  bg-white rounded-lg font-serif p-2 border-2 border-black" onClick={()=>navigate('/forecasted-weather')}>Get Weather Forecast</button>
       </div>
       <div className="flex flex-row flex-wrap  w-full gap-20 justify-center items-center h-full">
         {
           realtimeWeatherData ? 
            Object.entries(realtimeWeatherData).map(([key,value])=>{
                return <WeatherCard key={key} parameter={key} value={value} />
             })
             : <div> loading  </div>
         }
       </div>
    </div>
  )
}

export default RealtimeWeather

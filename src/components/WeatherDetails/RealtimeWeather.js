import React from 'react'
import WeatherCard from '../WeatherCard/WeatherCard'
import { useWeatherData } from '../../context/WeatherDataContext'
import { useNavigate } from 'react-router-dom';
import {MagnifyingGlass} from 'react-loader-spinner'

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
             : <div> <MagnifyingGlass
             visible={true}
             height="80"
             width="80"
             ariaLabel="magnifying-glass-loading"
             wrapperStyle={{}}
             wrapperClass="magnifying-glass-wrapper"
             glassColor="#c0efff"
             color="#e15b64"
             /> </div>
         }
       </div>
    </div>
  )
}

export default RealtimeWeather

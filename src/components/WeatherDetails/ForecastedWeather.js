import React,{useEffect} from 'react'
import { useWeatherData } from '../../context/WeatherDataContext'
import { getCurrentLocation } from '../../util/GeoLocation'
import WeatherCard from '../WeatherCard/WeatherCard'
import axios from 'axios'

const ForecastedWeather = () => {

       const {updateForecastedWeatherData,forecastedWeatherData} = useWeatherData()
         console.log(forecastedWeatherData)
       useEffect(()=>{
        const fetchRealtimeWeatherData = async ()=>{
             try{
                 const {latitude,longitude} = await getCurrentLocation()
                 const response = await axios.get(`https://api.tomorrow.io/v4/weather/forecast?location=${latitude},${longitude}&apikey=aW2mGIv9lTxReId4Mf8M8LC6gmGSGGnS`)
                 updateForecastedWeatherData(response.data.timelines.daily[0].values)
             }
             catch(error){
                console.log(error)
             }
        }

        fetchRealtimeWeatherData()
  },[])

  return (
    <div className="w-full min-h-screen p-10 bg-slate-900 ">
       <div className="w-full flex justify-between items-end mb-20">
       <h1 className="text-white text-4xl font-serif font-extrabold">Forecast Weather</h1>
      
       </div>
       <div className="flex flex-row flex-wrap  w-full gap-20 justify-center items-center h-full">
         {
           forecastedWeatherData? 
            Object.entries(forecastedWeatherData).map(([key,value])=>{
                return <WeatherCard key={key} parameter={key} value={value} />
             })
             : <div> loading  </div>
         }
       </div>
    </div>
  )
}

export default ForecastedWeather


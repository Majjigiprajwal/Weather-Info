import React,{useState,useEffect} from 'react'
import DayCard from '../components/WeatherCard/DayCard'
import WeatherCard from '../components/WeatherCard/WeatherCard'
import { useWeatherData } from '../context/WeatherDataContext'
import { getCurrentLocation } from '../util/GeoLocation'
import axios from 'axios'
import {MagnifyingGlass} from 'react-loader-spinner'

const WeatherForecast = () => {
   
       const [dayForecast,setDayForecast] = useState(null)
       const [loading,setLoading] = useState(true)

       const getDayForecast = (values)=>{
           setDayForecast(values)
       }

       const {updateForecastedWeatherData,forecastedWeatherData} = useWeatherData()

       console.log(forecastedWeatherData)
        
       useEffect(()=>{
        const fetchForecastedWeatherData = async ()=>{
             try{
                 const {latitude,longitude} = await getCurrentLocation()
                 const response = await axios.get(`https://api.tomorrow.io/v4/weather/forecast?location=${latitude},${longitude}&apikey=aW2mGIv9lTxReId4Mf8M8LC6gmGSGGnS`)
                 updateForecastedWeatherData(response.data.timelines.daily)
                 setLoading(false)
                
             }
             catch(error){
                console.log(error)
             }
        }

        fetchForecastedWeatherData()
  },[])

    

  return (
    <div className="w-full min-h-screen bg-slate-900 ">
      <h1 className="text-white font-serif font-bold text-5xl pt-10 pl-10">Forecasted Weather</h1>
      {loading ?  <div className="flex justify-center items-center"> <MagnifyingGlass
             visible={true}
             height="80"
             width="80"
             ariaLabel="magnifying-glass-loading"
             wrapperStyle={{}}
             wrapperClass="magnifying-glass-wrapper"
             glassColor="#c0efff"
             color="#e15b64"
             /> </div>
          :  <div className="flex flex-col justify-center items-center mt-10">
          <p className="text-3xl text-white font-white font-serif font-normal ">Weather Update for the next 6 Days</p>
          <div className="flex flex-row gap-10 flex-wrap w-full justify-center items-center mt-10 ">
          {
            forecastedWeatherData?.map((data)=>{
                return <DayCard data={data.time} parameter={data.values}  getDayForecast={getDayForecast}/>
            })
          }
          </div>
          <div className="w-full flex flex-row flex-wrap gap-10 justify-center items-center p-10">
          {
            dayForecast && Object.entries(dayForecast).map(([key,value])=>{
                return <WeatherCard key={key} parameter={key} value={value} />
             })
          }
          </div>
      </div> 
      } 
    </div>
  )
}

export default WeatherForecast

import React,{useState,useEffect} from 'react'
import Header from '../components/Header/Header'
import SearchBar from '../components/SearchBar/SearchBar'
import RealtimeWeather from '../components/WeatherDetails/RealtimeWeather'
import { getCurrentLocation } from '../util/GeoLocation'
import axios from 'axios'
import { useWeatherData } from '../context/WeatherDataContext'

const Home = () => {

        const {updateRealtimeWeatherData} = useWeatherData()
       useEffect(()=>{
             const fetchRealtimeWeatherData = async ()=>{
                  try{
                      const {latitude,longitude} = await getCurrentLocation()
                      const response = await axios.get(`https://api.tomorrow.io/v4/weather/realtime?location=${latitude},${longitude}&apikey=aW2mGIv9lTxReId4Mf8M8LC6gmGSGGnS`)
                      updateRealtimeWeatherData(response.data.data.values)
                      
                  }
                  catch(error){
                     console.log(error)
                  }
             }

             fetchRealtimeWeatherData()
       },[])



    
        
  return (
    <div className="min-h-screen w-full bg-slate-900 ">
        <div className="w-full h-full ">
        <Header />    
        </div>
        <div className="w-full h-full mt-10">
        <SearchBar />  
        </div>
        <div className="max-w-screen min-h-screen ">
        <RealtimeWeather />
        </div>
    </div>
  )
}

export default Home

import React from 'react'
import { useState } from 'react'
import { useWeatherData } from '../../context/WeatherDataContext'
import axios from 'axios'
const SearchBar = () => {

        const {updateRealtimeWeatherData,updateForecastedWeatherData} = useWeatherData()

       const [location,setLocation] = useState({
        latitude:'',
        longitude:''
       })

      const handleOnChange = (e)=>{
            setLocation({...location,[e.target.name]:e.target.value})
            console.log(location)
      }

      const handleSearch = async()=>{
          try{
            const realtimeData = await axios.get(`https://api.tomorrow.io/v4/weather/realtime?location=${location.latitude},${location.longitude}&apikey=aW2mGIv9lTxReId4Mf8M8LC6gmGSGGnS`)
            updateRealtimeWeatherData(realtimeData.data.data.values)  
            const forecastedData = await axios.get(`https://api.tomorrow.io/v4/weather/forecast?location=${location.latitude},${location.longitude}&apikey=aW2mGIv9lTxReId4Mf8M8LC6gmGSGGnS`)
            updateForecastedWeatherData(forecastedData.data.timelines.daily[0].values)

          }
          catch(error){
               
          }
      }
  return (
    <div className="flex justify-center items-center gap-10">
       <input 
       type="number"
       name="latitude"
       onChange={(e)=>{handleOnChange(e)}} 
       placeholder="Enter Latitude of the Location" value={location.latitude}
       className="w-3/12 text-black border-none outline-none  rounded-lg p-3 text-2xl font-serif"
       ></input>
       <input 
       type="number"
       name="longitude"
       onChange={(e)=>{handleOnChange(e)}} 
       placeholder="Enter Longitude of the Location" value={location.longitude}
       className="w-3/12 text-black border-none outline-none  rounded-lg p-3 text-2xl font-serif"
       ></input>
       <button className="bg-white p-3 text-2xl font-serif text-center rounded-lg"
        onClick={()=>{handleSearch()}}>
        Search
        </button>
    </div>
  )
}

export default SearchBar

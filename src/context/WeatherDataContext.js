import React, { createContext, useContext, useState } from 'react';

const WeatherDataContext = createContext();

export const WeatherDataProvider = ({ children }) => {
  
  const [realtimeWeatherData, setRealtimeWeatherData] = useState(null);

  const [forecastedWeatherData,setForecastedWeatherData] = useState(null)
 
   console.log(forecastedWeatherData)
  
  const updateRealtimeWeatherData = (data) => {
    setRealtimeWeatherData(data);
  };

  const updateForecastedWeatherData = (data) => {
    setForecastedWeatherData(data);
  };

  return (
    <WeatherDataContext.Provider value={{ realtimeWeatherData,forecastedWeatherData,updateForecastedWeatherData,updateRealtimeWeatherData }}>
      {children}
    </WeatherDataContext.Provider>
  );
};

export const useWeatherData = () => useContext(WeatherDataContext);
  





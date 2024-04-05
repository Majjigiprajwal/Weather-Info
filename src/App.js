import './App.css';
import axios from 'axios'
import Header from './components/Header/Header';
import WeatherCard from './components/WeatherCard/WeatherCard';
import SearchBar from './components/SearchBar/SearchBar';
import Home from './pages/Home';
import { useWeatherData } from './context/WeatherDataContext';
import {Routes,Route} from 'react-router-dom'
import ForecastedWeather from './components/WeatherDetails/ForecastedWeather';

function App() {
  const context = useWeatherData()
  console.log(context)
  return (
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/forecasted-weather' element={<ForecastedWeather />} />
      </Routes>
  );
}


export default App;
 
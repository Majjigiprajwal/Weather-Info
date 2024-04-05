import './App.css';
import Home from './pages/Home';
import { useWeatherData } from './context/WeatherDataContext';
import {Routes,Route} from 'react-router-dom'

import WeatherForecast from './pages/WeatherForecast';

function App() {
  const context = useWeatherData()
  console.log(context)
  return (
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/forecasted-weather' element={<WeatherForecast />} />
      </Routes>
  );
}


export default App;
 
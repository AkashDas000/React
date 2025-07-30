import { useEffect, useState } from 'react'
import './App.css'
import SearchBar from './SearchBar';


const API_key = '2fa197b2c0c10e66746f4a9f76e1b3a1'

function App() {

  const [city, setCity] = useState('Delhi');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  
  useEffect(() => {
    const fetchWeather = async () => {
      if(!city) return;
      setLoading(true);
      setError('')
      try{
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`);
        if(!res.ok){
          throw new Error("City not Found")
        }
        const data = await res.json();
        console.log(data)
        setWeather(data);
      } catch (err) {
        setError(err.message)
        setWeather(null)
      } finally {
        setLoading(false)
      }
    }

    if(city){
      fetchWeather();
    }
  }, [city])

  return (
    <div>
      <h1>🌤️ Weather App</h1>

      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
        style={{ padding: '0.5rem', fontSize: '1rem' }}
      />

      {loading && <p>Loading...</p>}
      {error &&  <p style={{ color: 'red' }}>{error}</p>}


      {weather && !loading && !error && (
        <div>
          <h2>{weather.name}, {weather.sys.country}</h2>
          <p>🌡 Temp: {weather.main.temp}°C</p>
          <p>☁ Weather: {weather.weather[0].description}</p>
          <p>💨 Wind: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  )
}

export default App

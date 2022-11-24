import React, {useState, useEffect} from 'react';
import './App.css';
import {getWeatherData} from './weatherApi';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('Toronto');
  const getData = async () => {
    try{
        const data = await getWeatherData(city);
        setWeatherData(data);
        
    }catch(error) {
      console.log(error.message);
      
    }
  };  
  useEffect(() => {
    getData()
  }, []);

  return (
   <>
      <div className="App">
          <div className="search-form">
              <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter your city name"/>
              <button type="button" onClick={() => getData()}>Search</button>
          </div>
          {weatherData !== null ? (
          <div className="container">
              <h4>Weather Condition</h4>
              <div className='bg'>
                  <div className="weather-icon">
                      <img src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt="imgicon"/>
                  </div>
                  <h4>{weatherData.weather[0].main}</h4>
                  <div className="temprature">
                      <h1>
                            <i>Temp: {parseFloat(weatherData.main.temp - 273.15).toFixed(1)}&deg;C -</i>
        
                            <i> - Feels Like: {parseFloat(weatherData.main.feels_like - 273.15).toFixed(1)}&deg;C</i>
                      </h1>
                  </div>
                  <div className="location">

                      
                      <h4><div className="fav-loc">
                        </div>{weatherData.name} | {weatherData.sys.country}</h4>
                   </div>
                </  div>
                <div className="temprature-range">
                    <h4>Min: {parseFloat(weatherData.main.temp_min - 273.15).toFixed(2)}&deg;C 
                            || Max: {parseFloat(weatherData.main.temp_max - 273.15).toFixed(2)}&deg;C 
                            || Humidity: {weatherData.main.humidity}%
                    </h4>
                </div>
          </div>
        ) : null}
    </div>

  </>
  )

    
}

export default App;
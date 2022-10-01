import { useState} from 'react'
import data from '../../data/city.json'
import useOpenWeather from '../../Hooks/useOpenWeather'

const OpenWeather = () => {
   const {openWeather} = useOpenWeather();
  const [city, setCity] = useState('')

  return (
    <div className="weather-box">

      <div className="weather-box_title-box">
        <h4 className="weather-box_title-box--title">{openWeather.locationName}</h4>
        <label htmlFor="input-toggle_openWeather" className="weather-box_title-box--check">
          <i className="fas fa-map-marker-alt" />
        </label>
        <input className="weather-box_title-box--check-box" type="checkbox"  id="input-toggle_openWeather"/>
        <input type="text" valur={city} 
         onChange={(e) => setCity(e.target.value)} 
         placeholder="City" className="weather-box_title-box--input"/>
        {city && <ul className="weather-box_title-box--select">
          {data.map(position => (
              <li value={position.city}>{position.city}</li>
          ))}
        </ul>}
      </div>
      
      <div className="weather">
        <div className="weather-temperature">
          <h2>{ Math.round(openWeather.temperature)}<span>&deg;C</span></h2>
          <p>{openWeather.description}</p>
        </div>
        <div className="weather-pic">
          <img src={`http://openweathermap.org/img/wn/${openWeather.weatherIcon}@2x.png`} alt="" />
        </div>
      </div>
      <div className="weather-sub">
        <p><i className="fas fa-wind" /> {openWeather.windSpeed} m/s</p>
          <p><i className="fas fa-cloud-showers-heavy"/> 0%</p>
          <p><i className="fas fa-clock" /> {openWeather.observationTime}</p>
      </div>
    </div>
  )
}

export default OpenWeather
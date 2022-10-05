import { useState} from 'react'
import useSWR from 'swr';
import cityData from '../../data/city.json'
// import useOpenWeather from '../../Hooks/useOpenWeather';
import {fetchOpenWeather} from '../../services/api'

const OpenWeather = () => {
  //  const {openWeather} = useOpenWeather();
  const { data , error } = useSWR('North Tonawanda', fetchOpenWeather)
  const [city, setCity] = useState('')

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading....</div>

  return (
    <div className="weather-box">
      <div className="weather-box_title-box">
        <h4 className="weather-box_title-box--title">{data.locationName}</h4>
        <label htmlFor="input-toggle_openWeather" className="weather-box_title-box--check">
          <i className="fas fa-map-marker-alt" />
        </label>
        <input className="weather-box_title-box--check-box" type="checkbox"  id="input-toggle_openWeather"/>

        <form className="weather-box_title-box_form">
          <input type="text" valur={city} 
          onChange={(e) => setCity(e.target.value)} 
          placeholder="City" className="weather-box_title-box_form--input"/>
          {city && <ul className="weather-box_title-box_form--select">
            {cityData.map(position => (
                <li 
                value={position.city}
                className="weather-box_title-box_form--select--option">{position.city}</li>
            ))}
          </ul>}
        </form>

      </div>
      
      <div className="weather">
        <div className="weather-temperature">
          <h2>{ Math.round(data.temperature)}<span>&deg;C</span></h2>
          <p>{data.description}</p>
        </div>
        <div className="weather-pic">
          <img src={`http://openweathermap.org/img/wn/${data.weatherIcon}@2x.png`} alt="" />
        </div>
      </div>
      <div className="weather-sub">
        <p><i className="fas fa-wind" /> {data.windSpeed} m/s</p>
          <p><i className="fas fa-cloud-showers-heavy"/> 0%</p>
          <p><i className="fas fa-clock" /> {data.observationTime}</p>
      </div>
    </div>
  )
}

export default OpenWeather
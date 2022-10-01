// import { useState} from 'react'

const OpenWeather = (props) => {
  const {openweather} = props;

  return (
    <div className="weather-box">

      <div className="weather-box_title-box">
        <h4 className="weather-box_title-box--title">{openweather.locationName}</h4>
        <label htmlFor="input-toggle_openWeather" className="weather-box_title-box--check">
          <i className="fas fa-map-marker-alt" />
        </label>
        <input className="weather-box_title-box--check-box" type="checkbox"  id="input-toggle_openWeather"/>
        <input type="text"  placeholder="City" className="weather-box_title-box--input"/>
      </div>
      
      <div className="weather">
        <div className="weather-temperature">
          <h2>{ Math.round(openweather.temperature)}<span>&deg;C</span></h2>
          <p>{openweather.description}</p>
        </div>
        <div className="weather-pic">
          <img src={`http://openweathermap.org/img/wn/${openweather.weatherIcon}@2x.png`} alt="" />
        </div>
      </div>
      <div className="weather-sub">
        <p><i className="fas fa-wind" /> {openweather.windSpeed} m/s</p>
          {/* <p>{openweather.rainPossibility} %</p> */}
          <p><i className="fas fa-clock" /> {openweather.observationTime}</p>
      </div>
    </div>
  )
}

export default OpenWeather
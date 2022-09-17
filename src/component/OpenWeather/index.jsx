// import { useState} from 'react'

const OpenWeather = (props) => {
  const {openweather} = props;

  return (
    <div className="weather-box">
      <h4 className="weather-title">{openweather.locationName} <i className="fas fa-map-marker-alt" /></h4>
      <div className="weather-main">
        <div className="weather-temperature">
          <h2>{ Math.round(openweather.temperature)} &deg;C </h2>
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
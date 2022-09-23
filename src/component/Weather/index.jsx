const Weather = (props)=> {
  const {weather} = props;
  // console.log(weather.weatherCode)
  return (
    <div className="weather-box">
      <h4 className="weather-title">{weather.locationName} <i className="fas fa-map-marker-alt" /></h4>
      <div className="weather-main">
        <div className="weather-temperature">
          <h2>{ Math.round(weather.temperature)}<span>&deg;C</span></h2>
          <p>{weather.description}</p>
        </div>
        <div className="weather-pic">
          <img src={`http://openweathermap.org/img/wn/${weather.weatherCode}@2x.png`} alt="" />
        </div>
      </div>
      <div className="weather-sub">
        <p><i className="fas fa-wind" />  {weather.windSpeed} m/s</p>
          <p><i className="fas fa-cloud-showers-heavy" />  {weather.rainPossibility} %</p>
          <p><i className="fas fa-clock" />{weather.observationTime}</p>
      </div>
    </div>
  )
}

export default Weather
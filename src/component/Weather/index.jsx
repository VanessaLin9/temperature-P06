const Weather = (props)=> {
  const {weather} = props;
  // console.log(weather.weatherCode)
  return (
    <div className="weather-box">
      <div className="weather-box_title-box">
        <h4 className="weather-box_title-box--title">{weather.locationName}</h4>
        <label htmlFor="input-toggle" className="weather-box_title-box--check">
          <i className="fas fa-map-marker-alt" />
        </label>
        <input className="weather-box_title-box--check-box" type="checkbox"  id="input-toggle"/>
        {/* <input type="text" className="weather-box_title-box--input"/> */}
      </div>

      <div className="weather">
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
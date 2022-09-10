
const Weather = (props)=> {
  const {weather} = props;

  return (
    <div className="weather">
        <h4>{weather.locationName}</h4>
        <h2>{ Math.round(weather.temperature)} &deg;C </h2>
        <p>{weather.description}</p>
        <p>{weather.windSpeed}</p>
        <p>{weather.rainPossibility} %</p>
        <p>{weather.observationTime}</p>
      </div>
  )
}

export default Weather
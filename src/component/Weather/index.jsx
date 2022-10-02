import useSWR from 'swr';
import {fetchWeather} from '../../services/api'

const Weather = ()=> {
  const { data, error } = useSWR('taipei', fetchWeather)
  // const {weather} = props;

  if(error) return <div>failed to loading</div>;
  if (!data) return <div>loading.....</div>;

  return (
    <div className="weather-box">
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <div className="weather-box_title-box">
        <h4 className="weather-box_title-box--title">{data.locationName}</h4>
        <label htmlFor="input-toggle" className="weather-box_title-box--check">
          <i className="fas fa-map-marker-alt" />
        </label>
        <input className="weather-box_title-box--check-box" type="checkbox"  id="input-toggle"/>
        {/* <input type="text" className="weather-box_title-box--input"/> */}
      </div>

      <div className="weather">
        <div className="weather-temperature">
          <h2>{ Math.round(data.temperature)}<span>&deg;C</span></h2>
          <p>{data.description}</p>
        </div>
        <div className="weather-pic">
          <img src={`http://openweathermap.org/img/wn/${data.weatherCode}@2x.png`} alt="" />
        </div>
      </div>
      <div className="weather-sub">
        <p><i className="fas fa-wind" />  {data.windSpeed} m/s</p>
          <p><i className="fas fa-cloud-showers-heavy" />  {data.rainPossibility} %</p>
          <p><i className="fas fa-clock" />{data.observationTime}</p>
      </div>
    </div>
  )
}

export default Weather
import momentTZ from 'moment-timezone'

const OPENTOKEN = process.env.REACT_APP_OPEN_Token;
const latitude = '43.0408';
const longitude = '-78.7812';


export const fetchOpenWeather = () => {
  return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${OPENTOKEN}&units=metric&lang=zh_tw`)
   .then(res => res.json())
   .then((data) => {
      const date = new Date().getTime()
      const timezone = "America/New_York"
      const timeFormate = momentTZ(date).tz(timezone).format('YYYY-MM-DD HH:mm:ss')
      return {
        locationName: data.name,
        windSpeed: data.wind.speed,
        temperature: data.main.temp,
        observationTime: timeFormate,
        description: data.weather[0].description,
        weatherIcon: data.weather[0].icon,
      }
   })
}


import momentTZ from 'moment-timezone'

const OPENTOKEN = process.env.REACT_APP_OPEN_Token;
const latitude = '43.0408';
const longitude = '-78.7812';
const TOKEN = process.env.REACT_APP_Token;
const LOCATION = '臺北';
const LOCATION_CITY = '臺北市';


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



export const fetchWeather = () => {
const nowWeather = fetch(`https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=${TOKEN}&locationName=${LOCATION}`);
const threeDayWeather = fetch(`https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=${TOKEN}&locationName=${LOCATION_CITY}`)

 return Promise.all([nowWeather, threeDayWeather])
  .then(res => Promise.all(res.map(r => r.json())))
  .then(([now, three]) => {
      const location = now.records.location[0]
      const date = new Date().getTime()
      const timezone = "Asia/Taipei"
      const timeFormate = momentTZ(date).tz(timezone).format('YYYY-MM-DD HH:mm:ss')
      const weatherElements = location.weatherElement.reduce((needElements, item) => {
        if(['WDSD', 'TEMP'].includes(item.elementName)){
          needElements[item.elementName] = item.elementValue
        }
        return needElements
      }, {})
      const locationData = three.records.location[0]
      const ThreeWeatherElements = locationData.weatherElement.reduce((needElements, item)=> {
        if(['Wx', 'PoP', 'CI'].includes(item.elementName)){
          needElements[item.elementName]= item.time[0].parameter
        }
        return needElements
      }, {})
      const weatherCode = (ThreeWeatherElements.Wx.parameterValue)/1
      
      const findFitPic = (code: number)=> {
        if(code> 11){ return '10d' }
        const picCode = ['13d', '01d', '02d', '02d','03d', '04d', '04d', '03d','09d', '10d', '11d', '10d']
        return picCode[code]
      }
    return {
      locationName: location.locationName, 
      windSpeed: weatherElements.WDSD,
      temperature: weatherElements.TEMP,
      observationTime: timeFormate,
      description: ThreeWeatherElements.Wx.parameterName,
      weatherCode: findFitPic(weatherCode),
      rainPossibility: ThreeWeatherElements.PoP.parameterName,
      comfortability: ThreeWeatherElements.CI.parameterName,
    }
  })
}

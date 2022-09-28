import { useEffect, useState } from "react"
import momentTZ from 'moment-timezone'

const TOKEN = process.env.REACT_APP_Token
const LOCATION = '臺北'
const LOCATION_CITY = '臺北市'

const useWeather = () => {

 const [weather, setWeather] = useState({
   locationName: "台南縣",
   windSpeed: 1.1,
   temperature: 22.9,
   observationTime: '2020-12-12 22:10:00',
   description: "多雲時晴",
   weatherCode: "1",
   rainPossibility: 48.3,
   comfortability:'456',
 })

  const fetchWeatherNow = ()=> {
    fetch(`https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=${TOKEN}&locationName=${LOCATION}`)
    .then((res) => res.json())
    .then((Data) => {
      const location = Data.records.location[0]
      const date = new Date().getTime()
      const timezone = "Asia/Taipei"
      const timeFormate = momentTZ(date).tz(timezone).format('YYYY-MM-DD HH:mm:ss')
      const weatherElements = location.weatherElement.reduce((needElements, item) => {
        if(['WDSD', 'TEMP'].includes(item.elementName)){
          needElements[item.elementName] = item.elementValue
        }
        return needElements
      }, {})
      // const observationTimeString = location.time.obsTime.split(' ')
      // const dateString = observationTimeString[0]
      // const timeString = observationTimeString[1]
      setWeather((prev) => ({
        ...prev,
        locationName: location.locationName, 
        windSpeed: weatherElements.WDSD,
        temperature: weatherElements.TEMP,
        observationTime: timeFormate
      }))
    })
  }

  const fetchWeather36hr = ()=> {
    fetch(`https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=${TOKEN}&locationName=${LOCATION_CITY}`)
    .then((res) => res.json())
    .then((data)=>{
     
      const locationData = data.records.location[0]
      const weatherElements = locationData.weatherElement.reduce((needElements, item)=> {
        if(['Wx', 'PoP', 'CI'].includes(item.elementName)){
          needElements[item.elementName]= item.time[0].parameter
        }
        return needElements
      }, {})
      const weatherCode = (weatherElements.Wx.parameterValue)/1
      
      const findFitPic = (code: number)=> {
        if(code> 11){ return '10d' }
        const picCode = ['13d', '01d', '02d', '02d','03d', '04d', '04d', '03d','09d', '10d', '11d', '10d']
        return picCode[code]
      }

      setWeather((prev)=> ({
        ...prev,
        description: weatherElements.Wx.parameterName,
        weatherCode: findFitPic(weatherCode),
        rainPossibility: weatherElements.PoP.parameterName,
        comfortability: weatherElements.CI.parameterName,
      }))
  })
}
  
  useEffect(()=>{
    fetchWeatherNow()
    fetchWeather36hr()
  },[])
 

  return {weather}
}

export default useWeather
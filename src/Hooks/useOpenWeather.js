import { useEffect, useState } from 'react'
import axios from 'axios'
import momentTZ from 'moment-timezone'

const OPENTOKEN = process.env.REACT_APP_OPEN_Token
const latitude = '43.0408'
const longitude = '-78.7812'

const useOpenWeather = () => {
 const [openWeather, setOpenWeather] = useState({
   locationName: "苗栗縣",
   windSpeed: 1.1,
   temperature: 22.9,
   observationTime: '2077-12-12 22:10:00',
   description: "多雲時晴",
   weatherIcon: "10d",
   rainPossibility: 48.3,
   comfortability:'456',
 })
  
//  const getCoordinateByName = ()=> {
//   axios.get('http://api.openweathermap.org/geo/1.0/direct?q=buffalo&limit=5&appid=cd667218865e54b8e2f7fe6241e481be')
//   .then(({data})=> console.log(data))
//   .catch((err)=> console.log(err))
//  }


 const fetchOpenWeather = () => {
  axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${OPENTOKEN}&units=metric&lang=zh_tw`)
    .then(({data}) => {
      const date = new Date().getTime()
      const timezone = "America/New_York"
      const timeFormate = momentTZ(date).tz(timezone).format('YYYY-MM-DD HH:mm:ss')
      setOpenWeather((prev)=>({
        ...prev,
        locationName: data.name,
        windSpeed: data.wind.speed,
        temperature: data.main.temp,
        observationTime: timeFormate,
        description: data.weather[0].description,
        weatherIcon: data.weather[0].icon,
      }))
    })
    .catch((err)=> console.log(err))
 }
   
  useEffect(()=> {
    fetchOpenWeather()
  },[])
  return {openWeather}
}

export default useOpenWeather
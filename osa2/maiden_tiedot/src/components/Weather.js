import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Weather = ({capital}) => {

    console.log("Capital is: ", capital)

   const api_key = process.env.REACT_APP_API_KEY

    const [newWeather, setNewWeather] = useState('')

    useEffect(() => {
        axios
        .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${capital}`)
        .then(response => {
          console.log("Response: ", response)
          setNewWeather(response.data)
        })
      }, [api_key, capital])
      
      console.log("Weather data: ", newWeather)
      if (newWeather === '') {
          return (
              <p></p>
          )
      } else {
        return (
        <div>
            <h1>Weather in {capital}</h1>
            <p>temperature: {newWeather.current.temperature} Celsius</p>
            <p>feels like: {newWeather.current.feelslike} Celsius</p>
            <img width="100" height="100" src={newWeather.current.weather_icons} alt="iunno" />
            <p>wind: {newWeather.current.wind_speed} kmh direction {newWeather.current.wind_dir} </p>
        </div>
        )
      }
}

export default Weather


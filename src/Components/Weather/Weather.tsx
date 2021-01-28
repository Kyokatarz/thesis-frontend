import React from 'react'
import { TiWeatherCloudy } from 'react-icons/ti'

import './Weather.scss'

type Props = {
  temperature: number | undefined
  humidity: number | undefined
  icon: string
}

const Weather: React.FC<Props> = ({ temperature, humidity, icon }) => {
  return (
    <div className="Weather">
      <h2>
        Weather <TiWeatherCloudy />{' '}
        <span className="TemperatureAndHumidity_PoweredBy">
          <em>Powered by openweathermap.org</em>
        </span>
      </h2>
      <p>
        Temperature: <span>{temperature}</span> &deg; C
      </p>

      <p>
        Humidity: <span>{humidity} % </span>
      </p>

      {icon && (
        <img
          className="Weather__WeatherDescribingIcon"
          src={`http://openweathermap.org/img/wn/${icon}@4x.png`}
          alt=""
        />
      )}
    </div>
  )
}

export default Weather

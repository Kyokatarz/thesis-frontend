import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FaRaspberryPi } from 'react-icons/fa'

import FlameSection from '../FlameSection'
import MotionSection from '../MotionSection'
import TemperatureAndHumidity from '../TemperatureAndHumidity'
import Weather from '../Weather'
import './Home.scss'

const raspPiServer = 'http://192.168.0.110:3000'

const Home = () => {
  const [data, setData] = useState({
    flameLog: '',
    motionLog: '',
    humidity: undefined,
    temperature: undefined,
  })

  const [weather, setWeather] = useState({
    temperature: undefined,
    humidity: undefined,
    icon: '',
  })

  const getData = async () => {
    console.log('fetching')
    const resp = await axios.get(raspPiServer + '/api/all')
    const { flameLog, motionLog, temperature, humidity } = resp.data
    setData({ flameLog, motionLog, temperature, humidity })
  }

  const getWeather = async () => {
    const resp = await axios.get(
      'http://api.openweathermap.org/data/2.5/weather?q=Helsinki,00420&appid=72284372a6f3de7af08cb15a9da51d0f&units=metric'
    )

    const { temp: temperature, humidity } = resp.data.main
    const { icon } = resp.data.weather[0]
    setWeather({ icon, temperature, humidity })
  }
  useEffect(() => {
    getData()
    setInterval(() => {
      getData()
    }, 4 * 1000)
    getWeather()
    setInterval(() => {
      getWeather()
    }, 600 * 1000)
  }, [])

  return (
    <div className="Home">
      <h1>
        My Raspberry Pi <FaRaspberryPi />{' '}
      </h1>
      <div className="Home__LogSection">
        <FlameSection flameLog={data.flameLog} />
        <MotionSection motionLog={data.motionLog} />
      </div>
      <TemperatureAndHumidity
        temperature={data.temperature}
        humidity={data.humidity}
      />
      <Weather
        temperature={weather.temperature}
        humidity={weather.humidity}
        icon={weather.icon}
      />
    </div>
  )
}

export default Home

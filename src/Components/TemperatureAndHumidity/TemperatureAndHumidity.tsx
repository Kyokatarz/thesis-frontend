import React from 'react'
import { FaHome } from 'react-icons/fa'

import './TemperatureAndHumidity.scss'

type Props = {
  temperature: number | undefined
  humidity: number | undefined
}

const TemperatureAndHumidity: React.FC<Props> = ({ temperature, humidity }) => {
  return (
    <div className="TemperatureAndHumidity">
      <h2>
        Room Temperature <FaHome />{' '}
      </h2>
      <p>
        Temperature: <span>{temperature}</span> &deg; C
      </p>

      <p>
        Humidity: <span>{humidity} % </span>
      </p>
    </div>
  )
}

export default TemperatureAndHumidity

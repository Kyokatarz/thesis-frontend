import React from 'react'
import { GiFlame } from 'react-icons/gi'

type Props = {
  flameLog: string
}

const FlameSection: React.FC<Props> = ({ flameLog }) => {
  return (
    <div>
      <h2>
        Flame Logs <GiFlame />
      </h2>
      <textarea disabled value={flameLog || 'Log is empty.'} />
    </div>
  )
}

export default FlameSection

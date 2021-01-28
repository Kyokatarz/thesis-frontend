import React from 'react'
import { GiWindSlap } from 'react-icons/gi'

type Props = {
  motionLog: string
}

const MotionSection: React.FC<Props> = ({ motionLog }) => {
  return (
    <div>
      <h2>
        Motion Logs <GiWindSlap />
      </h2>
      <textarea disabled value={motionLog || 'Log is empty.'} />
    </div>
  )
}

export default MotionSection

import React from 'react'

// css
import './TaskDescription.css'

export default function TaskDescription({description}) {
  return (
    <p className='task-description'>{description}</p>
  )
}

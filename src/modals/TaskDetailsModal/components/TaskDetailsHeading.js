import React from 'react'

// imgs
import elipsis from '../../../assets/icon-vertical-ellipsis.svg'

// css
import './TaskDetailsHeading.css'


export default function TaskDetailsHeading(props) {
  return (
    <div className='task-heading__wrapper'>
        <p>{props.taskName}</p>
        <img src={elipsis} alt="" />
    </div>
  )
}

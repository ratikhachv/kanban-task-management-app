import React from 'react'

// css 
import "./TaskTemplate.css"

export default function TaskTemplate(props) {
  return (
    <div className='task__wrapper'>
      <h4>{props.taskName}</h4>
      <p>{props.toDoSubtask} of {props.totalSubtasks} subtasks</p>
    </div>
  )
}

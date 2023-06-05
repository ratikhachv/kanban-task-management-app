import React from 'react'

// components
import Task from './components/Task'
import ColumnTemplate from './ColumnTemplate'
import TaskStatus from './components/TaskStatus'

export default function Column(props) {
  return (
    <ColumnTemplate status={<TaskStatus status="Doing" taskAmount="3"/>} task={<Task/>}/>
  )
}

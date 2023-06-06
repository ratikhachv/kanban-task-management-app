import React from 'react'

import './SubtaskAmount.css'

export default function SubtaskAmount({checkedSubtasks, totalSubtasks}) {
  return (
    <p className='subtask-amount'>Subtasks ({checkedSubtasks} of {totalSubtasks})</p>
  )
}

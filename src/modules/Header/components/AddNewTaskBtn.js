import React from 'react'

import './AddNewTaskBtn.css'

export default function AddNewTaskBtn({handleClick, btnText}) {
  return (
    <button className='addNewTasks-btn' onClick={handleClick}>{btnText}</button>
  )
}

import React from 'react'

// css
import './PlatformLaunch.css'

// imgs
import elipsis from '../../../assets/icon-vertical-ellipsis.svg'

// components
import AddNewTaskBtn from './AddNewTaskBtn'

export default function PlatformLaunch() {
  return (
    <div className='platform-launch__wrapper'>
        <p >Platform Launch</p>
        <div className="header-clickables">
           <AddNewTaskBtn/>
            <img src={elipsis} alt="" />
        </div>
    </div>
  )
}

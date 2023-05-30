import React from 'react'

// css
import './PlatformLaunch.css'

// imgs
import elipsis from '../../../assets/icon-vertical-ellipsis.svg'

export default function PlatformLaunch() {
  return (
    <div className='platform-launch__wrapper'>
        <p >Platform Launch</p>
        <div className="header-clickables">
            <button>+Add New Task</button>
            <img src={elipsis} alt="" />
        </div>
    </div>
  )
}

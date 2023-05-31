import React from 'react'

// imgs
import hideIcon from '../../../assets/icon-hide-sidebar.svg'

// css
import './HideSideBar.css'

export default function HideSideBar() {
  return (
    <p className='hide-sidebar'>
      <img src={hideIcon} alt="" />
      Hide Sidebar
    </p>
  )
}

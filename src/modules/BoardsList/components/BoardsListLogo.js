import React from 'react'

// imgs
import logo from '../../../assets/logo-dark.svg'

// css
import './BoardListsLogo.css'

export default function BoardsListLogo() {
  return (
    <div className='boardlists-logo__wrapper'>
      <img src={logo} alt="" />
    </div>
  )
}

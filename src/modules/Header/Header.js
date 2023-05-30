import React from 'react'

// css
import './Header.css'

// components
import HeaderLogo from './components/HeaderLogo'
import PlatformLaunch from './components/PlatformLaunch'

export default function Header() {
  return (
    <header>
       <HeaderLogo/>
       <PlatformLaunch/>
    </header>
  )
}

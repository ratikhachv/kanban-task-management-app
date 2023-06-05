import React from 'react'

import './MainContentFullTemplate.css'

export default function MainContentFullTemplate(props) {
  return (
    <div className="mc-full__wrapper">
      {props.column}
      {props.column}
      {props.column}
      {props.newColumn}
    </div>
  )
}

import React from 'react'

// css
import './Button.css'

export default function Button(props) {
    const className = "custom-button " + props.color 

  return (
    <button className={className}>
        {props.text}
    </button>
  )
}

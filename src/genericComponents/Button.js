import React from 'react'

// css
import './Button.css'

export default function Button({text}) {
    const color = text.includes("+") ? "grey" : "blue" 
    const className = "custom-button " + color 

  return (
    <button className={className}>
        {text}
    </button>
  )
}

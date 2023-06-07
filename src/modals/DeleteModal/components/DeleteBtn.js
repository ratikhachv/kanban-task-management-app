import React from 'react'

// css
import './DeleteBtn.css'

export default function DeleteBtn({text}) {
    const color= text == "delete" ? "red" : "grey"

  return (
    <button className={`delete-modal__btn ${color}`}>{text}</button>
  )
}

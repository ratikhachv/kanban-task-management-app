import React from 'react'

import './DeleteHeading.css'

export default function DeleteHeading({toDelete}) {
  return (
    <h2 className='delete-heading'>Delete this {toDelete}?</h2>
  )
}

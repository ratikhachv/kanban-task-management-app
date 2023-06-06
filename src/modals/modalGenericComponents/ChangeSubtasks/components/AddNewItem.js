import React from 'react'

// css
import './AddNewItem.css'

import cross from '../../../../assets/icon-cross.svg'

export default function AddNewItem() {
  return (
    <div className='add-new-item__wrapper'>
      <input type="text" placeholder='e.g. Make coffee' />
      <img src={cross} alt="" />
    </div>
  )
}

import React from 'react'

import './ChangeBoardTemplate.css'

export default function ChangeBoardTemplate(props) {
  return (
    <div className='modal-backdrop'>
        <div className='modal-content__wrapper'>
            {props.modalRole}
            {props.name}
            {props.columns}
            {props.createBoardBtn}
        </div>
    </div>
  )
}

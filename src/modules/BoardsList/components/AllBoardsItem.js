import React from 'react'

// imgs
import boardIcon from "../../../assets/icon-board.svg"

// css 
import './AllBoardsItem.css'

export default function AllBoardsItem(props) {
  return (
    <p className='all-boards-item'>
       <img src={boardIcon} alt="" /> {props.boardName}
    </p>
  )
}

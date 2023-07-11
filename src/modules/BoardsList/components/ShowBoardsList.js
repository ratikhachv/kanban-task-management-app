import React from 'react'

// imgs 
import ShowIFcon from '../../../assets/icon-show-sidebar.svg'

// css
import './ShowBoardsList.css'


export default function ShowBoardsList({setShowBoards}) {
  return (
    <>
        <img src={ShowIFcon} alt="" className='show-icon' onClick={()=>setShowBoards(true)}/>
    </>
  )
}

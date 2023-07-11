import React, { useState } from 'react'

// css
import './PlatformLaunch.css'

// imgs
import elipsis from '../../../assets/icon-vertical-ellipsis.svg'

// components
import AddNewTaskBtn from './AddNewTaskBtn'
import CustomDropdown from '../../../genericComponents/CustomDropdown'
import useModal from '../../../customHooks/useModal'
import ModalRole from '../../../modals/modalGenericComponents/ModalRole'
import Textarea from '../../../modals/modalGenericComponents/Textarea'
import AddNewSect from '../../../modals/modalGenericComponents/ChangeSubtasks/AddNewSect'
import Button from '../../../genericComponents/Button'

export default function PlatformLaunch() {
  const [isClicked, setIsClicked] = useState(false);

  const [Modal, openModal] =useModal()

  return (
    <div className='platform-launch__wrapper'>
        <p >Platform Launch</p>
        <div className="header-clickables">
           <AddNewTaskBtn btnText={"+ Add New Task"} handleClick={openModal}/>
            <img src={elipsis} alt=""  onClick={()=>{setIsClicked(prev => !prev)}}/>
            <CustomDropdown item={"board"} isClicked={isClicked} />
        </div>
        <Modal>
          <ModalRole modalRole={"Add New Task"}/>
          <Textarea labelText={"Title"}/>
          <Textarea labelText={"Description"} />
          <AddNewSect heading={"Subtasks"} text={"+ Add New Subtask"}/>
          <Button text={"Create Task"}/>
        </Modal>
    </div>
  )
}

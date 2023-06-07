import React from 'react'
import ChangeBoardTemplate from './ChangeBoardTemplate'
import ModalRole from '../modalGenericComponents/ModalRole'
import Textarea from '../modalGenericComponents/Textarea'
import AddNewSect from '../modalGenericComponents/ChangeSubtasks/AddNewSect'
import Button from '../../genericComponents/Button'

// components


export default function ChangeBoardModal() {
  return (
    <ChangeBoardTemplate
        modalRole={<ModalRole modalRole={"Edit Board"}/>}
        name={<Textarea labelText={"Board Name"} description={"Platform Launch"}/>}
        columns={<AddNewSect heading="Board Columns" text={"+ Add New Column"}/>}
        createBoardBtn={<Button text={"Save Changes"}/>}
    />
  )
}

import React from 'react'

// components
import ChangeTaskTemplate from './ChangeTaskTemplate'
import ModalRole from '../modalGenericComponents/ModalRole'
import Textarea from '../modalGenericComponents/Textarea'
import AddNewSect from '../modalGenericComponents/ChangeSubtasks/AddNewSect'

export default function ChangeTaskModal() {
  return (
    <ChangeTaskTemplate
    modalRole={<ModalRole modalRole={'Add Task'}/>}
    title={<Textarea labelText={"title"}/>}
    addDescription={<Textarea labelText={"Description"}/>}
    subtasks={<AddNewSect/>}
    status={""}
    submitButton={""}
    />
  )
}

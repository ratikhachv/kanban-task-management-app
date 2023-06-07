import React from 'react'

// components
import ChangeTaskTemplate from './ChangeTaskTemplate'
import ModalRole from '../modalGenericComponents/ModalRole'
import Textarea from '../modalGenericComponents/Textarea'
import AddNewSect from '../modalGenericComponents/ChangeSubtasks/AddNewSect'
import Button from '../../genericComponents/Button'
import CurrentStatus from '../modalGenericComponents/CurrentStatus'

export default function ChangeTaskModal() {
  return (
    <ChangeTaskTemplate
    modalRole={<ModalRole modalRole={'Add New Task'}/>}
    title={<Textarea labelText={"title"}/>}
    addDescription={<Textarea labelText={"Description"}/>}
    subtasks={<AddNewSect/>}
    status={<CurrentStatus heading={"status"}/>}
    submitButton={<Button text={"Create Task"}/>}
    />
  )
}

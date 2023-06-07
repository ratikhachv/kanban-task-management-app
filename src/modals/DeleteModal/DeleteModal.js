import React from 'react'
import DeleteModalTemplate from './DeleteModalTemplate'
import DeleteHeading from './components/DeleteHeading'
import DeleteWarning from './components/DeleteWarning'
import DeleteBtn from './components/DeleteBtn'

export default function DeleteModal() {
  return (
    <DeleteModalTemplate
        heading={<DeleteHeading toDelete={"task"}/>}
        warning={<DeleteWarning typeToDelete={'task'} nameToDelete={"some Task Name"}/>}
        deleteButton={<DeleteBtn text={"delete"}/>}
        cancelButton={<DeleteBtn text={"cancel"}/>}
    />
  )
}

import React from 'react'
import DeleteModalTemplate from './DeleteModalTemplate'
import DeleteHeading from './components/DeleteHeading'
import DeleteWarning from './components/DeleteWarning'
import DeleteBtn from './components/DeleteBtn'

export default function DeleteModal(props) {
  return (
    <DeleteModalTemplate
        heading={<DeleteHeading toDelete={toDelete}/>}
        warning={<DeleteWarning typeToDelete={typeToDelete} nameToDelete={nameToDelete}/>}
        deleteButton={<DeleteBtn text={text}/>}
        cancelButton={<DeleteBtn text={text}/>}
    />
  )
}

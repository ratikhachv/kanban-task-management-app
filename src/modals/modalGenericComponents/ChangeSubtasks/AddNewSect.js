import React from 'react'


import AddNewSectTemplate from './AddNewSectTemplate'
import AddNewItem from './components/AddNewItem'
import AddNewSectHeading from './components/AddNewSectHeading'
import Button from '../../../genericComponents/Button'


export default function AddNewSect() {
  return (
    <AddNewSectTemplate
        heading={<AddNewSectHeading heading='Subtasks'/>}
        item={<AddNewItem/>}
        button={<Button text="+ Create New Task"/>}
    />
    )
}

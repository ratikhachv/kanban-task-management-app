import React from 'react'


import AddNewSectTemplate from './AddNewSectTemplate'
import AddNewItem from './components/AddNewItem'
import AddNewSectHeading from './components/AddNewSectHeading'
import Button from '../../../genericComponents/Button'


export default function AddNewSect(props) {
  return (
    <AddNewSectTemplate
        heading={<AddNewSectHeading heading={props.heading}/>}
        item={<AddNewItem/>}
        button={<Button text={props.text}/>}
    />
    )
}

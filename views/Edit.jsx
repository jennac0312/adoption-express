import React from 'react'
import Rehome from './Rehome'

const Edit = ( { animal, type } ) => {
  return (
    <div>
      <h1>Edit {animal.name}</h1>
      <Rehome type={type} use={"edit"} />
    </div>
  )
}

export default Edit

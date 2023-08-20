import React from 'react'

const Edit = ( { animal, type } ) => {
  return (
    <div>
      <h1>Edit {animal.name}</h1>
      <form action={`/${type}s/edit/${animal._id}?_method=PUT`} method='POST'>
                <label htmlFor="">NAME:</label>
                    <input type="text" name="name" placeholder={animal.name} /> <br />
                <label htmlFor="">AGE:</label>
                    <input type="number" name="age" placeholder={animal.age} /> <br />
                <label htmlFor="">DESCRIPTION:</label>
                    <input type="text" name="description" placeholder={animal.description} /> <br />
                <label htmlFor="">IMAGE:</label>
                    <input type="text" name="image" id="" placeholder={animal.image} /> <br />
                {
                type === 'cat' ? 
                <>
                    <label>HAD FIRST CHECKUP:</label>
                        <input type="checkbox" name="checkup" id="" /> <br />
                </> :
                <>
                    <label htmlFor="">BREED</label>
                        <input type="text" name="breed" /> <br />
                </>
                }
                <a href={`/${type}s`}>
                    <input type="submit" value={'Update'}/>
                </a>
            </form>
    </div>
  )
}

export default Edit

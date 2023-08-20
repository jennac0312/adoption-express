import React from 'react'

const Rehome = ( { type, use } ) => {

    const form = ( type ) => {
        return(
            <form action={`/rehome/${type}`} method='POST'>
                <label htmlFor="">NAME:</label>
                    <input type="text" name="name"/> <br />
                <label htmlFor="">AGE:</label>
                    <input type="number" name="age"/> <br />
                <label htmlFor="">DESCRIPTION:</label>
                    <input type="text" name="description"/> <br />
                <label htmlFor="">IMAGE:</label>
                    <input type="text" name="image" id="" /> <br />
                {
                type === 'cat' ? 
                <>
                    <label>HAD FIRST CHECKUP:</label>
                        <input type="checkbox" name="checkup" id="" /> <br />
                </> :
                <>
                    <label htmlFor="">BREED</label>
                        <input type="text" name="breed"/> <br />
                </>
                }
                <a href={`/${type}s`}>
                    <input type="submit" value={ use !== "edit" ? `Rehome` : 'Update'}/>
                </a>
            </form>
        )
    }

    return (
          <div>
            <a href={`/${type}s`}>Return</a>
            { use !== "edit" && 
                <h1>REHOME {type.toUpperCase()}</h1>
            }

            { form(type) }
          </div>
    )

}

export default Rehome

import React from 'react'

const Rehome = ( { type } ) => {

    const form = (type) => {
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
                <input type="submit" value={`Rehome`}/>
            </form>
        )
    }

    const cat = () => {
        return (
          <div>
            REHOME {type.toUpperCase()}
            { form('cat') }
          </div>
        )
    }
    const dog = () => {
        return (
            <div>
            REHOME {type.toUpperCase()}
            { form('dog') }
        </div>
        )
    }

    return type === "cat" ? cat() : dog()
}

export default Rehome

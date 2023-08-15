import React from 'react'

const Animals = ( { animal } ) => {

    const cats = () => {
        return (
          <div>
            cats
          </div>
        )
    }

    const dogs = () => {
        return(
            <div>
                dogs
            </div>
        )
    }

    return animal === "cats" ? cats() : dogs()
}

export default Animals

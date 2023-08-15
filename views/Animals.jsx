import React from 'react'

const Animals = ( { type } ) => {

    const cats = () => {
        return (
          <div>
            <h1>CATS</h1>
            <a href="/rehome/cat">
                <button>Rehome A Cat</button>
            </a>
          </div>
        )
    }

    const dogs = () => {
        return(
            <div>
                <h1>DOGS</h1>
                <a href="/rehome/dog">
                    <button>Rehome A Dog</button>
                </a>
            </div>
        )
    }

    return type === "cat" ? cats() : dogs()
}

export default Animals

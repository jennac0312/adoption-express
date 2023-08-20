import React from 'react'

const Animals = ( { type, animals } ) => {

    return (
        <div>
        <a href="/">Return</a>
        <h1 style={{ textAlign: 'center' }}>MEET OUR {type.toUpperCase()}S</h1>
        <a href={`/rehome/${type}`} style={{ margin: 'auto' }}>
            <button>Rehome a {type.toUpperCase()}</button>
        </a>
        <div className="animalContainer" style={{ border: '2px solid black' }}>
            {
                animals.map((animal) => {
                    let { name, age, description, image, breed, hadFirstCheckup, _id } = animal
                    return (
                        <div className="animal" style={ { border: '2px solid crimson', margin: '10px auto', width: '400px', display:'flex', flexDirection: 'column', alignItems: 'center' } }>
                            <p>Meet <span style={ { fontWeight: 'bold' } }>{name}</span></p>
                            <p>{name} is {age} year(s) old</p>
                            <p> More About {name}: {description} </p>
                            <img src={image} alt={`picture of ${name}`} style={{ height: '100px' }}/>

                            <div className="" style={ { display:'flex', justifyContent:'space-around' } }>
                                <form action={`/cats/${animal._id}?_method=DELETE`} method='POST'>
                                    <button>ADOPT ME!</button>
                                </form>
                                <a href={`${type}s/edit/${animal._id}`}>
                                    <button>Edit</button>
                                </a>
                            </div>
                        </div>
                    )
                })
            }
        </div>

        </div>
    )
}

export default Animals

import React from 'react'

const Home = () => {
  return (
    <div>
        <h1>WELCOME TO CATS AND DOGS</h1>
        <p>Are you ready to adopt?</p>

        <a href="/cats">
            <button>Explore Cats</button>
        </a>

        <a href="/dogs">
            <button>Explore Dogs</button>
        </a>
        
        <a href="/rehome">
            <button>Rehome</button>
        </a>

    </div>
  )
}

export default Home

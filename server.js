const express = require("express")
const app = express()
const PORT = 3000
const methodOverride = require("method-override")

// ENV ( needed to access MONGO_URI variable )
require("dotenv").config()
// DATABASE
const mongoose = require("mongoose")
const MONGO_URI = process.env.MONGO_URI

const Cat = require("./models/Cat")
const Dog = require("./models/Dog")


// MIDDLEWARE
app.set("view engine", "jsx")
app.engine("jsx", require("express-react-views").createEngine())

// view body of a post request
app.use(express.urlencoded({extended:false}));
//  allow json
app.use(express.json())

app.use( methodOverride("_method") )

// runs between all routes
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});




// ROUTES
// seed route
app.get('/seed', async ( req, res ) => {
    // deleting ALL current data... optional
    await Cat.deleteMany({})
    await Dog.deleteMany({})

    // add all data
    // await Pokemon.create() // what was i typing??

    res.redirect('/')
})

app.get('/', ( req, res ) => {
    res.render("Home")
})

app.get('/cats', async ( req, res ) => {
    let allCats = await Cat.find({})
    res.render("Animals", { type: 'cat', animals: allCats})
})
app.get('/dogs', async ( req, res ) => {
    let allDogs = await Dog.find({})
    res.render("Animals", { type: 'dog', animals: allDogs})
})

app.get('/rehome/:animal', ( req, res ) => {
    let { animal } = req.params
    res.render("Rehome", { type: animal })
})

app.get(`/cats/edit/:id`, async ( req, res ) => {
    // res.send( req.params.id )
    let { id } = req.params
    
    let animal = await Cat.findById( id )
    
    res.render("Edit", { type: 'cat', animal: animal })
})
app.delete( '/cats/:id', async ( req, res ) => {
    let { id } = req.params

    try {
        await Cat.findByIdAndDelete( id )
        res.redirect('/cats' )
    } catch (error) {
        res.status(500).send( error )
    }
})

app.delete( '/dogs/:id', async ( req, res ) => {
    let { id } = req.params
    
    try {
        await Dog.findByIdAndDelete( id )
        res.redirect('/dogs' )
    } catch (error) {
        res.status(500).send( error )
    }
})

app.put('/cats/edit/:id', async ( req, res ) => {

    let { id } = req.params
    let update = req.body

    try {
        await Cat.findByIdAndUpdate( id, update, { new: true })
        // res.status(200).json(updatedCat)
        res.redirect('/cats')
        
    } catch (error) {
        res.status(500).json( { message: error.message } )
    }
    // res.send( updatedCat )
})
// app.post('/rehome/:animal', async ( req, res ) => {
//     // console.log(req.body)
//     // res.send(req.body)

//     let { type } = req.params
//     let newAnimal = req.body

//     try {
//         if( type === "cat" ){
//             await Cat.create( newAnimal )
//             // res.status(200).send(newAnimal)
//             res.send(newAnimal)
//         } else if( type === "dog" ){
//             await Dog.create( newAnimal )
//             res.send(newAnimal)
//             // res.status(200).send(newAnimal)      
//         }
        
//     } catch (error) {
//         res.status(500).json( { message: error.message } )
//     }
// })

app.post('/rehome/cat', async ( req, res ) => {
    // console.log( req.body )
    // res.send( req.body )

    try {
        const newCat = await Cat.create( req.body )
        // res.status(200).json( newCat )
        res.redirect( '/cats' )
    } catch (error) {
        res.status(500).json( { message: error.message } )
    }  
})

app.post('/rehome/dog', async ( req, res ) => {
    // console.log( req.body )
    // res.send( req.body )

    try {
        const newDog = await Dog.create( req.body )
        // res.status(200).json( newDog )
        res.redirect( '/dogs' )
    } catch (error) {
        res.status(500).json( { message: error.message } )
    }  
})


// CONNECTION AND PORT
mongoose.connect( MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
    app.listen( PORT, ( req, res ) => {
        console.log(`Server is running on PORT ${PORT}`)
    })
});
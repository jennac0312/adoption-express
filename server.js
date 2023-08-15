const express = require("express")
const app = express()
const PORT = 3000

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




// ROUTES
app.get('/', ( req, res ) => {
    res.render("Home")
})

app.get('/cats', ( req, res ) => {
    res.render("Animals", { type: 'cat' })
})
app.get('/dogs', ( req, res ) => {
    res.render("Animals", { type: 'dog' })
})

app.get('/rehome/:animal', ( req, res ) => {
    let { animal } = req.params
    res.render("Rehome", { type: animal })
})

app.post('/rehome/:animal', ( req, res ) => {
    console.log(req.body)
    res.send(req.body)
})

// CONNECTION AND PORT
mongoose.connect( MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
    app.listen( PORT, ( req, res ) => {
        console.log(`Server is running on PORT ${PORT}`)
    })
});
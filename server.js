const express = require("express")

const app = express()
const PORT = 3000


app.set("view engine", "jsx")
app.engine("jsx", require("express-react-views").createEngine())


// ROUTES
app.get('/', ( req, res ) => {
    res.render("Home")
})

app.get('/cats', ( req, res ) => {
    res.render("Animals", { animal: 'cats' })
})
app.get('/dogs', ( req, res ) => {
    res.render("Animals", { animal: 'dogs' })
})


app.listen( PORT, ( req, res ) => {
    console.log(`Server is running on PORT ${PORT}`)
})
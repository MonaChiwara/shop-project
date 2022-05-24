const express = require ('express')
const app = express()
const PORT = 3000
const icecream = require ('./models/icecream.js')


// ===== Engine ======
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// ===== ROUTES ======
// Index 
app.get('/icecream', (req,res) => res.render('Index', {froyo: icecream}))

// New

// Delete

// Update

// Create

// Edit

// Show
app.get('/icecream/:indexOfIcecreamArray', (req,res) => {
    res.render('Show', {froyo: icecream[req.params.indexOfIcecreamArray]})
})

app.listen(PORT, () => console.log(`Listening to port ${PORT}`))
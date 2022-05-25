const express = require ('express')
const app = express()
const PORT = 3000
const icecream = require ('./models/icecream.js')


// ===== Engine ======
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// ===== Middleware =====
app.use(express.urlencoded({extended:false}));
// app.use((req, res, next) => {
//     console.log('I run for all the routes.')
//     next()
// })

// ===== ROUTES ======
// Index 
app.get('/icecream', (req,res) => res.render('Index', {froyo: icecream}))

// New
app.get('/icecream/new', (req,res) => {
    res.render('New')
})

// Delete

// Update

// Create
app.post('/icecream', (req,res) => {
    req.body.readyToEat = req.body.readyToEat === 'on' ? true : false;
    icecream.push(req.body)
    console.log('req.body', req.body)
    res.redirect('/icecream')
  
})

// Edit

// Show
app.get('/icecream/:indexOfIcecreamArray', (req,res) => {
    res.render('Show', {froyo: icecream[req.params.indexOfIcecreamArray]})
})

app.listen(PORT, () => console.log(`Listening to port ${PORT}`))
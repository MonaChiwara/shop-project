require('dotenv').config()
const express = require ('express')
const mongoose = require('mongoose')
const app = express()
const PORT = 3000
const Icecream = require ('./models/Icecream.js')

// ===== Connection to database
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.once('open', () => console.log('Connected to Mongo'))



// ===== Engine ======
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// ===== Middleware =====
// app.use(method('_method'))
app.use(express.urlencoded({extended:false}));
app.use((req, res, next) => {
    console.log('I run for all the routes.')
    next()
})

// ===== ROUTES ======
// Index 
app.get('/icecream', (req, res) => {
    Icecream.find({}, (err, allIcecream) => {
        res.render('Index', {icecream: allIcecream})
    })
})


// New
app.get('/icecream/new', (req,res) => {
    res.render('New')
})

// Delete

// Update

// Create
app.post('/icecream', (req,res) => {
    req.body.readyToEat = req.body.readyToEat === 'on' ? true : false;
    // icecream.push(req.body)
    // console.log('req.body', req.body)

    Icecream.create(req.body, (err,createIcecream) => {
        // res.send(createIcecream)
        res.redirect('/icecream')

    })
   
  
})
console.dir(Icecream)



// Edit

// Show
app.get('/icecream/:id', (req, res) => {
    Icecream.findById(req.params.id, (err, foundIcecream) => {
        res.render('Show', {icecream: foundIcecream})
    } ) 
    
})

app.listen(PORT, () => console.log(`Listening to port ${PORT}`))
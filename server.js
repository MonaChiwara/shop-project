require('dotenv').config()
const express = require ('express')
const { redirect } = require('express/lib/response')
const method = require('method-override')
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
app.use(method('_method'))
app.use(express.urlencoded({extended:false}));
app.use(express.static('public'))
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
app.delete('/icecream/:id', (req,res) => {
    Icecream.findByIdAndDelete(req.params.id, (err) => {
        if (!err){
            res.status(200).redirect('/icecream')
        } else{
            res.status(400).json(err)
        }
    })
})

// Update
app.put('/icecream/:id', (req,res) => { 
    Icecream.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedIcecream) => {
        if (!err) {
            res.status(200).redirect('/icecream')
        } else{
            res.status(400).json(err)
        }
    })
})

// Create
app.post('/icecream', (req,res) => {
    console.log('BEFORE', req.body.name)
    console.log('req.body:', req.body)
    Icecream.create(req.body, (err,createIcecream) => {
        res.redirect('/icecream')

    })
})
console.dir(Icecream)



// Edit
app.get('/icecream/:id/edit', (req,res) => {
    Icecream.findById(req.params.id, (err, foundIcecream) =>{
        if (!err){
            res.render('Edit', {icecream: foundIcecream})
        } else {
            res.status(400).json(err)
        }
    })
})


// Show
app.get('/icecream/:id', (req, res) => {
    Icecream.findById(req.params.id, (err, foundIcecream) => {
        res.render('Show', {icecream: foundIcecream})
    } ) 
    
})

app.listen(PORT, () => console.log(`Listening to port ${PORT}`))
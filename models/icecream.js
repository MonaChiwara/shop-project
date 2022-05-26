
const mongoose = require('mongoose');

const icecreamSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    color:  { type: String, required: true },
    readyToEat: Boolean
});

const Icecream = mongoose.model('Icecream', icecreamSchema);

module.exports = Icecream;


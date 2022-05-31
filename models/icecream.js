
const mongoose = require('mongoose');

const icecreamSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    base:  { type: String, required: true },
    ingredients: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String},
    // inventory: { type: Number}
});

const Icecream = mongoose.model('Icecream', icecreamSchema);

module.exports = Icecream;


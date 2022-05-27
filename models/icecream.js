
const mongoose = require('mongoose');

const icecreamSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    base:  { type: String, required: true },
    ingredients: { type: String, required: true }
});

const Icecream = mongoose.model('Icecream', icecreamSchema);

module.exports = Icecream;


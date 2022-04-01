const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  name:     { type: String, required: true },
  pic:      String,
  cuisines: { type: String, required: true },
  city:     { type: String, default: 'Anytown' },
  state:    { type: String, default: 'USA' },
  founded:  Number
})
module.exports = mongoose.model('Place', placeSchema)

/*
var places = [{
    name: "Angelo's",
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Italian Cuisine',
    pic: '/images/italian.webp'
    }, {
    name: "Ziba's",
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Mediterranean Cuisine',
    pic: '/images/ziba-special.png'
}]
*/
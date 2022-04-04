const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  name:     { type: String, required: true },
  pic:      { type: String, default: "/images/utensils.png"},
  cuisines: { type: String, required: true },
  city:     { type: String, default: 'Anytown' },
  state:    { type: String, default: 'USA' },
  founded: {
    type: Number,
    min: [1673, 'Invalid year - must be > 1673'],
    max: [new Date().getFullYear(), 'Invalid year - must be this year or less']
  }
})

placeSchema.methods.showEstablished = function() {
  return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
}

module.exports = mongoose.model('Place', placeSchema)
const mongoose = require('mongoose')

const bunnySchema = new mongoose.Schema({
  name: { type: String, required: true },
  lifeSpan: { type: Number, required: true },
  origin: { type: String, required: true },
  weight: { type: Number, required: true },
  image: { type: String, required: true },
})

module.exports = mongoose.model('Bunny', bunnySchema)
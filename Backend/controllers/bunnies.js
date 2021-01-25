const bunny = require('../models/bunnies')

async function bunnyIndex (req, res){
  const bunnies = await bunny.find()
  res.status(200).json(bunnies)
}

module.exports = {
  index: bunnyIndex,
}
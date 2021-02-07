const Bunny = require('../models/bunny')

async function bunnyIndex (req, res, next){
  try {
    const bunnies = await Bunny.find()
    if (!bunnies) throw new Error()
    res.status(200).json(bunnies)
  } catch (err){
    next(err)
  }
}

async function bunnyShow (req, res) {
  try {
    const bunny = await Bunny.findById(req.params.id)
    if (!bunny) throw new Error()
    res.status(200).json(bunny)
  } catch (err){
    res.status(404).json({ 'message': 'Not Found' })
  }
}


  
module.exports = {
  index: bunnyIndex,
  show: bunnyShow,
}
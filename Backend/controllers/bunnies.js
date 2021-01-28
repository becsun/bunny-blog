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

async function bunnyCreate(req, res, next) {
  try {
    const createdBunny = await Bunny.create(req.body)
    if (!createdBunny) throw new Error()
    res.status(201).json(createdBunny)
  } catch (err) {
    next(err)
  }
}
  
module.exports = {
  index: bunnyIndex,
  create: bunnyCreate,
  show: bunnyShow,
}
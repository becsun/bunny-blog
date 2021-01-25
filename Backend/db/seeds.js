const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')
const Bunny = require('../models/bunnies')

mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase()

  Bunny.create([{
    
  }])
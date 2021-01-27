const mongoose = require('mongoose')
const { dbURI }  = require('../config/environment')

const Bunny = require('../models/bunny')
const bunnyData = require('./data/bunnies')

mongoose.connect(
  dbURI,
  { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
  async (err) => {

    if (err) {
      console.log(err)
      return
    }
    try {
      await mongoose.connection.db.dropDatabase()
      console.log('Database dropped 👋 ')

      const bunnies = await Bunny.create(bunnyData)

      console.log(`${bunnies.length} Bunnies created`)
      await mongoose.connection.close()
      console.log('goodbye 👋')

    } catch (err) {
      await mongoose.connection.close()
      console.log(err)
    }
  }
)
const mongoose = require('mongoose')

const { dbURI }  = require('../config/environment')

const User = require('../models/user')

const Bunny = require('../models/bunny')

const userData = require('./data/users')
const BunnyPic = require('../models/bunnyPicPage')
const bunnyPicData = require('./data/bunnyPic')

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

      const users = await User.create(userData)
      console.log(`${'👋'.repeat(users.length)} created`)

      

      const bunniesWithUsers = bunnyPicData.map( bunny => {
        bunny.user = users[0]._id
        return bunny
      })
      const bunnyPic = await BunnyPic.create(bunniesWithUsers)

      console.log(`${bunnyPic.length} BunnyPics created`)
      
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
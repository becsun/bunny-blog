const express = require('express')
const app = express()
const mongoose = require('mongoose')
const router = require('./config/router')
const errorHandler = require('./lib/errorHandler')
const logger = require('./lib/logger')



const { dbURI } = require('./config/environment')
const port = process.env.PORT || 8000


mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true , useCreateIndex: true },
  (err) => {
    if (err) {
      console.log(err)
      return
    }
    console.log('Mongo is Connected here')
  }
)

app.use(express.json())
app.use(logger)
app.use('/api', router)
app.use(errorHandler)



app.listen(port, () => console.log(`Up and running on port ${port}`))
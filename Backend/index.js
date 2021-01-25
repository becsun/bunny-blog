const express = require('express')
const logger = require('./lib/logger')
const app = express()
const router = require('./config/router')
const mongoose = require('mongoose')
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
app.use(router)

app.use(logger)

app.listen(port, () => console.log(`Up and running on port ${port}`))
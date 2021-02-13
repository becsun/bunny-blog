const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true, maxLength: 300 },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
},{
  timestamps: true, 
})

const bunnyPicPageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  comments: [commentSchema],
}, {
  timestamps: true,
})

bunnyPicPageSchema.plugin(require('mongoose-unique-validator'))

module.exports = mongoose.model('BunnyPic', bunnyPicPageSchema) 
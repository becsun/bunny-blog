const BunnyPic =  require('../models/bunnyPicPage')
const { notFound } = require('../lib/errorMessage')

async function bunnyPicIndex (req, res, next){
  try {
    const bunnyPic = await BunnyPic.find()
    if (!bunnyPic) throw new Error(notFound)
    res.status(200).json(bunnyPic)
  } catch (err){
    next(err)
  }
}
async function bunnyPicCreate(req, res, next) {
  console.log(req.currentUser)
  try {
    req.body.user = req.currentUser._id
    const createdBunnyPic = await BunnyPic.create(req.body)
    if (!createdBunnyPic) throw new Error(notFound)
    res.status(201).json(createdBunnyPic)
  } catch (err) {
    next(err)
  }
}

async function bunnyPicShow (req, res, next) {
  try {
    const bunnyPic = await BunnyPic.findById(req.params.id).populate('user').populate('comments.user')
    if (!bunnyPic) throw new Error(notFound)
    res.status(200).json(bunnyPic)
  } catch (err){
    next(err)
  }
}
async function bunnyDelete (req, res, next) {
  try {
    const bunnyPic = await BunnyPic.findByIdAndDelete(req.params.id)
    if (!bunnyPic) throw new Error(notFound)
    res.sendStatus(204)
  } catch (err) {
    next(err)
  }
}

async function bunnyPicCommentCreate(req, res, next){
  try {
    const bunnyPic = await BunnyPic.findById(req.params.id)
    if (!bunnyPic) throw Error(notFound)
    const commentBody = req.body
    commentBody.user = req.currentUser._id 
    bunnyPic.comments.push(commentBody)
    await bunnyPic.save() 
    res.status(201).json(bunnyPic)
  } catch (err){
    next(err)
  }
}

async function bunnyPicCommentDelete(req,res, next){
  try {
    const bunnyPic = await BunnyPic.findById(req.params.id)
    if (!BunnyPic) throw new Error(notFound)
    const commentToDelete = bunnyPic.comments.id(req.params.commentId)
    if (!commentToDelete) throw new Error(notFound)
    await commentToDelete.remove()
    await bunnyPic.save()
    res.status(202).json(bunnyPic)
  } catch (err){
    next(err)
  }
}


module.exports = {
  show: bunnyPicShow,
  create: bunnyPicCreate,
  index: bunnyPicIndex,
  delete: bunnyDelete,
  commentCreate: bunnyPicCommentCreate,
  commentDelete: bunnyPicCommentDelete,
  
}
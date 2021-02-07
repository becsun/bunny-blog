const BunnyPic =  require('../models/bunnyPicPage')

async function bunnyPicIndex (req, res, next){
  try {
    const bunnyPic = await BunnyPic.find()
    if (!bunnyPic) throw new Error()
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
    // if (!createdBunnyPic) throw new Error()
    res.status(201).json(createdBunnyPic)
  } catch (err) {
    next(err)
  }
}

async function bunnyPicShow (req, res) {
  try {
    const bunnyPic = await BunnyPic.findById(req.params.id).populate('user')
    if (!bunnyPic) throw new Error()
    res.status(200).json(bunnyPic)
  } catch (err){
    res.status(404).json({ 'message': 'Not Found' })
  }
}
async function bunnyDelete (req, res) {
  try {
    const bunnyPic = await BunnyPic.findByIdAndDelete(req.params.id)
    if (!bunnyPic) throw new Error()
    res.sendStatus(204)
  } catch (err) {
    res.json(err)
  }
}

async function bunnyPicCommentCreate(req, res){
  try {
    const bunny = await bunny.find(req.params.id)
    const commentBody = req.body
    commentBody.user = req.currentUser._id 
    bunny.comments.push(commentBody)
    await bunny.save()
    res.status(201).json(bunny)
  } catch (err){
    res.status(400).json(err)
  }
}



module.exports = {
  show: bunnyPicShow,
  create: bunnyPicCreate,
  index: bunnyPicIndex,
  delete: bunnyDelete,
  commentCreate: bunnyPicCommentCreate,
  
}
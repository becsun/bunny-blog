const router = require('express').Router()
const bunnies = require('../controllers/bunnies')
const auth = require('../controllers/auth')
const bunnyPic = require('../controllers/bunnyPicPage')
const secureRoute = require('../lib/secureRoute')


router.route('/bunnies')
  .get(bunnies.index)

router.route('/bunnies/:id')
  .get(bunnies.show)

router.route('/register')
  .post(auth.register)

router.route('/login')
  .post(auth.login)

router.route('/bunnycommunity')
  .get(bunnyPic.index)
  .post(secureRoute, bunnyPic.create)

router.route('/bunnycommunity/:id')
  .get(bunnyPic.show)
  .delete(secureRoute,bunnyPic.delete)

module.exports = router
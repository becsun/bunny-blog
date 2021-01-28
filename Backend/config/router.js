const router = require('express').Router()
const bunnies = require('../controllers/bunnies')
const auth = require('../controllers/auth')


router.route('/bunnies')
  .get(bunnies.index)
  .post(bunnies.create)

router.route('/bunnies/:id')
  .get(bunnies.show)

router.route('/register')
  .post(auth.register)

router.route('/login')
  .post(auth.login)

module.exports = router
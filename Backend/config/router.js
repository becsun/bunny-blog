const router = require('express').Router()
const bunnies = require('../controllers/bunnies')

router.route('/bunnies')
  .get(bunnies.index)
  .post(bunnies.create)

router.route('/bunnies/:id')
  .get(bunnies.show)

module.exports = router
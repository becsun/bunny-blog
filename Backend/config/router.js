const router = require('express').Router()
const bunnies = require('../controllers/bunnies')

router.route('/bunnies')
  .get(bunnies.index)

module.exports = router
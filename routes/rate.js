const express = require('express')
const router = express.Router()
const rateController = require('../controllers/rate')

router.get('/:id', rateController.getRate)
router.post('/', rateController.createRate)

module.exports = router
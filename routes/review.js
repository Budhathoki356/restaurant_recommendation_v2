const express = require('express')
const router = express.Router()
const reviewController = require('../controllers/review')

router.get('/:id', reviewController.getReviews)
router.post('/', reviewController.createReview)

module.exports = router
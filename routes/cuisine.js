const multer = require('multer')
const express = require('express')
const router = express.Router()
const cuisineController = require('../controllers/cuisines')

router.get('/', cuisineController.getAllCuisine)

module.exports = router
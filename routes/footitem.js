const multer = require('multer')
const express = require('express')
const router = express.Router()
const foodController = require('../controllers/fooditem')
const authorize = require('../middlewares/authorize')

/**
 * File upload Handling
 * */

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './files/images')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
});

function fileFilter(req, file, cb) {
    if (file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg') {
        cb(null, true);
    } else {
        req.fileUplaodFailed = true;
        cb(null, false);
    }
}
const upload = multer({
    storage: storage,
    fileFilter: fileFilter
});

router.get('/', foodController.findAll)

router.post('/', authorize, upload.single('img'), foodController.create)

router.get('/:id', foodController.findOne)

router.put('/:id', authorize, upload.single('img'), foodController.updateFoodItem)

router.delete('/:id', authorize, foodController.deleteFood)

module.exports = router

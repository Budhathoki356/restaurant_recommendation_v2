const multer = require('multer')
const express = require('express')
const router = express.Router()
const restaurantController = require('../controllers/restaurant')
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
    if (file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {
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

router.post('/', authorize, upload.single('img'), restaurantController.createRestaurant)

router.get('/', restaurantController.findAll)

router.get('/:id', restaurantController.findOne)

router.put('/:id', authorize, upload.single('img'), restaurantController.updateRestaurant)

router.delete('/:id', authorize, restaurantController.deleteRestaurant)

router.get('/checkuser/:id', restaurantController.checkUser)

module.exports = router

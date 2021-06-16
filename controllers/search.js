
const FoodItemModel = require('../models/foodItem.model')

const searchRestaurant = async (req, res, next) => {
    // let location = req.query
    let cuisine = req.query.cuisine

    console.log(cuisine)

    await FoodItemModel.find({ $text: { $search: cuisine } })
        .populate({ path: 'restaurant' })
        .limit(6)
        .then(result => {
            if (result[0] == undefined) {
                return res.status(200).json({
                    success: false
                })
            }
            res.status(200).json(result)
        })
}

module.exports = {
    searchRestaurant
}
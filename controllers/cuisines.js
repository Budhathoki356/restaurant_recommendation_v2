
const FoodItemModel = require('../models/foodItem.model')

const getAllCuisine = async (req, res, next) => {
      await FoodItemModel.find({})
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
      getAllCuisine
}
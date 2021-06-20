const ReviewModel = require('../models/review.model')
var mongoose = require('mongoose')

const createReview = async (req, res, next) => {
      try {
            const newReview = new ReviewModel({})
            newReview.review = req.body.review
            newReview.restroId = req.body.restroId
            newReview.userId = req.decoded._id
            const review = await newReview.save(newReview);
            res.status(201).json({
                  status: "success",
                  data: review,
            });
      } catch (err) {
            next(err);
      }
}

const getReviews = async (req, res, next) => {
      try {
            const review = await ReviewModel.find({ restroId: new mongoose.Types.ObjectId(req.params.id) })
                  .populate('userId', { username: 1 })
            res.status(200).json(review)
      } catch (err) {
            next(err)
      }
}

module.exports = {
      createReview,
      getReviews
}
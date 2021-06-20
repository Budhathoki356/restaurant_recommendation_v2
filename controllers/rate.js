const RateModel = require('../models/rate.model')
const mongoose = require('mongoose')

const createRate = async (req, res, next) => {
      try {
            const newRate = new RateModel({})
            newRate.rate = req.body.rate
            newRate.restroId = req.body.restroId
            newRate.userId = req.decoded._id
            const rate = await newRate.save(newRate);
            res.status(201).json({
                  status: "success",
                  data: rate,
            });
      } catch (err) {
            next(err);
      }
}
const getRate = async (req, res, next) => {
      try {
            const rate = await RateModel.find({ restroId: new mongoose.Types.ObjectId(req.params.id) })
            res.status(200).json(rate);
      } catch (err) {
            next(err);
      }
}

module.exports = {
      createRate,
      getRate,
}
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ReviewSchema = new Schema({
      review: {
            type: String,
            require: true
      },
      restroId: {
            type: Schema.Types.ObjectId,
            ref: 'restaurant',
            required: true
      },
      userId: {
            type: Schema.Types.ObjectId,
            ref: 'user',
            require: true
      }
});

var ReviewModel = mongoose.model('reviews', ReviewSchema);

module.exports = ReviewModel;
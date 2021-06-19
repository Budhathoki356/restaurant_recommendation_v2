var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ReviewSchema = new Schema({
      review: {
            type: String,
            require: true
      },
      restro_id: {
            type: Schema.Types.ObjectId,
            ref: 'restaurant',
            required: true
      },
      user_id: {
            type: Schema.Types.ObjectId,
            ref: 'user',
            require: true
      }
});

var ReviewSchema = mongoose.model('reviews', ReviewSchema);

module.exports = ReviewSchema;
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RateSchema = new Schema({
      rate: {
            type: Number,
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

var RateModel = mongoose.model('rate', RateSchema);

module.exports = RateModel;
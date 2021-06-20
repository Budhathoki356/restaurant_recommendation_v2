var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var morgan = require('morgan');

// load Middleware
var authRoute = require('./controllers/auth');
var userRoute = require('./controllers/users');
var restaurantRoute = require('./routes/restaurant')
var foodItemRoute = require('./routes/footitem')
var searchRoute = require('./routes/search')
var cuisineRoute = require('./routes/cuisine')
var rateRoute = require('./routes/rate')
var reviewRoute = require('./routes/review')

var authenticate = require('./middlewares/authenticate');
var authorize = require('./middlewares/authorize');

require('./config/mongoose.config');

app.use(morgan('dev'));
app.use(cors({
    origin: 'http://localhost:4200'
}));

// body parser
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Set port
app.set('port', process.env.PORT || 8000);

// serving static files
app.use('/files', express.static(__dirname + '/files'));

// middleware for authentication
app.use('/auth', authRoute);
app.use('/user', authenticate, userRoute);
app.use('/restaurant', authenticate, restaurantRoute);
app.use('/food-item', authenticate, foodItemRoute)
app.use('/search', authenticate, searchRoute)
app.use('/cuisine', cuisineRoute)
app.use('/rate', authenticate, rateRoute)
app.use('/review', authenticate, reviewRoute)

// establish connections
app.listen(app.get('port'), function (err, data) {
    if (err)
        console.log('Fail to connect.');

    console.log('Listening at port ' + app.get('port'));
});
/**
 *  to close the port
 *
 * -- netstat -ap | grep :5000
 * -- kill -9 13205
 *
 * */

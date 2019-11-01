//Set up mongoose connection
const mongoose = require('mongoose');
const mongoDB = 'mongodb://localhost/Icedb';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
module.exports = mongoose;
//Conexion de la base de datos con moongose.
const mongoose = require('mongoose');
const mongoDB = 'mongodb://localhost/testdbs2';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
module.exports = mongoose;
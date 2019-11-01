/**
 * Proyecto realizado con tecnologias como:
 * Nodejs: javascript runtime enviorement para los browsers
 * Express: Ayuda con el "heavylifting" para la configuracion de un servidor en Nodejs
 * Mongodb: Base de datos no relacional, donde guardara la data de la app
 * Mongoose: Intermediario entre Mongodb y Express, facilita el manejo con la base de datos
 * JWT: Usado para el manejo de autenticacion de usuario.
 * entre otras dependencias de asistencia...
 * 
 * El objetivo esta contenido en el archivo Order-ice-cream-app-homework
 * 
 * En el manejo de git fue un poco turbio, debido a lo abrumador de las nuevas tecnologias y trabajr con el en primera vez
 * *Algunos commit tienen mensajes referentes al futuro, esto entiendo estuvo mal, ya que solo se referencia al presente commit
 * *Mezcla de idiomas
 *  
 * ============================================================
 */


const express = require('express');
const logger = require('morgan');

//Rutas del servidor
const movies = require('./routes/movies') ;
const users = require('./routes/users');
const order = require('./routes/order');

//Senala mongoose el directorio para la conexion a la base de datos
const mongoose = require('./config/database'); //database configuration

const bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');

const app = express();

// jwt secret token- 
app.set('secretKey', 'nodeRestApi'); 

// conexion a mongodb desde inicio del servidor
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.get('/', function(req, res){
res.json({"ICSytem" : "Logistica de ordenes de helados"});
});

// public route - Acceder sin auntenticacion
app.use('/users', users);

// private route - Accedr con autenticacion
app.use('/movies', validateUser, movies);
app.use('/order', validateUser, order);

app.get('/favicon.ico', function(req, res) {
    res.sendStatus(204);
});

//Validar un usuario
function validateUser(req, res, next) {
  jwt.verify(req.headers['x-access-token'], req.app.get('secretKey'), function(err, decoded) {
    if (err) {
      res.json({status:"error", message: err.message, data:null});
    }else{
      // Anade el id de usuario a los request, dando pase a rutas protegidas
      req.body.userId = decoded.id;
      next();
    }
  });
  
}

// Manejar error 404, express no le hace por defecto
app.use(function(req, res, next) {
 let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// Mensaje general de error
app.use(function(err, req, res, next) {
 console.log(err);
 
  if(err.status === 404)
   res.status(404).json({message: "Not found"});
  else 
    res.status(500).json({message: "Something looks wrong :( !!!"});
});

//Puerto del servidor y mensaje de notificacion de conexion.
app.listen(3000, function(){
 console.log('Node server listening on port 3000');
});
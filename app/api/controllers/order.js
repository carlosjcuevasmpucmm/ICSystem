//Acceder al modelado de la clase Order
const orderModel = require('../models/order');

//Metodos - A interpretarse como el modelado de OrderRepository
module.exports = {

 //Conseguir orden por su id   
 getById: function(req, res, next) {
  console.log(req.body);
  //De la ruta, se obtiene el id
  orderModel.findById(req.params.movieId, function(err, orderInfo){
   if (err) {
    next(err);
   } else {
       //Retorna la data de contiene la orden como un json
    res.json({status:"success", message: "Movie found!!!", data:{order: orderInfo}});
   }
  });
 },

getAll: function(req, res, next) {
  let moviesList = [];
movieModel.find({}, function(err, movies){
   if (err){
    next(err);
   } else{
    for (let movie of movies) {
     moviesList.push({id: movie._id, name: movie.name, released_on: movie.released_on});
    }
    res.json({status:"success", message: "Movies list found!!!", data:{movies: moviesList}});
       
   }
});
 },
updateById: function(req, res, next) {
    
  movieModel.findByIdAndUpdate(req.params.orderId,{name:req.body.name}, function(err, movieInfo){
if(err)
    next(err);
   else {
    res.json({status:"success", message: "Movie updated successfully!!!", data:null});
   }
  });
 },
deleteById: function(req, res, next) {
  movieModel.findByIdAndRemove(req.params.movieId, function(err, movieInfo){
   if(err)
    next(err);
   else {
    res.json({status:"success", message: "Movie deleted successfully!!!", data:null});
   }
  });
 },

//Crear una orden 
create: function(req, res, next) {
  orderModel.create({ name: req.body.name, released_on: req.body.released_on }, function (err, result) {
      if (err) 
       next(err);
      else
       res.json({status: "success", message: "Movie added successfully!!!", data: null});
      
    });
 },
}
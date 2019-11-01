//Acceder al modelado de la clase Order
const OrderModel = require('../models/order');
const UserModel = require('../models/user');
const OrdersPackModel = require('../models/ordersPack');

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

// //Crear una orden 
// create: function(req, res, next) {
//     //dev help
//     console.log(req.body)
//   orderModel.create({ description: req.body.description, 
//                         size: req.body.size, 
//                         flavor: req.body.flavor,
//                         price: req.body.price,
//                         payment: req.body.payment,
//                         payed: req.body.payed,
//                         name: req.body.guid[0],
//                         email: req.body.guid[1],
//                         password: req.body.guid[2]
//                         //recursiva cosa...a otro lado..
                        

//                         }, function (err, result) {
//       if (err) 
//        next(err);
//       else
//        res.json({status: "success", message: "Movie added successfully!!!", data: null});
      
//     });
//  },


// Create one orden
router.post('/', getOrdersPack ,async (req, res) => {
    console.log(res.ordersPackModel.expirationDate)
    if(res.ordersPackModel.expirationDate > new Date()){
      const order = new Orden({
        guid: req.body.guid,
        orderPack: req.body.orderPack,
        description: req.body.description,
        size: req.body.Size,
        flavor: req.body.flavor,
        price: req.body.price,
        payment: req.body.payment,
        payed: req.body.payed,

      })      
              try {
                console.log(orden)
                const new_order = await orden.save()
                res.ordersPackModel.Orden.push(neworden._id)
                const addtoarray = await res.listaorden.save()
                res.status(201).json(neworden)
              } catch (err) {
                res.status(400).json({ message: err.message })
              }
            }
            else{
              res.send("La duracion ha expirado")
            }
            })
          
            async function getOrden(req, res, next) {
              try {
                orden = await Orden.findById(req.params.id)
                if (orden == null) {
                  return res.status(404).json({ message: 'No se ha podido encontrar la ordena'})
                }
              } catch(err){
                return res.status(500).json({ message: err.message })
              }
             
              res.orden = orden
              next()
            }
            
            async function getLista(req, res, next) {
              try {
                listaorden = await Pack.findById(req.body.Pack)
                if (listaorden == null) {
                  return res.status(404).json({ message: 'No se ha podido encontrar la lista'})
                }
              } catch(err){
                return res.status(500).json({ message: err.message })
              }
              console.log(listaorden)
              res.listaorden = listaorden
              next()
            }
        }
        OdersPack: req.body.Pack
      })
      
      try {
        console.log(orden)
        const neworden = await orden.save()
        res.listaorden.Orden.push(neworden._id)
        const addtoarray = await res.listaorden.save()
        res.status(201).json(neworden)
      } catch (err) {
        res.status(400).json({ message: err.message })
      }
    }
    else{
      res.send("La duracion ha expirado")
    }
    })
  
    async function getOrden(req, res, next) {
      try {
        orden = await Orden.findById(req.params.id)
        if (orden == null) {
          return res.status(404).json({ message: 'No se ha podido encontrar la ordena'})
        }
      } catch(err){
        return res.status(500).json({ message: err.message })
      }
     
      res.orden = orden
      next()
    }
    
    async function getLista(req, res, next) {
      try {
        listaorden = await Pack.findById(req.body.Pack)
        if (listaorden == null) {
          return res.status(404).json({ message: 'No se ha podido encontrar la lista'})
        }
      } catch(err){
        return res.status(500).json({ message: err.message })
      }
      console.log(listaorden)
      res.listaorden = listaorden
      next()
    }
}
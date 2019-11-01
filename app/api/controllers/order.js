//Acceder al modelado de la clase Order
const OrderModel = require('../models/order');
const UserModel = require('../models/user');
const OrdersPackModel = require('../models/ordersPack');

module.exports = {
    // Crear una orden
    create: function(req, res, next) {
     OrderModel.create(
                        {description: req.body.description, 
                                size: req.body.size, 
                                flavor: req.body.flavor,
                                price: req.body.price,
                                payment: req.body.payment,
                                payed: req.body.payed,
                                guid: req.body.guid,
                                ordersPack: req.body.ordersPack
                        }, function (err, result) {
                            if (err) 
                             next(err);
                            else
                             res.json({status:"success", message: "Se creo la orden", data:{order: result }});
                             
                            }
                        )

    },

    //Conseguir todas las ordenes
    getAll: function(req, res, next) {
        let orderList = [];
      OrderModel.find({}, function(err, order){
         if (err){
          next(err);
         } else{
          for (let or of order) {
           orderList.push({description: or.description, 
            size: or.size, 
            flavor: or.flavor,
            price: or.price,
            payment: or.payment,
            payed: or.payed,
            guid: or.guid,
            ordersPack: or.ordersPack,
            id: or._id
            });
          }
          res.json({status:"success", message: "Lista de ordenes!!!", data:{order: orderList}});
             
         }
      });
       },

       //Mostrar una sola orden
       getById: function(req, res, next) {
        console.log(req.body);
        OrderModel.findById(req.params.orderId, function(err, result){
         if (err) {
          next(err);
         } else {
          res.json({status:"success", message: "Orden encontrada!", data:{order: result}});
         }
        });
       },

     //Eliminar una orden  
    deleteById: function(req, res, next) {
        OrderModel.findByIdAndRemove(req.params.orderId, function(err, result){
         if(err)
          next(err);
         else {
          res.json({status:"success", message: "La orden fue borrada!!!", data:null});
         }
        });
    },

     //Actualizar una orden
     updateById: function(req, res, next) {
        OrderModel.findByIdAndUpdate(req.params.orderId,{
            description: req.body.description, 
                                size: req.body.size, 
                                flavor: req.body.flavor,
                                price: req.body.price,
                                payment: req.body.payment,
                                payed: req.body.payed,
                                guid: req.body.guid,
                                ordersPack: req.body.ordersPack
        }, function(err, result){
      if(err)
          next(err);
         else {
          res.json({status:"success", message: "Orden actualizada!", data: {order: result}});
         }
        });
       },


      
}
//Acceder al modelado de la clase Order
const OrderModel = require('../models/order');
const UserModel = require('../models/user');
const OrdersPackModel = require('../models/ordersPack');

module.exports = {
    // Create one orden
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
            ordersPack: or.ordersPack});
          }
          res.json({status:"success", message: "Lista de ordenes!!!", data:{order: orderList}});
             
         }
      });
       },

    deleteById: function(req, res, next) {
        OrderModel.findByIdAndRemove(req.params.orderId, function(err, orderInfo){
         if(err)
          next(err);
         else {
          res.json({status:"success", message: "La orden fue borrada!!!", data:{order: result }});
         }
        });
    },


      
}
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
                             res.json({status: "success", message: "Movie added successfully!!!", data: null});
                             
                            }
                        )

    },
      
}
const order = require('../models/ordersPack');

module.exports = {

 //COnseguir l ista por id   
 getById: function(req, res, next) {
  
  order.findById(req.params.ordersPackId, function(err, result){
   if (err) {
    next(err);
   } else {
    res.json({status:"success", message: "order found", data:{orders: result}});
   }
  });
 },
 //Conseguir todas las listas
getAll: function(req, res, next) {
  let ordersorder = [];
order.find({}, function(err, orders){
   if (err){
    next(err);
   } else{
    for (let order of orders) {
        ordersorder.push({
            id: order._id,
            name: order.name,
            creator: order.creator,
            created: order.created,
            expiration: order.expiration,
            order: order.order,
     });
    }
    res.json({status:"success", message: "orders order found", data:{orders: ordersorder}});
       
   }
});
 },
 //Actualiza lista por id
updateById: function(req, res, next) {
  order.findByIdAndUpdate(req.params.ordersPackId,{name:req.body.name}, function(err, result){
if(err)
    next(err);
   else {
    res.json({status:"success", message: "order updated successfully", data:null});
   }
  });
 },
 //Elimina lista de ordenes por id
deleteById: function(req, res, next) {
  order.findByIdAndRemove(req.params.ordersPackId, function(err, result){
   if(err)
    next(err);
   else {
    res.json({status:"success", message: "List de ordenes eliminada!", data:{orderPack: result}});
   }
  });
 },
 //Crea una lista de ordenes
create: function(req, res, next) {
  order.create({creator: req.body.creator,
                order: req.body.order,
                creationDate: req.body.creationDate,
                expirationDate: req.body.expirationDate},
             function (err, result) {
                 if (err) 
                next(err);
                else
                res.json({status: "success", message: "Orden anadida", data:{lista: result}});
      
    });
 },
}
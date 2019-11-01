const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Modelado de la clase order, vista en el diagrama
const OrderSchema = new Schema({

  //ajenos al diagrama, esta en los requerimientos (producto, tamano y sabor)
 description: {
  type: String,
  trim: true,  
  required: true,
 },

 Size: {
  type: String,
  
},
flavor: {
  type: String,
  required: true
},

 price: Number,
 
 //Sera asignado un objeto model de un usuario exportado como 'UserModel'
 guid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserModel',
    required: true
  },

//Un arreglo de String, que de no recibir entrada correcta, efectivo por defecto
 payment: {
    type: String,
    enum: ['tarjeta','efectivo'],
    default: 'efectivo',
    required: true,
    trim: true
},


payed:{    
    type: Boolean,
    default: false,
    required: true
}

});

// Una orden solo tiene 1 usuario
OrderSchema.index({
  guid: 1,
},
{
unique:true
})

module.exports = mongoose.model('OrderModel', OrderSchema)
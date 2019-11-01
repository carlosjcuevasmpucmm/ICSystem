const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Modelado de la clase OrdersPack
const OrdersPack = new Schema({

    //Creador de la lista. Asociado a un usuario.
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel',
        required: true
      },
    
    //Arreglo de ordenes, asociado al modelado de la clase Order.
    Order: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'OrderModel',
      }],

    //Fecha en que se concibio la entrada.
    creationDate: {
        type: Date,
        default: Date.now()
    },

    //A ser usada para un temporizador de las lista de ordenes.
    expirationDate: {
      type: Date,
      default: (Date.now() + 3500000)
  
    },
});

// Una lista por usuario
OrdersPack.index({
  _id: 1,
  creator: 1,
},
{
unique:true
})

module.exports = mongoose.model('OrdersPackModel', OrdersPack)
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

//Se usara para el hash de la clave de usuario
const saltRounds = 10;

//Modelado de la clase User como Tabla tipo Schema
const Schema = mongoose.Schema;
const UserSchema = new Schema({

 
 name: {
  type: String,
  trim: true,  
  required: true,
 },
 
 email: {
  type: String,
  trim: true,
  required: true
 },
 password: {
  type: String,
  trim: true,
  required: true
 },

 //Arreglo de ordenes que el usuario ha participado
 order: [{
  type: mongoose.Schema.Types.ObjectId,
  ref: 'OrderModel',
  }],

  //Lista de orden creada por el usuario.
ordersPack: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'OrdersPackModel',
  }  


});

// hash para la password del usuario. 
UserSchema.pre('save', function(next){
this.password = bcrypt.hashSync(this.password, saltRounds);
next();
});




  //  Un correo por usuario, debe ser unico
  //  Una lista de ordenes (ordersPack), unico
 
UserSchema.index({
    email: 1,
    ordersPack: 1,
  },
  {
  unique:true
  })


module.exports = mongoose.model('UserModel', UserSchema);
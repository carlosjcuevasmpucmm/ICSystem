const userModel = require('../models/user');
const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken');
const nodeMailer = require('nodemailer');
module.exports = {

 create: function (req, res, next) {
  
  userModel.create ({ name: req.body.name, 
                    email: req.body.email, 
                    password: req.body.password,
                    order: req.body.order,
                    ordersPack: req.body.ordersPack
                }, function (err, result) {
      if (err) 
       next(err);
      else
       res.json({status: "success", message: "Se anadio el usuario", data:{user: result}});
      
    });
 },
authenticate: function(req, res, next) {
  userModel.findOne({email:req.body.email}, function(err, userInfo){
     if (err) {
      next(err);
     } else {
if(bcrypt.compareSync(req.body.password, userInfo.password)) {
const token = jwt.sign({id: userInfo._id}, req.app.get('secretKey'), { expiresIn: '1h' });
res.json({status:"success", message: "user found!!!", data:{user: userInfo, token:token}});
}else{
res.json({status:"error", message: "Invalid email/password!!!", data:null});
}
     }
    });
 },

emailOrderpack:function(req,res, next){
    let transporter = nodeMailer.createTransport({
        host: 'smtp.zoho.com',
        port: 465,
        secure: true,  //true for 465 port, false for other ports
        auth: {
            user: 'carlosjcuevasmpucmm@pucmm.edu.do',
            pass: 'password'
        }
    });
}

}
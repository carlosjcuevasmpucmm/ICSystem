const userModel = require('../models/user');
const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken');
const nodeMailer = require('nodemailer');
module.exports = {

    //Crear usuario
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

 //Autenticar usuario asistido por JWS. La sesion dura 1h.
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

//Usuario puede enviar correo
emailOrderpack:function(req,res, next){
    let transporter = nodeMailer.createTransport({
        host: 'smtp.google.com',
        port: 465,
        secure: true,  //true for 465 port, false for other ports
        auth: {
            user: req.body.email,
            pass: req.body.password
        }
    });

    let mailOptions = {
        from: req.body.from, // sender address
        to: req.body.to, // list of receivers
        subject: req.body.to, // Subject line
        text: req.body.text, // plain text body
        // 
        
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(400).send({success: false})
        } else {
            res.status(200).send({success: true});
        }
    });
}

}
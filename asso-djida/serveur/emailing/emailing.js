var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
require('dotenv').config();
const nodemailer= require('nodemailer');
const transporter=nodemailer.createTransport({
  service:'gmail',
  auth:{
    user:process.env.EMAIL,
    pass:process.env.PASSWORD,
  }
});
let mailOptions={
  from:'assodjida@gmail.com',
  to: 'di.diana.diangana@gmail.com',
  subject:'test',
  text:'ça marche'
};

router.get('/', function (req, res) {
  res.json({message:'mail'})
});

router.post('/',function (req, res) {
  transporter.sendMail(mailOptions,function(err,data){
    if (err) {
      console.log('err',err);
    }else{
      res.json({message:'Message reçu'})
    }
  });

});
module.exports = router;

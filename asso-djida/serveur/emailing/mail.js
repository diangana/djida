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
  to: 'assodjida@gmail.com',
  subject:'test',
  text:'ça marche'
};

transporter.sendMail(mailOptions,function(err,data){
  if (err) {
    console.log('err',err);
  }else{
    console.log('send');
  }
});

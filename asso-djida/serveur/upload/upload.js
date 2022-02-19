
const path = require('path');
const express = require('express');
const multer = require('multer');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());

const DIR = '../src/assets/images/upload';

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, DIR);
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    }
});
let upload = multer({storage: storage});

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

router.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

router.get('/', function (req, res) {
  res.end('file catcher example');
});

router.post('/upload',upload.single('photo'), function (req, res) {
    if (!req.file) {
        console.log("No file received");
        return res.send({
          success: false
        });

      } else {
        console.log('file received');
        return res.send({
          success: true
        })
      }
});
module.exports = router;



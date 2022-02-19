var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
var adherent = require('./adherent');

router.get('/', function (req, res) {
  adherent.getadherents(function(err,rows){
        if(err) {
            res.status(400).json(err);
        }
        else
        {
          res.json(rows);
        }
    });
});
router.get('/:id', function (req, res) {
  adherent.selectadherent({email:req.params.id},function(err,rows){
      if(err) {
          res.status(400).json(err);
      }
      else
      {
          res.json(rows);
      }
  });
});
router.get('/:id/:password', function (req, res) {
  adherent.connadherent({email:req.params.id,password:req.params.password},function(err,rows){
      if(err) {
          res.status(400).json(err);
      }
      else
      {
          res.json(rows);
      }
  });
});
router.post('/', function (req, res) {
    adherent.createadherent(req.body,function(err,count){
        if(err)
        {
            res.status(400).json(err);
        }
        else{
            res.json(req.body);
        }
    });
});
router.put('/', function (req, res) {
  adherent.Updateadherent(req.body,function(err,rows){
      if(err) {
          res.status(400).json(err);
      }
      else
      {
          res.json(req.body);
      }
  });
});

router.delete('/:id', function (req, res) {
  adherent.deleteadherent({email:req.params.id},function(err,rows){
      if(err)
      {
          res.status(400).json(err);
      }
      else{
          res.json(req.body);
      }
  });
});
module.exports = router;

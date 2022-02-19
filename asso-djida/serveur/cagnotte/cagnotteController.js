var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
var cagnotte = require('./cagnotte');

router.get('/', function (req, res) {
  cagnotte.getcagnottes(function(err,rows){
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
  cagnotte.selectcagnottes({id_cagnotte:req.params.id},function(err,rows){
      if(err) {
          res.status(400).json(err);
      }
      else
      {
          res.json(rows);
      }
  });
});
router.put('/', function (req, res) {
  cagnotte.Updatecagnottes(req.body,function(err,rows){
      if(err) {
          res.status(400).json(err);
      }
      else
      {
          res.json(req.body);
      }
  });

});
router.post('/', function (req, res) {
    cagnotte.createcagnotte(req.body,function(err,count){
        if(err)
        {
          res.status(400).json(err);
          console.log(req.body)
        }
        else{
            res.json(req.body);
        }
    });
  });
  router.delete('/:id', function (req, res) {
    cagnotte.deletecagnotte({id_cagnotte:req.params.id},function(err,rows){
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

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
var article = require('./article');

router.get('/', function (req, res) {
    article.getarticles(function(err,rows){
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
  article.selectarticle({id_article:req.params.id},function(err,rows){
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
  article.Updatearticle(req.body,function(err,rows){
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
    article.createarticle(req.body,function(err,count){
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

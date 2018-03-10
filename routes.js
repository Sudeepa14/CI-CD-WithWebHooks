var express = require('express')
const router=express.Router();
var bodyParser = require('body-parser'); 
// var fs=require('fs-extra');

// var html = require('HTML');


var CI=require('./ci.js');

// router.get('/', (req, res) => {
//    res.sendFile('index.html', {
//      root: '/views'
//    });
// });

router.post('/newPull',function(req,res){
  console.log("a new request came in");
  let secret =req.body.secret;
  CI.builder(res);
  // res.sendStatus(200);

});
router.get('/test',function(req,res){
    let secret =req.body.secret;
    CI.builder(res);
  });

module.exports = router;

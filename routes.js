var express = require('express')
const router=express.Router();
var bodyParser = require('body-parser'); 
var crypto = require('crypto');
// var fs=require('fs-extra');

// var html = require('HTML');


var CI=require('./ci.js');

// router.get('/', (req, res) => {
//    res.sendFile('index.html', {
//      root: '/views'
//    });
// });

router.post('/newPull',function(req,res){

  var hmac, signature;
  //generating hash using the secret and the request body to verify the sender. 
  hmac = crypto.createHmac("sha1", process.env.SECRET_TOKEN);
  hmac.update(JSON.stringify(req.body));
  signature ="sha1="+hmac.digest("hex");
  //conparing the generated one with the one github sent
  // console.log(signature);
  // console.log(req.headers['x-hub-signature']);
  // console.log(signature===req.headers['x-hub-signature']);
  //console.log(crypto.timingSafeEqual(signature,req.headers[6]));
  
  // console.log("a new request came in");
  // let secret =req.body.hook.config.secret;
  // console.log(secret==="testSecret");
  // console.log(secret);

  if(signature===req.headers['x-hub-signature']){
    CI.builder(res);
  }
  else{
    res.sendStatus(200);    
  }
});
router.get('/test',function(req,res){
    let secret =req.body.secret;
    CI.builder(res);
  });

module.exports = router;

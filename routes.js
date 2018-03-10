var express = require('express')
const router=express.Router();
var bodyParser = require('body-parser'); 
// var crypto = require('crypto');
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
  hmac.update(req.body);
  signature = hmac.digest("hex");
  //conparing the generated one with the one github sent
  console.log(crypto.timingSafeEqual(signature,req.header.X-Hub-Signature));

  console.log("a new request came in");
  let secret =req.body.hook.config.secret;
  console.log(secret==="testSecret");
  console.log(secret);
  CI.builder(res);
  // res.sendStatus(200);

});
router.get('/test',function(req,res){
    let secret =req.body.secret;
    CI.builder(res);
  });

module.exports = router;


var shell = require('shelljs');

exports.builder=function(res){
    shell.echo('this is from shelljs Module');
    //shell.cp('-R', 'test.txt/', 'out/test');   
    res.sendStatus(200); //responding to github post request
    shell.exec('sudo npm start --prefix ../youtubeDownloader/react/'); 
    // res.sendStatus(200);

}
    

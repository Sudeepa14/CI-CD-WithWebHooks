
var shell = require('shelljs');

exports.builder=function(res){
    shell.echo('this is from shelljs Module');
    shell.cp('-R', 'test.txt/', 'out/test');    
    res.sendStatus(200);

}
    
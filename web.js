var express = require('express');
var app = express();

app.get('/',function(req,res){
    res.send('h1');
})

app.listen(8002,function(){
    console.log('ok');
})
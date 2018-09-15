'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res) {
    let requestName = req.query.name;

    if (!requestName){
        res.send('Hello, user');
    }else {
        res.send('HELLO, ' + requestName);
    }
});

app.listen(app.get('port'), function(){
    console.log('application running on ' + app.get('port'));
})
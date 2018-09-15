'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const moment = require('moment');

const app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res) {
    let requestName = req.query.name;
    let time = moment().utcOffset(330).format('hh:mm:ss');
    let greeting = '';
    if (time < '06:00:00'){
        greeting = 'afternoon';
    }else if(time < '12:00:00') {
        greeting = "morning";
    }
    console.log(time);
    if (!requestName){
        res.send('Hello, user, Good ' + greeting );
    }else {
        res.send('HELLO, ' + requestName + '  Good ' + greeting);
    }
});

app.listen(app.get('port'), function(){
    console.log('application running on ' + app.get('port'));
})
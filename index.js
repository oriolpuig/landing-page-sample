var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 8080));

// console.log(process.env.NODE_ENV);
var env = process.env.NODE_ENV || 'development';

switch (env) {
    case 'development':
        console.log('dev --> ' + process.env.NODE_ENV);
        app.use(express.static(__dirname));
        break;
    case 'production':
        console.log('prod --> ' + process.env.NODE_ENV);
        app.use(express.static(__dirname + '/dist'));
        break;
    default:
        console.log('DEFAULT ' + process.env.NODE_ENV);
        app.use(express.static(__dirname + '/dist'));
        break;
}


app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 8080));

switch (process.env.NODE_ENV) {
    case 'development':
        app.use(express.static(__dirname + '/'));
        break;
    case 'production':
        app.use(express.static(__dirname + '/dist'));
        break;
    default:
        app.use(express.static(__dirname + '/'));
        break;
}

app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});
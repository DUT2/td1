var express         = require('express'),
   http = require('http'),
   path = require('path');

var app = express();
app.set('port', 6800);
// pas de routeur

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server en attente sur le port : ' + app.get('port'));
});

// version 1 très basique pas de routeur
// message d'erreur dès le lancement


var express         = require('express'),
   http = require('http');

var app = express();
// pas de routeur --> message erreur

http.createServer(app).listen(6800, function(){
  console.log('Express server en attente sur le port : 6800');
});

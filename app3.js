// version 3 encore un peu  basique un routeur
// pas de vues
// des controleurs mais se sont eux qui font les affichages


var express         = require('express'),
   http = require('http');

var app = express();
app.set('port', 6800);

//importation des routes
require('./router/router3')(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server en attente sur le port : ' + app.get('port'));
});

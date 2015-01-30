var express         = require('express'),
   http = require('http'),
   path = require('path'),
   bodyParser      = require('body-parser'),
   handlebars  	  = require('express-handlebars'), hbs;

var app = express();
app.set('port', 6800);
app.use(bodyParser.urlencoded({extended: true}));
//handlebars


hbs = handlebars.create({
  defaultLayout: 'main',
  partialsDir: ['views/partials/']
});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//importation des routes
require('./router/router')(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server en attente sur le port : ' + app.get('port'));
});

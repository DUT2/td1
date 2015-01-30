var HomeController = require('../controllers/HomeController');
var ClientController = require('../controllers/ClientController');
var ArticleController = require('../controllers/ArticleController');

module.exports = function(app){

    // Main Routes
//racine
    app.get('/', HomeController.Index);
// client
    app.get('/client', ClientController.Client);
    app.get('/ajoutClient', ClientController.AjouterPersonne);
    app.post('/afficheClient', ClientController.AffichePersonne);
// article
    app.get('/article', ArticleController.Article);



  app.get('*', HomeController.Index);
  app.post('*', HomeController.Index);

};

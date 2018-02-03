  // ////////////////////////////////////////////// A C C U E I L
module.exports.Index = function(request, response){
     response.title ="racine"
   response.render('home', response); // affiche home.handlebars dans views
};

var heroes = require("../data/heroes.json");
var path = require('path');

const controlador = {
    archivo: function(req, res, next) {
        let file = path.resolve("./data/heroes.json")
        console.log(file)
      res.sendFile(file)
      },
    unheroe: function(req, res, next) {

        if  (heroes[req.params.idheroes] == undefined) {
            var texto_profesion = "No tenemos en nuestra base ningún héroe ni heroína con ese id"
            res.render('heroes_comentario', { profesion: texto_profesion });
        } else {
            var unheroe = heroes.find(function( heroe) {return (heroe.id == req.params.idheroes)})
            res.render('unheroe', { heroes_ol: unheroe });
        }
      },
    profesion: function(req, res, next) {

        if  (heroes[req.params.idheroes] == undefined) {
            var texto_profesion = "No tenemos en nuestra base ningún héroe ni heroína con ese id"
        } else {
            var texto_profesion = "Hola, mi nombre es " + heroes[req.params.idheroes].nombre + " y soy " +  heroes[req.params.idheroes].profesion
        }
    
        res.render('heroes_comentario', { profesion : texto_profesion });
    },
    resenia: function(req, res, next) {

        if  (heroes[req.params.idheroes] == undefined) {
            var texto_resenia = "No tenemos en nuestra base ningún héroe ni heroína con ese id"
        } else {
            if  (req.params.idtipo == undefined) {
                var texto_resenia = "Nombre : " + heroes[req.params.idheroes].nombre + " Reseña : " + heroes[req.params.idheroes].resenia.substring(0,29)
            } else {
                var texto_resenia = "Nombre : " + heroes[req.params.idheroes].nombre + " Reseña : " + heroes[req.params.idheroes].resenia
            }
        }
    
        res.render('heroes_resenia', { resenia : texto_resenia });
    },
}

module.exports = controlador;
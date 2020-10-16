const controlador = {
    creditos: function(req, res, next) {

        var texto_credito = "Norberto"
      res.render('creditos', { creditos: texto_credito });
    },
}

module.exports = controlador;

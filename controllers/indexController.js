const controlador = {
    indice: function(req, res, next) {
        res.render('index', { title: 'Digital Heroes' });
      },
}

module.exports = controlador;
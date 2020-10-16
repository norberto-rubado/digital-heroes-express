var express = require('express');
var router = express.Router();
var heroes = require("../data/heroes.json");
/* const path = require("path") */
const heroesController = require ("../controllers/heroesController")

/* heroes page. */
router.get('/', heroesController.archivo);

router.get('/:idheroes/unheroe', heroesController.unheroe);

router.get('/:idheroes/profesion', heroesController.profesion);

router.get('/:idheroes/resenia/:idtipo?', heroesController.resenia);

module.exports = router;
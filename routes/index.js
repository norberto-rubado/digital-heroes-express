var express = require('express');
var router = express.Router();
const indiceController = require("../controllers/indexController")

/* GET home page. */
router.get('/', indiceController.indice);

module.exports = router;

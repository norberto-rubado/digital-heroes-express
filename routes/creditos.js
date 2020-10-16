var express = require('express');
var router = express.Router();
const creditosController = require("../controllers/creditosController")

/* creditos page */
router.get('/', creditosController.creditos);

module.exports = router;
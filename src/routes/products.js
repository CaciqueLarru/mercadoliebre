const express = require('express');
const path = require("path");
const productsController = require('../controllers/productsController');
const router = express.Router();

router.get('/', productsController.home);
router.get('/productos/:idProducto', productsController.detail);
router.get ("/productos/:idProducto/comentarios/:idComentario?", productsController.reviews);
router.get ("/crear", productsController.form);


module.exports = router;
/* se van a poder administrar todos las rutas de productos */
const express = require ("express");
const router = express.Router();


router.get ("/", function (req, res) {
    //codigo
});


/* Express - ruta dinamicas para productos*/
app.get('/productos/:idProducto', function(req, res) {
    res.send("bienvenidos al detalle del producto " + req.params.idProducto);
  })
  

router.get ("/productos/:idProducto", function (req, res) {
    res.send ("bienvenidos al detalle de producto" + req.params.idProducto);
});


router.get ("/productos/:idProducto/comentarios/: idComentario?", function (req, res) {
   if (req.params.idComentario == undefined) {
       res.send ("Bienvenidos a los comentarios del producto" + req.params.idProducto);
   } else {
       res.send ("Bienvenidos a los comentarios del producto " + req.params.idProducto + " y estas enfocado en el comentario " + req.params-idComentario)
   }
});


//Crear formulario
router.get ("/crear", function (req, res) {
    //codigo
});

module.exports = router;
const router = express.Router();
const multer = require ('multer');
const path = require('path');


/*Impementación Multer*/

const storage = multer.diskStorage ({
    destination: function (req,file,cb) {
    cb(null, '../../public/images/products')
    },
    filename: function () {
    cb (null, '${Date.now()}${path.extname(file.originalname)}');       
    }
    })

const upload = multer ({storage});
router.post('/', upload.single ('image'));   


/*Controller del producto */

const productsController = {
    
   home: (req,res) => {
        res.render("products/homeProduct")
   },
   detail: (req,res) => {
        //res.render("products/productDetail")
        res.send("bienvenidos al detalle del producto " + req.params.idProducto);
   },
   reviews: (req,res) => {
    if (req.params.idComentario == undefined) {
        res.send ("Bienvenidos a los comentarios del producto" + req.params.idProducto);
    } else {
        res.send ("Bienvenidos a los comentarios del producto " + req.params.idProducto + " y estas enfocado en el comentario " + req.params-idComentario)
    }
    },
    form: (req, res) => {
        res.send("Crear Formulario");
    },
    /*
    cart: (req,res) => {
         res.render("products/productCart")
    },
    edit: (req,res) => {
        
     let idProduct = req.params.idProduct;

     let product = [
          {id:1, name:"vinoDiana"},
          {id:2, name:"vinoFlor"},
          {id:3, name:"vinoJuan"},
          {id:4, name:"vinoMati"}
     ];
     
     let productToEdit = product[idProduct];
 
     res.render("products/productEdit", {productToEdit: productToEdit});

   },
    create: (req,res) => {
        res.render("products/createProduct")
   },
   /*Creamos el producto que vamos a subir con muller 

store (req,res) {
    let product = {
        id: nuevoId (),
        ... req.body,
        image: req.file.filename || 'default-image.png'
    }
    return res.send (req.file.filename);

   /*Agregamos el nuevo producto 
   
   products.push(product);

   /*Pasamos a JSON todos los productos y sobreescribimos la db 

   let jsonDeProductos = JSON.stringify (products, null, 4);
   fs.writeFileSync(path.resolve(__dirname,'../db/products.js'),jsonDeProductos);

   res.redirect('/');
}, */

};

module.exports = productsController;

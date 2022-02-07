const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require('path');

/* const multer = require ('multer.js');*/
/* En caso de NO utilizar Heroku, usar esto 
app.listen(3000, () => {
    console.log(`Servidor corriendo en puerto 3000`)
  });
*/

/* EJS*/
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));

/*configuracion metodo post*/
app.use(express.urlencoded({
  extended: false
}))

app.use(express.json());



/*Configuracion carpeta public disponible*/
app.use(express.static(path.resolve(__dirname, '../public'))); /* En caso de que no levante poner ""./public"*/

/* En caso de SI utilizar Heroku, usar esto */
app.listen(process.env.PORT || 3000,function () {
  console.log(`Servidor corriendo en puerto 3000`)
});


/*Rutas*/

let routesMain = require('./routes/main.js');
// let rutasProductos = require('./routes/products.js');
// let routesUsers = require('./routes/users.js');


app.use('/', routesMain);
// app.use ("/products.js", rutasProductos);
// app.use('/users', routesUsers);


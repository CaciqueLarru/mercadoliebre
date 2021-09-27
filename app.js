const express = require('express');
const path = require('path')
const app = express();
const puerto=3000

app.use(express.static(__dirname + '/views'));

/* En caso de NO utilizar Heroku, usar esto
app.listen(puerto, () => {
    console.log(`Servidor corriendo en puerto 3000`)
  });
*/


/* En caso de SI utilizar Heroku, usar esto */
  app.listen(process.env.PORT || 3000,function () {
    console.log(`Servidor corriendo en puerto 3000`)
  });


app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/home.html'));
})

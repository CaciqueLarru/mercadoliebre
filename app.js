const express = require('express');
const path = require('path')
const app = express();
const puerto=3000

app.use(express.static(__dirname + '/views'));

app.listen(puerto, () => {
    console.log(`Servidor corriendo en puerto 3000`)
  });

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/home.html'));
})

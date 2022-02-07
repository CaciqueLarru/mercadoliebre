const express = require('express');
const router = express.Router();

const multer = requiere ("multer"); /* Requiero Multer para cargar archivos a la web*/

const usersController = require('../controllers/usersController');

router.get('/register', usersController.register);
router.get('/login', usersController.login);

module.exports = router;
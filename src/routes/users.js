const express = require("express");
const usersController = require("../controllers/usersController");
const router = express.Router();
const {body}= require('express-validator');
  
//MIDDLEWARES 
const uploadFile = require("../middlewares/multerMiddleware")


  const validaciones = [
    body('nombre').notEmpty().withMessage('falta el Nombre'),
    body('apellido').notEmpty().withMessage('falta el Apellido'),
    body('ubicacion').notEmpty().withMessage('falta la ubicación'),
    body('email').notEmpty().withMessage('falta el email'),
    body('password').notEmpty().withMessage('falta el password'),
  ]



router.get("/",usersController.index);
router.get('/login', usersController.login)
router.get('/register', usersController.register)
router.post("/register",uploadFile.single('imagenUsuario'),validaciones,usersController.createUser)

module.exports = router
const express = require("express");
const usersController = require("../controllers/usersController");
const router = express.Router();
const {body}= require('express-validator');
  
//MIDDLEWARES 
const uploadFile = require("../middlewares/userMulterMiddleware")
const validaciones = require("../middlewares/validacionesMiddleware")



router.get("/",usersController.index);
router.get('/login', usersController.login)
router.get('/register', usersController.register)
router.post("/register",uploadFile.single('imagenUsuario'),validaciones,usersController.createUser)

module.exports = router
const express = require("express");
const usersController = require("../controllers/usersController");
const router = express.Router();
const path = require('path')
const {body}= require('express-validator');
  
//MIDDLEWARES 
const uploadFile = require("../middlewares/userMulterMiddleware")
const validaciones =require("../middlewares/validacionesRegisterMiddleware")


router.get("/",usersController.index);
router.get('/login', usersController.login)
router.get('/register', usersController.register)
router.post("/register",uploadFile.single('imagenUsuario'),validaciones ,usersController.createUser)
router.post("/login",usersController.loginProcess)
router.get("/profile",usersController.profile)
module.exports = router
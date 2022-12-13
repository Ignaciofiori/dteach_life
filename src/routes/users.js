const express = require("express");
const usersController = require("../controllers/usersController");
const router = express.Router();
const path = require('path')
const {body}= require('express-validator');
  
//MIDDLEWARES 
const uploadFile = require("../middlewares/userMulterMiddleware")
const validaciones = require("../middlewares/validacionesRegisterMiddleware")
const guestMiddleware = require("../middlewares/guestMiddleware")
const authMiddleware = require("../middlewares/authMiddleware")
router.get("/",usersController.index);
router.get('/login',guestMiddleware ,usersController.login)
router.get('/register', guestMiddleware, usersController.register)
router.post("/register",uploadFile.single('imagenUsuario'),validaciones ,usersController.createUser)
router.post("/login",usersController.loginProcess)
router.get("/profile",authMiddleware,usersController.profile)
module.exports = router
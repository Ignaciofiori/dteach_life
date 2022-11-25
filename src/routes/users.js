const express = require("express");
const usersController = require("../controllers/usersController");
const router = express.Router();

router.get("/",usersController.index);
router.get('/login', usersController.login)
router.get('/register', usersController.register)
router.post("/register",usersController.createUser)

module.exports = router
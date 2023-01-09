// const express = require('express');
// const router = express.Router();
// const usersController = require('../controllers/usersController');
// const { body } = require('express-validator');
// const guestMiddleware = require('../middlewares/guestMiddleware');
// const authMiddleware = require('../middlewares/authMiddleware');
// const upload = require("../middlewares/userMulterMiddleware")
// const validaciones= require("../middlewares/validacionesRegisterMiddleware")

// router.get('/profile', authMiddleware, usersController.profile);
// router.get('/login', guestMiddleware, usersController.login);
// router.post('/login', usersController.loginProcess);
// router.get('/logout', usersController.logout);
// router.get('/register', guestMiddleware, usersController.register);
// router.post(
//   '/register',
//   upload.single('imagen'),
//   validaciones,
//   usersController.createUser
// );

// module.exports = router;

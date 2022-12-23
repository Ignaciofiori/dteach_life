const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');
const usersFilePath = path.join(__dirname, '../database/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const usersController = {
  profile: (req, res) => {
    res.render('users/profile');
  },
  login: (req, res) => {
    res.render('users/login');
  },
  register: (req, res) => {
    res.render('users/register');
  },
  createUser: (req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      const user = {
        id: users.length + 1,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        ubicacion: req.body.ubicacion,
        descripcion: req.body.descripcion,
        imagen: req.file ? req.file.filename : null,
        email: req.body.email,
        password: req.body.password,
      };
      users.push(user);
      const usersJSON = JSON.stringify(users);
      fs.writeFileSync(usersFilePath, usersJSON);
      res.redirect('/');
    } else {
      res.render('users/register', { errors: errors.array(), old: req.body });
    }
  },
};
module.exports = usersController;

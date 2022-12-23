const User = require('../models/User');
const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');
const usersFilePath = path.join(__dirname, '../database/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const usersController = {
  profile: (req, res) => {
    res.render('users/profile', {
      user: req.session.userLogged,
    });
  },
  login: (req, res) => {
    res.render('users/login');
  },
  loginProcess: (req, res) => {
    const errors = validationResult(req);
    console.log(errors);
    let userALoguear = User.findByField('email', req.body.email);
    if (userALoguear) {
      let contraseñaCorrecta = bcryptjs.compareSync(
        req.body.password,
        userALoguear.password
      );
      if (contraseñaCorrecta) {
        delete userALoguear.password;
        req.session.userLogged = userALoguear;
        res.redirect('/users/profile');
      }
      return res.render('users/login', {
        errors: [
          {
            msg: 'Las Credenciales son Invalidas',
          },
        ],
      });
    }
    return res.render('users/login', {
      errors: [
        {
          msg: 'No se encuentra este email en nuestra base de datos',
        },
      ],
    });
  },
  logout: (req, res) => {
    req.session.destroy();
    res.redirect('/');
  },
  register: (req, res) => {
    res.render('users/register');
  },
  createUser: (req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      let userInDb = User.findByField('email', req.body.email);

      if (userInDb) {
        return res.render('users/register', {
          errors: [{ msg: 'este email ya esta registrado' }],
          oldData: req.body,
        });
      } else {
        let userToCreate = {
          ...req.body,
          password: bcryptjs.hashSync(req.body.password, 10),
          imagen: req.file.filename,
        };

        User.create(userToCreate);
      }
    } else {
      res.render('users/register', {
        errors: errors.array(),
        oldData: req.body,
      });
    }
    res.redirect('/users/login');
  },
};
module.exports = usersController;

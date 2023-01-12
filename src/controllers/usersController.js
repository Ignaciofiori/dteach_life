const db = require("../database/models")
const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');
const usersFilePath = path.join(__dirname, '../database/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const usersController = {
//   profile: (req, res) => {
//     console.log(req.cookies.emailUsuario)
//     res.render('users/profile', {
//       user: req.session.userLogged,
//     });
//   },
//   login: (req, res) => {
//     res.render('users/login');
//   },
//   loginProcess: (req, res) => {
 
//     let userALoguear = User.findByField('email', req.body.email);
//     if (userALoguear) {
//       let contraseñaCorrecta = bcryptjs.compareSync(
//         req.body.password,
//         userALoguear.password
//       );
//       if (contraseñaCorrecta) {
//         delete userALoguear.password;
//         req.session.userLogged = userALoguear;
//         if(req.body.recordarUsuario){
//           res.cookie("emailUsuario",req.body.email,{maxAge:(1000*60)*60})
//         }
//         res.redirect('/users/profile');
//       }
//       return res.render('users/login', {
//         errors: 
//           {email:{
//             msg: 'Las Credenciales son Invalidas',
//           }
//         }
//         ,
//       });
//     }
//     return res.render('users/login', {
//       errors:
//         {email:{
//           msg: 'No se encuentra este email en nuestra base de datos',
//         },
//         },
//     });
//   },
//   logout: (req, res) => {
//     res.clearCookie("emailUsuario")
//     req.session.destroy();
//     res.redirect('/');
//   },
 async register(req, res){
    let categorias = await db.Categoria.findAll()
    res.render('users/register',{categorias:categorias});
  },
async createUser(req, res){
    const errors = validationResult(req);
   if (errors.isEmpty()) {
        let userInDb =  await db.Usuario.findOne({where:{
          email: req.body.email
        }})

      if (userInDb) {
        return res.render('users/register', {
          errors: { 
            email:{
              msg: 'Este Email ya esta registrado'} },
          old: req.body,
        });
      } else {
        db.Usuario.create({
            nombre:req.body.nombre,
            apellido:req.body.apellido,
            email:req.body.email,
            password:req.body.password,
            descripcion: req.body.descripcion,
            ubicacion:req.body.ubicacion,
            id_categoria:req.body.categoria,
            imagen : req.file.filename
        })
      }
    } else {
      res.render('users/register', {
        errors: errors.mapped(),
        old: req.body,
      });
    }
    res.redirect('/users/login');
  },
};
module.exports = usersController;

const db = require("../database/models")
const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');


const usersController = {
  profile: (req, res) => {
console.log(req.cookies.emailUsuario)
     res.render('users/profile', {
       user: req.session.userLogged,
     });
  },
  login: (req, res) => {
    res.render('users/login')
    
  },
async loginProcess(req, res){
  
    let userALoguear = await db.Usuario.findOne({where:{email:req.body.email}});
     if (userALoguear) {
      let contraseñaCorrecta = bcryptjs.compareSync(req.body.password,userALoguear.password);
      if(contraseñaCorrecta){
          req.session.userLogged = userALoguear;
          
          if(req.body.recordarUsuario){
      res.cookie("emailUsuario",req.body.email,{maxAge:(1000*60)*60})
     
           } 
           res.redirect('/users/profile');
          }else{
            return res.render('users/login', {
                errors: 
                  {email:{
                    msg: 'Las Credenciales son Invalidas'}}
              })
          }
        } else{
          if(!req.body.email){
            return res.render('users/login', {
              errors:
                {email:{
                  msg: "El Email es Obligatorio."}}
            })
          }else{
          return res.render('users/login', {
                  errors:
                    {email:{
                      msg: 'No se encuentra este email en nuestra base de datos'}}
                })
        }
      }
      },
     

 logout: (req, res) => {
res.clearCookie("emailUsuario")
req.session.destroy();
res.redirect('/');
},
 
async register(req, res){
    let categorias = await db.Categoria.findAll()
    res.render('users/register',{categorias:categorias});
  },
async createUser(req, res){
   const errors = validationResult(req);
  if (errors.isEmpty()) {
    let userInDb =  await db.Usuario.findOne({ where: { email:req.body.email } });
    if (userInDb) {
      let categorias = await db.Categoria.findAll()
              return res.render('users/register', {
                errors: { 
                  email:{
                  msg: 'Este Email ya esta registrado'} },
                old: req.body,categorias
             })
         }
         else{
          db.Usuario.create({
                      nombre:req.body.nombre,
                      apellido:req.body.apellido,
                      email:req.body.email,
                      password: bcryptjs.hashSync(req.body.password,10),
                      descripcion: req.body.descripcion,
                      ubicacion:req.body.ubicacion,
                      id_categoria:req.body.categoria,
                      imagen : req.file.filename
                  });
                 res.redirect("/users/login")
         }

    }
    else{
      
     let categorias = await db.Categoria.findAll()
      res.render('users/register',{categorias:categorias,
             errors: errors.mapped(),
             old: req.body
         })
    }

  },
async editForm(req,res){
  let categorias = await db.Categoria.findAll()
  const usuario = await db.Usuario.findByPk(req.params.id,{
    include:[{association:"categorias"},{association:"clases"}]
});
  res.render("users/edit",{categorias:categorias, usuario:usuario})
},
async editUser(req,res){
  const errors = validationResult(req)
  if(errors.isEmpty()){
  db.Usuario.update({
    nombre:req.body.nombre,
    apellido:req.body.apellido,
    email:req.body.email,
    password: bcryptjs.hashSync(req.body.password,10),
    descripcion: req.body.descripcion,
    ubicacion:req.body.ubicacion,
    id_categoria:req.body.categoria,
    imagen : req.file.filename
},{where:{id:req.params.id}});
res.redirect("/users/profile/")
  }else{
  
    let categorias = await db.Categoria.findAll()
    let usuario = await db.Usuario.findByPk(req.params.id)
      res.render("users/edit",{
        categorias:categorias, usuario:usuario,errors:errors.mapped()})
    }
    },
delete(req,res){
    db.Usuario.destroy({where:{
      id:req.params.id
    }});
    res.redirect("/")
  }
}





module.exports = usersController

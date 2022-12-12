const User = require("../models/User")
const fs = require("fs")
const path =require("path")
const usersFilePath = path.join(__dirname, '../database/users.json')
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'))
 const {validationResult}= require('express-validator')
 const bcryptjs = require("bcryptjs")

const usersController={
    index:(req,res)=>{
res.render("users/index")
    },
login: (req, res) => {
        res.render('users/login');
      },
profile: (req,res)=>{
  res.render('users/profile')
   },
loginProcess:(req,res)=>{
        let userALoguear = User.findByField("email",req.body.email)
        if(userALoguear){
      let contraseñaCorrecta = bcryptjs.compareSync(req.body.password,userALoguear.password)
          if(contraseñaCorrecta){
            res.redirect("/users/profile")
          }
        return res.render("users/login",{
            errors:{
             email:{
              msg:"Las Credenciales son Invalidas"
             }
            }
          })
        }
        return res.render("users/login",{
          errors:{
           email:{
            msg:"No se encuentra este email en nuestra base de datos"
           }
          }
        })
      },
register: (req, res) => {

        res.render('users/register');
      },
createUser:(req,res)=> {
       const resultadoValidado =  validationResult(req)
       
       if(resultadoValidado.errors.length>0){
        res.render('users/register',
       {errors: resultadoValidado.mapped(),
        oldData:req.body})
        
       } else {
        
        let userInDb = User.findByField("email",req.body.email)
       
        if(userInDb){
          return res.render('users/register',
       {errors: {
        email:{msg:"este email ya esta registrado"}},
        oldData:req.body})
        }
        
        
        let userToCreate={
          ...req.body,
          password: bcryptjs.hashSync(req.body.password,10),
          imagen:req.file.filename
        }

  
        User.create(userToCreate)
        }
        res.redirect('/users/login');
        
       }

    }
    
module.exports= usersController
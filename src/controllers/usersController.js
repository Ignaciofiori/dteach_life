//Falta terminar el validador: falta que envie el msj y el criptador de contraseña.-

const fs = require("fs")
const path =require("path")
const usersFilePath = path.join(__dirname, '../database/users.json')
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'))
 const {validationResult}= require('express-validator')

const usersController={
    index:(req,res)=>{
res.render("users/index")
    },
    login: (req, res) => {
        res.render('users/login');
      },
      register: (req, res) => {

        res.render('users/register');
      },
    createUser:(req,res)=> {
      const errors =  validationResult(req)
      if(errors.isEmpty()){
        res.send("esta todo okey")//falta implemetar logica de agregar usuario aca
      } else{
      res.render("users/register",{errors:errors.array()})
      }

        //let user ={
         // id: users.length + 1,
          //nombre: req.body.nombre + " " + req.body.apellido,
         // ubicacion: req.body.ubicacion,
          //imagen: req.file.filename,
         // email: req.body.email,
          //contraseña: req.body.password,
        //}
       //users.push(user);
       //let usersJSON =JSON.stringify(users);
       //fs.writeFileSync(usersFilePath,usersJSON);
       //console.log(users)

       /*Importante estan los validadores de formulario, por eso no llega esta instancia,
       pero lo configuro por el spring => pendiente enviar el msj
       
       */
      
    
      }
    }
module.exports= usersController
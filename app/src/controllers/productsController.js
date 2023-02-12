const path = require('path');
const fs = require('fs');
const db = require("../database/models")
const { validationResult } = require('express-validator')
const {Sequelize} = require("../database/models")
const Op = Sequelize.Op

 const controller = {
async searchProducts(req,res){
  let products = await db.Clase.findAll({

    where: {
      [Op.or]: [
        {nombre_profesor:       {[Op.like]: '%' + req.body.search + '%'}},
        {ubicacion: {[Op.like]: '%' + req.body.search + '%'}},
      ]
    }, include:[{association:"especialidades"}]
  });
  if(products.length == 0){
    res.render('products/index', { products:products, 
      errors:
        {
          msg: "No se ha encontrado ningun producto."}
    })
  }
else{
  res.render("products/index",{products:products})
}
  
},
async searchByEspecialidad(req,res){

const idEspecialidad = req.params.id
let products = await db.Clase.findAll({where:{
  id_especialidad: idEspecialidad },include:[{association:"especialidades"}]})
 if(products.length == 0){
  res.render('products/index', { products:products, 
    errors:
      {
        msg: "No se ha encontrado ningun producto."}
  })
 }else{
  res.render("products/index",{products:products})
 }
}

,

async index (req, res){
    let products = await db.Clase.findAll({include:[{association:"especialidades"}]})
  
    res.render('products/index', { products:products });
 },
  async createForm(req, res){

    let especialidades = await db.Especialidad.findAll()
     res.render('products/create',{especialidades:especialidades});
   },
async create (req, res){
  const errors = validationResult(req)
  if(errors.isEmpty()){
    db.Clase.create({
      nombre_profesor:req.body.nombre_profesor,
      ubicacion:req.body.ubicacion,
      precio:req.body.precio,
      descripcion: req.body.descripcion,
      id_especialidad:req.body.especialidad,
      imagen : req.file.filename,
      idProfesor: req.session.userLogged.id
  })
  res.redirect("/products")
     
} else {
  let especialidades = await db.Especialidad.findAll()
  res.render("products/create",{especialidades:especialidades,
    errors: errors.mapped(),
    old: req.body
})
 }
},
async detail (req, res){
    const producto = await db.Clase.findByPk(req.params.id,{
      include:[{association:"especialidades"},{association:"usuarios"
  }]
 });
    res.render('products/detail', { producto: producto,usuario:req.session.userLogged });
   },
async editForm (req, res) {
  let especialidades = await db.Especialidad.findAll()
  const producto = await db.Clase.findByPk(req.params.id,{
      include:[{association:"especialidades"},{association:"usuarios"}]
 });
    res.render('products/edit', { producto: producto,especialidades:especialidades});
  },
async edit (req, res) {
  const errors = validationResult(req)
  if(errors.isEmpty()){
  db.Clase.update({
    nombre_profesor:req.body.nombre_profesor,
    ubicacion:req.body.ubicacion,
    precio:req.body.precio,
    descripcion: req.body.descripcion,
    id_especialidad:req.body.especialidad,
    imagen : req.file.filename
},{where:{id:req.params.id}});
    res.redirect("/products/detail/" + req.params.id)
} else{
  let especialidades = await db.Especialidad.findAll()
  let producto = await db.Clase.findByPk(req.params.id)
 res.render("products/edit",{
    especialidades:especialidades, producto:producto, errors:errors.mapped()})
}
  },
delete: (req, res) => {
    db.Clase.destroy({where:{
      id:req.params.id
    }});
    res.redirect("/products")
  },
cart: (req, res) => {
    res.render('products/cart');
  }
 };

 module.exports = controller;

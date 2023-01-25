 const path = require('path');
 const fs = require('fs');
 const db = require("../database/models")
 const { validationResult } = require('express-validator')


 const controller = {
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
      imagen : req.file.filename
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
    res.render('products/detail', { producto: producto });
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

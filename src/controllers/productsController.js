 const path = require('path');
 const fs = require('fs');
 const db = require("../database/models")

 const controller = {
  async index (req, res){
    let products = await db.Clase.findAll({include:[{association:"especialidades"}]})
  
 res.render('products/index', { products:products });
 },
  async createForm(req, res){
    let especialidades = await db.Especialidad.findAll()
     res.render('products/create',{especialidades:especialidades});
   },
create (req, res){
 db.Clase.create({
  nombre_profesor:req.body.nombre_profesor,
  ubicacion:req.body.ubicacion,
  precio:req.body.precio,
  descripcion: req.body.descripcion,
  id_especialidad:req.body.especialidad
})
res.redirect("/products")
 },
async detail (req, res){
 const producto = await db.Clase.findByPk(req.params.id,{
  include:[{association:"especialidades"},{association:"usuarios"
  }]
 });
res.render('products/detail', { producto: producto });
   }
//   editForm: (req, res) => {
//     const producto = products.find((item) => item.id == req.params.id);
//     res.render('products/edit', { producto: producto });
//   },
//   edit: (req, res) => {
//     const id = req.params.id;
//     let update = products.filter((item) => {
//       if (item.id == id) {
//         req.body.actividad ? (item.deporte = req.body.actividad) : null;
//         req.body.precio ? (item.precio = req.body.precio) : null;
//         req.body.horas ? (item.horas = req.body.horas) : null;
//         req.body.intensidad ? (item.dificultad = req.body.intensidad) : null;
//         req.body.descripcion ? (item.descripcion = req.body.descripcion) : null;
//       }
//       return item;
//     });
//     let productsJSON = JSON.stringify(update);
//     fs.writeFileSync(productsFilePath, productsJSON);
//     res.redirect('/products');
//   },
//   delete: (req, res) => {
//     const id = req.params.id;
//     let update = products.filter((item) => item.id != id);
//     let productsJSON = JSON.stringify(update);
//     fs.writeFileSync(productsFilePath, productsJSON);
//     res.redirect('/products');
//   },
//   cart: (req, res) => {
//     res.render('products/cart');
//   },
 };

 module.exports = controller;

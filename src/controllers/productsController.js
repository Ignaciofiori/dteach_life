const path = require('path');
const fs = require('fs');

const productsFilePath = path.join(__dirname, '../database/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {
  index: (req, res) => {
    res.render('products/index', { products });
  },
  createForm: (req, res) => {
    res.render('products/create');
  },
  create: (req, res) => {
let producto = {
  id: products.length + 1,
  nombre: req.body.nombre,
  ubicacion: req.body.ubicacion,
  descripcionProfe: req.body.descripcionProfe,
  precio: req.body.precio,
  imagen: "",
  deporte: req.body.actividad,
  dificultad: req.body.intensidad,
  descripcionClase: req.body.descripcionClase
}
  products.push(producto);
  let productsJSON= JSON.stringify(products);
  fs.writeFileSync(productsFilePath,productsJSON);
  res.redirect("/productos")
  },
  detail: (req, res) => {
    const producto = products.find((item) => item.id == req.params.id);
    res.render('products/detail', { producto: producto });
  },
  editForm: (req, res) => {
    const producto = products.find((item) => item.id == req.params.id);
    res.render('products/edit', { producto: producto });
  },
  edit: (req, res) => {

let productoEditado={
  id: "",
  nombre: req.body.nombre,
  ubicacion: req.body.ubicacion,
  descripcionProfe: req.body.descripcionProfe,
  precio: req.body.precio,
  imagen: "",
  deporte: req.body.actividad,
  dificultad: req.body.intensidad,
  descripcionClase: req.body.descripcionClase
}
let hola = products.filter(item => item.id != req.params.id)
res.send(req.params.id)
  },
  cart: (req, res) => {
    res.render('products/cart');
  },
};

module.exports = controller;

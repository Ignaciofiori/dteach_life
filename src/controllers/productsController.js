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
      imagen: req.file.filename,
      deporte: req.body.actividad,
      dificultad: req.body.intensidad,
      descripcionClase: req.body.descripcionClase,
    };
    products.push(producto);
    let productsJSON = JSON.stringify(products);
    fs.writeFileSync(productsFilePath, productsJSON);
    res.redirect('/products');
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
    const id = req.params.id;
    let update = products.filter((item) => {
      if (item.id == id) {
        req.body.nombre ? (item.nombre = req.body.nombre) : null;
        req.body.ubicacion ? (item.ubicacion = req.body.ubicacion) : null;
        req.body.descripcionProfe
          ? (item.descripcionProfe = req.body.descripcionProfe)
          : null,
          req.body.precio ? (item.precio = req.body.precio) : null,
          req.file ? (item.imagen = req.file.filename) : null,
          req.body.actividad ? (item.deporte = req.body.actividad) : null;
        req.body.intensidad ? (item.dificultad = req.body.intensidad) : null;
        req.body.descripcionClase
          ? (item.descripcionClase = req.body.descripcionClase)
          : null;
      }
      return item;
    });
    let productsJSON = JSON.stringify(update);
    fs.writeFileSync(productsFilePath, productsJSON);
    res.redirect('/products');
  },
  delete: (req, res) => {
    const id = req.params.id;
    let update = products.filter((item) => item.id != id);
    let productsJSON = JSON.stringify(update);
    fs.writeFileSync(productsFilePath, productsJSON);
    res.redirect('/products');
  },
  cart: (req, res) => {
    res.render('cart/cart');
  },
};

module.exports = controller;

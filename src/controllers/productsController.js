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
      id_profesor: 1, // TODO : reemplazar por id del usuario que crea la tarea.
      actividad: req.body.actividad,
      precio: req.body.precio,
      horas: req.body.horas,
      intensidad: req.body.intensidad,
      descripcion: req.body.descripcion,
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
        req.body.actividad ? (item.deporte = req.body.actividad) : null;
        req.body.precio ? (item.precio = req.body.precio) : null;
        req.body.horas ? (item.horas = req.body.horas) : null;
        req.body.intensidad ? (item.dificultad = req.body.intensidad) : null;
        req.body.descripcion ? (item.descripcion = req.body.descripcion) : null;
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
    res.render('products/cart');
  },
};

module.exports = controller;

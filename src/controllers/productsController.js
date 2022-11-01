const products = require('../database/products');

const controller = {
  index: (req, res) => {
    res.render('products/index', { products });
  },
  create: (req, res) => {
    res.render('products/create');
  },
  detail: (req, res) => {
    const id = req.params.id;
    res.render('products/detail', { id, products });
  },
  edit: (req, res) => {
    const id = req.params.id;
    res.render('products/edit', { id });
  },
  cart: (req, res) => {
    res.render('products/cart');
  },
};

module.exports = controller;

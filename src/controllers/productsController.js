const controller = {
  index: (req, res) => {
    res.render("products");
  },
  detail: (req, res) => {
    res.render("productDetail");
  },
  cart: (req, res) => {
    res.render("cart");
  },
};

module.exports = controller;

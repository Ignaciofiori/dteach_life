const express = require("express");
const path = require("path");
const app = express();

const port = process.env.PORT || 3030;
app.listen(port, () => {
  console.log(`Servidor ON. http://localhost:${port}/`);
});

const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/home.html"));
});

app.get("/product", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/product.html"));
});

app.get("/productDetail", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/productDetail.html"));
});

app.get("/cart", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/cart.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/register.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/login.html"));
});

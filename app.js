const express = require("express");
const path = require("path");
const app = express();

const port = process.env.PORT || 3030;
app.listen(port, () => {
  console.log(`Servidor ON. http://localhost:${port}/`);
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./src/views"));

const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/product", (req, res) => {
  res.render("product");
});

app.get("/productDetail", (req, res) => {
  res.render("productDetail");
});

app.get("/cart", (req, res) => {
  res.render("cart");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.get("/login", (req, res) => {
  res.render("login");
});

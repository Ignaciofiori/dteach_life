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
  res.sendFile(path.join(__dirname, "./views/index.html"));
});
app.get("/productDetail.html", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/productDetail.html"));
});

app.get("/productCart.html", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/productCart.html"));
});

app.get("/register.html", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/register.html"));
});

app.get("/login.html", (req, res) => {
  res.sendFile(path.join(--dirname, "./views/login.html"));
});

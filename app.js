const express = require("express");
const path = require("path");
const app = express();

// Importamos las rutas.
const mainRoutes = require("./src/routes/main");
const productsRoutes = require("./src/routes/products");

// Configuramos el puerto la aplicacion (listo para correr en render.com)
const port = process.env.PORT || 3030;
app.listen(port, () => {
  console.log(`Servidor ON. http://localhost:${port}/`);
});

// Configuramos el uso de EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./src/views"));

// Definimos ruta de archivos estaticos.
const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

// Configuramos rutas de navegacion
app.use("/", mainRoutes);
app.use("/products", productsRoutes);

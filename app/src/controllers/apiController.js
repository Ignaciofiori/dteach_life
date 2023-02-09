const db = require('../database/models');

const controller = {
  getProducts: async (req, res) => {
    let products = await db.Clase.findAll({
      include: [{ association: 'especialidades' }],
      order: [['id', 'DESC']],
    });
    const especialidades = await db.Especialidad.findAll({
      include: [{ association: 'clases' }],
    });

    const arrayProducts = [];
    products.forEach((product) => {
      const data = {
        id: product.id,
        name: product.nombre_profesor,
        description: product.descripcion,
        especialidades: product.especialidades,
        detail: `http://localhost:3000/products/detail/${product.id}`,
      };
      arrayProducts.push(data);
    });

    const arrayCategory = [];
    especialidades.forEach((especilidad) => {
      const data = {
        nombre: especilidad.nombre,
        countClases: especilidad.clases.length,
      };
      arrayCategory.push(data);
    });

    const response = {
      count: products.length,
      countByCategory: arrayCategory,
      products: arrayProducts,
    };
    res.send(response);
  },
  getProduct: async (req, res) => {
    const producto = await db.Clase.findByPk(req.params.id, {
      include: [{ association: 'especialidades' }, { association: 'usuarios' }],
    });
    const response = {
      producto: producto,
      image: `http://localhost:3030/uploads/${producto.imagen}`,
    };
    res.send(response);
  },
  getUsers: async (req, res) => {
    res.send({ hola: 'hola' });
  },
  getUser: async (req, res) => {
    res.send({ hola: 'hola' });
  },
};

module.exports = controller;

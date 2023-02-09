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
      include: [{ association: 'especialidades' }],
    });
    const response = {
      producto: producto,
      image: `http://localhost:3030/uploads/${producto.imagen}`,
    };
    res.send(response);
  },
  getUsers: async (req, res) => {
    const users = await db.Usuario.findAll({
      include: [{ association: 'categorias' }],
    });

    const arrayUsers = [];
    users.forEach((user) => {
      const data = {
        id: user.id,
        name: `${user.nombre} ${user.apellido}`,
        email: user.email,
        detail: `http://localhost:3000/users/detail/${user.id}`,
      };
      arrayUsers.push(data);
    });

    const response = {
      count: users.length,
      users: arrayUsers,
    };
    res.send(response);
  },
  getUser: async (req, res) => {
    const user = await db.Usuario.findByPk(req.params.id, {
      include: [{ association: 'categorias' }],
    });

    const response = {
      id: user.id,
      nombre: `${user.nombre} ${user.apellido}`,
      email: user.email,
      descripcion: user.descripcion,
      ubicacion: user.ubicacion,
      imagen: `http://localhost:3030/images/users/${user.imagen}`,
    };

    res.send(response);
  },
};

module.exports = controller;

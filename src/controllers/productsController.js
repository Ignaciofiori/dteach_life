const profesores = [
  {
    id: '1',
    name: 'Ricardo Villalobos',
    ubicacion: 'Beccar, San Isidro',
    descripcion: 'Sociable y dinamico entrenamiento de futbol',
    precio: '500$'
  },
  {
    id: '2',
    name: 'Juan Abate',
    ubicacion: 'Flores, CABA',
    descripcion: 'Entrenamiento de preparacion fisica de futbol',
    precio: '700$'
  },
  {
    id: '3',
    name: 'Alejandro Broggi',
    ubicacion: 'Olivos, Vicente lopez',
    descripcion: 'Entrenamiento recreativo de futbol',
    precio: '500$'
  }
]

const controller = {
  index: (req, res) => {
    res.render('products', { profesores })
  },
  detail: (req, res) => {
    res.render('productDetail')
  },
  cart: (req, res) => {
    res.render('cart')
  },
  edit: (req, res) => {
    res.render('productsEdit')
  }
}

module.exports = controller

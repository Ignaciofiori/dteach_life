const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../../public/images/users'));
    },
    filename: function (req, file, cb) {
      let nombreArchivo =  Date.now() +'imguser' +path.extname(file.originalname);
        cb(
        null,      
        nombreArchivo
        );
    },
  });
  
  const uploadFile = multer({ storage: storage });

module.exports =uploadFile
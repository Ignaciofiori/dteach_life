const usersController={
    index:(req,res)=>{
res.render("users/index")
    },
    login: (req, res) => {
        res.render('users/login');
      },
      register: (req, res) => {
        res.render('users/register');
      },
    createUser:(req,res)=> {
        let user ={
          id: users.length + 1,
          nombre: req.body.nombre + " " + req.body.apellido,
          ubicacion: req.body.ubicacion,
          imagen: "",
          email: req.body.email,
          contraseña: req.body.contraseña,
        }
       users.push(user);
       let usersJSON =JSON.stringify(users);
       fs.writeFileSync(usersFilePath,usersJSON);
       res.redirect("/")
      }
    }
module.exports= usersController
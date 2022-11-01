const controller = {
  index: (req, res) => {
    res.render('./home/index');
  },
  login: (req, res) => {
    res.render('./auth/login');
  },
  register: (req, res) => {
    res.render('./auth/register');
  },
};

module.exports = controller;

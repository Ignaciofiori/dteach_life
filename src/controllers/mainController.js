const fs = require("fs");
const path = require("path");

const usersFilePath = path.join(__dirname, '../database/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));



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

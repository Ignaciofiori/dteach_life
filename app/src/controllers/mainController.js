const fs = require('fs');
const path = require('path');
const db = require("../database/models")

const controller = {
  async index(req, res){
    const especialidades = await db.Especialidad.findAll()
    res.render('./home/index',{especialidades:especialidades});
  },
};

module.exports = controller;

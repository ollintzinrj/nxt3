const usuarioRoutes = require('express').Router();
const mysqlconexion = require('../mysql');

//Definición de las rutas para usuarios
//GET
usuarioRoutes.route('/').get( (req, res) => {
  let sql = 'SELECT * FROM usuario';
  mysqlconexion.query(sql, function (error, usuarios) {
    if(error)
      throw error;
    else
      res.send(usuarios);
  });
});

//GET usuario
usuarioRoutes.route('/get/:nombre').get((req, res) => {
  let sql = 'SELECT * FROM usuario WHERE nombre = ?';
  mysqlconexion.query(sql, [req.params.nombre], function (error, usuarios) {
    if(error)
      throw error;
    else
      res.send(usuarios);
      // res.send(usuarios[0].nombre);
  });
});

//POST
usuarioRoutes.route('/add').post((req, res) => {
  let data = {
    nombre: req.body.nombre,
    contrasena:req.body.contrasena,
  };
  let sql = 'INSERT INTO usuario SET ?'

  mysqlconexion.query(sql, data, function (error, resultado) {
    if(error)
      throw error;
    else
      res.send(resultado);
  });
});

//PUT
usuarioRoutes.route('/update/:id').put((req, res) => {
  let id = req.body.id;
  let nombre = req.body.nombre;
  let contrasena =req.body.contrasena;
  let sql = 'UPDATE usuario SET nombre = ?, contrasena = ?, id_lista = ? WHERE id = ?'

  mysqlconexion.query(sql, [nombre,contrasena, id], function (error, resultado) {
    if(error)
      throw error;
    else
      res.send(resultado);
  });
});

//Exportación de las rutas
module.exports = usuarioRoutes;
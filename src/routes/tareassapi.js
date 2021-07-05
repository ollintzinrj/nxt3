const tareaRoutes = require('express').Router();
const mysqlconexion = require('../mysql');

//Definición de las rutas para tareas
//GET
tareaRoutes.route('/').get( (req, res) => {
  let sql = 'SELECT * FROM tarea';
  mysqlconexion.query(sql, function (error, tareas) {
    if(error)
      throw error;
    else
      res.send(tareas);
  });
});

//GET una tarea
tareaRoutes.route('/get/:id').get((req, res) => {
  let sql = 'SELECT * FROM tarea WHERE id = ?';
  mysqlconexion.query(sql, [req.params.id], function (error, tareas) {
    if(error)
      throw error;
    else
      res.send(tareas);
  });
});

//POST
tareaRoutes.route('/add').post((req, res) => {
  let data = {
    id_usuario : req.body.id_usuario,
    descripcion : req.body.descripcion,
    fecha : req.body.fecha,
    estatus : req.body.estatus,
    amanecer : req.body.amanecer,
    anochecer : req.body.anochecer
  };
  let sql = 'INSERT INTO tarea SET ?'
  console.log(data);
  mysqlconexion.query(sql, data, function (error, resultado) {
    if(error)
      throw error;
    else
      res.send(resultado);
  });
});

//PUT
tareaRoutes.route('/update/:id').put((req, res) => {
  let id = req.body.id;
  let id_usuario = req.body.id_usuario;
  let descripcion = req.body.descripcion;
  let fecha = req.body.fecha;
  let estatus = req.body.estatus;
  let amanecer = req.body.amanecer;
  let anochecer = req.body.anochece;
  let sql = 'UPDATE tarea SET id = ?, id_usuario = ?, descripcion = ?, fecha = ?, estatus = ?, amanecer = ?, anochecer = ? WHERE id = ?'

  mysqlconexion.query(sql, [id, id_usuario, descripcion, fecha, estatus, amanecer, anochecer], function (error, resultado) {
    if(error)
      throw error;
    else
      res.send(resultado);
  });
});

//Exportación de las rutas
module.exports = tareaRoutes;
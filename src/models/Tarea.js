var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Tarea = new Schema({

  id_usuario : { type:Number },
  descripcion : { type:String },
  fecha : { type:Date },
  estatus : { type:Boolean },
  amanecer : { type:Date },
  anochecer : { type:Date }

});

module.exports = mongoose.model('Tarea', Tarea);
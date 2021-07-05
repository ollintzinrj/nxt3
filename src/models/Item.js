var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Item = new Schema({

  id: { type:String },
  text: { type:String },
  source: { type:String },
  source_url: { type:String},
  language : {type:String}, 
  permalink : {type:String}

});

module.exports = mongoose.model('Item', Item);
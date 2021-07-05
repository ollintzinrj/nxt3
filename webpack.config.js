const path = require('path');
const {VueLoaderPlugin} = require ('vue-loader');

module.exports = {
  entry : './src/app/main.js',
  output : {
    path : path.resolve(__dirname + '/src/public/js'),
    filename : 'bundle.js'
  },
  module :{
    rules : 
    [
      //Regla 1. todos los archivos js menos los de node y debe usar el loader de babel
      {
        test : /\.js$/,
        exclude : /node_modules/,
        use : {
            loader : 'babel-loader'
        }
      },
      //Regla 2. Traducir los archivos vue y leerlos por medio del loader de vue 
      {
        test : /\.vue$/,
        loader : 'vue-loader'
      }
    ]
  },
  plugins : [
    new VueLoaderPlugin()
  ],
  //Que siempre este escuchando y actualizando el codigo traducido
  watch: true,
};
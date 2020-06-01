//Requieres, librerias que ocupamos para que funiciones el programa
var express = require ('express');
var mongoose = require ('mongoose');
var bodyParser = require('body-parser');

// Inicializar variables
var app= express();


//Body Parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Importar Rutas
var appRoutes = require ('./routes/app');
var usuarioRoutes = require('./routes/usuario');
var loginRoutes= require('./routes/login');

//Conexión a la base de datos
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err,res) =>{
    if(err) throw err;
    console.log('Base de datos:  \x1b[32m%s\x1b[0m','online')
})

// Escuchar peticiones, elegir el puerto a escuchar
app.listen(3000, () => {
    console.log('Express server puerto 3000:  \x1b[32m%s\x1b[0m','online')
});

//Rutas, el orden de las rutas importa, el que se ponga primero es donde entrará
app.use('/usuario', usuarioRoutes);
app.use('/login', loginRoutes);
app.use('/', appRoutes);


//Instalar nodemon para no tener que bajar el servidor cada vez que se hace un cambio en el backend
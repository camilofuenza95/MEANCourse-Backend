//Requieres, librerias que ocupamos para que funiciones el programa
var express = require ('express');
var mongoose = require ('mongoose');

// Inicializar variables
var app= express();

// Escuchar peticiones, elegir el puerto a escuchar
app.listen(3000, () => {
    console.log('Express server puerto 3000:  \x1b[32m%s\x1b[0m','online')
});

//Conexión a la base de datos
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err,res) =>{
    if(err) throw err;
    console.log('Base de datos:  \x1b[32m%s\x1b[0m','online')
})

//Rutas: req= request, res= response, next= para que se pueda pasar a la sigueinte ruta
app.get('/', (req, res, next) => {

    res.status(200).json({
        ok: true,
        mensaje: 'Petición realizada correctamente'
    })

});

//Para ejecutar el backend es npm app en el cmd

//Instalar nodemon para no tener que bajar el servidor cada vez que se hace un cambio en el backend
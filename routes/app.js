var express = require('express');
var app= express();


app.get('/', (req, res, next) => {

    res.status(200).json({
        ok: true,
        mensaje: 'Petición realizada correctamente'
    })

});

//Para usar la ruta en otro módulo, se debe exportar
module.exports= app;
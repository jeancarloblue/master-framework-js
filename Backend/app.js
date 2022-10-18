'use strict'

//Cargar modulos de node para crear servidor
var express= require ('express');
var bodyParser= require('body-parser');

//Ejecutar Express(http)
var app= express();

//cargar ficheros rutas

var article_routes= require('./routes/article');

//Middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//CORS


//Añadir Prefijos a rutas

app.use('/api',article_routes);

//ruta o metodo de prueba para la api REST
/*
app.post('/datos-curso',(req, rest) => {
    var hola= req.body.hola;
   
    return rest.status(200).send({
        curso:'Master en framework js',
        Autor:'Antonio Fdez',
        url:'Antoniofernandez.es',
        hola

    });

});
*/
//Exportar Modulo (fichero actual)
module.exports=app;
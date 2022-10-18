'use strict'

var validator= require('validator');
var Article=  require('../models/article');

var controller={

    datosCurso:(req, rest) => {

    var hola = req.body.hola;
   
        return rest.status(200).send({
            curso:'Master en framework js',
            Autor:'Antonio Verdu',
            url:'Antoniofernandez.es',
            hola
       
        });

    },
    test:(req, rest) => {
        return rest.status(200).send({   

        message:'Soy la accion test del controlador de articulos'


        });
    },

    save:(req, rest) => {

        //recoger parametros por post
        var params= req.body;
       

        //Validar datos (validator)
            try{
                var validate_title= !validator.isEmpty(params.title);
                var validate_content= !validator.isEmpty(params.content);

             }catch(err){
                    
                    return rest.status(200).send({
                            status:'error',
                            message:'Faltan datos por enviar'
                    });


                 }
            if(validate_title && validate_content){

                //crear el objeto a guardar

                var article= new Article ();
                //Asignar valores
                article.title= params.title;
                article.content= params.content;
                article.image= null;
   
                //Guardar el articulo
                     article.save((err, articleStored) => {

                        if(err || !articleStored){
                            return rest.status(404).send({
                                status:'error',
                                message:'el articulo no se ha guardado'
                            });

                        }

                       //Devolver una respuesta
                        return rest.status(200).send({
                            status:'success',
                            article: articleStored
                             });

                     });


            }
            else{
                return rest.status(200).send({
                    status:'error',
                    message:'los datos no son validados'
                });

            }

        
    },

    getArticles:(req, res) =>{

        var query=Article.find({});
        var last= req.params.last;
        if (last || last != undefined){
            query.limit(5);
        }


        query.sort('-_id').exec((err,articles) =>{

                if(err){

                    return res.status(500).send({
                        status:'error',
                        message:'Error al devolver los artículos'
                    });


                }
                if(!articles){

                    return res.status(404).send({
                        status:'error',
                        message:'No hay  artículos para mostrar'
                    });
 

                }

                return res.status(200).send({
                    status:'success',
                    articles
                });

        })


        


    },

    getArticle:(req, res) =>{

        // recojer el ID de la URL
            var articleId= req.params.id;
        // comprobar que existe
            if(!articleId || articleId==null){

                return res.status(404).send({
                    status:'error',
                    message:'No existe el artículo'
                });

            }

        //Buscar el artículo
            Article.findById(articleId,(err,article) =>{

                
                if(err || !article){
                    return res.status(404).send({
                        status:'error',
                        message:'No existe el artículo'
                    });


                }

                 //Devolverlo en Json
                    return res.status(404).send({
                    status:'success',
                    article
                });



            });

       



    }


};// end controller





module.exports= controller;

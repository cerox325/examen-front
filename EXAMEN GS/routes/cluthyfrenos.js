const express = require('express');
const router = express.Router()

const moongose = require('mongoose')
const eschema = moongose.Schema

const eschemaCluthYfrenos = new eschema({
    nombre: String,
    descripcion: String,
    precio: Number,
    cantidad: Number,
    img: String,
    idCluthFrenos: String
});

const ModelCluthFrenos = moongose.model('cluthfrenos', eschemaCluthYfrenos);
module.exports = router;


router.get('/getall', (req, res) => {
    ModelCluthFrenos.find({}, function(docs,err){
        if(!err){
            res.send(docs);
        }else {
            res.send(err);
        }
    })
});


router.post('/add', (req, res) => {
    const addcluthfrenos = new ModelCluthFrenos({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        cantidad: req.body.cantidad,
        img: req.body.img,
        idCluthFrenos: req.body.idCluthFrenos
    })
    addcluthfrenos.save(function(err){
        if(!err){
            res.send('cluthyfrenos agregado correctamente')
        }
        
    })
})
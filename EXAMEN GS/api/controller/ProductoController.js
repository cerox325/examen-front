const productoSchema = require('../model/productoModel');

exports.getAllProducto = async (req, res) => {
    productoSchema.find({}, function(docs,err){
        if(!err){
            res.send(docs);
        }else {
            res.send(err);
        }
    })
}
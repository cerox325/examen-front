const moongose = require('mongoose')
const { Schema, model } = moongose

const productoSchema = Schema({
    nombre: { type: String, required: [true, "Dato requerido"] },
    descripcion: { type: String, required: [true, "Dato requerido"] },
    precio: { type: Number, required: [true, "Dato requerido"] },
    cantidad: { type: Number, required: [true, "Dato requerido"] },
    img: { type: String, required: [true, "Dato requerido"] },
    idCluthFrenos: { type: String, required: [true, "Dato requerido"] },
});

module.exports = model('cluthfrenos', productoSchema);


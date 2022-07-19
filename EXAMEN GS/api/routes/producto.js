const express = require('express');
const { getAllProducto } = require('../controller/ProductoController');
const router = express.Router()
module.exports = router;


const getAll = async() => router.get('/getall', getAllProducto);

getAll();


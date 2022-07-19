require('./config/conexion');
const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser');
const rutaProductos = require('./routes/producto');

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: 'true'}))
app.use('/api/cluthfrenos', rutaProductos)

app.listen(process.env.PORT || 8080, function(){
    console.log("server start on ", process.env.PORT || 8080,);
})
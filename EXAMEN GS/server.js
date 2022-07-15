const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser');
const DB = require('./conexion');
const rutaCluthFrenos = require('./routes/cluthyfrenos');

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: 'true'}))

app.use('/api/cluthfrenos', rutaCluthFrenos)

app.listen(4001, function(){
    console.log("server start on 4001");
})
const moongose = require('mongoose');
moongose.connect('mongodb+srv://ivan:5hB4HkgNPDgsMrcX@cluster0.1j9lycd.mongodb.net/?retryWrites=true&w=majority');

const DB = moongose.connection

DB.on('connected', () => {
    console.log("DB ok")
});

DB.on('error', () => {
    console.log('DB error')
})


module.exports = moongose;

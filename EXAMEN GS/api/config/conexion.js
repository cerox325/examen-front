const moongose = require('mongoose');
require('dotenv').config(); 
const {  
    DB_MOONGO_URL
} = process.env; 

moongose.connect(DB_MOONGO_URL,{})
.then(() => {
    console.log('Connect Success');
})
.catch((e) => {
    console.log('Connection Error : '+e);
});

module.exports = moongose;

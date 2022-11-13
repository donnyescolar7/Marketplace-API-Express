//require('dotenv').config();
const usuario_routes = require('./routes/usuario');
const producto_routes = require('./routes/producto');

const express = require('express');
//const mongoose = require('mongoose');
//const mongoString = process.env.DATABASE_URL;

//mongoose.connect(mongoString);
//const database = mongoose.connection;

/*database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})*/

const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})

app.use('/usuario', usuario_routes)
app.use('/producto', producto_routes)
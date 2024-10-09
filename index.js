const path = require('path');
const express = require('express');
const { dbConnection } = require('./database/config');
const cors = require('cors');
require('dotenv').config();
//Crear el servidor de express

const app = express();
const puerto = process.env.PORT;

dbConnection();


//CORS
app.use(cors())

//Directorio publico
app.use( express.static('public') );

//Lectura y parseo del body
app.use(express.json());

//Rutas
//TODO: auth// crear, login,renew
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events') );

app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
})

//TODO: CRUD:Eventos



//Escuchar peticiones
app.listen(puerto, () => {
    console.log(`Servidor corriendo en puerto ${puerto}`)
})

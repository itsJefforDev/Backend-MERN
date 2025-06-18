//para configurar el servidor

const express = require('express');
const cors = require('cors');
const app = express();

//configuracion
app.set('port', process.env.PORT || 4000)


//middlewares --> logica, funcionalidades para primero validar antes de llegar a las rutas
app.use(cors())
app.use(express.json()) //envia y recibe en json


//rutas
app.get('/', (req, res) => {
    res.send('Bienvenido a mi api restfull')
})


//ruta para nuestra api de usuarios
app.use("/api/usuario",require('./routes/usuario'));


module.exports = app;
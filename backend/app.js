const express = require('express');
const cors = require('cors');
require('dotenv').config();
const sequileze = require('./back/db/conexion');
const loginView = require('./back/view/loginView');

const app = express();

app.use(express.json());
app.use(cors());

app.use(express.static(__dirname + '/public'));
app.set('view engine','ejs');
app.set('views', __dirname + '/views');

async function serverStart() {
    try {
        await sequileze.authenticate();
        console.log("Conexión estabilizada correctamente")
        app.listen(process.env.PORT, function () {
            console.log(`Sistema iniciado en http://${process.env.HOST}:${process.env.PORT}`);
        });
    } catch (error) {
        console.error('No se pudo conectar correctamebte con la Base de datos:', error);
    }
}

serverStart();

//Iniciamos vista
loginView(app);
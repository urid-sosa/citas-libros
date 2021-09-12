const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const routes = require('./routes');

const db = require('./config/db');
    require('./models/User');
    require('./models/Commentary');

db.sync({alter: true}).
    then(() =>{
        console.log("Base de Datos conectada");
    })
    .catch((error) =>{
        console.log(error);
    });

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());

app.use('/', routes());

app.listen(5000);
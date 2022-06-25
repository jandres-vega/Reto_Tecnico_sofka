const express = require('express');
const {config} = require('../api/src/config/config')
const routesA = require('./src/router/index')
const sequelize = require('../api/src/libs/conexion')
const port = config.port
const app = express();

app.use(express.json())

routesA(app)

sequelize.sync({force: true}).then(() => {
    app.listen(port, () => {
        console.log('listen on port '+ port)
    })
})

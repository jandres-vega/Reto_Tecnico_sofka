const express = require('express');
const {config} = require('../api/src/config/config')
const {conn} = require('../api/src/libs/conexion')

const port = config.port
const app = express();



conn.sync({force: false}).then(() => {
    app.listen(port, () => {
        console.log('listen on port '+ port)
    })
})

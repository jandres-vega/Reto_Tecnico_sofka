const express = require('express');
const cors = require('cors');
const {config} = require('../api/src/config/config')
const routesA = require('./src/router/index')
const sequelize = require('../api/src/libs/conexion')
const port = config.port
const app = express();

app.use(express.json())
const whitelist = ['http://localhost:3006'];
const options = {
    origin: (origin, callback) => {
        if (whitelist.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error('no permitido'));
        }
    }
}
app.use(cors(options));

routesA(app)

sequelize.sync({force: false}).then(() => {
    app.listen(port, () => {
        console.log('listen on port '+ port)
    })
})

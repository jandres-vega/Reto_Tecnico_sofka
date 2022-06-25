const naveLanzadera = require('./nave.satelite.router')

function routesA(app) {
    app.use('/satelite', naveLanzadera)
}
module.exports = routesA;
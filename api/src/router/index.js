const naveSatelite = require('./nave.satelite.router');
const naveTripulada = require('./nave.tripulada.router');
const naveSonda = require('./nave.sonda.router');
const naveLanzadera = require('./nave.lanzadera.router');


function routesA(app) {
    app.use('/satelite/', naveSatelite);
    app.use('/tripulada', naveTripulada)
    app.use('/sonda', naveSonda)
    app.use('/lanzadera', naveLanzadera)
}
module.exports = routesA;
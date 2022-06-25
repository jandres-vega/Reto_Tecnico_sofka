const {NaveLanzadera, NaveLanzadera_Schema} = require('./naveLanzadera');
const {NaveSatelite, NaveSatelite_Schema} = require('./naveSatelite');
const {NaveSonda, NaveSonda_Schema} = require('./naveSonda');
const {NaveTripulada, NaveTripulada_Schema} = require('./naveTripulada')

function setupModel(sequelize) {

    NaveLanzadera.init(NaveLanzadera_Schema, NaveLanzadera.config(sequelize));
    NaveSatelite.init(NaveSatelite_Schema, NaveSatelite.config(sequelize));
    NaveSonda.init(NaveSonda_Schema, NaveSonda.config(sequelize));
    NaveTripulada.init(NaveTripulada_Schema, NaveTripulada.config(sequelize))

    // NaveLanzadera.belongsTo(NaveSatelite)
    NaveLanzadera.hasOne(NaveSatelite,{onDelete: 'CASCADE'});
    NaveSatelite.belongsTo(NaveLanzadera)

    NaveLanzadera.hasOne(NaveSonda, {onDelete: 'CASCADE'});
    NaveSonda.belongsTo(NaveLanzadera)

    NaveLanzadera.hasOne(NaveTripulada, {onDelete: 'CASCADE'});
    NaveTripulada.belongsTo(NaveLanzadera)

}
module.exports = setupModel;
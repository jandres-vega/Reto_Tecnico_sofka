const {Model, DataTypes} = require('sequelize');
//const {NAVE_MODEL_LANZADERA} = require('./naveLanzadera');

const NAVE_MODEL_SATELITE = 'naves_satelite';

const NaveSatelite_Schema = {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER
    },
    nameSatelite: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    typeLanding: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}

class NaveSatelite extends Model{

    static associate(models) {
        //associaciones

    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: NAVE_MODEL_SATELITE,
            modelName: 'NaveSatelite',
            timestamps: false
        }
    }
}
module.exports = {
    NAVE_MODEL_SATELITE,
    NaveSatelite_Schema,
    NaveSatelite
}
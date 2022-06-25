const {Model, DataTypes} = require('sequelize');
const {NAVE_MODEL_SATELITE} = require('./naveSatelite')
const NAVE_MODEL_LANZADERA = 'naves_lanzadera';

const NaveLanzadera_Schema = {
    id:{
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER
    },
    nameNave: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    weight: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cap_combustible: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    speed_max: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    push: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    }
}

class NaveLanzadera extends Model{

    static associate(models) {
        //associaciones

    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: NAVE_MODEL_LANZADERA,
            modelName: 'NaveLanzadera',
            timestamps: false
        }
    }
}
module.exports = {
    NaveLanzadera,
    NaveLanzadera_Schema,
    NAVE_MODEL_LANZADERA
}
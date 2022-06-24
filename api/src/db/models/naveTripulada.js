const {Model, DataTypes} = require('sequelize');

const NAVE_MODEL = 'neves_tripulada';

const NaveTripulada_Schema = {
    id:{
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    numberCrew: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    purposeNave: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}

class NaveTripulada extends Model{

    static associate() {
        //associaciones
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: NAVE_MODEL,
            modelName: 'naves_tripuladas',
            timestamps: false
        }
    }
}

module.exports = {
    NAVE_MODEL,
    NaveTripulada,
    NaveTripulada_Schema
}